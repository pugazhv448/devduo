# ╔══════════════════════════════════════════════════╗
# ║         DEVDUO — COMPLETE MASTER PROMPT          ║
# ║    Antigravity / AI Coding Tool Ready Format     ║
# ╚══════════════════════════════════════════════════╝

---

## 🏷️ PROJECT OVERVIEW

Build a **premium, dark-themed agency website** for **Devduo** — a Chennai-based web design duo.
The site must be fully production-ready, component-based, SEO-friendly, and visually stunning.

| Field            | Value                                         |
|------------------|-----------------------------------------------|
| Brand Name       | Devduo                                        |
| Tagline          | Crafted for Growth                            |
| Location         | Chennai, India                                |
| Target Clients   | Local businesses (gyms, shops, agencies etc.) |
| Style            | Premium · Minimal · Futuristic · Dark         |
| WhatsApp         | https://wa.me/917894561230                    |
| Email            | hello@devduo.in                               |

---

## 🎨 COLOR PALETTE

```css
--primary:  #0D2440   /* Main background */
--card:     #2E5E99   /* Card, surface backgrounds */
--accent:   #7BA4D0   /* Highlights, buttons, glows */
--light:    #E7F0FA   /* Text, icons, light surfaces */
```

---

## ⚙️ TECH STACK

```
Framework:     Next.js 14 (App Router)
Language:      TypeScript
Styling:       Tailwind CSS
Animations:    Framer Motion + GSAP + ScrollTrigger
3D:            React Three Fiber + @react-three/drei + Three.js
Smooth Scroll: @studio-freight/lenis
Fonts:         Syne (700/800 headings) + DM Sans (body) via Google Fonts
```

---

## 📦 DEPENDENCIES

```json
{
  "dependencies": {
    "next": "14.2.3",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "@react-three/fiber": "^8.16.8",
    "@react-three/drei": "^9.105.6",
    "three": "^0.164.1",
    "framer-motion": "^11.1.9",
    "gsap": "^3.12.5",
    "@studio-freight/lenis": "^1.0.45",
    "clsx": "^2.1.1"
  },
  "devDependencies": {
    "typescript": "^5.4.5",
    "@types/node": "^20.12.12",
    "@types/react": "^18.3.2",
    "@types/react-dom": "^18.3.0",
    "@types/three": "^0.164.0",
    "tailwindcss": "^3.4.3",
    "postcss": "^8.4.38",
    "autoprefixer": "^10.4.19"
  }
}
```

---

## 📁 FOLDER STRUCTURE

```
devduo/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── SmoothScrollProvider.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   ├── 3d/
│   │   ├── HeroScene.tsx
│   │   └── GridScene.tsx
│   └── ui/
│       ├── Preloader.tsx
│       ├── CustomCursor.tsx
│       ├── NoiseOverlay.tsx
│       └── WhatsAppFloat.tsx
├── styles/
│   └── globals.css
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 🎨 GLOBAL CSS (styles/globals.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #0D2440;
  --card: #2E5E99;
  --accent: #7BA4D0;
  --light: #E7F0FA;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: auto; }

body {
  background: var(--primary);
  color: var(--light);
  font-family: 'DM Sans', sans-serif;
  overflow-x: hidden;
  cursor: none;
}

/* ─── Custom Cursor ─── */
.cursor-dot {
  width: 8px; height: 8px; background: var(--accent);
  border-radius: 50%; position: fixed; top: 0; left: 0;
  pointer-events: none; z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
}
.cursor-ring {
  width: 40px; height: 40px;
  border: 1.5px solid rgba(123,164,208,0.5);
  border-radius: 50%; position: fixed; top: 0; left: 0;
  pointer-events: none; z-index: 9998;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s, border-color 0.3s;
}
.cursor-ring.hover {
  width: 60px; height: 60px;
  border-color: var(--accent);
  background: rgba(123,164,208,0.05);
}
@media (pointer: coarse) { .cursor-dot, .cursor-ring { display: none; } }

/* ─── Glassmorphism ─── */
.glass {
  background: rgba(46,94,153,0.12);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(123,164,208,0.15);
}
.glass-strong {
  background: rgba(46,94,153,0.25);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(123,164,208,0.25);
}

/* ─── Noise Grain Overlay ─── */
.noise-overlay {
  position: fixed; inset: 0; pointer-events: none;
  z-index: 9997; opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 200px 200px;
}

/* ─── Scrollbar ─── */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--primary); }
::-webkit-scrollbar-thumb { background: var(--card); border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent); }

/* ─── Typography ─── */
.heading-xl {
  font-family: 'Syne', sans-serif;
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 800; line-height: 0.95; letter-spacing: -0.03em;
}
.heading-lg {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2rem, 5vw, 4.5rem);
  font-weight: 700; line-height: 1; letter-spacing: -0.02em;
}
.heading-md {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.4rem, 3vw, 2.5rem);
  font-weight: 600; line-height: 1.1;
}

/* ─── Gradients ─── */
.text-gradient {
  background: linear-gradient(135deg, #E7F0FA 0%, #7BA4D0 50%, #2E5E99 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.text-gradient-accent {
  background: linear-gradient(135deg, #7BA4D0 0%, #E7F0FA 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}

/* ─── Tag Pill ─── */
.tag-pill {
  display: inline-flex; align-items: center;
  padding: 0.35rem 1rem; border-radius: 100px;
  font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.1em; text-transform: uppercase;
  background: rgba(123,164,208,0.1);
  border: 1px solid rgba(123,164,208,0.25);
  color: var(--accent);
}

/* ─── Form Inputs ─── */
.form-input {
  background: rgba(46,94,153,0.1);
  border: 1px solid rgba(123,164,208,0.2);
  border-radius: 12px; padding: 1rem 1.25rem;
  color: var(--light); font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem; width: 100%;
  transition: border-color 0.3s, box-shadow 0.3s; outline: none;
}
.form-input::placeholder { color: rgba(231,240,250,0.35); }
.form-input:focus {
  border-color: rgba(123,164,208,0.6);
  box-shadow: 0 0 0 3px rgba(123,164,208,0.1);
}

/* ─── WhatsApp Float ─── */
.whatsapp-float {
  position: fixed; bottom: 2rem; right: 2rem; z-index: 1000;
  width: 56px; height: 56px; background: #25D366;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 20px rgba(37,211,102,0.4);
  transition: transform 0.3s, box-shadow 0.3s;
}
.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 30px rgba(37,211,102,0.6);
}

/* ─── Preloader ─── */
.preloader {
  position: fixed; inset: 0; background: var(--primary);
  z-index: 10000; display: flex; align-items: center;
  justify-content: center; flex-direction: column; gap: 2rem;
}

/* ─── Glow Border ─── */
.glow-border { position: relative; }
.glow-border::after {
  content: ''; position: absolute; inset: -1px;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(123,164,208,0.5), transparent, rgba(123,164,208,0.5));
  z-index: -1; opacity: 0; transition: opacity 0.4s;
}
.glow-border:hover::after { opacity: 1; }

/* ─── Sections ─── */
.section-pad { padding: 6rem 0; }
@media (max-width: 768px) { .section-pad { padding: 4rem 0; } }
```

