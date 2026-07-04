#!/usr/bin/env node
import { promises as fs } from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const distDir = path.join(repoRoot, "dist");
const docslitConfigPath = path.join(repoRoot, "docslit.json");

const LLMS_DIRECTIVE_HTML = [
  '<meta name="llms" content="/llms.txt">',
  '<link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt">',
].join("\n  ");

const LLMS_DIRECTIVE_MD = "<!-- llms.txt: /llms.txt -->";

async function readDocslitConfig() {
  if (!(await exists(docslitConfigPath))) return null;
  try {
    const raw = await fs.readFile(docslitConfigPath, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function listFilesRecursive(root, extension) {
  const out = [];

  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
        continue;
      }
      if (!extension || fullPath.endsWith(extension)) {
        out.push(fullPath);
      }
    }
  }

  if (await exists(root)) {
    await walk(root);
  }
  return out;
}

async function readDefaultVersion() {
  const cfg = await readDocslitConfig();
  return cfg?.versions?.default ?? null;
}

function toPublicAssetPath(inputPath) {
  if (!inputPath || typeof inputPath !== "string") return null;
  const normalized = inputPath.replace(/\\/g, "/").trim();
  if (!normalized) return null;
  return `/${path.posix.basename(normalized)}`;
}

async function detectFaviconHref() {
  const cfg = await readDocslitConfig();
  const fromConfigLogo = toPublicAssetPath(cfg?.logo);

  if (fromConfigLogo && (await exists(path.join(distDir, fromConfigLogo.slice(1))))) {
    return fromConfigLogo;
  }

  if (await exists(path.join(distDir, "logo.png"))) {
    return "/logo.png";
  }

  return null;
}

function faviconTypeForHref(href) {
  if (!href) return null;
  const lower = href.toLowerCase();
  if (lower.endsWith(".svg")) return "image/svg+xml";
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".ico")) return "image/x-icon";
  return null;
}

