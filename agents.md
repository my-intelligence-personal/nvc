# Yume Marketing Site – Design & Implementation Spec

## 0. Overview

**Goal:**  
A cinematic, scroll-driven single-page website that tells the story of Yume – an iPad bedtime app for parents and children – from **problem ➜ hope ➜ solution ➜ product ➜ features ➜ pricing**.

**Tone:**  
Warm, intimate, sleep-friendly. Emotionally heavy at the start, becoming softer and more hopeful, then clean and product-focused.

**Tech expectations (flexible):**
- Responsive layout (mobile, tablet, desktop).
- Modern JS framework allowed (React / Next.js / Svelte / plain HTML+JS is fine).
- For scroll animations, use either:
  - a library (GSAP ScrollTrigger, Framer Motion, Lenis, etc.), **or**
  - custom IntersectionObserver + CSS transitions.
- All animations should be **smooth, subtle, and performant** (no jank).

---

## 1. Global Design System

### 1.1 Color Palette

Base colors sampled from provided palette:

```css
:root {
  /* Core palette */
  --navy-900: #19202f;  /* very dark navy (background) */
  --navy-800: #1e2945;  /* deep navy */
  --navy-600: #2f3e6a;  /* main navy for cards, text blocks */
  --blue-300: #88a9da;  /* soft sky blue */
  --blue-100: #d4ddef;  /* pale blue, backgrounds/cards */
  --cream-100: #fff7b5; /* soft yellow/cream accent */

  /* Semantic roles */
  --bg-dark: var(--navy-900);
  --bg-light: #ffffff;
  --bg-soft: var(--blue-100);

  --text-main: #0b0f17;
  --text-inverse: #ffffff;
  --text-muted: #d4ddef;
  --text-accent: var(--blue-300);

  --accent-primary: var(--cream-100);
  --accent-secondary: var(--blue-300);

  --card-border: var(--blue-100);
  --card-highlight: var(--cream-100);
}
````

Usage rules:

* **Problem & pricing sections:** `--bg-dark` with white / muted blue text.
* **Warm “rest” section:** dark/warm photography, white text.
* **Product / logo / features:** `--bg-light` with navy text and pastel accents.
* **Buttons & highlights:** use `--accent-primary` with navy text or outline.

---

### 1.2 Typography

Use web-safe or Google fonts.

```text
Heading font: DM Sans (or similar humanist sans)
  - weights: 400, 500, 600, 700
Body font: DM Sans or Inter
Accent script (for "dream STARTER/PLUS/INFINITE"): a cursive like "Dancing Script"
```

General rules:

* **H1:** 56–72px on desktop hero, 32–40px on mobile.
* **H2:** 40–48px desktop, 28–32px mobile.
* **Body:** 16–18px, line-height 1.5–1.7.
* Emphasised words (*italic* / **bold**) used sparingly for emotional impact.

---

### 1.3 Layout & Spacing

* Content width: max 1100–1200px.
* Page padding: 24px mobile, 48–72px desktop.
* Sections generally full viewport height (`min-height: 100vh`) for main story beats.
* Use **split-screen layout** a lot: image on one side, text on the other.

Breakpoints:

* **Mobile:** < 768px
* **Tablet:** 768–1024px
* **Desktop:** > 1024px

Mobile rules:

* Stack image above text.
* Reduce font sizes.
* Keep animations but simplify if necessary (fade only).

---

### 1.4 Shared Components

#### Buttons

Primary CTA:

* Filled: `background: var(--accent-primary); color: var(--navy-800)`.
* Rounded corners (8–999px; pill is fine).
* Medium weight text.

Secondary CTA:

* Text button with underline or subtle arrow.

---

## 2. Section-by-Section Spec

### SECTION 1 – Hero / Problem

**ID:** `#hero-problem`
**Purpose:** Introduce the problem: screens before sleep keep kids awake.

**Background:**

* Full-bleed dark image of child lit by tablet.
* Overlay a subtle left–right gradient if needed to improve text legibility on the right.

**Layout (desktop):**

