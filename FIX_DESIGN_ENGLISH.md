# Fix the Visual Design — Plain English Instructions

The site at sadabmunshi.vercel.app has all the right content and pages. The problem is the design looks completely unstyled — no fonts, no colors, no card styles, nothing from the hand-drawn sketch design system. Fix every visual issue below without changing any content or page structure.

---

## The Design Style to Aim For

Think of a sketchbook or notebook. Everything should look hand-drawn and imperfect — like someone sketched the UI on paper. Wobbly uneven borders on cards and buttons, hard solid shadows with no blur, handwritten fonts, a warm cream paper background with a subtle dot pattern, and elements slightly tilted at small angles. Nothing should look like a standard modern website.

---

## Fix 1 — Background

The page background should look like cream notebook paper. Apply a warm off-white color (#fdfbf7) to the body with a repeating dot grid pattern on top of it using a radial-gradient. The dots should be subtle — small, spaced 24px apart, in a slightly darker cream color (#e5e0d8). This should appear on every page.

---

## Fix 2 — Fonts

Load two Google Fonts: Kalam (weight 700) and Patrick Hand (weight 400). Use next/font/google to load them properly. Apply Kalam to every heading (h1, h2, h3, h4) across the entire site. Apply Patrick Hand to all body text, paragraphs, labels, button text, nav links, footer text, and form inputs. There should be zero system fonts, Inter, or Roboto anywhere on the site.

---

## Fix 3 — Wobbly Borders on Cards and Buttons

This is the most important visual fix. Every card, button, and input field must have an irregular uneven border-radius that looks hand-drawn — not a perfect circle or rectangle corner. Use inline style borderRadius with asymmetric values like "255px 15px 225px 15px / 15px 225px 15px 255px" for cards, and "120px 8px 110px 8px / 8px 110px 8px 120px" for buttons and inputs. Never use Tailwind's rounded classes for these elements because Tailwind cannot handle the slash syntax.

---

## Fix 4 — Hard Shadows on Cards and Buttons

Every card and button must have a hard offset shadow with no blur — just a solid dark offset. Use "4px 4px 0px 0px #2d2d2d" as the box-shadow value. Larger emphasized cards can use "8px 8px 0px 0px #2d2d2d". There should be no soft blurred shadows anywhere on the site.

---

## Fix 5 — Card Borders

Every card must have a visible 2px solid border in dark pencil color (#2d2d2d) in addition to the shadow. Cards should have a white background by default. There are two special card variants — a post-it yellow card (#fff9c4) for highlight sections, and a muted faded card (low opacity, grey background) for disabled or inactive content.

---

## Fix 6 — Card Decorations

Some cards should have a tape decoration — a small translucent grey rectangle sitting at the top center of the card, slightly rotated, like a piece of tape holding the card to a wall. Other cards should have a tack decoration — a small red circle at the top center, like a thumbtack pinning the card. Alternate between tape and tack on the blog cards and feature cards.

---

## Fix 7 — Card Rotations

Cards should not sit perfectly straight on the grid. Apply a very small rotation to each card — alternate between rotating 1.5 degrees clockwise and 1.5 degrees counter-clockwise. On even-numbered cards in lists and grids, add a small top margin offset to create a staggered scattered look, like cards pinned to a corkboard.

---

## Fix 8 — Buttons

Buttons must look hand-drawn. White background, 3px dark border, wobbly border-radius, hard offset shadow. When hovered, the background fills with red (#ff4d4d), text turns white, and the shadow reduces slightly while the button shifts 2px down and right to simulate pressing. When clicked, the shadow disappears completely and the button shifts 4px — fully pressed flat. The secondary button variant uses a muted beige background (#e5e0d8) and turns blue (#2d5da1) on hover.

---

## Fix 9 — Form Inputs

All input fields and textareas must have the same wobbly border-radius as buttons, a 2px dark border, and a small hard shadow. When focused, the border turns blue (#2d5da1) and a soft blue glow ring appears. No browser default outlines. Font must be Patrick Hand inside the inputs.

---

## Fix 10 — Navigation Bar

The nav should be sticky at the top. Background is the same warm cream color with slight transparency and blur so content scrolls behind it. Bottom border is a 2px solid dark line. The logo text "Sadab Munshi" uses Kalam font and should be rotated very slightly. Nav links use Patrick Hand. The currently active page link should be red (#ff4d4d) with a red underline. On mobile, replace the links with a hamburger icon button that toggles a dropdown menu.

---

## Fix 11 — Footer

The footer has a 2px dark top border and the same warm cream background. Left side shows the copyright text in Patrick Hand, muted color. Right side shows social icon links for GitHub, Twitter, Instagram, and LinkedIn. Each icon should be inside a small circle with a 2px dark border and a hard 2px shadow. On hover the circle fills dark and the icon turns cream colored.

---

## Fix 12 — Home Page Hero

The main headline "I learn by building things!" should use Kalam font at a very large size (around 4rem on desktop). The exclamation mark should be a separate span rotated about 15 degrees in red color (#ff4d4d) to look energetic and hand-drawn. The subtext below uses Patrick Hand at a comfortable reading size in muted color. The mood note (the italic random quote) should sit in a card with a dashed border instead of a solid border to look like a sticky note.

---

## Fix 13 — Blog Cards

On the blog listing page, each post should be inside a proper sketch card with wobbly borders, hard shadow, slight rotation, and alternating tape or tack decorations. The title uses Kalam font. Date and reading time are small and muted. The excerpt uses Patrick Hand. A "Read →" label in blue sits at the bottom. Cards should lift slightly and the rotation should nudge on hover.

---

## Fix 14 — Projects Page

The FinFlow card should be a large prominent sketch card with a tack decoration, slightly rotated. The "Live" status badge should be a small pill-shaped label with a pulsing green dot. Tech stack tags (Next.js, TypeScript etc) should be small pill badges with a beige background and dark border. The "Next Project" card should look faded and inactive — lower opacity, muted colors.

---

## Fix 15 — About, Now, Contact Pages

On the About page, wrap the "About this site" section and the "My Digital Co-Pilots" section each in a sketch card. The co-pilots card should use the post-it yellow background. The resume button should use the secondary button style.

On the Now page, wrap the "Currently" list and the "Not Doing" list each in a sketch card with different rotations.

On the Contact page, wrap the entire form in a sketch card with a tack decoration. All inputs must use the sketch input style. The submit button must use the primary sketch button style.

---

## Fix 16 — Page Layout and Headings

Every page should have a consistent max-width container of about 860px centered on the page with generous padding. Every page h1 should be large Kalam font in dark pencil color. Every page subtitle or description paragraph should be Patrick Hand in muted color. Spacing between sections should be generous so nothing feels cramped.

---

## What Must NOT Change

Do not touch any text content, any links, any URLs, any page routing, or any data. Only change how things look — colors, fonts, borders, shadows, rotations, spacing, and card wrappers.
