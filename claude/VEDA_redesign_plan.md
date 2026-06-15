# VEDA Egypt — Website Redesign Plan
**Project:** www-new-veda-egypt.vercel.app  
**Stack:** Astro + Tailwind CSS  
**Goal:** Shift from dark aesthetic to warm light palette + add missing content sections

---

## Color Palette Reference

| Token Name     | Hex       | Usage                          |
|----------------|-----------|-------------------------------|
| Linen White    | `#FEFCF7` | Page background                |
| Sand Cream     | `#F5EFE2` | Alternate section backgrounds  |
| Desert Bone    | `#EDE8DC` | Borders, dividers              |
| Nile Gold      | `#B8945A` | CTA buttons, accents, icons    |
| Sandstone      | `#8B7355` | Body text, muted labels        |
| Dark Earth     | `#2C2016` | Headings, logo, nav text       |

---

## Phase 1 — Global Colors & Typography
**Goal:** Replace all dark backgrounds/text with the new warm light palette sitewide.

### Tasks:
1. **`tailwind.config.mjs`** — Add custom color tokens:
   ```js
   colors: {
     linen: '#FEFCF7',
     sand: '#F5EFE2',
     bone: '#EDE8DC',
     gold: '#B8945A',
     sandstone: '#8B7355',
     earth: '#2C2016',
   }
   ```

2. **`src/styles/global.css`** (or base layout) — Set CSS variables:
   ```css
   :root {
     --color-bg: #FEFCF7;
     --color-bg-alt: #F5EFE2;
     --color-border: #EDE8DC;
     --color-accent: #B8945A;
     --color-text-muted: #8B7355;
     --color-text-heading: #2C2016;
   }
   body {
     background-color: var(--color-bg);
     color: var(--color-text-heading);
   }
   ```

3. **Replace** all `bg-black`, `bg-gray-900`, `bg-zinc-900`, `text-white` classes across all `.astro` files with the new tokens.

4. **Navbar** — Change to:
   - Background: `bg-[#FEFCF7]` with bottom border `border-b border-[#EDE8DC]`
   - Logo & links: `text-[#2C2016]`
   - CTA button: `bg-[#B8945A] text-[#FFF8ED] rounded-full`
   - On scroll: add subtle `shadow-sm`

5. **Footer** — Change to:
   - Background: `bg-[#F5EFE2]`
   - Text: `text-[#8B7355]`
   - Border top: `border-t border-[#EDE8DC]`

---

## Phase 2 — Hero & Homepage Sections
**Goal:** Make the homepage feel light, warm, and premium.

### Tasks:
1. **Hero section** — Update background:
   - Remove dark overlay on hero image
   - Use a light warm overlay: `bg-[#F5EFE2]/60` blended over photo
   - Headline color: `text-[#2C2016]`
   - Subheading: `text-[#8B7355]`
   - Primary CTA: `bg-[#B8945A] text-[#FFF8ED] rounded-full px-6 py-3`
   - Secondary CTA: `border border-[#C4A882] text-[#5C4A2E] rounded-full px-6 py-3`

2. **"At a Glance" stats section** — Background: `bg-[#F5EFE2]`, numbers in `text-[#B8945A]`

3. **"Three Principles" cards** — Card bg: `bg-[#F5EFE2]`, border: `border-[#EDE8DC]`

4. **Itinerary section** — Alternating: white bg + sand bg per day item

5. **What's Included section** — bg: `bg-[#FEFCF7]`, included items use `text-[#B8945A]` checkmarks

6. **Fleet preview section** — bg: `bg-[#F5EFE2]`

7. **Wellness section** — bg: `bg-[#FEFCF7]`

---

## Phase 3 — Fleet / Dahabiyas Pages
**Goal:** Each boat gets a dedicated detailed section with real specs and photos.

---

### Veda One — "Our Renovated Gem"

**Tagline:** A Balance Between Proven Performance & Modern Luxury

**Specs:**
| Field | Value |
|-------|-------|
| Length × Width | 50m × 8m |
| Decks | 2 decks, 2 masts |
| Total cabins | 10 |
| Suites | 4 suites with private outdoor terrace |
| Standard cabins | 6 large panoramic cabins |
| Max guests | 20 passengers |
| Launched | December 2017 |
| Last renovation | August 2019 |
| Solar power | 13 KW PV array + 70 KWh battery bank |
| Solar water heaters | 33 KW |
| A/C | Central, individual remote control |
| Water purification | 3-stage filtration + reverse osmosis |

