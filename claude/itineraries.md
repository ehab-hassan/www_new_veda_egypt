# Additional Requirements

## Website Navigation

Primary navigation should remain clean and minimal.

```text
Home
Fleet
Itineraries
Destinations
Plan Your Visit
Contact
```

Do NOT create a dropdown for Itineraries until multiple itineraries have been published.

---

## Future Mega Menu

Once enough itineraries are available, convert the Itineraries navigation item into a mega menu.

Structure:

```text
Itineraries
├── All Itineraries
│
├── Classic Cruises
│   ├── 4 Nights / 5 Days
│   ├── 5 Nights / 6 Days
│   ├── 6 Nights / 7 Days
│   └── 7 Nights / 8 Days
│
├── Dendera & Abydos Cruises
│   ├── 6 Nights / 7 Days
│   └── 7 Nights / 8 Days
│
└── Grand Journeys
    ├── 12 Nights / 13 Days
    └── 13 Nights / 14 Days
```

The mega menu should be visually elegant and image-driven.

Avoid long dropdown lists.

---

## Do Not Show Route Variations In Navigation

Do NOT create separate menu entries for:

```text
6 Nights Aswan → Luxor
6 Nights Luxor → Aswan
7 Nights Aswan → Luxor
7 Nights Luxor → Aswan
```

This creates clutter and poor UX.

Instead, route selection belongs inside the itinerary page.

---

## Itinerary Landing Page

URL:

```text
/itineraries
```

Page Title:

```text
Itineraries
```

Subtitle:

```text
Explore our collection of handcrafted Nile cruise itineraries,
from classic voyages to extended journeys through Egypt's most
remarkable landscapes and monuments.
```

---

## Itinerary Filtering

Add filtering controls.

### Duration

```text
4 Nights
5 Nights
6 Nights
7 Nights
12 Nights
13 Nights
```

### Route

```text
Aswan → Luxor
Luxor → Aswan
Cairo → Aswan
Aswan → Cairo
Cairo → Luxor
Luxor → Cairo
Roundtrip
```

### Experience

```text
Classic Cruise
Dendera & Abydos
Grand Journey
```

### Vessel

```text
Veda I
Veda II
Veda III
Veda IV
```

Filters should update results dynamically.

---

## Itinerary Cards

Each itinerary card should contain:

* Hero image
* Duration
* Route
* Short description
* Highlight locations
* CTA button

Example:

```text
6 Nights / 7 Days

Aswan → Dendera → Luxor

Philae Temple
Kom Ombo
Edfu
Abydos
Dendera
Karnak

View Itinerary →
```

---

## Itinerary Detail Page

URL example:

```text
/itineraries/6-nights-7-days-aswan-dendera-luxor
```

Sections:

1. Hero
2. Quick Facts
3. Route Overview
4. Highlights
5. Day-by-Day Timeline
6. Vessel Availability
7. FAQ
8. Booking CTA

---

## Route Selection

Support multiple directions from the same itinerary data.

Example:

```text
Available Routes

○ Aswan → Luxor
○ Luxor → Aswan
```

Changing route should reuse the same itinerary structure whenever possible.

Avoid duplicated content files.

---

## Vessel Availability

Display available vessels directly on itinerary pages.

Example:

```text
Available On

Veda I
Veda II
Veda III
Veda IV
```

Each vessel card should link to its Fleet page.

---

## CMS Content Strategy

All itineraries must be stored as content files.

Recommended structure:

```text
src/content/itineraries/

4n-5d-aswan-luxor.json
5n-6d-aswan-luxor.json
6n-7d-aswan-dendera-luxor.json
7n-8d-luxor-roundtrip.json
12n-13d-cairo-luxor.json
13n-14d-cairo-aswan.json
```

Adding a new itinerary should require only a new content file.

No page template modifications.

---

## Reference Itinerary

Use the uploaded itinerary PDF as the initial implementation example.

Program:

```text
6 Nights / 7 Days
Aswan → Dendera → Luxor
```

Include:

Day 1

* Philae Temple

Day 2

* Kom Ombo
* El Silsila

Day 3

* Edfu Temple

Day 4

* Valley of the Kings
* Temple of Hatshepsut
* Colossi of Memnon

Day 5

* Abydos
* Temple of Seti I
* Dendera Temple

Day 6

* Karnak Temple
* Luxor Temple

Day 7

* Disembarkation

This itinerary should be used as the reference implementation for all future itineraries.
