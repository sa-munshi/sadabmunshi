
## Your Role

You are an expert frontend engineer and UI/UX designer. You are helping rebuild `sadabmunshi.online` from PHP (InfinityFree) to **Next.js 14 (App Router) + Tailwind CSS**, deployed as a **static export to Cloudflare Pages**.

The new site uses a **Hand-Drawn / Sketch** design system. Every design decision must follow the design tokens and rules defined below — no exceptions.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Fonts | Kalam (headings, 700) + Patrick Hand (body, 400) via `next/font/google` |
| Blog | MDX files in `/content/blog/` via `next-mdx-remote` |
| Contact form | Fetch to Cloudflare Worker (URL: placeholder for now) |
| Deployment | Static export (`output: 'export'` in next.config.js) → Cloudflare Pages |
| Icons | `lucide-react` with `strokeWidth={2.5}` |

---

## Project File Structure

Create this exact structure:

```
sadabmunshi.online/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, nav, footer
│   ├── page.tsx                # Home page
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── blog/page.tsx
│   ├── blog/[slug]/page.tsx
│   ├── contact/page.tsx
│   ├── now/page.tsx
│   ├── watching/page.tsx
│   └── colophon/page.tsx
├── components/
│   ├── ui/
│   │   ├── SketchButton.tsx    # Reusable wobbly button
│   │   ├── SketchCard.tsx      # Reusable wobbly card
│   │   └── SketchInput.tsx     # Reusable wobbly input/textarea
│   ├── Nav.tsx
│   ├── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── BlogPreview.tsx
│       └── Contact.tsx
├── content/
│   └── blog/                   # MDX files — leave empty for now
├── lib/
│   └── blog.ts                 # MDX file reader utility
├── public/
│   └── resume/
├── tailwind.config.ts
└── next.config.js
```

---

## Design System — READ THIS CAREFULLY

### Color Palette

```ts
// Use these exact values everywhere. No other colors.
const colors = {
  bg:      '#fdfbf7',  // Warm Paper — page background
  fg:      '#2d2d2d',  // Soft Pencil Black — primary text
  muted:   '#e5e0d8',  // Old Paper — muted elements, dividers
  accent:  '#ff4d4d',  // Red Correction Marker — CTAs, highlights
  blue:    '#2d5da1',  // Blue Ballpoint Pen — links, secondary accents
  yellow:  '#fff9c4',  // Post-it Yellow — feature cards
  white:   '#ffffff',  // Card backgrounds
}
```

### Tailwind Config Extensions

Add these to `tailwind.config.ts`:

```ts
extend: {
  fontFamily: {
    heading: ['Kalam', 'cursive'],
    body:    ['Patrick Hand', 'cursive'],
  },
  colors: {
    paper:  '#fdfbf7',
    pencil: '#2d2d2d',
    muted:  '#e5e0d8',
    sketch: '#ff4d4d',
    ink:    '#2d5da1',
    postit: '#fff9c4',
  },
  borderRadius: {
    wobbly:   '255px 15px 225px 15px / 15px 225px 15px 255px',
    wobblyMd: '15px 225px 15px 255px / 225px 15px 255px 15px',
    wobblyBtn:'120px 8px 110px 8px / 8px 110px 8px 120px',
  },
  boxShadow: {
    hard:   '4px 4px 0px 0px #2d2d2d',
    hardLg: '8px 8px 0px 0px #2d2d2d',
    hardSm: '2px 2px 0px 0px #2d2d2d',
  },
  keyframes: {
    bounce3d: {
      '0%,100%': { transform: 'translateY(0) rotate(12deg)' },
      '50%':     { transform: 'translateY(-10px) rotate(12deg)' },
    },
    wiggle: {
      '0%,100%': { transform: 'rotate(-2deg)' },
      '50%':     { transform: 'rotate(2deg)' },
    },
  },
  animation: {
    bounce3d: 'bounce3d 3s ease-in-out infinite',
    wiggle:   'wiggle 2s ease-in-out infinite',
  },
}
```

### Paper Texture Background

Apply to `<body>` in `layout.tsx`:

