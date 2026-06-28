# DraftView docs

Public documentation for DraftView, published at https://docs.draftview.app.

Built with [docslit-cli](https://github.com/UmbrellaDocs/docslit-cli).

## Local development

```bash
npm install
npm run validate     # check links, assets, and frontmatter
npm run dev          # preview at http://localhost:3000
npm run build        # build the static site to dist/
```

## Structure

- `docslit.json` — site config and sidebar
- `docs/` — documentation pages

Add a page by creating the file under `docs/` and adding its slug to the
`sidebar` in `docslit.json`. `npm run validate` fails if a sidebar slug has no
matching file.

## Deploy

Hosted on Vercel. Framework preset Other, build command `npm run build`,
output directory `dist`. The domain docs.draftview.app points at this project.