---

## 🗂️ SECTION-BY-SECTION SPECIFICATIONS

---

### 1. `app/layout.tsx`

```tsx
import type { Metadata } from 'next'
import '../styles/globals.css'
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import NoiseOverlay from '@/components/ui/NoiseOverlay'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Devduo — Crafted for Growth',
  description: 'Devduo builds premium websites for local businesses in Chennai. Modern, fast, conversion-focused web design.',
  keywords: 'web design Chennai, website development, local business website, Devduo, gym website Chennai, landing page',
  openGraph: {
    title: 'Devduo — Crafted for Growth',
    description: 'Premium websites for local businesses.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Syne + DM Sans */}
      </head>
      <body>
        <NoiseOverlay />
        <CustomCursor />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <WhatsAppFloat />
      </body>
    </html>
  )
}
```

---

### 2. `app/page.tsx`

```tsx
'use client'
// useState: loaded = false
// useEffect: setTimeout(() => setLoaded(true), 2400)
// Render: <Preloader isLoaded={loaded} />
// When loaded: Navbar + HeroSection + AboutSection + ServicesSection
//              + PortfolioSection + TestimonialsSection + ContactSection + Footer
// Section order matters — do NOT change it
```

---

### 3. `SmoothScrollProvider.tsx`

```tsx
'use client'
import Lenis from '@studio-freight/lenis'

// Inside useEffect:
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 2,
})

// rAF loop: lenis.raf(time) → requestAnimationFrame(raf)
// Expose: (window as any).lenis = lenis
// Cleanup: lenis.destroy()
```

---

### 4. `Navbar.tsx`

**Behavior:**
- Fixed top, full width, z-50
- Padding: `px-6 py-4`
- Inner container: `max-w-7xl mx-auto`, `rounded-2xl px-6 py-3`
- On scroll > 40px → `glass-strong + shadow-lg`, else `glass`
- Framer Motion entrance: `y: -80 → 0, opacity 0 → 1` on mount

**Logo:**
```
[D] Devduo    ← small box with "D" + brand name in Syne font
```

**Nav Links (desktop):**
- Home | About | Services | Portfolio | Testimonials | Contact
- Hover: underline slide in from left + color accent
- Click: `window.lenis.scrollTo(el, { offset: -80 })`

**CTA Button:** "Get Started →" → scrolls to #contact
- Style: `border border-accent/30 text-accent hover:bg-accent hover:text-primary`

**Mobile:** hamburger (3 lines → X with framer motion), overlay menu slides down

---

### 5. `Preloader.tsx`

```
┌─────────────────────────────────┐
│                                 │
│         ┌───────────┐           │
│         │     D     │  ← spinning border ring around box
│         └───────────┘           │
│                                 │
│           Devduo                │
│       Crafted for Growth        │
│                                 │
│   ════════════════════          │  ← progress bar animates left→right
│                                 │
└─────────────────────────────────┘
```

