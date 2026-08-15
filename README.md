# Ramprasad — Professional Developer Portfolio

A premium, responsive portfolio built with **React**, **Vite**, and **Tailwind CSS**. Designed for internships, placements, freelance opportunities, and recruiter outreach.

## Quick Start

### Prerequisites

Install [Node.js](https://nodejs.org/) (v18 or later recommended).

### Install & Run

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Netlify

### Option 1: Connect Git Repository

1. Push this project to GitHub.
2. Go to [Netlify](https://www.netlify.com/) → **Add new site** → **Import an existing project**.
3. Use these settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy.

`netlify.toml` is already configured with SPA redirects.

### Option 2: Manual Deploy

```bash
npm run build
```

Drag the `dist` folder to Netlify Drop, or use the Netlify CLI:

```bash
npx netlify deploy --prod --dir=dist
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_FORMSPREE_ID` | Formspree form ID for contact form submission |

Set in `.env` locally or in Netlify → Site settings → Environment variables.

Without Formspree, the contact form falls back to opening the user's email client.

## What You Need to Update

Edit these files before deploying:

### 1. `src/data/personal.js`
- GitHub URL and username
- LinkedIn URL
- BTech college name (currently placeholder)

### 2. `src/data/projects.js`
- Project GitHub and live demo URLs
- Project screenshots (`image` field)
- Add new projects easily by copying an existing entry

### 3. `src/data/education.js`
- BTech institution name
- Achievements (replace `[Add ...]` placeholders)

### 4. `public/resume/Ramprasad_Resume.pdf`
- Add your actual resume PDF

### 5. Project images
- Add images to `public/images/projects/` and reference them in `projects.js`

## Project Structure

```
src/
├── components/     # UI sections (Navbar, Hero, Projects, etc.)
├── data/           # Editable content (projects, skills, education)
├── hooks/          # Theme and scroll utilities
├── pages/          # 404 page
├── utils/          # Helpers
├── App.jsx
└── main.jsx
```

## Features

- Premium dark/light/system theme with localStorage persistence
- Sticky navigation with active section indicator
- Scroll progress bar and back-to-top button
- Project filtering and detail modal
- Contact form (Formspree-ready)
- SEO metadata, sitemap, robots.txt
- Accessibility: semantic HTML, keyboard nav, reduced motion
- Mobile-first responsive design
- Netlify-ready SPA configuration

## Legacy Site

The previous static HTML portfolio is preserved in `/legacy`.

## License

Personal portfolio — all rights reserved.