function applyFaviconFromLogo(html, faviconHref) {
  if (!faviconHref) return { html, changed: false };

  const mimeType = faviconTypeForHref(faviconHref);
  const iconTypeAttr = mimeType ? ` type=\"${mimeType}\"` : "";
  const faviconBlock = [
    `<link rel=\"icon\"${iconTypeAttr} href=\"${faviconHref}\">`,
    `<link rel=\"apple-touch-icon\" href=\"${faviconHref}\">`,
  ].join("\n  ");

  let next = html;
  next = next.replace(/\s*<link[^>]*rel=["'][^"']*icon[^"']*["'][^>]*>\s*/gi, "\n");
  next = next.replace(/\s*<link[^>]*rel=["']apple-touch-icon["'][^>]*>\s*/gi, "\n");
  next = next.replace(/<\/head>/i, `  ${faviconBlock}\n</head>`);

  return { html: next, changed: next !== html };
}

async function detectVersionDir() {
  const preferredVersion = await readDefaultVersion();
  if (preferredVersion) {
    const preferredDir = path.join(distDir, preferredVersion);
    if (await exists(preferredDir)) return preferredDir;
  }

  const entries = await fs.readdir(distDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const candidate = path.join(distDir, entry.name);
    if (await exists(path.join(candidate, "index.html"))) {
      return candidate;
    }
  }

  return null;
}

async function copyIfExists(src, dst) {
  if (!(await exists(src))) return false;
  await ensureDir(path.dirname(dst));
  await fs.copyFile(src, dst);
  return true;
}

function headingFromMarkdown(markdown, fallback) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
}

function posixPathFromFile(filePath) {
  return filePath.split(path.sep).join("/");
}

async function buildFallbackLlms(markdownFiles) {
  const lines = [
    "# DraftView docs for AI agents",
    "",
    "> Canonical docs: https://docs.draftview.app/",
    "",
    "## Markdown pages",
    "",
  ];

  const sorted = [...markdownFiles].sort();
  for (const filePath of sorted) {
    const rel = posixPathFromFile(path.relative(distDir, filePath));
    if (rel === "llms.txt" || rel === "llms-full.txt") continue;
    if (!rel.endsWith(".md")) continue;
    const md = await fs.readFile(filePath, "utf8");
    const title = headingFromMarkdown(md, rel.replace(/\.md$/, ""));
    lines.push(`- [${title}](/${rel})`);
  }

  lines.push("");
  return lines.join("\n");
}

async function main() {
  if (!(await exists(distDir))) {
    console.warn("[postbuild-ai-readiness] dist/ not found; skipping.");
    return;
  }

  const versionDir = await detectVersionDir();
  if (!versionDir) {
    console.warn("[postbuild-ai-readiness] No version directory found under dist/; skipping.");
    return;
  }

  let copiedLlms = 0;
  let injectedHtml = 0;
  let injectedMd = 0;
  let copiedUnversionedMd = 0;
  let updatedFavicons = 0;

  const versionName = path.basename(versionDir);
  const faviconHref = await detectFaviconHref();
  const llmsInVersion = path.join(versionDir, "llms.txt");
  const llmsFullInVersion = path.join(versionDir, "llms-full.txt");

  if (await copyIfExists(llmsInVersion, path.join(distDir, "llms.txt"))) copiedLlms += 1;
  if (await copyIfExists(llmsFullInVersion, path.join(distDir, "llms-full.txt"))) copiedLlms += 1;
  if (await copyIfExists(llmsInVersion, path.join(distDir, "docs", "llms.txt"))) copiedLlms += 1;
  if (await copyIfExists(llmsFullInVersion, path.join(distDir, "docs", "llms-full.txt"))) copiedLlms += 1;

  const versionMarkdownFiles = (await listFilesRecursive(versionDir, ".md")).filter((p) => {
    const base = path.basename(p);
    return base !== "llms.txt" && base !== "llms-full.txt";
  });

  for (const src of versionMarkdownFiles) {
    const relInsideVersion = path.relative(versionDir, src);
    const dst = path.join(distDir, relInsideVersion);
    await ensureDir(path.dirname(dst));
    await fs.copyFile(src, dst);
    copiedUnversionedMd += 1;
  }

  const htmlFiles = await listFilesRecursive(distDir, ".html");
  for (const filePath of htmlFiles) {
    const html = await fs.readFile(filePath, "utf8");
    let nextHtml = html;

    const faviconResult = applyFaviconFromLogo(nextHtml, faviconHref);
    nextHtml = faviconResult.html;
    if (faviconResult.changed) {
      updatedFavicons += 1;
    }

    if (!nextHtml.includes("/llms.txt")) {
      nextHtml = nextHtml.replace(
        /<\/head>/i,
        `  ${LLMS_DIRECTIVE_HTML}\n</head>`
      );
      injectedHtml += 1;
    }

    if (nextHtml !== html) {
      await fs.writeFile(filePath, nextHtml, "utf8");
    }
  }

  const markdownFiles = await listFilesRecursive(distDir, ".md");
  for (const filePath of markdownFiles) {
    const md = await fs.readFile(filePath, "utf8");
    if (md.includes("llms.txt")) continue;
    await fs.writeFile(filePath, `${LLMS_DIRECTIVE_MD}\n\n${md}`, "utf8");
    injectedMd += 1;
  }

  if (!(await exists(path.join(distDir, "llms.txt")))) {
    const fallbackLlms = await buildFallbackLlms(markdownFiles);
    await fs.writeFile(path.join(distDir, "llms.txt"), fallbackLlms, "utf8");
    await ensureDir(path.join(distDir, "docs"));
    await fs.writeFile(path.join(distDir, "docs", "llms.txt"), fallbackLlms, "utf8");
    copiedLlms += 2;
  }

  console.log(
    `[postbuild-ai-readiness] version=${versionName} copiedLlms=${copiedLlms} copiedUnversionedMd=${copiedUnversionedMd} injectedHtml=${injectedHtml} injectedMd=${injectedMd} updatedFavicons=${updatedFavicons}`
  );
}

main().catch((error) => {
  console.error("[postbuild-ai-readiness] Failed:", error);
  process.exitCode = 1;
});
