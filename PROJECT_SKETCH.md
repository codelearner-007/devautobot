# Devmanar Relaunch - Project Sketch & Implementation Plan

This document outlines a step-by-step plan to create a similar AI-powered digital services agency website based on the Devmanar-relaunch project structure.

## Phase 1: Project Setup & Foundation

### Step 1: Initialize Next.js Project
```bash
# Create new Next.js 14 project with TypeScript
npx create-next-app@latest my-agency-site --ts
cd my-agency-site

# Install required dependencies
npm install framer-motion lucide-react tailwindcss postcss autoprefixer clsx tailwind-merge
npm install -D @types/node @types/react @types/react-dom

# Initialize Tailwind CSS
npx tailwindcss init -p
```

### Step 2: Configure Project Structure
Create the following directory structure:
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          # Home page
│   ├── globals.css
│   └── services/         # Service pages
│       ├── service1/
│       ├── service2/
│       └── service3/
├── components/
│   ├── home/             # Home page components
│   ├── layout/           # Navbar, Footer
│   ├── services/         # Service-specific components
│   │   ├── common/       # Shared service components
│   │   └── [service-name]/ # Service-specific components
│   └── ui/               # Reusable UI components
├── data/                 # All content data (organized by type)
│   ├── hero/
│   ├── features/
│   ├── process/
│   ├── projects/
│   ├── pricing/
│   ├── use-cases/
│   └── demo/
├── lib/                  # Utility functions & shared logic
│   ├── animations.ts
│   ├── site.ts
│   ├── types.ts
│   └── utils.ts
└── styles/               # Additional styling if needed
```

### Step 3: Configure Tailwind CSS
Update `tailwind.config.ts` with:
- Custom colors matching the design system
- Custom animations (marquee, float, beam, etc.)
- Custom box shadows (glow effects)
- Font family configuration
- Dark mode support

### Step 4: Set Up Global Styles
Create `src/app/globals.css` with:
- CSS variables for light/dark modes
- Global component classes (.glass-card, .btn-primary, etc.)
- Base typography and reset styles
- Animation keyframes

## Phase 2: Design System Implementation

### Step 5: Implement Design Tokens
Define in CSS variables:
- Colors: Primary (cyan), service-specific accents
- Typography: Syne (headings), DM Sans (body)
- Spacing: Consistent 4px grid system
- Border radius: Consistent values
- Shadows: Glow effects for primary colors

### Step 6: Create Reusable Component Classes
Implement in globals.css:
- `.gradient-text` for animated text gradients
- `.glass-card` for frosted glass effect
- `.btn-primary` and `.btn-secondary` for consistent buttons
- `.section-label` and `.section-heading` for consistent section headers
- `.animated-border` for rotating border effects
- `.shimmer-btn` for hover effects

## Phase 3: Core Component Development

### Step 7: Build Layout Components
Create:
- `Navbar.tsx`: Sticky navigation with mobile menu
- `Footer.tsx`: Comprehensive footer with links and social icons
- `Container.tsx`: Responsive container with size variants (sm, md, lg, xl, full)

### Step 8: Build UI Components
Create:
- `TiltCard.tsx`: 3D tilt effect component using Framer Motion
- `AnimatedSection.tsx`: Scroll-triggered animation wrapper
- `ThemeToggle.tsx`: Dark/light mode switcher

### Step 9: Build Shared Service Components
Create in `src/components/services/common/`:
- `ServiceHero.tsx`: Generic hero section with consistent structure
- `ServiceFeatures.tsx`: Feature grid with color-rotating cards
- `ServiceProcess.tsx`: Vertical timeline/process visualization
- `ServiceProjects.tsx`: Carousel/project showcase component
- `ServiceUseCases.tsx`: Industry use cases section
- `ServicePricing.tsx`: Tiered pricing cards
- `ServiceCTA.tsx`: Call-to-action section

## Phase 4: Content Organization

### Step 10: Structure Content Data
Organize data in `src/data/` by type:
```
src/data/
  hero/
    service1-hero.ts
    service2-hero.ts
  features/
    service1-features.ts
    service2-features.ts
  process/
    service1-process.ts
    service2-process.ts
  projects/
    service1-projects.ts
    service2-projects.ts
  pricing/
    service1-pricing.ts
    service2-pricing.ts
  use-cases/
    service1-use-cases.ts
    service2-use-cases.ts
  demo/
    service1-demo.ts
