# Portfolio

Source for [choubey.eu](https://choubey.eu). Built with Next.js 14, Tailwind CSS and the Geist fonts.

## Develop

This repo uses pnpm (the version is pinned in `package.json`), and Vercel installs from `pnpm-lock.yaml`.

```sh
pnpm install
pnpm dev
```

## Content

- Site copy, jobs, projects and the timeline live in `src/data/resume.tsx`.
- Blog posts are `.mdx` files in `content/`. The home page's Writing section appears automatically while the newest post is under two years old.
- The Résumé button serves `public/resume.pdf`.
