# Todo React App

A simple todo app that allows users to create, edit and delete todos

## Overview

- `components/*` - Contains all the components used
- `contexts/*` - Houses the contexts used for state and actions
- `hooks/*` - A collection of helpful custom hooks
- `pages/blog/*` - Static pre-rendered blog pages using MDX.
- `pages/dashboard` - [Personal dashboard](https://leerob.io/dashboard) tracking metrics.
- `pages/sitemap.xml.tsx` - Automatically generated sitemap.
- `pages/feed.xml.tsx` - Automatically generated RSS feed.
- `pages/*` - All other static pages.
- `prisma/*` - My Prisma schema, which uses a PlanetScale MySQL database.
- `public/*` - Static assets including fonts and images.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.

## Running Locally

This application requires Node.js v16.13+ & Yarn v1.22.19.

```bash
$ git clone https://github.com/joelytk/todo-app.git
$ cd todo-app
$ yarn
$ yarn dev
```
