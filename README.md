# Personal_Portfolio —  React Application
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Fast-green?logo=vite)
![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-black?logo=vercel)

---

A **production-grade personal portfolio Single Page Application** built using React and React Router v6. It demonstrates real-world frontend engineering concepts including **dynamic routing, lazy loading, error boundaries, EmailJS integration, and a distinctive code-editor aesthetic.**

---

## 🔗 Live Demo

[View the live app on Vercel](https://personal-portfolio-react-js-psi.vercel.app/)

## 🔗 Git Repo

[View source code on GitHub](https://github.com/mayurpanchal-12/Personal_portfolio_React.js.git)

---

## 🚀 Project Overview

Personal Portfolio is a complete developer showcase where visitors can:

- Explore projects with syntax-highlighted cards
- View detailed project pages driven by a single data file
- Read about skills, education, and background
- Send messages via contact form (EmailJS — no backend)
- Download resume directly from the browser
- Enjoy a fully responsive dark code-editor aesthetic
- React Lazy + Suspense (ProjectDetail only — data-heavy page)

-  Error Boundary (Projects & ProjectDetail)

The project focuses on **production-level practices**, not just a basic static site.

---

## Application Flow

```
Land on Home → Code card + Skills intro
        ↓
Scroll down → About intro + Projects grid + Contact (all on Home)
        ↓
Visit /about → Full profile + Education timeline + Projects grid
        ↓
Click 'View Details' → Navigate to /projects/:id
        ↓
ProjectDetail loads lazily → PageLoader spinner shown
        ↓
Detail page shows: flow, routes, tech, highlights, error flows
        ↓
Visit /contact → Fill name, email, message → send()
        ↓
EmailJS sends email → Success / error feedback shown inline ✅
```

---

## 🧭 Navigation

- 🏠 Home
- 👤 About
- 💻 Projects
- 🔍 Project Detail (`/projects/:id`)
- 📞 Contact
- 🪪 Intro
- ⚠️ 404 Wildcard

---

## 🛠 Tech Stack

### Core

- React 18 (lazy, Suspense, useState, useNavigate — no Redux needed)
- React Router DOM v6 (createBrowserRouter, createRoutesFromElements, nested routes under Layout)
- TailwindCSS v4 (@custom-variant dark, utility classes + custom CSS per page)
- Vite (fast dev server, reloadDocument for resume PDF download)
- EmailJS (fetch() to api.emailjs.com — no backend required)

---

### 📦 Libraries & Tools

- lucide-react — icons (Code2, etc.)
- Fira Code — monospace font giving the code-editor aesthetic throughout
- Custom CSS modules — per-page BEM-style classes alongside Tailwind
- Vercel — deployment with automatic preview on push

---

## ✨ Core Features

- Dark code-editor theme with syntax-highlighted project cards
- Dynamic project detail pages driven by a single `projectsData.js` file
- EmailJS contact form — no backend, no exposed env variables
- Downloadable resume via `reloadDocument` (bypasses React Router)
- React Lazy + Suspense (ProjectDetail only — data-heavy page)
- Per-route Error Boundary (Projects & ProjectDetail)
- 404 wildcard page
- Fully responsive — 320px to desktop

---

## 🔥 Additional Highlights

### 🎨 Code-Editor Aesthetic

- Syntax colours (`c-keyword`, `c-string`, `c-bool`, `c-fn`) applied via CSS classes
- Project cards render like real JS objects with bracket syntax
- Fira Code monospace font used throughout for the developer look

---

### 📄 Single Data File Architecture

- All project info lives in `projectsData.js`
- Update one file → every page (Home, About, Projects, ProjectDetail) reflects it automatically

---

### 📱 Fully Responsive Design

- Supports all screen sizes (320px → desktop)
- Built with TailwindCSS v4 + custom per-page CSS files
- Sticky navbar with NavLink active state and gradient underline decoration

---

### 🛡️ Per-Route Error Boundaries

- Each heavy route (Projects, ProjectDetail) has its own `ErrorBoundary`
- A crash in one route does **not** affect the rest of the app

---

## ⚙️ Key Engineering Decisions

- **React.lazy** → ProjectDetail lazy-loaded (data-heavy); other pages are small enough to skip
- **reloadDocument** → Forces full browser download of `/resume.pdf` without React Router intercepting it
- **EmailJS fetch()** → Sends emails directly from the browser; free tier 200/month; zero backend
- **Single Data File** → `projectsData.js` is the single source of truth for all project content
- **CSS Variables** → Efficient theming system with `@custom-variant dark`

---

## ⚡ Performance Optimizations

- Code splitting with `React.lazy` + `Suspense`
- PageLoader spinner shown during lazy chunk fetch
- Lightweight bundle — no Redux, no heavy state library
- Per-page CSS files to avoid global style bloat
- Vercel CDN deployment with automatic preview builds

---

## 📬 EmailJS — Contact Flow

- Signup → stored in localStorage
- Form POST → `fetch()` to `api.emailjs.com`
- Success → inline success feedback shown
- Failure → `.catch()` fires → error message shown inline
- No backend, no exposed secrets, works on free Vercel deployment

---

## 🛡️ Error Handling Strategy

```text
User visits /projects/unknownid
↓
projects.find() returns undefined
↓
if (!project) check fires
↓
"Project not found" UI shown ✅


ProjectDetail throws during render
↓
Unexpected JS error fires
↓
ErrorBoundary on /projects/:id catches it
↓
"Something went wrong ⚠️" + Try Again shown ✅


User submits contact form
↓
EmailJS fetch() rejects or returns non-ok
↓
.catch() / else branch fires
↓
status = 'error' → "✗ something went wrong" shown ✅


User visits /randompage
↓
No matching route found
↓
Wildcard (*) route catches it
↓
404 page with Go Home button shown ✅
```

---

## ▶️ Getting Started

```bash
git clone https://github.com/mayurpanchal-12/Personal_portfolio_React.js.git
cd Personal_portfolio_React.js
npm install
npm run dev
```