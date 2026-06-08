<div align="center">

# 🏠 OmniTaskers — Frontend

**Premium Home & Property Services Platform for Omaxe City, Lucknow**

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF008F?logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Pages & Components](#-pages--components)
- [Design System](#-design-system)
- [Getting Started](#-getting-started)
- [Environment & Configuration](#-environment--configuration)
- [Scripts](#-scripts)
- [Deployment](#-deployment-vercel)
- [Recent Bug Fixes](#-recent-bug-fixes)
- [Contributing](#-contributing)

---

## 🏢 About

**OmniTaskers** is a premium residential service platform built exclusively for **Omaxe City, Lucknow**. It connects high-end residents with verified, background-checked home service professionals across 5 service categories:

- 🧹 **Cleaning Services** — Deep cleaning, villa cleaning, carpet & sofa cleaning
- 🔧 **Property Maintenance** — Plumbing, electrical, AC servicing, painting
- 🤝 **Home Assistance** — Daily household errands, groceries, bill payments
- 🚗 **Vehicle Care** — Car washing, detailing, bike servicing at doorstep
- 🏗️ **Infrastructure Services** — Landscaping, waterproofing, civil repairs

Key differentiators:
- ✅ Background-verified professionals
- ✅ Zero travel charges within Omaxe City
- ✅ Direct WhatsApp coordination
- ✅ 45-minute average emergency response
- ✅ 100% satisfaction guarantee

---

## 🌐 Live Demo

> Deployed on Vercel — auto-deploys on every push to `main`.

---

## ✨ Features

### User-Facing
- 📱 **Fully responsive** — optimized for mobile, tablet, and desktop
- 🎨 **Premium dark-mode hero** with animated gradient background
- 🗺️ **Interactive service area map** with animated location pins
- 📬 **Quote request form** with real-time validation and WhatsApp quick-connect
- ❓ **Animated FAQ accordion** with smooth open/close transitions
- ⭐ **Testimonials section** with client reviews
- 📍 **Service coverage map** showing all 5 Omaxe City sectors
- 💬 **WhatsApp floating action button** on every page
- 📞 **Click-to-call** phone integration

### Technical
- ⚡ **Vite 8** for lightning-fast HMR and production builds
- 🔀 **Client-side routing** with React Router v7
- 🎞️ **Framer Motion** animations with scroll-triggered reveals
- 🧭 **Scroll-to-top** on every page navigation
- 🔍 **SEO-ready** — semantic HTML, proper heading hierarchy, descriptive meta
- 🚀 **Performance optimised** — GPU-heavy effects disabled on mobile

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|---|---|---|
| UI Framework | React | 19 |
| Build Tool | Vite | 8 |
| Routing | React Router DOM | 7 |
| Animations | Framer Motion | 12 |
| Icons | Lucide React | 1.16 |
| Styling | TailwindCSS + Vanilla CSS | 4 |
| CSS Processing | PostCSS + Autoprefixer | 8 / 10 |
| Deployment | Vercel | — |
| Package Manager | npm / pnpm | — |

---

## 📁 Project Structure

```
omni-taskers-frontend-build/
├── public/                  # Static assets (favicon, icons)
├── src/
│   ├── components/
│   │   ├── Common/
│   │   │   ├── SectionTitle.jsx     # Reusable section heading component
│   │   │   └── ScrollToTop.jsx      # Resets scroll on route change
│   │   ├── Navigation/
│   │   │   └── Navbar.jsx           # Sticky responsive navbar with mobile menu
│   │   ├── Hero/
│   │   │   └── HeroSection.jsx      # Full-screen hero with animated stats
│   │   ├── Trust/
│   │   │   └── TrustIndicators.jsx  # Social proof bar (ratings, counts)
│   │   ├── Services/
│   │   │   ├── ServiceCategories.jsx # Service category grid
│   │   │   └── FeaturedServices.jsx  # Highlighted service cards
│   │   ├── WhyChoose/
│   │   │   └── WhyChooseCards.jsx   # USP feature cards
│   │   ├── HowItWorks/
│   │   │   └── HowItWorks.jsx       # 3-step process section
│   │   ├── Testimonials/
│   │   │   └── Testimonials.jsx     # Client review cards
│   │   ├── FAQ/
│   │   │   └── FAQ.jsx              # Accordion FAQ component
│   │   ├── Contact/
│   │   │   ├── ContactForm.jsx      # Quote request form + contact sidebar
│   │   │   └── ContactCTA.jsx       # CTA banner linking to contact
│   │   └── Footer/
│   │       └── Footer.jsx           # Full footer with nav + social links
│   ├── pages/
│   │   ├── Home.jsx                 # Home page — assembles all sections
│   │   ├── Services.jsx             # Services listing page
│   │   ├── About.jsx                # About / team page
│   │   └── Contact.jsx              # Contact page with map
│   ├── lib/
│   │   ├── constants.js             # Design tokens, contact info, social links
│   │   ├── mockData.js              # Services, testimonials, FAQ data
│   │   └── animations.js            # Shared Framer Motion variants
│   ├── App.jsx                      # Root — Router, Navbar, Footer, ScrollToTop
│   ├── main.jsx                     # React 19 entry point
│   └── index.css                    # Global styles, design tokens, utilities
├── dist/                            # Production build output (auto-generated)
├── vite.config.js                   # Vite + React plugin config
├── tailwind.config.js               # Tailwind v4 configuration
├── postcss.config.js                # PostCSS with Tailwind + Autoprefixer
└── package.json
```

---

## 📄 Pages & Components

### Pages

| Route | Page | Description |
|---|---|---|
| `/` | `Home.jsx` | Landing page with hero, services, testimonials, FAQ |
| `/services` | `Services.jsx` | Full services catalogue with category filters |
| `/about` | `About.jsx` | Company story, team, values |
| `/contact` | `Contact.jsx` | Quote form, contact info, interactive service map |

### Key Components

#### `Navbar.jsx`
- Sticky top navbar with `backdrop-filter` glass effect
- Animated active link indicator using Framer Motion `layoutId`
- Responsive mobile hamburger menu with slide-down animation
- Desktop: nav links + phone CTA + "Get Free Quote" button
- Mobile: full-screen overlay menu

#### `HeroSection.jsx`
- Full-viewport dark gradient hero
- Animated floating service card (hidden on mobile for performance)
- 4 key highlight checkmarks in a responsive grid
- Stats bar: Verified Taskers, Homes Served, Satisfaction Rate, Response Time

#### `ContactForm.jsx`
- Two-column layout: contact info sidebar + quote request form
- Sidebar is `position: sticky` on desktop only — static on mobile
- Real-time input focus styles with teal glow ring
- Service category selector pre-filled from URL `?service=` query param
- Submit success state with 5-second auto-reset

#### `FAQ.jsx`
- Accordion with animated expand/collapse using `AnimatePresence`
- Only one item open at a time
- Smooth chevron rotation on toggle

#### `ScrollToTop.jsx`
- Listens to `useLocation().pathname`
- Calls `window.scrollTo({ top: 0, behavior: 'instant' })` on every route change
- Renders `null` — zero visual output

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--navy` | `#0B3D6E` | Primary brand, headings, buttons |
| `--navy-dark` | `#071F38` | Hero backgrounds, deep accents |
| `--navy-mid` | `#0F4F8C` | Gradient midpoints |
| `--navy-light` | `#1A6BB5` | Hover states |
| `--teal` | `#0D9488` | Accent, CTA buttons, active states |
| `--teal-light` | `#14B8A6` | Gradients, highlights |
| `--teal-dark` | `#0F766E` | Badge text |
| `--off-white` | `#F8FAFC` | Page backgrounds |
| `--surface` | `#F1F5F9` | Card backgrounds |

### Typography

| Font | Usage | Weights |
|---|---|---|
| **Outfit** | Headings, buttons, badges | 700, 800, 900 |
| **Inter** | Body text, labels, inputs | 400, 500, 600 |

### Spacing Scale
`0.5rem → 1rem → 1.5rem → 2rem → 3rem → 4rem → 6rem → 8rem`

### Shadows
- `--shadow-sm` — Subtle card lift
- `--shadow-md` — Default card
- `--shadow-lg` — Hover card
- `--shadow-xl` — Modal / overlay
- `--shadow-teal` — Teal-coloured CTA glow
- `--shadow-navy` — Navy-coloured button glow

### Border Radii
`6px → 12px → 18px → 24px → 32px → 9999px (pill)`

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 or **pnpm** ≥ 8

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/akasahilsingh/omnitaskers.git
cd omnitaskers

# 2. Install dependencies
npm install
# or
pnpm install

# 3. Start the dev server (opens at http://localhost:3000)
npm run dev
```

---

## ⚙️ Environment & Configuration

All contact details and social links are centralised in [`src/lib/constants.js`](src/lib/constants.js).  
Update these before going live:

```js
// src/lib/constants.js

export const CONTACT = {
  phone: '+91-9876543210',
  whatsapp: '919876543210',   // Raw number for wa.me link
  email: 'hello@omnitaskers.in',
  address: 'Omaxe City, Lucknow, Uttar Pradesh, 226025',
}

export const SOCIAL = {
  facebook: 'https://facebook.com/omnitaskers.in',
  instagram: 'https://instagram.com/omnitaskers.in',
  linkedin: 'https://linkedin.com/company/omnitaskers-in',
  twitter: 'https://twitter.com/omnitaskers_in',
}
```

All service data, testimonials, and FAQ content live in [`src/lib/mockData.js`](src/lib/mockData.js).

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at `http://localhost:3000` |
| `npm run build` | Build optimised production bundle to `dist/` |
| `npm run preview` | Locally preview the production build |

---

## 🌍 Deployment (Vercel)

This project is deployed on **Vercel** with automatic CI/CD:

1. Every push to the `main` branch triggers a new Vercel deployment
2. Vercel runs `npm run build` → serves the `dist/` folder
3. No environment variables are required — all config is in `constants.js`

### Manual deploy via Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

---

## 🐛 Recent Bug Fixes

### v0.1.1 — Mobile UX & Performance Patch

| Bug | Fix |
|---|---|
| Pages didn't scroll to top on navigation | Added `ScrollToTop.jsx` component wired into React Router |
| Contact page sidebar "stuck" on mobile scroll | Removed `position: sticky` on mobile; applied only on desktop (≥901px) via CSS class |
| FAQ section colors bleeding into adjacent sections on mobile | Added `overflow: hidden` + `isolation: isolate` to FAQ `<section>` |
| Laggy scroll experience on mobile | Disabled animated blur orbs (`.hero-orb`) on ≤1023px screens, removed `backdrop-filter` on mobile |
| No `prefers-reduced-motion` support | Added global motion-reduction rules for accessibility and battery |

---

## 🤝 Contributing

This is a private client project. For internal contributors:

1. Create a feature branch: `git checkout -b feat/your-feature-name`
2. Make your changes and test locally with `npm run dev`
3. Run a production build check: `npm run build`
4. Commit with a clear message: `git commit -m "feat: description"`
5. Push and open a Pull Request to `main`

---

## 📞 Contact

**OmniTaskers**  
📍 Omaxe City, Lucknow, Uttar Pradesh — 226025  
📧 hello@omnitaskers.in  
📱 +91-9876543210  
💬 [WhatsApp](https://wa.me/919876543210)

---

<div align="center">
  <sub>Built with ❤️ for Omaxe City residents · © 2025 OmniTaskers</sub>
</div>
