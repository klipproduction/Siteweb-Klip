# KLIP Website

This repository contains the source code for the KLIP photography and video portfolio website. It has been reconstructed from a Lovable project with all Lovable‑specific dependencies removed. The site showcases examples of photo and video projects and provides a contact form for prospective clients.

## Getting Started

This project uses [Vite](https://vitejs.dev/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) and [Tailwind CSS](https://tailwindcss.com/). You’ll need a recent version of Node.js installed on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
git clone <this-repo-url>
cd klipwebsite
npm install
```

### Development

Run the development server with hot reload:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` by default.

### Build

To build a production version of the site:

```bash
npm run build
```

The compiled files will be in the `dist/` directory. You can preview the production build locally with `npm run preview`.

### Linting

Lint the project with ESLint:

```bash
npm run lint
```

## Project Structure

- **`src/`** – React components, pages, hooks and utilities.
- **`public/`** – Static assets served at the root of the site. All image files are stored in `public/assets` and can be referenced with paths like `/assets/your-image.png`.
- **`src/components/ui/`** – Reusable UI primitives from the shadcn/ui library.
- **`tailwind.config.ts`** – Tailwind CSS configuration including design tokens and themes.

## How To Modify Content

- **Images**: store new images in `public/assets` and update the paths in the corresponding components (for example `src/components/Portfolio.tsx`).
- **Text**: edit the JSX/TSX files under `src/components` or `src/pages` to change headings, descriptions and button labels.
- **Styles**: Tailwind utility classes are used throughout the project. You can extend or override design tokens in `src/index.css` and configure Tailwind in `tailwind.config.ts`.

## Accessibility, SEO & Performance

The markup follows semantic HTML and includes accessible attributes and ARIA labels where appropriate. Important images have descriptive alternative text. Meta tags in `index.html` define titles and descriptions for search engines and social networks. Preloading of large background images ensures the site feels responsive. You can further optimize assets (e.g. compress images) or add lazy loading where appropriate.

## License

All rights reserved – © 2025 KLIP Media.