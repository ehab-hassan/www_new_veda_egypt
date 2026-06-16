import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      date: z.coerce.date(),
      author: z.string().default('VEDA Egypt'),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

// ── Itineraries ──────────────────────────────────────────────────────────
// One JSON file per itinerary in src/content/itineraries/. Adding a new
// itinerary requires only a new file — no template changes.
//
// Each itinerary can be sailed in one or more `routes` (directions). Because
// the two directions are NOT simple reversals of each other, every route
// carries its OWN day-by-day `timeline`. The detail page renders one card and
// lets the visitor toggle between directions.
const dayItem = z.object({
  /** e.g. "Aswan & Philae Temple" */
  title: z.string(),
  /** Monuments visited this day — rendered as chips. */
  places: z.array(z.string()).default([]),
  /** Narrative paragraph for the day. */
  description: z.string(),
  image: z.string().optional(),
  /** Optional hour-by-hour beats, rendered as a compact timetable. */
  schedule: z.array(z.object({ time: z.string(), text: z.string() })).default([]),
});

const route = z.object({
  /** e.g. "Aswan → Luxor" */
  label: z.string(),
  from: z.string(),
  to: z.string(),
  /** This direction's own day-by-day program, day 1 → last. */
  timeline: z.array(dayItem).min(1),
});

const itineraries = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/itineraries' }),
  schema: z.object({
    title: z.string(),
    /** Short marketing subtitle, shown on the card + hero. */
    summary: z.string(),
    /** Longer intro paragraph for the detail page route overview. */
    description: z.string().optional(),
    nights: z.number().int(),
    days: z.number().int(),
    /** Experience category — groups itineraries on the landing page. */
    experience: z.enum(['Classic Cruise', 'Dendera & Abydos', 'Grand Journey']),
    /** Vessels this itinerary is available on (e.g. "Veda I"). */
    vessels: z.array(z.string()).min(1),
    /** Marquee monuments, shown as chips on the card + highlights section. */
    highlights: z.array(z.string()).min(1),
    hero: z.string(),
    cardImage: z.string(),
    routeOverview: z.string().optional(),
    /** Extra quick facts appended after the auto-generated duration/route facts. */
    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    /** One or more sailing directions, each with its own timeline. */
    routes: z.array(route).min(1),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    featured: z.boolean().default(false),
    /** Placeholder card — meta is real, but the day-by-day is not yet written. */
    comingSoon: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal, itineraries };