* Yume logo in top-left (white).
* Top-right minimal nav (e.g., `About`, `Features`, `Plans`) scrolling to anchors.
* Main content right-aligned vertically centered.

**Copy (approximate text):**

Heading (H1, right side):

> What keeps them *entertained*
> keeps them **awake**.

Body (short paragraph, right side, max ~3–4 lines):

> What seems like quiet screen time before sleep is quietly reshaping how children rest, think, and grow.
> Blue light delays sleep, overstimulation blocks calm, and the screen has replaced the story that once connected parent and child.

**Animation:**

* On first load:

  * Text fades in from 0% to 100% opacity over 600–800ms.
  * Slight upward motion (`translateY(10–20px ➜ 0)`).
* As the user scrolls toward Section 2, this section slowly darkens and the next section crossfades in.

---

### SECTION 2 – Combined Transition + Solution (Option A)

**ID:** `#rest-section`
**Purpose:** Move from anxiety ➜ hope ➜ introduce Yume as a solution, all in one “chapter”.

**Visual:**

* Full-screen warm photograph: parent and child cuddled with tablet, lamplight on the right.
* Text appears on the right half of the screen (desktop).

**Structure & scroll behavior:**

This is **one section** with evolving content based on scroll progress:

1. **At section entry (0–40% of scroll inside this section):**
   Show only the big question.

   Large heading (H1/H2):

   > What if technology finally learned to *rest*?

2. **As user scrolls further (40–100% of scroll inside this section):**
   Fade/slide in the solution text **below** the question.

   Subheading (H3):

   > The app that makes sleep healthier, stories richer, and your bond stronger.

   Body text (3 short lines):

   * You read, or your voice reads for them while they choose what happens next.
   * AI paints each scene in soft, low-light illustrations designed for sleepy eyes.
   * As their eyes grow heavy, Yume finishes the story with care and settles into a cloud of comforting sleep sounds.

**Animation details (pseudo):**

```text
Within #rest-section:
  progress = localScrollProgress (0 to 1)

  If progress < 0.4:
    question.opacity = map(progress, 0.1 → 0.4, 0 → 1)
    solutionBlock.opacity = 0
    solutionBlock.translateY = 20px
  If progress >= 0.4:
    solutionBlock.opacity = map(progress, 0.4 → 0.8, 0 → 1)
    solutionBlock.translateY = map(progress, 0.4 → 0.8, 20px → 0px)
```

Mobile:

* Image background with gradient overlay; text centered, stacked.
* Same logic but vertical.

---

### SECTION 3 – Product Reveal with Scroll-Scrubbed Video

**ID:** `#product-video`
**Purpose:** Introduce the Yume iPad app with a hero video, controlled by scroll if possible.

**Visual:**

* Background: clean white.
* Yume logo in top-left (dark navy).
* Big soft heading at top-left or centered.

Example heading:

> Introducing Yume
> *The future of bedtime.*

**Center:**

* Large tablet/iPad graphic/video with soft shadow.
* Use the provided tablet video (showing “once upon” etc).

**Behavior: scroll-scrubbed video**

Ideal implementation:

* The overall section height: 200–250vh (taller than viewport).
* The video container is **pinned** (position: sticky) in the center of the viewport.
* As user scrolls through this section:

```text
progress = clamp((scrollY - sectionTop) / sectionHeight, 0, 1)
video.currentTime = progress * video.duration
```

* Video is **muted**, **no controls**, plays only via scroll.
* Fallback (if scroll-scrub is too complex or for mobile):

  * On section enter, autoplay (`loop`, `muted`) and fade in; on exit, fade out or pause.

Optional small copy under the video:

> Designed for iPad, built for calm, and compatible with the screens families already have.

---

### SECTION 4 – Logo Transition (Full Logo ➜ Header Logo)

**ID:** `#logo-transition`
**Purpose:** Turn Yume into a clear brand moment. Large logo moves and becomes the site’s anchored logo.

**Visual:**

* Background: white.
* Huge “YUME” wordmark in center (using the provided logo, dark navy).
* No other major content at first.

**Scroll behavior:**

As the user scrolls through this section:

