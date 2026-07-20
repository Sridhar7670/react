# 🌟 My React Portfolio

My personal portfolio — a single-page React site covering who I am, the tools
I work with, and the projects I have built.

**Live:** https://sridhars-portfolio.netlify.app/

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Technologies Used](#️-technologies-used)
- [Project Structure](#-project-structure)
- [Setup Instructions](#-setup-instructions)

---

## 📝 Project Overview

A single-page site: every section lives on one page and the navbar scrolls to
them rather than routing between pages. It is built with Create React App and
plain CSS — no UI framework and no CSS-in-JS.

---

## 🚀 Features

- **Home** — introduction, a rotating tagline, and links to my resume and contact form.
- **About** — background, education and why I would be a good hire.
- **Skills** — the technologies I work with, as cards.
- **Projects** — project tiles that flip to reveal a description and links.
  On touch devices, where there is no hover, they lay out as normal cards
  instead so nothing is unreachable.
- **Contact** — a working contact form, submitted through Web3Forms.
- **Scroll animations** — sections fade into view as you reach them, using
  `IntersectionObserver` rather than an animation library.
- **Responsive** — adapts from phones up to desktops.
- **Accessible** — visible keyboard focus, and all motion is switched off for
  anyone whose system asks for reduced motion.

---

## 🛠️ Technologies Used

- **React 19** — functional components and hooks.
- **Create React App** (`react-scripts`) — build tooling.
- **Plain CSS** — one stylesheet per component, with shared design tokens
  (fonts, colours, spacing) defined in `src/index.css`.
- **react-icons** — icon set.
- **animate.css** — the entrance animation in the hero only. Everything below
  the fold uses the custom `useScrollReveal` hook.
- **Web3Forms** — receives contact form submissions; no backend of my own.
- **Netlify** — hosting.

---

## 📁 Project Structure

```
src/
  Home/  About/  Skills/  Projects/  Contact/  Navbar/  Footer/
      one folder per section, each with its .js and .css

  components/         reusable pieces: Button, Card, ScrollProgress
  hooks/              useScrollReveal, useActiveSection
  data/               socialLinks shared between Contact and Footer
  index.css           design tokens and styles shared across the whole site
```

---

## 🔧 Setup Instructions

```bash
git clone https://github.com/Sridhar7670/react.git
cd react/day2-portfolio
npm install
npm start
```

The site runs at http://localhost:3000.

To build for production:

```bash
npm run build
```

### Environment variables

The contact form works out of the box with a public Web3Forms key. To send
submissions to your own inbox, copy `.env.example` to `.env` and set your own:

```
REACT_APP_WEB3FORMS_KEY=your-key-here
```
