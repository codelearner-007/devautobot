# DevAutobot — Project Sketch & Current State

This document is the **living source of truth** for the project. Update it every time the project structure, features, or stack changes.

> **Language rule:** JavaScript only — `.js` and `.jsx`. No TypeScript, no `tsconfig.json`.

---

## Tech Stack

| Layer       | Technology                                           |
|-------------|------------------------------------------------------|
| Framework   | Next.js (App Router)                                 |
| UI          | React 19                                             |
| Styling     | Tailwind CSS v4 (`@theme`, `@layer components`)      |
| Animations  | Framer Motion 12                                     |
| Icons       | Lucide React                                         |
| Fonts       | Syne (headings) · DM Sans (body) — Google Fonts      |
| Themes      | next-themes (light/dark, default: dark)              |
| Language    | JavaScript only (`.js`, `.jsx`)                      |

---

## Brand

- **Name:** DevAutobot
- **Tagline:** Web & App Development Agency
- **Focus:** Web development + App development only
- **Email:** devautobot07@gmail.com
- **Phone:** +92 307 1996482
- **Location:** Lahore, Pakistan (serving globally)

---

## Pages & Routes

| Route                           | File                                              | Status   |
|---------------------------------|---------------------------------------------------|----------|
| `/`                             | `src/app/page.jsx`                                | Complete |
| `/contact`                      | `src/app/contact/page.jsx`                        | Complete |
| `/services/web-development`     | `src/app/services/web-development/page.jsx`       | Complete |
| `/services/app-development`     | `src/app/services/app-development/page.jsx`       | Complete |

---

## Directory Tree

```
src/
├── app/
│   ├── contact/
│   │   └── page.jsx
│   ├── services/
│   │   ├── web-development/
│   │   │   └── page.jsx
│   │   └── app-development/
│   │       └── page.jsx
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
│
├── components/
│   ├── contact/
│   │   └── ContactForm.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Process.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   └── CTABanner.jsx
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── services/
│   │   ├── WebDevHero.jsx
│   │   ├── AppDevHero.jsx
│   │   ├── ServicePricing.jsx
│   │   ├── web-development/
│   │   │   ├── WebServicesGrid.jsx
│   │   │   ├── WebApproach.jsx
│   │   │   ├── WebTechStack.jsx
│   │   │   ├── WebFaq.jsx
│   │   │   └── WebCta.jsx
│   │   └── app-development/
│   │       ├── AppCapabilitiesGrid.jsx
│   │       ├── AppCommitment.jsx
│   │       ├── AppTechStack.jsx
│   │       ├── AppFaq.jsx
│   │       └── AppCta.jsx
│   ├── theme-provider.jsx
│   └── ui/
│       ├── AnimatedSection.jsx
│       ├── Container.jsx
│       ├── ThemeToggle.jsx
│       └── TiltCard.jsx
│
├── data/
│   └── services/
│       ├── web-development/
│       │   ├── webServices.js
│       │   ├── webTech.js
│       │   ├── webFaqs.js
│       │   └── webApproach.js
│       └── app-development/
│           ├── appServices.js
│           ├── appTech.js
│           ├── appFaqs.js
│           └── appCommitment.js
│
└── lib/
    ├── animations.js
    ├── serviceStyles.js
    ├── site.js
    └── utils.js
```

---

## Home Page Sections (in order)

1. **Hero** — Bold headline, description, CTA buttons
2. **Services** — Two service cards: Web Development + App Development
3. **WhyUs** — 6 differentiator cards (speed, quality, design, ROI, security, support)
4. **Process** — 5-step delivery process (Discovery → Design → Build → Test → Launch)
5. **Portfolio** — 4 featured project cards with tech stack and metrics
6. **Testimonials** — 6 client testimonials in a 3-column grid
7. **Pricing** — 3 pricing tiers (Starter $999 / Professional $2,499 / Enterprise custom)
8. **CTABanner** — Final call-to-action

---

## Design System

### Color Tokens (CSS custom properties via `@theme`)

| Token                    | Light Mode              | Dark Mode               |
|--------------------------|-------------------------|-------------------------|
| `--color-background`     | `hsl(0 0% 100%)`        | `hsl(232 35% 4%)`       |
| `--color-foreground`     | `hsl(230 25% 8%)`       | `hsl(220 20% 95%)`      |
| `--color-card`           | `hsl(230 20% 97%)`      | `hsl(232 30% 7%)`       |
| `--color-primary`        | `hsl(258 90% 62%)`      | `hsl(258 90% 68%)`      |
| `--color-accent`         | `hsl(32 95% 56%)`       | `hsl(32 95% 56%)`       |
| `--color-border`         | `hsl(230 15% 88%)`      | `hsl(232 25% 14%)`      |
| `--color-muted-foreground` | `hsl(230 15% 45%)`    | `hsl(220 15% 55%)`      |

### Utility Classes

| Class               | Usage                                         |
|---------------------|-----------------------------------------------|
| `.gradient-text`    | Violet→purple→orange gradient text            |
| `.gradient-text-violet` | Violet→purple gradient text               |
| `.glass-card`       | Frosted glass card (static)                   |
| `.glass-card-hover` | Frosted glass card with hover lift effect     |
| `.btn-primary`      | Primary violet gradient button                |
| `.btn-secondary`    | Ghost/outline button                          |
| `.btn-accent`       | Orange accent button                          |
| `.section-label`    | Small uppercase badge label                   |
| `.section-heading`  | Bold serif heading style                      |
| `.bg-grid`          | Subtle grid background pattern                |
| `.bg-dots`          | Subtle dot pattern background                 |
| `.shimmer-btn`      | Shimmer effect on hover                       |
| `.animated-border`  | Rotating conic gradient border on hover       |

### Framer Motion Presets (`src/lib/animations.js`)

- `fadeUp`, `fadeIn`, `fadeLeft`, `fadeRight`
- `scaleIn`, `staggerContainer`, `staggerItem`, `slideUp`

---

## Navbar Structure

- **Logo** — `logo.png` + "DevAutobot" text
- **Links** — Home, Services (dropdown), Work, Contact
- **Services Dropdown** — Web Development + App Development
- **CTA** — "Start a Project" button (violet)
- **Theme toggle** — light/dark mode switch

---

## Removed Features (from previous version)

The following services have been completely removed:
- Voice AI Calling Agents
- AI Avatars
- AI Agents & Automation

All related pages, components, and data files have been deleted.
