# DevAutobot — Brand Theme Reference

> Use this file when creating social media posts, banners, ads, or any branded content.

---

## Brand Name & Logo

- **Name:** DevAutobot
- **Logo file:** `/public/logo.png`
- **Wordmark gradient:** `from-[#4a5262] via-[#9ca3af] to-[#22d3ee]`
  Dark slate → neutral gray → bright cyan

---

## Color Palette

### Dark Mode (Primary / Default)

| Role | HSL | Approx Hex | Use |
|---|---|---|---|
| Background | `hsl(200 28% 5%)` | `#080f14` | Page / post background |
| Card Surface | `hsl(200 25% 8%)` | `#0d1a21` | Card backgrounds |
| Secondary Surface | `hsl(200 22% 13%)` | `#162029` | Subtle sections |
| **Primary Cyan** | `hsl(188 85% 48%)` | `#0cd4e6` | Main accent, CTAs, highlights |
| **Primary Light** | `hsl(188 80% 65%)` | `#4de3f2` | Gradient end, lighter accent |
| Foreground (Text) | `hsl(195 15% 93%)` | `#e5ecee` | Body text |
| Muted Text | `hsl(195 12% 52%)` | `#7a9099` | Secondary text |
| Border | `hsl(200 22% 15%)` | `#1a2830` | Subtle dividers |

### Light Mode (Secondary)

| Role | HSL | Use |
|---|---|---|
| Background | `hsl(192 20% 99%)` | Near white |
| Primary Cyan | `hsl(188 90% 30%)` | Darker teal |
| Primary Light | `hsl(188 85% 50%)` | Brighter teal |
| Foreground | `hsl(200 30% 8%)` | Dark navy text |

---

## Typography

### Font Families
| Role | Font | Weights | Google Fonts |
|---|---|---|---|
| **Headings** | Syne | 700, 800 | `family=Syne:wght@700;800` |
| **Body** | DM Sans | 300, 400, 500, 600 | `family=DM+Sans` |

### Type Scale
| Element | Size | Weight | Notes |
|---|---|---|---|
| Hero / Main title | 48–64px | Syne 800 | letter-spacing: -0.03em |
| Section heading | 36–48px | Syne 800 | letter-spacing: -0.03em |
| Card title | 18–20px | Syne 700 | |
| Body copy | 14–16px | DM Sans 400–500 | |
| Label / Tag | 11px | Syne 700 | UPPERCASE, letter-spacing: 0.12em |
| Badge | 11px | DM Sans 600 | |

---

## Gradients

| Name | CSS | Use |
|---|---|---|
| **Gradient text** | `linear-gradient(135deg, hsl(188 85% 48%), hsl(188 80% 65%))` | Highlighted words in headings |
| **Brand wordmark** | `linear-gradient(to right, #4a5262, #9ca3af, #22d3ee)` | Logo text |
| **Primary button** | `linear-gradient(135deg, hsl(188 85% 48%), hsl(188 70% 38%))` | CTA buttons |
| **Glow line** | `linear-gradient(90deg, transparent, hsl(188 85% 48% / 0.4), transparent)` | Section dividers |
| **Animated border** | `conic-gradient(transparent, primary, primary-light, transparent)` | Card hover borders |

---

## Component Specs

### Glass Card
```
Background:     foreground at 3% opacity
Backdrop blur:  8px
Border:         1px, foreground at 6% opacity
Border radius:  1rem (16px)
Shadow:         0 4px 24px (subtle depth)
Hover:          border → cyan 30%, shadow → cyan glow, lift 2px
```

### Primary Button
```
Background:     cyan gradient 135°
Text:           white, Syne 700, 14px
Padding:        12px 28px
Border radius:  0.75rem (12px)
Shadow:         cyan glow (30% opacity)
Hover:          stronger glow, lift 2px + shimmer sweep
```

### Section Label (pill tag)
```
Background:     cyan at 8% opacity
Border:         1px cyan at 22% opacity
Text:           cyan color, Syne 700, 11px, UPPERCASE
Padding:        6px 16px
Shape:          pill (border-radius: 9999px)
```

### Badge
```
Background:     cyan at 8% opacity
Border:         1px cyan at 18% opacity
Text:           cyan, DM Sans 600, 11px
Shape:          pill
```

---

## Background Textures

| Name | Description |
|---|---|
| **Grid** | 44×44px SVG grid, white stroke at 4% opacity (dark) |
| **Dots** | 28×28px dot pattern, foreground at 8% opacity |
| **Glow blob** | Large radial gradient circle, cyan at 6–10% opacity, blur-3xl |

---

## Animations

| Effect | Spec |
|---|---|
| Entrance (fade up) | opacity 0→1, y 20px→0, duration 0.6s, ease [0.22,1,0.36,1] |
| Scroll trigger | whileInView, once:true, margin -80px |
| Float/bob | y: [0, -8, 0], 4s, infinite easeInOut |
| Marquee | translateX(0 → -50%), 30s linear infinite, pauses on hover |
| Shimmer | diagonal white sweep on hover (0.6s) |
| Animated border | conic gradient rotates 360° in 4s on hover |

---

## Social Media Post Recipe

### Structure (Dark Theme)
1. **Background:** `hsl(200 28% 5%)` + subtle grid or dot texture at 4%
2. **Accent glow:** Large blurred cyan circle (10% opacity) top-right or bottom-left
3. **Tag/label:** Pill badge — cyan border + cyan tinted background
4. **Headline:** Syne 800, near-white, with 1–2 gradient-text words in cyan
5. **Body:** DM Sans 400–500, muted text color
6. **Divider:** Glow line (horizontal gradient)
7. **Logo:** `/public/logo.png` + "DevAutobot" wordmark gradient
8. **Border:** Glass card style or animated-border style

### Quick Color Swatches (Copy-paste)
```
Dark BG:       #080f14
Card BG:       #0d1a21
Cyan Primary:  #0cd4e6
Cyan Light:    #4de3f2
Text:          #e5ecee
Muted:         #7a9099
Border:        #1a2830
Slate (brand): #4a5262
Gray (brand):  #9ca3af
```

### Platform-specific Notes
- **Instagram / LinkedIn cards:** 1080×1080px or 1200×628px
- Use dark background — the brand is dark-first
- Cyan accents on headlines always stand out
- Keep it minimal — fewer elements, more white space around content
- Syne font for any bold headline
