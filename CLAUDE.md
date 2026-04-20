# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Commands

```bash
npm run dev       # start dev server at localhost:4321
npm run build     # production build → dist/
npm run preview   # serve the built dist/ locally
```

No linter, formatter, or test suite is configured. TypeScript checking is done implicitly by Astro at build time.

---

## Project goal

Rebuild and maintain the homepage of `veda-egypt.com` as a **premium, modern experience website** for luxury Nile dahabiyas. The site is already built — new work should enhance, not restructure.

---

## Stack

- **Astro 5** (static output, no SSR) — zero client-side JS by default; scripts must opt in with `<script>` or `is:inline`
- **Tailwind CSS 3** — configured in `tailwind.config.mjs`
- **Fonts** — `Cormorant Garamond` (serif headings) + `Jost` (sans body), loaded from Google Fonts in `MainLayout.astro`
- **GSAP** — loaded dynamically from CDN only on `plan-your-visit.astro`; not an npm package

---

## Architecture

### Layout shell — `src/layouts/MainLayout.astro`

Every page wraps in `MainLayout`. It owns:
- `<head>` with SEO meta, OG tags, canonical URL, JSON-LD schema
- Fixed navbar (transparent → `bg-void/95` on scroll) with desktop nav + mobile overlay menu
- Footer with links, newsletter form, and social icons
- All **global CSS**: CSS custom properties, scroll-reveal classes, `.gold-line`, `prefers-reduced-motion` reset, and mobile menu animation states
- The `IntersectionObserver` that drives `.reveal*` animations

**Add global styles only here.** Component-scoped `<style>` blocks are fine for component-local rules.

### Pages — `src/pages/`

| File | Route |
|------|-------|
| `index.astro` | `/` — assembles all homepage components in order |
| `dahabiyas.astro` | `/dahabiyas` — full fleet detail page |
| `plan-your-visit.astro` | `/plan-your-visit` — itinerary + cinematic GSAP scroll section |
| `gallery.astro` | `/gallery` |
| `our-team.astro` | `/our-team` |
| `reserve.astro` | `/reserve` — contact/reservation form (Formspree; `YOUR_FORM_ID` placeholder needs replacing with a real form ID) |

### Components — `src/components/`

Homepage section order (`index.astro`):
`Hero` → `Experience` → `Features` → `Dahabiyas` → `Lifestyle` → `Testimonials` → `PressFeature` → `CTA`

Each component is self-contained: imports its own images from `src/images/`, defines its own `<style>` block if needed, and includes its own `<script>` for client-side behaviour.

### Images

- **`src/images/`** — imported in frontmatter and processed by Astro's `<Image>` component (WebP/AVIF, responsive `widths`/`sizes`). Use this for components.
- **`public/images/`** — served as-is, no optimisation. Used by pages via plain `<img src="/images/...">` (`dahabiyas.astro`, `plan-your-visit.astro`, `gallery.astro`, `our-team.astro`).
- **`public/brand_assets/`** — logo and brand files, referenced as `/brand_assets/...`.

---

## Design system

Tokens are defined in both `tailwind.config.mjs` (for Tailwind classes) and as CSS custom properties in `MainLayout.astro` (for inline styles and `<style>` blocks).

| Group | Key tokens |
|-------|-----------|
| Dark backgrounds | `void` (#070b07), `forest` (#0e1a0e) |
| Light backgrounds | `soft-green` (#e8efe6), `warm-beige` (#f5f3ee) |
| Gold accent | `gold` (#a07c3a), `gold-light` (#c9a85c), `gold-pale` (#dfc99a) |
| Text on dark | `ivory` (#f0ebe0), `warm-gray` (#8a8278) |
| Text on light | `ink` (#1c2118), `ink-mid` (#3a4035), `ink-light` (#6b7264) |
| Letter spacing | `tracking-ultra` (0.22em), `tracking-mega` (0.4em) |

Dark sections use `bg-void` / `bg-forest` + `text-ivory`. Light sections use `bg-soft-green` / `bg-warm-beige` + `text-ink`.

Headings: `font-serif font-light`. Body: `font-sans`. Eyebrows/labels: `font-sans text-xs tracking-ultra uppercase text-gold`.

---

## Key conventions

- **`ClientRouter` (View Transitions) is intentionally absent** — it caused blank-page issues with script re-initialisation. Do not re-add it.
- **Scroll-reveal**: add `reveal` (fade-up), `reveal-left`, or `reveal-right` class, optionally `reveal-delay-{1-7}` for stagger. The observer in `MainLayout` handles the rest automatically.
- **GSAP on plan-your-visit**: the `ScrollTrigger` pattern requires both an `onRefresh` callback and `window.addEventListener('load', ScrollTrigger.refresh)` to survive page refreshes — see the existing implementation before modifying.
- **`is:inline` scripts**: used when the script must not be bundled (e.g. the GSAP block). Regular `<script>` tags are bundled and deduplicated by Astro.
- **No `git push`**: the user manages all pushes manually — never run `git push`.