- Full screen, z-10000, bg: var(--primary)
- D box: `w-20 h-20 rounded-2xl bg-accent/10 border border-accent/30`
- Spinning ring: `animate rotate-360 duration-2s infinite` around the box
- Progress bar: `motion.div x:-100% → 0%` over 2s, gradient accent
- `AnimatePresence` exit: `opacity: 0` over 0.6s
- Prop: `isLoaded: boolean`

---

### 6. `CustomCursor.tsx`

```tsx
// Two elements: .cursor-dot + .cursor-ring
// cursor-dot: follows mouse instantly via style.left/top
// cursor-ring: lerp(0.12) in rAF for smooth lag
// mouseover button/a → ring.classList.add('hover')  → 60px + glow
// mouseleave → ring.classList.remove('hover') → 40px
// Hidden on touch devices via CSS media query
```

---

### 7. `WhatsAppFloat.tsx`

```tsx
// href: "https://wa.me/917894561230?text=Hi%20Devduo%2C%20I%27m%20interested%20in%20a%20website"
// position: fixed bottom-8 right-8 z-1000
// WhatsApp SVG icon (white) in green circle
// Framer Motion: scale 0→1 on mount (delay 3s, spring stiffness 200)
// Hover: scale 1.1, stronger shadow
```

---

## 🏠 HERO SECTION (`HeroSection.tsx`)

---

### Hero 1 — Fullscreen 3D Landing

```
Layout: min-h-screen, flex center, overflow-hidden, relative

Background layers (z-index order):
  [0] <HeroScene /> — absolute inset, Three.js canvas
  [1] gradient overlay — from-primary/60 via-primary/30 to-primary/80
  [2] bottom fade — h-40 from-primary to-transparent

Content (z-20, text-center, max-w-6xl):
  ↓ tag-pill: "🚀 Premium Web Design Agency"
  ↓ h1.heading-xl.text-gradient: "Devduo"
  ↓ p.text-xl: "Crafted for Growth" (accent color, light weight)
  ↓ p.text-light/50: "We build premium websites that convert visitors into
      loyal customers — for local businesses across Chennai."
  ↓ Two CTA buttons:
      [View Work →]    — solid accent bg, hover glow + scale
      [Contact Us]     — glass border, hover accent bg

Bottom: scroll indicator (animated line + "Scroll" text)

Framer Motion stagger:
  tag-pill: delay 0.2s
  h1: delay 0.4s
  subtitle: delay 0.6s
  body: delay 0.75s
  buttons: delay 0.95s
```

---

### Hero 2 — Services Preview

```
Layout: py-32, px-6, relative
Background: centered glow blob (w-600px, bg-accent/5, blur-120px)

Header:
  tag-pill: "What We Build"
  heading-lg: "Services Built for / Real Results"

4 Service Cards (GSAP stagger on scroll):
  Initial: y:80, opacity:0, rotateY:-15
  Final: y:0, opacity:1, rotateY:0
  Stagger: 0.15s, ease: power3.out

Card design (glass, rounded-2xl, p-6):
  ┌──────────────────────────┐
  │ [icon box]               │
  │ Title                    │
  │ Description text         │
  │ Learn more → (on hover)  │
  └──────────────────────────┘

Cards content:
  ⬡  Business Websites   — High-converting sites for local businesses
  ◈  Gym & Fitness        — Booking, schedules, membership pages
  ◇  Landing Pages        — Turn clicks into paying clients
  ◉  Agency & Portfolio   — Premium brand identities online
```

---

### Hero 3 — 3D Grid + Stats

```
Layout: py-32, min-h-80vh, relative overflow-hidden

Background: <GridScene /> absolute, opacity-40 + gradient overlay

Left column (GSAP panel-item reveals):
  tag-pill: "Our Approach"
  heading-lg: "Built to Perform. / Designed to Impress."
  body text: "Every pixel, every animation, every line of code
    is crafted with purpose. We don't just build websites —
    we engineer growth tools for local businesses."
  button: "About Us →" (glass border)

Right column — 4 stat boxes (2x2 grid):
  ┌──────────┐  ┌──────────┐
  │ 50+      │  │ 98%      │
  │ Projects │  │ Satisfied│
  └──────────┘  └──────────┘
  ┌──────────┐  ┌──────────┐
  │ 3x       │  │ 7d       │
  │ Traffic  │  │ Delivery │
  └──────────┘  └──────────┘
```

---

## 🏢 ABOUT SECTION (`AboutSection.tsx`)

---