```

Each file exports typed data matching the component interfaces.

### Step 11: Define TypeScript Types
Create `src/lib/types.ts` with interfaces for:
- Hero data
- Feature items
- Process steps
- Project items
- Pricing tiers
- Use cases
- Demo widgets

## Phase 5: Service Page Implementation

### Step 12: Implement Service Pages
For each service (e.g., Website Development, Voice AI, AI Avatars, AI Automation):
1. Create service folder in `src/app/services/`
2. Create page.tsx with metadata export
3. Import and assemble service-specific components:
   - ServiceHero (with service-specific data)
   - ServiceFeatures (with service-specific features)
   - ServiceProcess (with service-specific process steps)
   - ServiceProjects (with service-specific projects)
   - ServiceUseCases (with service-specific use cases)
   - ServicePricing (with service-specific pricing)
   - ServiceCTA (with service-specific CTA)

### Step 13: Create Service-Specific Components
For each service, create components in `src/components/services/[service-name]/`:
- `[Service]Hero.tsx`: Extends ServiceHero with service-specific visual
- `[Service]Features.tsx`: Uses ServiceFeatures with service data
- `[Service]Process.tsx`: Uses ServiceProcess with service data
- `[Service]Projects.tsx`: Uses ServiceProjects with service data
- `[Service]UseCases.tsx`: Uses ServiceUseCases with service data
- `[Service]Pricing.tsx`: Uses ServicePricing with service data
- `[Service]CTA.tsx`: Uses ServiceCTA with service data

### Step 14: Implement Home Page
Create `src/app/page.tsx` with:
- Hero section (from components/home/Hero.tsx)
- Services grid overview
- Stats section
- Process timeline
- Featured services section
- Social proof/testimonials
- CTA banner

## Phase 6: Animation & Interactivity

### Step 15: Configure Animations
Create `src/lib/animations.ts` with Framer Motion presets:
- fadeUp, fadeIn, fadeLeft, fadeRight
- scaleIn, staggerContainer, staggerItem
- slideUp for entrance animations

### Step 16: Implement Lazy Loading
Use `next/dynamic` for heavy components:
- TiltCard (mouse event listeners)
- Carousel/orbital sections
- Complex Framer Motion sequences
- Components requiring browser context

### Step 17: Optimize Images
Use `next/image` for all images:
- Add `priority` prop to hero/above-the-fold images
- Use appropriate widths/heights for layout stability
- Implement responsive fill layouts where needed

## Phase 7: SEO & Performance

### Step 18: Implement Metadata
Add metadata exports to all page.tsx files:
- Title and description for SEO
- Open Graph tags for social sharing
- Twitter card data if needed

### Step 19: Implement Loading & Error States
Create:
- `src/app/loading.tsx`: Global loading spinner
- `src/app/error.tsx`: Global error boundary
- Service-specific loading states if needed

### Step 20: Performance Optimization
- Ensure hero components use `motion` (not `m`) for immediate load
- Use `m` + `LazyMotion` for below-fold sections
- Implement proper code splitting with dynamic imports
- Optimize bundle size by avoiding unnecessary client components

## Phase 8: Content Customization

### Step 21: Configure Brand Information
Create `src/lib/site.ts` with:
- Agency name
- Contact information
- Social media links
- Brand description

### Step 22: Implement Content Customization Guide
Document how to:
- Update agency name throughout the site
- Modify contact information in Footer.tsx
- Update sample projects in data/projects/
- Adjust pricing tiers in service-specific pricing files
- Connect contact form to real API endpoint

## Phase 9: Testing & Deployment

### Step 23: Test Responsiveness
Verify all pages work correctly at:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

### Step 24: Test Dark/Light Mode
Ensure proper switching between modes with correct color variables.

### Step 25: Prepare for Deployment
Choose deployment method:
- Vercel (recommended): `npm install -g vercel && vercel`
- Manual build: `npm run build && npm start`

### Step 26: Final Checks
- Validate all links work correctly
- Check form functionality
- Verify meta tags and SEO elements
- Test performance with Lighthouse or similar tools

## Implementation Order Summary

1. Project setup and configuration
2. Design system (globals.css, tailwind.config)
3. Layout and UI components
4. Shared service components
5. Content data structure and types
6. Home page implementation
7. Service page templates and components
8. Animation and interactivity
9. SEO, performance, and optimization
10. Content customization and deployment

This plan follows the exact structure and conventions observed in the Devmanar-relaunch project, ensuring consistency and maintainability while providing a solid foundation for an AI-powered digital services agency website.