**Spaces to highlight (with photos):**
- Standard Panoramic Cabin
- Suite with Private Outdoor Terrace
- Air-conditioned Outdoor Glass-enclosed Restaurant
- Lower Sundeck
- Indoor Lounge, Bar & Dining Area
- Outdoor Lounge & Bar
- Upper Expansive Sundeck

**CTA:** `Enquire about Veda One →`

---

### Veda Two — "The Intimate Classic"

**Tagline:** Seasoned & Cozy

**Specs:**
| Field | Value |
|-------|-------|
| Length × Width | 45m × 8m |
| Decks | 1 deck, 2 masts |
| Total cabins | 10 |
| Suites | 2 suites with private balconies |
| Standard cabins | 8 standard panoramic cabins |
| Max guests | 20 passengers |
| Launched | September 2012 |
| Last renovation | September 2021 |
| Solar power | 10 KW PV array + 50 KWh battery bank |
| Solar water heaters | 24 KW |
| A/C | Individual split units with remote in each cabin |
| Water purification | 3-stage filtration + reverse osmosis |

**Spaces to highlight (with photos):**
- Standard Panoramic Cabin
- Suite with Private Outdoor Terrace
- Outdoor Restaurant
- Indoor Lounge
- Upper Sundeck, Bar & Outdoor Lounge

**CTA:** `Enquire about Veda Two →`

---

### Veda Three — "The Exclusive Boutique"

**Tagline:** Exclusive & Intimate Setting

**Specs:**
| Field | Value |
|-------|-------|
| Length × Width | 19m × 5m (18m hull) |
| Decks | 1 deck, 2 masts |
| Total cabins | 5 |
| Suites | 2 suites with balconies |
| Standard cabins | 3 standard panoramic cabins |
| Max guests | 10 passengers |
| Launched | September 2009 |
| Last renovation | September 2021 |
| Solar power | 4 KW PV array + 15 KWh battery bank |
| Solar water heaters | 7 KW |
| A/C | Individual Haier invertor split units with remote |
| Water purification | 3-stage filtration + reverse osmosis |

**Spaces to highlight (with photos):**
- Standard Panoramic Cabin
- Suite
- Outdoor Restaurant
- Upper Sundeck, Bar & Outdoor Lounge

**Best for:** Small groups, families, private retreats (max 10 guests)

**CTA:** `Enquire about Veda Three →`

---

### Veda Four — "State of the Art Flagship"

**Tagline:** The Largest, Newest & Most Advanced

**Specs:**
| Field | Value |
|-------|-------|
| Length × Width | 55m × 8m |
| Decks | 2 decks, 2 masts |
| Total cabins | 14 |
| Suites | 4 suites with private outdoor terrace |
| Standard cabins | 10 large panoramic cabins |
| Max guests | 28 passengers |
| Launched | February 2020 |
| Last renovation | August 2024 |
| Solar power | 20 KW PV array + 70 KWh battery bank |
| Solar water heaters | 48 KW |
| A/C | Central, individual remote control |
| Water purification | 3-stage filtration + reverse osmosis |

**Spaces to highlight (with photos):**
- Standard Panoramic Cabin
- Suite with Private Outdoor Terrace
- Air-conditioned Outdoor Glass-enclosed Restaurant
- Lower Sundeck, Lounge & Bar
- Underground Lounge & TV Area
- Upper Sundeck

**Best for:** Large groups, corporate retreats, big families

**CTA:** `Enquire about Veda Four →`

---

### Fleet Comparison Table
Add this to the top of the `/dahabiyas` page as a quick-reference:

| | Veda One | Veda Two | Veda Three | Veda Four |
|---|---|---|---|---|
| **Nickname** | Renovated Gem | Intimate Classic | Exclusive Boutique | Art Flagship |
| **Length** | 50m | 45m | 19m | 55m |
| **Cabins** | 10 | 10 | 5 | 14 |
| **Suites** | 4 | 2 | 2 | 4 |
| **Max guests** | 20 | 20 | 10 | 28 |
| **Decks** | 2 | 1 | 1 | 2 |
| **Launched** | 2017 | 2012 | 2009 | 2020 |
| **Best for** | Groups & couples | Intimate groups | Ultra-private | Large groups |