```
Section ID: #about
Background: glow blobs (top-right + bottom-left)

Row 1: Header
  tag-pill + decorative line: "About Devduo ────────────────"

Row 2: Two columns

LEFT:
  heading-lg: "Two minds. / One vision."
  
  Para 1: "Devduo is a Chennai-based web design duo obsessed with one
    thing — making local businesses thrive online. We combine design
    thinking with technical precision to create websites that don't
    just look good. They work hard."

  Para 2: "From gyms to boutiques, from restaurants to agencies —
    we've built digital homes for businesses across Chennai and beyond,
    each one crafted with purpose, precision, and care."

  2×2 skill grid (glass cards, hover accent border):
    ┌──────────────────┐  ┌──────────────────┐
    │ UI/UX Design     │  │ Web Development  │
    │ Beautiful inter  │  │ Fast modern code │
    └──────────────────┘  └──────────────────┘
    ┌──────────────────┐  ┌──────────────────┐
    │ SEO Optimization │  │ Brand Identity   │
    │ Rank higher      │  │ Stand out online │
    └──────────────────┘  └──────────────────┘

RIGHT: Visual card
  glass-strong rounded-3xl, h-420px, relative

  Inside card:
    - 2 animated blobs (framer motion float)
    - D logo icon (w-16 rounded-2xl)
    - "Devduo" + "Chennai, India"
    - 3 tag pills: [Design] [Dev] [SEO]
    - 4 animated bars (scroll triggered, widths: 80%, 60%, 90%, 70%)

  Floating badges (outside card, animated):
    top-right: "50+ / Projects"
    bottom-left: "7d / Avg Delivery"

Row 3: Stats bar (4 glassmorphism cards)
```

**CountUp Component:**
```tsx
// Counts from 0 → target when element enters viewport
// useInView({ once: true }) to trigger
// setInterval with step = duration/target
// Displays: {count}{suffix}
```

**Stats Data:**
```
◈  50+   Projects Completed    "Websites delivered across industries"
◉  40+   Happy Clients         "Businesses we've helped grow"
⬡   7d   Fast Delivery         "Average project turnaround"
◇   3x   Traffic Growth        "Average client traffic increase"
```

---

## 🛠️ SERVICES SECTION (`ServicesSection.tsx`)

---

```
Section ID: #services
Background: subtle glow center

Header:
  tag-pill: "What We Offer"
  heading-lg: "Everything Your Business / Needs Online"
  subtext: "From concept to launch in days — not months."

Grid: 3 columns (lg), 2 columns (md), 1 column (sm)
GSAP stagger: y:60 → y:0, stagger 0.1s, scroll triggered

6 Service Cards (glass, rounded-2xl, glow-border):
```

**Service Card Structure:**
```
┌─────────────────────────────────┐
│ [icon box]                      │
│                                 │
│ Service Title                   │
│ Description (2 lines)           │
│                                 │
│ [tag] [tag] [tag] [tag]         │  ← feature pills
│                                 │
│ Starting from ₹XXXX ↗           │  ← on hover
└─────────────────────────────────┘
```

**6 Services with Pricing:**

```
1. 🌐 Business Website
   "Professional, high-converting websites designed to represent
    your brand and attract customers in Chennai."
   Features: Responsive Design | SEO Optimized | Fast Loading | Contact Forms
   Price: Starting ₹4,999

2. 💪 Gym & Fitness Website
   "Dynamic fitness sites with class schedules, membership info,
    and trainer profiles that drive sign-ups."
   Features: Class Schedules | Booking Integration | Trainer Profiles | Gallery
   Price: Starting ₹5,999
   [Inspired by: 24x7-fitness-studio.vercel.app — 4 branches, real gym client]

3. 🚀 Landing Page
   "Laser-focused single pages built to convert ad traffic
    into real leads and paying customers fast."
   Features: A/B Ready | Lead Capture | Ultra Fast | Analytics Ready
   Price: Starting ₹2,999

4. 🎨 Portfolio Website
   "Stunning portfolio sites for photographers, designers,
    and freelancers to showcase their best work."
   Features: Gallery Grid | Smooth Animations | Case Studies | Contact Form
   Price: Starting ₹3,999

5. ✦ Agency Website
   "Bold agency sites that communicate credibility,
    showcase services, and generate qualified business leads."
   Features: Team Section | Services Page | Case Studies | Blog Ready
   Price: Starting ₹6,999

6. ⚖️ Professional/Lawyer Website
   "Clean, trustworthy websites for advocates, consultants,
    and professionals that build credibility and client inquiries."
   Features: Services Listed | FAQ Section | Testimonials | Booking Form
   Price: Starting ₹3,999
   [Inspired by: anujranjanwebsite.vercel.app — lawyer portfolio client]
```

---

## 🖼️ PORTFOLIO SECTION (`PortfolioSection.tsx`)

---

```
Section ID: #portfolio
Header:
  tag-pill: "Our Work"
  heading-lg: "Projects That / Speak for Themselves"
  subtext: "Real websites, real clients, real results."
```

**Filter Tabs:**
```
[All] [Business] [Gym] [Portfolio] [Agency] [Landing Page]
Active: accent bg + text-primary
Inactive: glass border
Filter logic: useState activeFilter + useMemo filtered array
```

**Grid:** 3-col (lg), 2-col (md), 1-col (sm)
**Stagger animation:** Framer Motion, delay 0.08s per card

