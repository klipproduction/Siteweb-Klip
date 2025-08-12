# Migration Notes from Lovable to Standalone

This document outlines all Lovable‑specific references and dependencies that were removed from the original project and how they were replaced.

## Removed Dependencies

- **lovable‑tagger** (dev dependency) was removed from `package.json`.
- The `componentTagger` plugin from `lovable‑tagger` was removed from `vite.config.ts`.

## Renamed Assets Directory

The original project stored uploaded images under `public/lovable-uploads`. To avoid using a Lovable‑specific directory name, the folder has been renamed to `public/assets`. All image references in the project were updated accordingly.

| File | Change |
| ---- | ----- |
| `src/pages/Index.tsx` | Updated the background image path from `/lovable-uploads/58934c74…` to `/assets/58934c74…`. |
| `src/components/Portfolio.tsx` | Updated all `image: "/lovable-uploads/..."` properties to use `/assets/...`. |
| `src/components/Testimonials.tsx` | Updated the `backgroundImage` property from `/lovable-uploads/164bacd9…` to `/assets/164bacd9…`. |
| `index.html` | Preload link updated from `/lovable-uploads/58934…` to `/assets/58934…`. |

## Updated HTML Metadata

The original `index.html` contained metadata with Lovable branding and images hosted on `lovable.dev`. These entries were replaced with project‑specific values:

- The page `<title>` is now **KLIP – Photographie et Vidéo**.
- `<meta name="description">` now describes the KLIP portfolio rather than referencing Lovable.
- `<meta name="author">` was changed from “Lovable” to “KLIP”.
- Open Graph (`og:*`) and Twitter card metadata now point to a local asset under `/assets/58934c74…` for social media previews instead of remote Lovable images.

## Other Notes

- The `README.md` has been rewritten to document how to run and modify the project without Lovable.
- No Lovable scripts or APIs remain in the codebase. All functionality is implemented with open‑source libraries and native browser APIs.