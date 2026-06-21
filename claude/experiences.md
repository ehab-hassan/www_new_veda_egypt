# VEDA Experiences Page Implementation Guide

## Objective

Create a new Experiences section that supports the VEDA brand without shifting the company positioning from Luxury Nile Travel to Wellness Retreat.

Experiences should be presented as optional enhancements to a Nile journey, not the primary reason for travel.

---

# Information Architecture

## Main Navigation

Keep the existing navigation unchanged:

* Dahabiyas
* Itineraries
* Plan Your Visit
* Gallery
* Our Team

Primary CTA:

* Inquire Now

Do NOT add:

* Wellness
* Healing
* Retreats
* Energy Treatments

to the main navigation.

---

# New Experiences Page

Create:

```text
/experiences
```

Page Title:

```text
Experiences on the Nile
```

Subtitle:

```text
Curated moments designed to enrich your journey through culture, wellbeing, and authentic Nile living.
```

---

# Home Page Integration

Add a new section on the Home Page.

Suggested placement:

* After Signature Experiences
* Before Final CTA

Section Title:

```text
Curated Experiences
```

Description:

```text
Enhance your journey with thoughtfully selected experiences designed around wellbeing, culture, and authentic Nile living.
```

---

# Experience Cards

Display 5 cards.

Each card includes:

* Image
* Title
* Short Description

---

## Sunrise Yoga

Title:

```text
Sunrise Yoga
```

Description:

```text
Begin your day with gentle movement and breathtaking Nile views as the river awakens.
```

---

## Therapeutic Massage

Title:

```text
Therapeutic Massage
```

Description:

```text
Relax and restore with private wellness treatments arranged during your journey.
```

---

## Wellness Cuisine

Title:

```text
Wellness Cuisine
```

Description:

```text
Fresh seasonal ingredients, healthy menus, and personalized dietary options.
```

---

## Meditation & Mindfulness

Title:

```text
Meditation & Mindfulness
```

Description:

```text
Quiet moments for reflection surrounded by the timeless rhythm of the Nile.
```

---

## Active Exploration

Title:

```text
Active Exploration
```

Description:

```text
Sunrise walks, cycling routes, village visits, and nature experiences.
```

---

# CTA

Button:

```text
Explore Experiences
```

Links to:

```text
/experiences
```

---

# Experiences Page Layout

## Section 1 – Hero

Large cinematic image.

Title:

```text
Experiences on the Nile
```

Description:

```text
Thoughtfully curated experiences that complement your journey and deepen your connection with the Nile.
```

---

## Section 2 – Introduction

Title:

```text
A Journey Beyond the Itinerary
```

Text:

```text
Some moments cannot be scheduled. They unfold naturally through movement, wellness, culture, and meaningful encounters along the Nile.
```

---

## Section 3 – Experiences Grid

Display all experiences in a premium card layout.

Cards may include:

* Large image
* Description
* Optional Learn More action

---

## Section 4 – Personalised Experiences

Title:

```text
Tailored To Your Journey
```

Text:

```text
Many experiences can be incorporated into your itinerary upon request. Our team will help design the perfect balance between exploration, relaxation, and cultural immersion.
```

---

# Inquiry Form Integration

Inside:

```text
Plan Your Journey
```

Add a new optional section.

Title:

```text
Enhance Your Journey
```

Checkboxes:

* Sunrise Yoga
* Therapeutic Massage
* Wellness Cuisine
* Meditation & Mindfulness
* Active Exploration

Optional field:

```text
Other Experience Requests
```

---

# CRM Data Structure

Add:

```json
{
  "experiences": [
    "Sunrise Yoga",
    "Meditation & Mindfulness"
  ]
}
```

to inquiry submissions.

---

# Design Direction

Important:

Avoid visual language associated with:

* Energy Healing
* Spiritual Retreats
* New Age Tourism
* Mysticism

Instead focus on:

* Luxury Travel
* Authentic Egypt
* Slow Travel
* Wellbeing
* Nature
* Culture

---

# Photography Direction

Use:

* Morning light
* Golden sunrise
* Real guests
* Natural moments
* Authentic Nile scenery

Avoid:

* Stock yoga photos
* Spiritual symbolism
* Chakra imagery
* Mystical effects

---

# SEO

Page Title:

```text
Experiences on the Nile | VEDA Egypt
```

Meta Description:

```text
Discover curated wellness, cultural, and active experiences designed to enrich your luxury Dahabiya journey along the Nile.
```

Keywords:

* Nile experiences
* Luxury Nile cruise activities
* Dahabiya experiences
* Wellness on the Nile
* Egypt luxury travel
* Nile cultural experiences

---

# Success Criteria

The Experiences section should:

1. Enhance the luxury positioning of VEDA.
2. Increase inquiry quality.
3. Create additional upsell opportunities.
4. Support wellness without becoming a wellness retreat brand.
5. Feel elegant, premium, and consistent with the new VEDA identity.