**Project Card:**
```
┌────────────────────────────────┐
│                                │  ← aspect-ratio: 4/3
│        [project image]         │  ← bg gradient placeholder
│                                │
│  [Category Tag]  top-left      │
│                                │
│ ════════════ hover overlay ═══ │
│  Project Title          ↗      │
│  Short description             │
│  [tag] [tag]                   │
└────────────────────────────────┘

Hover effects:
  - image scale 1.05
  - overlay slides up (y:100% → y:0)
  - 3D tilt via mouse position (rotateX/Y ±10deg, Framer Motion)
  - glow border appears

Click: opens full modal
```

**Modal:**
```
AnimatePresence — scale 0.9 + opacity 0 → 1
Full screen overlay (backdrop blur-xl, bg-primary/90)

Layout:
  Large image (60% width)
  Right panel:
    Category tag
    Project title (heading-md)
    Client name + location
    Description (3-4 lines)
    Tech used: [Next.js] [Tailwind] [GSAP] etc.
    Two buttons:
      [🌐 Visit Site →]  — accent
      [💬 WhatsApp Us →] — green
  Close button: top-right ×
```

---

### 📂 PORTFOLIO DUMMY DATA (8 projects)

Inspired by real reference sites. Use gradient placeholder images with color schemes matching each niche.

```ts
export const projects = [
  {
    id: 1,
    title: "IronEdge Gym",
    category: "Gym",
    client: "IronEdge Fitness",
    location: "OMR, Chennai",
    description: "A high-energy gym website built for IronEdge Fitness — featuring class schedules, trainer profiles, 4-branch location pages, membership inquiry forms, and a mobile-first dark design.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    image_gradient: "from-red-900/60 via-orange-900/40 to-gray-900",
    icon: "💪",
    url: "https://24x7-fitness-studio.vercel.app",
    // INSPIRATION: 24x7 Fitness Studio (your own project)
    // Key features: 4 branches, 24/7 access, Google rating counter, membership CTA
  },
  {
    id: 2,
    title: "Advocate Anuj Ranjan",
    category: "Business",
    client: "Advocate Anuj Ranjan",
    location: "Delhi",
    description: "A professional legal portfolio for a Delhi High Court advocate. Features practice areas, client testimonials, FAQ accordion, free consultation form, and a clean trustworthy layout.",
    tech: ["Astro", "Tailwind CSS", "AOS Animations"],
    image_gradient: "from-slate-800/80 via-blue-900/40 to-gray-900",
    icon: "⚖️",
    url: "https://anujranjanwebsite.vercel.app",
    // INSPIRATION: anujranjanwebsite.vercel.app
    // Key features: 7+ years experience, 3 courts, pro bono work, 6 service cards
  },
  {
    id: 3,
    title: "Eternix Symposium",
    category: "Agency",
    client: "Sri Sairam Engineering College",
    location: "Chennai",
    description: "A dark-themed event symposium website for Eternix'25 — EIE Department. Countdown timer, events grid, schedule page, team section, and animated particle background.",
    tech: ["WordPress", "Custom CSS", "JavaScript"],
    image_gradient: "from-purple-900/60 via-blue-900/40 to-gray-900",
    icon: "⚡",
    url: "https://eternix.in",
    // INSPIRATION: eternix.in
    // Key features: countdown timer, events page, dark futuristic, EIE dept
  },
  {
    id: 4,
    title: "Zen Wellness Studio",
    category: "Business",
    client: "Zen Wellness",
    location: "T. Nagar, Chennai",
    description: "A serene wellness studio website featuring service listings, appointment booking, therapist profiles, a calming color palette, and Google Maps integration for easy client navigation.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image_gradient: "from-teal-900/60 via-emerald-900/40 to-gray-900",
    icon: "🧘",
    url: "#",
  },
  {
    id: 5,
    title: "Bloom Boutique",
    category: "Landing Page",
    client: "Bloom Fashion",
    location: "Anna Nagar, Chennai",
    description: "A sleek e-commerce landing page for a Chennai fashion boutique. Features product showcases, WhatsApp order CTA, Instagram feed embed, and a vibrant pastel aesthetic.",
    tech: ["Next.js", "Tailwind CSS", "GSAP"],
    image_gradient: "from-pink-900/60 via-rose-900/40 to-gray-900",
    icon: "🌸",
    url: "#",
  },
  {
    id: 6,
    title: "NovaBuild Agency",
    category: "Agency",
    client: "NovaBuild",
    location: "Bengaluru",
    description: "A dark, premium agency website for NovaBuild — featuring animated case studies, 3D hero section, team introductions, service packages, and a strong conversion-focused contact section.",
    tech: ["Next.js", "Three.js", "Framer Motion", "GSAP"],
    image_gradient: "from-indigo-900/60 via-violet-900/40 to-gray-900",
    icon: "✦",
    url: "#",
  },
  {
    id: 7,
    title: "Priya Photography",
    category: "Portfolio",
    client: "Priya S. Photography",
    location: "Chennai",
    description: "A minimal, stunning portfolio for a Chennai wedding photographer. Masonry gallery, full-screen lightbox, pricing packages, client testimonials, and a clean inquiry form.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image_gradient: "from-amber-900/60 via-yellow-900/40 to-gray-900",
    icon: "📸",
    url: "#",
  },
  {
    id: 8,
    title: "SpeedFit Crossfit",
    category: "Gym",
    client: "SpeedFit",
    location: "Velachery, Chennai",
    description: "An energetic CrossFit studio website with bold typography, transformation gallery, coach profiles, membership tiers, class timetable, and a WhatsApp-first inquiry system.",
    tech: ["Next.js", "Tailwind CSS", "GSAP ScrollTrigger"],
    image_gradient: "from-orange-900/60 via-red-900/40 to-gray-900",
    icon: "🏋️",
    url: "#",
  },
]
```

