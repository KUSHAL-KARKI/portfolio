# Kushal Karki Portfolio

A personal portfolio built with Next.js, React, TypeScript, Framer Motion, and Tailwind CSS. It presents a full-screen landing page with animated sections for introduction, about, projects, and contact, plus dedicated routes for the about page and detailed project pages.

## Features

- Smooth full-page scrolling with animated section reveals
- Portfolio home page with hero, about, projects, and contact sections
- Dedicated about page with skills and education timeline
- Project listing and per-project detail pages
- Responsive UI optimized for desktop and mobile
- Social links, resume access, and project metadata

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run start` - start the production server
- `npm run lint` - run ESLint

## Project Structure

- `app/` - application routes, layout, and global styles
- `app/(routes)/about/` - about page
- `app/(routes)/project/` - projects list and project detail routes
- `components/` - shared layout and UI components
- `data/` - portfolio content for projects, skills, and social links
- `animations/` - Framer Motion variants and animation helpers
- `hooks/` - custom hooks such as full-page scroll behavior
- `public/images/` - profile and project images

## Notes

- The portfolio content is data-driven from the files in `data/`.
- The home page and subpages use animated transitions and scroll-aware navigation.