* The big center logo:

  * Moves upward and slightly left.
  * Shrinks to become the standard logo size in the top-left header (or nav).
* Once it reaches top-left, it “pins” and becomes the persistent site logo for the remaining sections.

Pseudo-spec:

```text
Within #logo-transition:
  progress = localScrollProgress (0 to 1)

  logo.scale = lerp(1.0 → 0.3, progress)
  logo.translateY = lerp(0px → -40vh, progress)
  logo.translateX = lerp(0px → -40vw, progress)  // tune so it aligns top-left

At end of section:
  logo.position becomes "fixed" or part of the global header.
```

This can be done with:

* Framer Motion (layout + scroll)
* GSAP ScrollTrigger
* Or manual transform interpolation.

---

### SECTION 5 – Logo + Product Explanation

**ID:** `#logo-explainer`
**Purpose:** Immediately follow the logo movement with a clear explanation of Yume (app icon + pitch).

**Visual layout (desktop):**

* Left side: large rounded-rectangle icon of the parent + child + moon (tablet icon from slides).
* Right side: text block.

**Copy:**

Heading:

> The app that makes sleep healthier, *stories richer*, and your bond **stronger**.

Body (3 bullets / short paragraphs):

* You read together, or your recorded voice reads when you can’t be there.
* Your child chooses gentle story paths while visuals stay soft and sleep-friendly.
* Yume winds down into calming soundscapes, helping them drift into deeper, healthier sleep.

Optionally a small CTA here:

* Primary button: **Get early access**
* Secondary link: *See how it works ↓* (scrolls to features).

**Animation:**

* Section fades in as soon as logo reaches its final position.
* Icon slides in from left, text from right, over 400–600ms.

---

### SECTION 6 – Features (Horizontal Card Deck)

**ID:** `#features`
**Purpose:** Highlight core features with a horizontally scrollable card deck.

**Background:** `--bg-light` (white) or very pale blue.

**Layout (desktop):**

* Left column, vertically centered:

  Title:

  > Engineered for better nights

  Short description (optional, 1–2 lines):

  > Smart enough for your tech, gentle enough for their sleep.

* Right: horizontally scrollable / draggable feature cards, 3 visible on desktop.

**Cards:**

* Rounded corners (16–24px).
* Border: `2px solid var(--accent-primary)` (soft yellow).
* Slight drop shadow.
* Internal padding: 24–32px.
* Mix of vector graphic / photo background is allowed.

Example cards:

1. **Universal compatibility**

   * Works with iPad and major tablet models.
   * Simple setup in minutes.

2. **Sleep mode lock**

   * Locks the device into bedtime mode.
   * Prevents app switching and late-night scrolling.

3. **Blue-light filter**

   * Warms the screen tone automatically as bedtime approaches.
   * Designed to protect circadian rhythms.

You can add more cards (story co-creation, insights, etc.) as slides 2–3 of the deck.

**Interaction:**

* Desktop:

  * Horizontal scroll using trackpad/scroll.
  * Optional arrows (left/right) overlayed.
* Mobile:

  * Swipe cards left/right.
* Under the deck, dots indicate the current position.

---

### SECTION 7 – Subscription Plans & CTA

**ID:** `#plans`
**Purpose:** Present 3 subscription tiers + shared benefits + final call to action.

**Background:** `--bg-dark`.

**Heading:**

> Unlock the *magic*

**Layout (desktop):**

* Yume logo remains in top-left (from logo transition).
* Center area: three pricing cards side-by-side.

General card style:

* Rounded corners (16–24px).
* Background colors:

  * Starter: `--blue-100`
  * Plus: a medium blue (`mix(navy-600, blue-300)`)
  * Infinite: `--navy-600` with `--accent-primary` border (high emphasis)
* Title uses script “dream” + plan name in caps: `dream STARTER`, `dream PLUS`, `dream INFINITE`.

Example copy (adapt/adopt from slides):

**Starter**

* For parents trying Yume for the first time.
* £xx / month
* ✓ Limited story library (e.g., 5 rotating stories per month)
* ✓ Basic co-creation (2 decision points per story)
* ✓ Standard AI visuals
* ✓ Parent or app narration (no custom parent voice)