---

## 💬 TESTIMONIALS SECTION (`TestimonialsSection.tsx`)

---

```
Section ID: #testimonials
Header:
  tag-pill: "Client Reviews"
  heading-lg: "Clients Love / What We Build"

Layout: Horizontal scroll slider (overflow-x: auto, hide scrollbar)
Auto-scroll: setInterval every 3s, pause on mouseenter
5 cards, fixed width: 340px, gap-5
Navigation dots below (active = accent filled)
```

**Card Design:**
```
┌────────────────────────────────────┐  width: 340px
│  "  (large quote icon, accent/20)  │
│                                    │
│  "Lorem ipsum testimonial text     │
│   two lines maximum, italic"       │
│                                    │
│  ───────────────────────────────   │
│  [Avatar]  Name                    │
│            Business · ★★★★★         │
└────────────────────────────────────┘

Hover: 3D tilt + glow border
Tilt: onMouseMove → rotateX/Y ±8deg
```

**5 Testimonials (Dummy Data):**

```ts
export const testimonials = [
  {
    id: 1,
    quote: "Working with Devduo was the best decision I made for my gym. They built our 4-branch website in under 10 days and it looks absolutely premium. Members keep complimenting it!",
    name: "Karthik R.",
    business: "IronEdge Gym, OMR",
    avatar: "KR",
    avatarColor: "from-orange-500 to-red-600",
    stars: 5,
  },
  {
    id: 2,
    quote: "My lawyer website got me 3 new inquiry calls in the first week itself. The design is clean, trustworthy, and exactly what I needed to convert visitors to clients.",
    name: "Advocate Priya S.",
    business: "Legal Consultant, Chennai",
    avatar: "PS",
    avatarColor: "from-blue-500 to-indigo-600",
    stars: 5,
  },
  {
    id: 3,
    quote: "Our symposium website was ready in 5 days with a countdown timer, events grid, everything. Devduo understood exactly what a college event site needs.",
    name: "Rahul M.",
    business: "Eternix Symposium, Sairam",
    avatar: "RM",
    avatarColor: "from-purple-500 to-violet-600",
    stars: 5,
  },
  {
    id: 4,
    quote: "The landing page they built for our boutique increased our WhatsApp inquiries by 3x in just 2 months. Clean design, super fast, and mobile-perfect.",
    name: "Anitha K.",
    business: "Bloom Boutique, Anna Nagar",
    avatar: "AK",
    avatarColor: "from-pink-500 to-rose-600",
    stars: 5,
  },
  {
    id: 5,
    quote: "Very professional team. Fast delivery, transparent pricing, and the animations on our agency site genuinely impress every client who visits. Highly recommend!",
    name: "Vijay T.",
    business: "NovaBuild Agency, Bengaluru",
    avatar: "VT",
    avatarColor: "from-teal-500 to-emerald-600",
    stars: 5,
  },
]
```

---

## 📬 CONTACT SECTION (`ContactSection.tsx`)

---

```
Section ID: #contact
Background: floating shapes + glow blobs

Header:
  tag-pill: "Get In Touch"
  heading-lg: "Let's Build / Something Great"
  subtext: "Tell us about your project — we'll get back
            within 24 hours."

Layout: Two columns (lg), single column (sm)
```

**LEFT — Info Column:**
```
Short text: "We work with local businesses across Chennai
and beyond. Whether you need a new website or want to
upgrade an existing one — we're ready."

3 Info cards (glass, rounded-2xl):
  ┌──────────────────────────────┐
  │ 📍  Chennai, India           │
  │     Based here, working      │
  │     everywhere               │
  └──────────────────────────────┘
  ┌──────────────────────────────┐
  │ 📧  hello@devduo.in          │
  │     Drop us an email anytime │
  └──────────────────────────────┘
  ┌──────────────────────────────┐
  │ ⚡  7-Day Delivery           │
  │     Fast turnaround,         │
  │     no compromise            │
  └──────────────────────────────┘

Social links row:
  Instagram | LinkedIn | WhatsApp
```