```tsx
style={{
  backgroundColor: '#fdfbf7',
  backgroundImage: 'radial-gradient(#e5e0d8 1px, transparent 1px)',
  backgroundSize: '24px 24px',
}}
```

### Wobbly Borders — CRITICAL RULE

**NEVER use standard Tailwind `rounded-*` classes for cards, buttons, or containers.**

Always use inline `style={{ borderRadius: '...' }}` with irregular values:

```tsx
// Standard containers
style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}

// Medium cards
style={{ borderRadius: '15px 225px 15px 255px / 225px 15px 255px 15px' }}

// Buttons/small elements
style={{ borderRadius: '120px 8px 110px 8px / 8px 110px 8px 120px' }}
```

### Shadows

```
Normal:   box-shadow: 4px 4px 0px 0px #2d2d2d
Large:    box-shadow: 8px 8px 0px 0px #2d2d2d
Hover:    box-shadow: 2px 2px 0px 0px #2d2d2d  (button press effect)
Active:   box-shadow: none                      (fully pressed)
```

### Typography

- `font-family: 'Kalam'` — all `h1`, `h2`, `h3`, `h4`
- `font-family: 'Patrick Hand'` — all body text, labels, buttons, inputs
- Headings vary dramatically in size to look like emphasized notes
- Body text: `text-lg` minimum, `text-xl` preferred

### Rotation

Add deliberate small rotations to break grid rigidity:

```tsx
className="rotate-1"          // cards, images
className="-rotate-2"         // alternate cards
className="hover:-rotate-1"   // hover states
```

### Buttons — `SketchButton.tsx`

```tsx
// Normal state
background: white
border: 3px solid #2d2d2d
box-shadow: 4px 4px 0px 0px #2d2d2d
border-radius: wobblyBtn

// Hover state
background: #ff4d4d
color: white
box-shadow: 2px 2px 0px 0px #2d2d2d
transform: translate(2px, 2px)

// Active state
box-shadow: none
transform: translate(4px, 4px)

// Secondary variant
background: #e5e0d8
hover → background: #2d5da1, color: white
```

### Cards — `SketchCard.tsx`

```tsx
// Base
background: white
border: 2px solid #2d2d2d
box-shadow: 4px 4px 0px 0px #2d2d2d
border-radius: wobblyMd

// Hover
transform: rotate(1deg)
box-shadow: 6px 6px 0px 0px #2d2d2d
transition: transform 100ms, box-shadow 100ms

// Post-it variant (feature cards)
background: #fff9c4

// Decorations (props):
// decoration="tape"  → translucent gray bar at top, slight rotation
// decoration="tack"  → red circle (#ff4d4d) at top center
```

### Inputs — `SketchInput.tsx`

```tsx
border: 2px solid #2d2d2d
border-radius: wobblyBtn  (same as buttons)
font-family: Patrick Hand
background: white

// Focus state
border-color: #2d5da1
outline: none
box-shadow: 0 0 0 3px rgba(45, 93, 161, 0.2)
```

---

## Page-by-Page Content

### `app/layout.tsx` — Root Layout

**Nav links:**
```
Home /
About /about
Now /now
Blog /blog
Projects /projects
Contact /contact
```

**Nav style:**
- Logo: `Sadab Munshi` in Kalam font, slight rotation `-rotate-1`
- Nav links: Patrick Hand, underline on hover using wavy CSS underline
- Mobile: hamburger menu, slides down

**Footer:**
- Left: `© 2025 Sadab Munshi. Built with curiosity.`
- Right: social icons (GitHub, Twitter/X, Instagram, LinkedIn)
  - GitHub: `https://github.com/sa-munshi`
  - Twitter: `https://twitter.com/SadabMunshi`
  - Instagram: `https://instagram.com/heysadab`
  - LinkedIn: `https://linkedin.com/in/sadab-munshi`
- Footer icons enclosed in rough wobbly circles with hard shadow

---

### `app/page.tsx` — Home Page

**Structure:** Hero → About snippet → Projects snippet → Blog preview → Contact CTA

