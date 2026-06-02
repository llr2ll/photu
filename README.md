# PHOTU — Photography Products & Services Website

A dark-themed photography e-commerce and services website built with TanStack Start, React, and Tailwind CSS v4.

## About

PHOTU is a platform for photographers offering:
- **Courses** — Storymaker and professional photography training
- **Digital products** — Legal contracts, photo restoration services
- **Photography services** — Professional sessions and consultancy
- **Pricing plans** — Tiered photo restoration packages

## Tech Stack

- **Framework**: TanStack Start (React SSR)
- **Styling**: Tailwind CSS v4 + custom CSS variables
- **Fonts**: Montserrat (headings) + Nunito (body) via Google Fonts
- **Icons**: Inline SVGs
- **Deployment**: Netlify

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  routes/
    __root.tsx     # Root layout, HTML shell, global meta
    index.tsx      # Homepage — hero, products, pricing, services, footer
  styles.css       # Global styles, CSS variables, animations
public/
  photu-logo.jpeg  # Brand logo asset
```