**RIGHT — Form:**
```
Fields with floating label animation:
  1. Name         (text input)
  2. Email        (email input)
  3. Phone        (tel input)  ← NEW: important for Indian clients
  4. Project Type (select dropdown):
       → Business Website
       → Gym Website
       → Landing Page
       → Portfolio Website
       → Agency Website
       → Other
  5. Message      (textarea, 4 rows)

Submit Button:
  Full width, accent background
  Text: "Send Message →"
  Hover: glow + scale 1.02
  Loading state: spinner + "Sending..."
  Success state: ✅ "Message sent! We'll WhatsApp you shortly."

WhatsApp CTA (below form):
  Full width, green background
  Text: "💬 Or chat directly on WhatsApp →"
  Link: wa.me/917894561230

Form state management:
  useState for each field
  useState: status = 'idle' | 'loading' | 'success' | 'error'
  On submit: simulate 1.5s delay → set 'success'
  (Replace with actual API/EmailJS/Resend call in production)
```

---

## 🦶 FOOTER (`Footer.tsx`)

---

```
Border top: gradient line (transparent → accent/40 → transparent)

Layout: 5-column grid (lg), 2-column (md), 1-column (sm)

Col 1-2 (brand):
  Logo [D] + Devduo
  Tagline: "We craft premium digital experiences for local
    businesses — websites that convert visitors into loyal customers."
  Tag pill: "Crafted for Growth"

Col 3: Company
  About | Services | Portfolio | Contact

Col 4: Services
  Business Websites | Gym Websites | Landing Pages | Agency Sites

Col 5: Connect
  Instagram → https://instagram.com/devduo
  LinkedIn  → https://linkedin.com/company/devduo
  WhatsApp  → wa.me/917894561230
  Email     → mailto:hello@devduo.in

Bottom bar:
  © 2025 Devduo. All rights reserved.
  Built with ❤️ in Chennai, India
```

---

## 🎨 3D COMPONENTS

---

### `HeroScene.tsx`

```tsx
// Dynamic import (SSR: false)
// Canvas: camera [0,0,8] fov:60, alpha:true, antialias:true

Lights:
  ambientLight intensity:0.4
  directionalLight position:[10,10,5] color:#7BA4D0 intensity:1.2
  directionalLight position:[-10,-5,-5] color:#2E5E99 intensity:0.4
  pointLight position:[0,0,3] color:#E7F0FA intensity:0.8

Shapes (all wrapped in <Float>):
  3x Sphere with MeshDistortMaterial (distort:0.4, metalness:0.8)
    Colors: #2E5E99 | #7BA4D0 | #0D2440
    Positions: [-3.5,1.5,-1] | [3.5,-1,-2] | [0,2.5,-3]

  3x Box with meshStandardMaterial (metalness:0.9)
    Colors: #7BA4D0 | #2E5E99 | #E7F0FA
    Positions: [-2,-1.5,0] | [3,1.5,-1] | [-4,0,-2]

  2x Torus with MeshWobbleMaterial (factor:0.3)
    Colors: #7BA4D0 | #2E5E99
    Positions: [1.5,-2,0] | [-1.5,1,-1]

ParticleField:
  80 points, random positions in 20x20x10 space
  pointsMaterial: color #7BA4D0, size:0.06
  Slow rotation on Y axis

MouseTracker (child component):
  useFrame → lerp camera.position.x toward mouse.x * 0.5
  useFrame → lerp camera.position.y toward mouse.y * 0.3
  camera.lookAt(0,0,0)
```

---

### `GridScene.tsx`

```tsx
// Canvas: camera [0,2,10] fov:50, alpha:true

Components:
  <Grid> from @react-three/drei:
    args:[30,30], position:[0,-2,0]
    cellColor: #2E5E99, sectionColor: #7BA4D0
    cellSize:1, sectionSize:5
    fadeDistance:25, infiniteGrid:true

  4x FloatingPanel (plane geometry 1.5x1):
    meshStandardMaterial: color #2E5E99, opacity:0.3, DoubleSide
    useFrame: y oscillation sin(time + posX) * 0.3
    useFrame: slow y-rotation
```

---

## 🎬 ANIMATION SYSTEM

---

### Lenis Smooth Scroll
```js
new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 2,
})
```

### GSAP ScrollTrigger Pattern
```js
gsap.registerPlugin(ScrollTrigger)

gsap.fromTo('.targets',
  { y: 60, opacity: 0 },
  {
    y: 0, opacity: 1,
    duration: 0.7, stagger: 0.1, ease: 'power3.out',
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    }
  }
)
// Always wrap in gsap.context() and revert on cleanup
```

### Framer Motion Patterns
```tsx
// Fade up on scroll
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>

// 3D Tilt on card hover
const { transform, ...motionProps } = useMotionValue()
onMouseMove={(e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  animate({ rotateX: -y * 12, rotateY: x * 12 })
}}
onMouseLeave={() => animate({ rotateX: 0, rotateY: 0 })}
style={{ transformPerspective: 800 }}

// Stagger children
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}
```

---

## ⚡ PERFORMANCE RULES

```
1. All 3D components: dynamic(() => import(...), { ssr: false })
2. viewport={{ once: true }} on ALL scroll animations
3. Canvas: powerPreference: 'high-performance'
4. Memoize 3D geometries: useMemo(() => new THREE.BoxGeometry(...), [])
5. next/image for all images with lazy loading
6. Disable 3D on mobile (md:block hidden) to save battery
7. Use will-change: transform on animated cards
8. gsap.context() for all GSAP — revert() on cleanup
```