**Hero section:**
- Date stamp top: show today's date (e.g., `Monday, April 13, 2026`) in Patrick Hand, muted color, uppercase
- Headline (h1, Kalam, `text-5xl md:text-7xl`):
  ```
  I learn by
  building things.
  ```
  The `!` at end should be slightly rotated (+15deg) inline span
- Subtext (Patrick Hand, `text-xl`):
  ```
  Student. Indie developer. Building small tools from a small village.
  ```
- Two CTA buttons side by side:
  - Primary (SketchButton): `See my work →` → links to `/projects`
  - Secondary (SketchButton variant): `Read the blog →` → links to `/blog`
- Hand-drawn SVG arrow pointing from subtext toward the CTA buttons (desktop only, `hidden md:block`)
- Decorative bouncing wobbly circle (desktop only): `animate-bounce3d`, positioned absolutely, right side

**Random mood note** (pick one from array on each render, italic, in muted dashed-border card):
```ts
const moods = [
  "Today feels like a good day to break something and fix it.",
  "Currently resisting the urge to rebuild everything from scratch.",
  "Some days I code. Some days I stare at the screen. Today is one of those days.",
  "Learning that good enough is better than perfect. Slowly.",
  "Coffee level: critical. Curiosity level: high.",
]
```

**Blog preview** (3 cards in grid):
- Use `SketchCard` with `decoration="tape"`
- Show title, date, excerpt
- Each card slightly rotated alternating: `rotate-1`, `-rotate-2`, `rotate-1`
- "View all posts →" link below grid

**Contact CTA section:**
- Post-it yellow background (`SketchCard` with `bg-postit`)
- Text: `"Got something interesting? Say hello."`
- Button: `Write to me →` → links to `/contact`

---

### `app/about/page.tsx` — About Page

**Content:**

```
h1: About

Hello, I am Sadab.

I am a student who likes building things on the internet. I spend most
of my time learning how stuff works, breaking things, and figuring out
how to fix them.

I don't have it all figured out. I just build small things, write about
what I learn, and share it here. If you want to know what I'm up to
right now, check the now page.
```

**"About this site" card** (SketchCard, decoration="tack"):
```
About this site
This site is built to be fast and simple. No clutter. Just a clean
space where I share what I'm working on.
```

**"My Digital Co-Pilots" card** (SketchCard, post-it yellow):
```
Kimi by Moonshot AI — Day-to-day code, building features, fixing errors.
Claude by Anthropic — Deep debugging, untangling messy code, complex bugs.
```

**Resume button** (SketchButton, secondary variant):
```
↓ Download Resume
href="/resume/Sadab-Munshi-Resume.pdf" download
```

---

### `app/projects/page.tsx` — Projects Page

**FinFlow card** (SketchCard, decoration="tack", large):
```
Title: FinFlow
Status badge: ● Live  (green dot, pulsing animation)
Description: Personal finance tracker with automated categorization,
             AI receipt parsing, and spending forecasts.
Tags: Next.js · TypeScript · Supabase · Node.js
Button (SketchButton): Live ↗  → href="https://app.sadabmunshi.online" target="_blank"
```

**"Next Project" card** (SketchCard, muted/disabled style, opacity 0.6):
```
Title: Next Project
Status: In Progress
Description: Currently building. Details soon.
```

Style note: The FinFlow card should be `rotate-1`, next project card `-rotate-1`.

---

### `app/blog/page.tsx` — Blog List

**Header:**
```
h1: Blog — 8 posts
Subtext: Short essays on things I'm thinking about.
         No fixed schedule — I write when I have something worth saying.
```

**Blog posts list** (show all 8, in grid 2-col desktop, 1-col mobile):

