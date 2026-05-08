# AGENTS.md

## Project Overview

This project is a creative portfolio website for a Full Stack Software Engineer.

The goal is to build a premium, visually impressive, production-ready portfolio using a futuristic Glassmorphism UI, smooth animations, and a professional dark theme.

The website should showcase:

- Personal brand
- Projects
- Skills
- Experience
- Services
- Resume
- Blog/articles
- Contact information

## Tech Stack

Use the following stack only:

- Next.js latest version
- App Router only
- React
- JavaScript only
- JSX only
- Tailwind CSS latest version
- Framer Motion
- lucide-react
- next/image
- next/font

## Important Language Constraint

Do not use TypeScript.

Allowed file extensions:

- `.js`
- `.jsx`
- `.css`
- `.md`
- `.json`

Forbidden file extensions:

- `.ts`
- `.tsx`

Do not create:

- TypeScript interfaces
- Type aliases
- Type imports
- Type annotations
- `tsconfig.json`

If TypeScript code exists, convert it to JavaScript.

## Next.js Rules

Use Next.js App Router only.

Use this structure:

```txt
app/
  layout.jsx
  page.jsx
  globals.css
  loading.jsx
  error.jsx
  projects/
    page.jsx
    [slug]/
      page.jsx
  blog/
    page.jsx
    [slug]/
      page.jsx
  resume/
    page.jsx
  contact/
    page.jsx
```
