# DevAutobot — Claude Code Rules

## Language: JavaScript Only (No TypeScript)

- NEVER create `.ts` or `.tsx` files under any circumstances
- NEVER create or modify `tsconfig.json`
- NEVER use TypeScript syntax (interfaces, type annotations, generics, enums, `as` casts)
- All source files MUST use `.js` (utilities, data, config) or `.jsx` (React components)
- Use JSDoc comments for type documentation if needed

## Next.js Version Notice

This is NOT the Next.js you know. APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## PROJECT_SKETCH.md is Mandatory — Update After Every Change

Update `PROJECT_SKETCH.md` every time ANY of the following change:
- New files added, files renamed, or files deleted
- New features, components, or hooks created
- New pages or routes added
- Tech stack or dependency changes
- Data structure or architecture changes
- Any change to the directory tree

The sketch is the living source of truth for the project state.

## Project Overview

- **Name:** DevAutobot
- **Purpose:** AI-powered digital services agency website
- **Stack:** Next.js (App Router) · React 19 · Tailwind CSS v4 · Framer Motion 12 · Lucide React
- **Language:** JavaScript only — `.js` and `.jsx`

## Services

1. Website Development (`/services/website-dev`)
2. Voice AI Calling Agents (`/services/voice-ai`)
3. AI Avatars (`/services/ai-avatars`)
4. AI Automation (`/services/ai-automation`)

## File Extension Rules

| File Type            | Extension       |
|----------------------|-----------------|
| React components     | `.jsx`          |
| Pages (App Router)   | `.jsx`          |
| Utilities / lib      | `.js`           |
| Data files           | `.js`           |
| Config files         | `.mjs` or `.js` |

## Import Aliases

Use `@/*` for absolute imports from `src/`:

```js
import Navbar from '@/components/layout/Navbar'
import { cn } from '@/lib/utils'
import heroData from '@/data/hero/website-dev-hero'
```

## Responsiveness is Mandatory

Every component and page MUST be fully responsive across all breakpoints:

- **Mobile** (`sm:`): stack vertically, full-width elements, touch-friendly tap targets
- **Tablet** (`md:`): adapted grid/flex layouts, scaled typography
- **Desktop** (`lg:` / `xl:`): full layout with max-width containers

Rules:
- Always write mobile-first styles, then use `sm:`, `md:`, `lg:`, `xl:` to adapt up
- Use grid or flex layouts that gracefully reflow across screen sizes
- Never leave a component without explicit mobile and tablet styling
- Vertical dividers / decorative elements that don't fit mobile must be `hidden sm:block` (or similar)

## Code Guidelines

- Tailwind CSS v4 for all styling — no CSS modules, no inline styles
- Framer Motion for all animations and transitions
- `next/image` for every image
- `next/link` for all internal navigation
- No TypeScript — not even in comments or JSDoc generics
- No `any`, no type assertions, no `: Type` annotations