```ts
const posts = [
  { title: 'Spend Less Time Counting, More Time Living', slug: 'spend-less-time-counting', excerpt: 'Why I built a personal finance app that uses AI to handle the boring parts of tracking money.', date: '2026-03-22', readingTime: '4 min read' },
  { title: 'What I Think About AI', slug: 'what-i-think-about-ai', excerpt: 'Artificial intelligence explained humanistically. A simple, honest take on what AI actually is.', date: '2026-02-23', readingTime: '3 min read' },
  { title: 'Why I Started Making Things', slug: 'why-i-started-building-things', excerpt: 'On curiosity, starting small, and creating for yourself.', date: '2025-12-15', readingTime: '4 min read' },
  { title: 'Slow Growth', slug: 'slow-growth', excerpt: 'Embracing the long, unglamorous path of gradual improvement.', date: '2025-11-08', readingTime: '5 min read' },
  { title: 'Debugging My Brain', slug: 'debugging-my-brain', excerpt: 'What coding taught me about my own thought patterns.', date: '2025-08-03', readingTime: '6 min read' },
  { title: 'The Art of Finishing', slug: 'the-art-of-finishing', excerpt: 'Why starting is easy and finishing is everything.', date: '2025-06-14', readingTime: '5 min read' },
  { title: 'Notes on Simplicity', slug: 'notes-on-simplicity', excerpt: 'Less is usually better. Some thoughts on keeping things simple.', date: '2025-05-20', readingTime: '3 min read' },
  { title: 'Learning in Public', slug: 'learning-in-public', excerpt: 'The fear, the vulnerability, and the unexpected benefits of sharing while you learn.', date: '2025-03-28', readingTime: '4 min read' },
]
```

Each blog card (SketchCard):
- Title (Kalam, `text-xl`)
- Date (muted, small, uppercase)
- Excerpt (Patrick Hand)
- Reading time + `Read →` on same line at bottom
- Alternate rotations: even cards `rotate-1`, odd cards `-rotate-1`
- Staggered fade-up animation on mount

**Note for blog slugs:** For now, each slug should link to `/blog/[slug]` — the MDX content will be added later. Create a placeholder `app/blog/[slug]/page.tsx` that shows "Coming soon" styled in the sketch aesthetic.

---

### `app/contact/page.tsx` — Contact Page

**Header:**
```
h1: Get in Touch
Subtext: Have a question or just want to say hello? I'd love to hear from you.
```

**Form** (using `SketchInput` for all fields):
```
Name field:     label="Your Name"     placeholder="John Doe"
Email field:    label="Email Address"  placeholder="john@example.com"
Message field:  label="Your Message"  placeholder="Tell me what's on your mind..." (textarea)
Submit button:  SketchButton primary  text="Send Message →"
```

Form submit:
```ts
// POST to Cloudflare Worker
fetch('https://contact.sadabmunshi.online/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message }),
})
// Show success/error state in a SketchCard with appropriate color
// Success: post-it yellow card
// Error: accent red (#ff4d4d) tinted card
```

Below form — divider (`or`) then direct email link:
```
mailto:contact@sadabmunshi.online
```

---

### `app/now/page.tsx` — Now Page

```
h1: Now
Subtext: What I'm doing right now
Location note: Based in my corner of the world (West Bengal, India)

Intro paragraph:
"This is a /now page. It's a snapshot of what I'm focused on at this
point in my life. No endless feeds, just what matters now."

Currently (SketchCard, decoration="tack"):
- Working on FinFlow — a personal finance tracker
- Learning more about how systems work (finance, technology, life)
- Writing about ideas, simplicity, and the process of building
- Trying to read more and scroll less

Not Doing (SketchCard, muted style):
- Chasing every new trend
- Building things I wouldn't use myself
- Trying to optimize everything

Last updated: April 2026
```

---

### `app/watching/page.tsx` — Watching Page

```
h1: Watching
Subtext: Movies and shows.

Intro: "I don't watch a lot, but when I do, I prefer things that make
me think or feel something. No particular genre — just good storytelling."
```

**4 sections**, each as a `SketchCard`:

```ts
Recently Watched:
  - The Social Network (2010) — "A classic. Makes you want to build something."

Currently Watching:
  - Severance (2022–) — "Work-life balance taken to the extreme."

Want to Watch:
  - Dune: Part Two (2024) — "Heard it is incredible."
  - The Bear (2022–) — "Everyone keeps recommending this."

All-Time Favorites:
  - Good Will Hunting (1997) — "It's not your fault."
  - The Prestige (2006) — "Nolan at his best."
  - Whiplash (2014) — "Obsession and excellence."
```

Footer note: `"Have a recommendation? Let me know →"` linking to `/contact`