**Plus**

* For parents who want a tailored bedtime experience.
* £xx / month
* ✓ Full story library access
* ✓ Enhanced co-creation (multiple decision points)
* ✓ Enhanced visuals
* ✓ Parent voice recording for narration
* ✓ Custom story length
* ✓ Sound effects
* ✓ Progress insights (sleep onset patterns & story engagement)
* ✓ Download stories for offline nights

**Infinite**

* For parents who want every night to feel uniquely crafted.
* £xx / month
* ✓ Unlimited co-creation paths (branching stories with adaptive complexity)
* ✓ Personalized story worlds based on child’s preferences
* ✓ Advanced sleep sensing (if available later)
* ✓ Adaptive bedtime rhythm (adjusts pacing to nightly patterns)
* ✓ Multi-child profiles
* ✓ Exclusive monthly story drops
* ✓ Priority access to new features

**Below the cards:** shared features row.

Subheading:

> All plans include:

Icons (circle badges) with labels:

* ✨ **Sleep Mode Lock**
* 🌙 **Blue-light–free mode**
* 💤 **Automatic soft ending**
* 🔊 **White noise after the story**

Use the provided icon artwork; align them horizontally on desktop, stacked in grid on mobile.

**Final CTA:**
At the bottom of this section (centered):

Primary button:

> Start your free bedtime trial

Secondary text link below:

> Or join the waitlist → (opens sign-up form / email capture)

---

## 3. Navigation & Footer

### 3.1 Navigation

Always-visible (after logo transition completes):

* Left: Yume logo (from Section 4, pinned).
* Right: simple inline links:

  * About (scroll to problem/rest section)
  * How it works (scroll to features)
  * Plans (scroll to pricing)
  * Get early access (scroll to CTA/button or open modal)

On the hero and early sections, logo/nav can either:

* be overlayed with transparent background, or
* fade in after a small scroll.

On mobile, use a simple hamburger → slide-down menu.

---

### 3.2 Footer

Simple, dark footer at the very bottom (after plans/CTA or integrated into plans section):

* Background: slightly darker than `--bg-dark` or same.
* Elements:

  * Small Yume logo.
  * Links: Privacy, Terms, Contact, maybe “For partners”.
  * Copyright text.

---

## 4. Accessibility & Performance

* All text must have sufficient contrast (check against WCAG AA).
* Provide `alt` text for all images (e.g., “Child holding tablet under blanket”, “Parent reading with child”, etc.).
* Ensure the site is usable with reduced motion:

  * Respect `prefers-reduced-motion` and reduce/disable scroll animations (use simple fades).
* Lazy-load non-critical images and the video.
* Optimize video for web (muted, compressed, correct dimensions).

---

## 5. Assets (from slides)

Expected files (names can be adjusted):

* `hero-problem.jpg` – child lit by tablet (dark).
* `rest-mother-child.jpg` – mother and child cuddling with warm lamp.
* `yume-tablet-video.mp4` – rotating/hovering tablet with “once upon…”.
* `logo-yume-wordmark.svg` – large “YUME”.
* `logo-yume-tagline.svg` – “YUME – Designing dreams” (optional).
* `icon-yume-app.svg` – parent & child in tablet with moon and star.
* Feature card images (optional; can be flat illustrations).
* Subscription feature icons (sleep mode, moon, END blob, waveform).

---

## 6. Summary of Scroll Story Flow

1. **Hero Problem** – dark, emotional, sets the stakes.
2. **Rest + Solution (combined)** – warm, hopeful, introduces concept of “restful technology” and the app.
3. **Product Video** – bright, clean; scroll-scrubbed iPad video.
4. **Logo Transition** – huge YUME moves and becomes header logo.
5. **Logo + Explainer** – icon + clear explanation of what the app does.
6. **Features Deck** – horizontal cards show key capabilities.
7. **Plans + CTA** – pricing tiers, shared benefits, final “Start your free bedtime trial”.

The whole site should feel like a single continuous bedtime story being told to the visitor.