---

## 📱 MOBILE RESPONSIVE RULES

```
Navbar:    hamburger below md breakpoint
Hero 1:    3D canvas hidden on sm (use CSS gradient only)
Hero 2:    grid-cols-1 sm:grid-cols-2
Hero 3:    stack vertically
About:     single column, card visual hidden on sm
Services:  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
Portfolio: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
Testimonials: touch scroll, -webkit-overflow-scrolling: touch
Contact:   single column form
Footer:    grid-cols-1 md:grid-cols-2 lg:grid-cols-5

Headings:  ALL use clamp() — never fixed px on mobile
Cursor:    @media (pointer: coarse) { display: none }
```

---

## 🔧 NEXT.JS CONFIG

```js
// next.config.js
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap'],
  },
}
```

---

## 📐 TAILWIND CONFIG

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#0D2440',
      card: '#2E5E99',
      accent: '#7BA4D0',
      light: '#E7F0FA',
    },
    fontFamily: {
      display: ['Syne', 'sans-serif'],
      body: ['DM Sans', 'sans-serif'],
    },
    animation: {
      'float': 'float 6s ease-in-out infinite',
      'spin-slow': 'spin 20s linear infinite',
    },
    keyframes: {
      float: {
        '0%,100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' },
      },
    },
  },
}
```

---

## ✅ FINAL BUILD CHECKLIST

```
SETUP
  [x] package.json with all deps
  [x] tailwind.config.js
  [x] next.config.js
  [x] styles/globals.css (full, as above)
  [x] app/layout.tsx (metadata + providers)
  [x] app/page.tsx (preloader + section assembly)

UI COMPONENTS
  [x] Preloader (2.4s, D logo, progress bar, AnimatePresence exit)
  [x] CustomCursor (dot + ring, lerp, hover expand)
  [x] NoiseOverlay (grain texture, opacity 0.03)
  [x] WhatsAppFloat (fixed bottom-right, spring mount, green glow)

LAYOUT
  [x] SmoothScrollProvider (Lenis + window.lenis exposed)
  [x] Navbar (glass scroll, links, mobile hamburger, CTA)
  [x] Footer (5-col, brand + links + social + Chennai credit)

3D
  [x] HeroScene (spheres + cubes + tori + particles + mouse parallax)
  [x] GridScene (infinite grid + floating planes)

SECTIONS
  [x] HeroSection (3 heroes: fullscreen | cards | grid)
  [x] AboutSection (story + skills + floating visual + CountUp stats)
  [x] ServicesSection (6 services + pricing + GSAP stagger)
  [x] PortfolioSection (filter + 8 projects + tilt cards + modal)
  [x] TestimonialsSection (5 testimonials + auto-scroll + tilt)
  [x] ContactSection (2-col + form + phone field + WhatsApp CTA)

DATA (all dummy, ready to replace)
  [x] 8 portfolio projects (from real reference sites)
  [x] 5 testimonials (with context from real sites)
  [x] 6 services with pricing in INR
  [x] Contact info (hello@devduo.in, Chennai)

ANIMATIONS
  [x] Lenis smooth scroll
  [x] GSAP ScrollTrigger (hero2 cards, hero3 panels, services)
  [x] Framer Motion fade-up on all sections
  [x] 3D card tilt (portfolio + testimonials)
  [x] CountUp stats
  [x] Form success animation

PERFORMANCE & SEO
  [x] SSR: false on all 3D
  [x] viewport once: true on all scroll animations
  [x] Mobile cursor disabled
  [x] clamp() on all headings
  [x] Metadata + OpenGraph
  [x] Semantic HTML (section, nav, main, footer, h1/h2/h3)
```

---

## 🍱 CHUNK SPLIT FOR ANTIGRAVITY

Split this prompt into **5 chunks** to stay within token limits:

```
CHUNK 1 — Foundation
  package.json, tailwind.config.js, next.config.js,
  styles/globals.css, app/layout.tsx, app/page.tsx,
  SmoothScrollProvider.tsx

CHUNK 2 — UI & Layout
  Preloader.tsx, CustomCursor.tsx, NoiseOverlay.tsx,
  WhatsAppFloat.tsx, Navbar.tsx, Footer.tsx

CHUNK 3 — 3D Components
  HeroScene.tsx, GridScene.tsx
  (Include the full animation + shape specs above)

CHUNK 4 — Sections Part 1
  HeroSection.tsx (all 3 heroes)
  AboutSection.tsx (with CountUp)
  ServicesSection.tsx (6 services + pricing)

CHUNK 5 — Sections Part 2
  PortfolioSection.tsx (8 projects + modal)
  TestimonialsSection.tsx (5 testimonials + slider)
  ContactSection.tsx (form + WhatsApp CTA)
```

---

*Generated for Pugazh · Devduo Agency · Chennai, India*
*Replace WhatsApp: 917894561230 with your real number before deploying*