### Implementation notes:
- Use `bg-[#F5EFE2]` for each boat section, alternating with `bg-[#FEFCF7]`
- Specs grid: 2-column on mobile, 3-column on desktop
- Photo gallery: CSS grid `grid-cols-2 md:grid-cols-3` with `aspect-video` images
- Each CTA button pre-fills the enquiry form: `?boat=veda-one`

---

## Phase 4 — Itinerary Pages
**Goal:** Detailed day-by-day pages with temple descriptions.

### Tasks:
1. **Create `/itineraries` page** (or expand `/plan-your-visit`)

2. **Add 3 duration options:**
   - 4 nights / 5 days
   - 6 nights / 7 days (current default)
   - Custom / flexible

3. **For each day stop, add:**
   - Name of site (e.g. Karnak Temple, Edfu Temple)
   - 2–3 sentence description of why it's special
   - What activity/experience happens there
   - Approximate time of arrival

4. **Visual timeline** — Horizontal or vertical day-by-day layout with boat icon moving along route

5. **Color:** Day markers use `bg-[#B8945A]`, timeline line `border-[#EDE8DC]`

---

## Phase 5 — Social Proof & Trust
**Goal:** Add testimonials and press mentions.

### Tasks:
1. **Guest Testimonials section** (add to homepage + separate page):
   - Minimum 4–5 quotes from real guests
   - Each card: quote text + guest name + country + trip date
   - Card styling: `bg-[#F5EFE2]` border `border-[#EDE8DC]`
   - Large opening quote mark in `text-[#B8945A]`

2. **"As Featured In" section** (if press coverage exists):
   - Row of grayscale publication logos
   - Background: `bg-[#FEFCF7]`
   - Label: "As featured in" in `text-[#8B7355]`

3. **FAQ Section** (add to `/plan-your-visit` or separate `/faq`):
   - Questions to include:
     - What is included in the charter rate?
     - How many guests can each boat accommodate?
     - What is the best time of year to sail?
     - Can you accommodate dietary requirements?
     - How do I book / what is the reservation process?
     - What is the cancellation policy?
   - Styling: accordion expand/collapse, border `border-[#EDE8DC]`

---

## Phase 6 — WhatsApp & Contact Enhancements
**Goal:** Make it easy for potential guests to reach out instantly.

### Tasks:
1. **Floating WhatsApp button** — Fixed bottom-right on all pages:
   ```html
   <a href="https://wa.me/[PHONE_NUMBER]" target="_blank"
      class="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
     <!-- WhatsApp SVG icon -->
   </a>
   ```

2. **Phone/WhatsApp in Navbar** — Add visible contact info next to Reserve button:
   - Small text: `+20 [number]` with WhatsApp icon

3. **Reserve/Enquire form improvements:**
   - Change button label from "Book" to "Enquire" or "Send Enquiry"
   - Add field: "Which boat are you interested in?" (dropdown: Veda 1 / Veda 2 / Veda 3 / Veda 4 / Not sure)
   - Add field: "Approximate number of guests"
   - Confirmation message after submit: warm, personal tone

---

## Phase 7 — Polish & Performance
**Goal:** Final cleanup and optimization.

### Tasks:
1. **Image optimization** — Make sure all images use `loading="lazy"` and are served as `.webp`
2. **Meta tags** — Update `og:image` and descriptions per page to reflect new branding
3. **Mobile nav** — Test all new sections on mobile, ensure touch targets ≥ 44px
4. **Smooth scroll** — Add `scroll-behavior: smooth` to html element
5. **Hover states** — All links and buttons should have smooth `transition-colors duration-200`
6. **Section spacing** — Consistent `py-16 md:py-24` between all major sections

---

## Summary — Recommended Order

| Phase | Priority | Estimated effort |
|-------|----------|-----------------|
| Phase 1 — Global colors | 🔴 High | Small — mostly find & replace |
| Phase 2 — Homepage sections | 🔴 High | Medium |
| Phase 3 — Fleet pages | 🔴 High | Medium — needs real photos |
| Phase 6 — WhatsApp & contact | 🟠 Medium | Small |
| Phase 4 — Itinerary pages | 🟠 Medium | Medium — needs copy |
| Phase 5 — Social proof | 🟠 Medium | Medium — needs guest quotes |
| Phase 7 — Polish | 🟡 Low | Small |

**Start with Phase 1 first** — it changes the entire feel of the site instantly with minimal risk.
