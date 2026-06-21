// Curated Experiences — optional enhancements to a Nile journey.
// Shared by the homepage section, the /experiences page, and the booking form.
export interface Experience {
  slug: string;
  title: string;
  desc: string;
  image: string;
}

export const EXPERIENCES: Experience[] = [
  {
    slug: 'sunrise-yoga',
    title: 'Sunrise Yoga',
    desc: 'Begin your day with gentle movement and breathtaking Nile views as the river awakens.',
    image: '/images/yoga-on-deck-3-1280x800.jpg',
  },
  {
    slug: 'therapeutic-massage',
    title: 'Therapeutic Massage',
    desc: 'Relax and restore with private wellness treatments arranged during your journey.',
    image: '/images/mbr-3-436x291.jpg',
  },
  {
    slug: 'wellness-cuisine',
    title: 'Wellness Cuisine',
    desc: 'Fresh seasonal ingredients, healthy menus, and personalized dietary options.',
    image: '/images/group-eating-1280x800.jpg',
  },
  {
    slug: 'meditation-mindfulness',
    title: 'Meditation & Mindfulness',
    desc: 'Quiet moments for reflection surrounded by the timeless rhythm of the Nile.',
    image: '/images/meditation.jpg',
  },
  {
    slug: 'active-exploration',
    title: 'Active Exploration',
    desc: 'Sunrise walks, cycling routes, village visits, and nature experiences.',
    image: '/images/egypte-veda-490-van-577-2-1280x800.jpg',
  },
];
