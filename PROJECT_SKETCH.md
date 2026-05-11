# DevAutobot — Project Sketch & Current State

This document is the **living source of truth** for the project. Update it every time the project structure, features, or stack changes.

> **Language rule:** JavaScript only — `.js` and `.jsx`. No TypeScript, no `tsconfig.json`.

---

## Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Framework    | Next.js 16 (App Router)             |
| UI Library   | React 19                            |
| Styling      | Tailwind CSS v4                     |
| Animations   | Framer Motion 12                    |
| Icons        | Lucide React                        |
| Theme        | next-themes                         |
| Utilities    | clsx, tailwind-merge                |
| Language     | JavaScript (`.js` / `.jsx`)         |

---

## Directory Structure (Current)

```
src/
├── app/
│   ├── layout.jsx                  # Root layout: metadata, ThemeProvider, Navbar, Footer
│   ├── page.jsx                    # Home page
│   ├── globals.css                 # CSS variables, global classes, animation keyframes
│   ├── contact/
│   │   └── page.jsx
│   └── services/
│       ├── ai-automation/page.jsx
│       ├── ai-avatars/page.jsx
│       ├── voice-ai/page.jsx
│       └── website-dev/page.jsx
│
├── components/
│   ├── theme-provider.jsx
│   ├── contact/
│   │   └── ContactForm.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── ServicesGrid.jsx
│   │   ├── FeaturedServices.jsx
│   │   ├── StatsSection.jsx
│   │   ├── ProcessTimeline.jsx
│   │   ├── SocialProof.jsx
│   │   └── CTABanner.jsx
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── services/
│   │   ├── common/
│   │   │   ├── ServiceHero.jsx
│   │   │   ├── ServiceFeatures.jsx
│   │   │   ├── ServiceProcess.jsx
│   │   │   ├── ServiceProjects.jsx
│   │   │   ├── ServiceUseCases.jsx
│   │   │   └── ServicePricing.jsx
│   │   ├── ai-automation/
│   │   ├── ai-avatars/
│   │   ├── voice-ai/
│   │   ├── website-dev/
│   │   └── DemoAiVoiceCalling.jsx
│   └── ui/
│       ├── AnimatedSection.jsx
│       ├── Container.jsx
│       ├── ThemeToggle.jsx
│       └── TiltCard.jsx
│
├── data/
│   ├── hero/
│   │   ├── ai-automation-hero.js
│   │   ├── ai-avatars-hero.js
│   │   ├── voice-ai-hero.js
│   │   └── website-dev-hero.js
│   ├── features/
│   │   ├── ai-automation.js
│   │   ├── ai-avatars.js
│   │   ├── voice-ai-calling.js
│   │   └── web-development.js
│   ├── process/
│   │   ├── ai-automation-process.js
│   │   ├── ai-avatars-process.js
│   │   ├── voice-ai-process.js
│   │   └── website-dev-process.js
│   ├── projects/
│   │   ├── ai-automation.js
│   │   ├── ai-avatars.js
│   │   ├── voice-ai.js
│   │   └── website-dev.js
│   ├── pricing/
│   │   ├── ai-automation-pricing.js
│   │   ├── ai-avatars-pricing.js
│   │   ├── voice-ai-pricing.js
│   │   └── website-dev-pricing.js
│   ├── use-cases/
│   │   ├── ai-automation.js
│   │   ├── ai-avatars.js
│   │   ├── voice-ai.js
│   │   └── website-dev.js
│   └── demo/
│       └── voice-ai.js
│
└── lib/
    ├── animations.js               # Framer Motion presets (fadeUp, fadeIn, scaleIn, etc.)
    ├── site.js                     # Brand info: name, contact, social links
    └── utils.js                    # cn() helper and general utilities
```

---

## Pages & Routes

| Route                       | File                                          | Status   |
|-----------------------------|-----------------------------------------------|----------|
| `/`                         | `src/app/page.jsx`                            | Built    |
| `/contact`                  | `src/app/contact/page.jsx`                    | Built    |
| `/services/website-dev`     | `src/app/services/website-dev/page.jsx`       | Built    |
| `/services/voice-ai`        | `src/app/services/voice-ai/page.jsx`          | Built    |
| `/services/ai-avatars`      | `src/app/services/ai-avatars/page.jsx`        | Built    |
| `/services/ai-automation`   | `src/app/services/ai-automation/page.jsx`     | Built    |

---

## Home Page Sections

1. `Hero` — main headline, CTA buttons, animated visuals
2. `ServicesGrid` — 4-service overview cards
3. `FeaturedServices` — spotlight on key services
4. `StatsSection` — agency metrics/numbers
5. `ProcessTimeline` — how we work
6. `SocialProof` — testimonials / logos
7. `CTABanner` — bottom call to action

---

## Service Page Pattern

Each service page assembles these shared components with service-specific data:

1. `ServiceHero` ← `data/hero/[service]-hero.js`
2. `ServiceFeatures` ← `data/features/[service].js`
3. `ServiceProcess` ← `data/process/[service]-process.js`
4. `ServiceProjects` ← `data/projects/[service].js`
5. `ServiceUseCases` ← `data/use-cases/[service].js`
6. `ServicePricing` ← `data/pricing/[service]-pricing.js`

---

## Design System

- **Colors:** Primary cyan/teal, service-specific accent colors
- **Typography:** Syne (headings), DM Sans (body)
- **Spacing:** 4px base grid via Tailwind
- **Dark mode:** CSS variables toggled by `next-themes`
- **Cards:** `.glass-card` frosted glass utility class
- **Buttons:** `.btn-primary`, `.btn-secondary`
- **Animations:** Framer Motion — `fadeUp`, `fadeIn`, `scaleIn`, `staggerContainer`, `staggerItem`

---

## Brand

- **Agency:** DevAutobot
- **Tagline:** Website Development, Voice AI & Automation
- **Email:** devautobot07@gmail.com
- **Phone:** +92 307 1996482
- **Location:** Lahore, Pakistan (serving globally)

---

## Implementation Phases

### Phase 1 — Foundation (Done)
- [x] Next.js project with App Router
- [x] Tailwind CSS v4
- [x] Framer Motion
- [x] Dark mode via next-themes
- [x] Global CSS variables and utility classes
- [x] `jsconfig.json` with `@/*` path alias

### Phase 2 — Design System (Done)
- [x] CSS variables for light/dark modes
- [x] Reusable utility classes in `globals.css`
- [x] Animation presets in `lib/animations.js`

### Phase 3 — Core Components (Done)
- [x] `Navbar.jsx` and `Footer.jsx`
- [x] `Container.jsx`, `TiltCard.jsx`, `AnimatedSection.jsx`, `ThemeToggle.jsx`
- [x] All shared service components in `components/services/common/`

### Phase 4 — Content Data (Done)
- [x] All hero, features, process, projects, pricing, use-case data files

### Phase 5 — Pages (Done)
- [x] Home page with all sections
- [x] 4 service pages
- [x] Contact page

### Phase 6 — Remaining
- [ ] Connect contact form to real API endpoint
- [ ] Add `loading.jsx` and `error.jsx` global fallbacks
- [ ] Performance audit (Lighthouse)
- [ ] SEO meta tags review
- [ ] Responsive testing (mobile / tablet / desktop)
- [ ] Dark/light mode QA pass

---

## NPM Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```