---

### `app/colophon/page.tsx` — Colophon Page

```
h1: Colophon
Subtext: How this site was made.

Intro: "This site is intentionally simple. No heavy frameworks,
minimal build process, no unnecessary complexity."
```

**4 SketchCards**, one per section:

**Typography card:**
- Headings: Kalam — "A handwritten font. Felt-tip marker energy."
- Body: Patrick Hand — "Legible but distinctly human."

**Technology card:**
- Next.js 14 (App Router) — Static export
- Tailwind CSS — Utility-first styling
- MDX — Blog posts as markdown files
- Cloudflare Pages — Static hosting, zero cost

**Design card:**
- Colors: Warm Paper palette — pencil black, correction marker red, ballpoint blue
- Style: Hand-drawn sketch system — wobbly borders, hard shadows, paper texture
- Fonts: Kalam + Patrick Hand — handwritten personality

**Hosting card:**
- Domain: sadabmunshi.online
- Hosting: Cloudflare Pages (free tier)
- Contact form: Cloudflare Worker + Resend
- Code editor: VS Code + GitHub Copilot
- Source: [github.com/sa-munshi](https://github.com/sa-munshi)

---

## `lib/blog.ts` — MDX Utility

```ts
// Reads MDX files from /content/blog/
// Returns sorted list of posts with frontmatter
// Frontmatter shape:
interface PostMeta {
  title: string
  slug: string
  excerpt: string
  date: string        // 'YYYY-MM-DD'
  readingTime: string // '4 min read'
}
```

Use `gray-matter` for frontmatter parsing and `next-mdx-remote` for rendering.

For now, since `/content/blog/` is empty, the blog page should fall back to the hardcoded posts array defined in the blog page section above.

---

## `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Static export for Cloudflare Pages
  trailingSlash: true,       // Matches old PHP URL structure
  images: {
    unoptimized: true,       // Required for static export
  },
}
module.exports = nextConfig
```

---

## Build Order for Copilot

Work through these tasks in order. Complete each fully before moving on:

1. `tailwind.config.ts` — add all design tokens from above
2. `app/layout.tsx` — paper texture body, fonts, Nav, Footer
3. `components/ui/SketchButton.tsx` — all variants
4. `components/ui/SketchCard.tsx` — all variants + decorations
5. `components/ui/SketchInput.tsx`
6. `components/Nav.tsx`
7. `components/Footer.tsx`
8. `app/page.tsx` — full home page
9. `app/about/page.tsx`
10. `app/projects/page.tsx`
11. `app/blog/page.tsx`
12. `app/blog/[slug]/page.tsx` — placeholder
13. `app/contact/page.tsx`
14. `app/now/page.tsx`
15. `app/watching/page.tsx`
16. `app/colophon/page.tsx`
17. `lib/blog.ts`
18. `next.config.js`

---

## Rules Copilot Must Follow

- **Never** use standard Tailwind `rounded-*` for cards/buttons — always inline `style={{ borderRadius: '...' }}`
- **Never** use `Inter`, `Roboto`, `Arial`, or system fonts
- **Never** use soft/blurred box shadows — only hard offset `4px 4px 0px 0px #2d2d2d`
- **Never** use `<form>` tags — use `onSubmit` on a `<div>` or controlled state
- **Always** use `font-family: 'Kalam'` for all headings
- **Always** use `font-family: 'Patrick Hand'` for body, buttons, inputs, labels
- **Always** apply small rotation transforms to cards and decorative elements
- **Always** keep `lucide-react` icons with `strokeWidth={2.5}`
- Keep all pages responsive: mobile-first, grids collapse to 1-col on mobile
- Hide decorative SVG elements on mobile with `hidden md:block`
- Accessibility: all interactive elements need proper `aria-label` where needed

---

## Reference Links

- Design system source: [designprompts.dev/sketch](https://www.designprompts.dev/sketch)
- Live site (old PHP): [sadabmunshi.online](https://www.sadabmunshi.online)
- FinFlow app: [app.sadabmunshi.online](https://app.sadabmunshi.online)
- GitHub: [github.com/sa-munshi](https://github.com/sa-munshi)
