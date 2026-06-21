# VEDA Booking Flow Redesign
## Goal

Transform the current "Booking" page into a high-converting luxury travel inquiry experience.

Important:
- This is NOT a real-time booking system.
- No inventory management.
- No cabin availability engine.
- No online payment.
- The purpose is to collect qualified leads and send them to the VEDA team for follow-up.

The user should feel they are planning a personalized Nile journey, not filling a generic contact form.

---

# Current Problems

## 1. Wrong expectation

Current heading:

"Reserve Your Journey"

This implies:
- Instant booking
- Payment process
- Confirmed reservation

Reality:
- User submits information
- VEDA team contacts them later

This creates expectation mismatch.

---

## 2. Boat selection appears too early

Current flow asks the user to select a Dahabiya before understanding:

- Travel dates
- Group size
- Travel style

Most guests don't know the difference between boats.

Many simply want:

"Recommend the best option."

---

## 3. Limited personalization

Current fields collect:

- Dates
- Guests
- Boat

But they don't reveal:

- Why the guest is traveling
- Special occasions
- Travel style

These are valuable sales signals.

---

# New Positioning

Replace the booking language with consultation language.

## Page Title

Option A:

Plan Your Journey

Option B:

Request Your Personalized Cruise

Option C:

Design Your Nile Experience

---

## Hero Description

Current:

Reserve Your Journey

Replace with:

Share your travel preferences and our specialists will prepare a personalized itinerary, availability, and quotation within 24 hours.

---

# New Multi-Step Flow

Total Steps: 3

1. Your Trip
2. Your Details
3. Confirmation

---

# STEP 1 — Your Trip

Purpose:
Collect travel requirements before personal information.

---

## Journey Summary

Display a large summary card.

Example:

Program:
3 Nights / 4 Days

Route:
Aswan → Luxor

Selected from:
Itinerary Page

Button:
Change Journey

---

## Travel Date

Field:
Preferred Travel Date

Not required to be exact.

Placeholder:

Select preferred date

---

## Guests

Adults

Children

Example:

Adults: 2
Children: 1

---

## Boat Preference

Title:

Boat Preference

Options:

- Recommend the best available boat
- VEDA
- VEDA 1
- VEDA 2
- VEDA 3

Default:

Recommend the best available boat

Important:
Do NOT make boat selection mandatory.

---

## Travel Style

Replace current "Trip Focus".

Options:

- Culture & History
- Relaxation & Slow Travel
- Photography
- Family Adventure
- Honeymoon
- Celebration
- Mixed Experience

Multi-select allowed.

---

## Special Notes

Textarea:

Tell us about your dream Nile journey

Placeholder:

Example:
"Honeymoon in October"
"Family trip for 6 adults"
"Interested in bird watching"

This field provides extremely valuable lead information.

---

# STEP 2 — Your Details

Collect contact information.

---

## Required Fields

Full Name

Email

WhatsApp Number

Country

---

## Optional Fields

Preferred Contact Method

Options:

- WhatsApp
- Email
- Phone Call

---

## Marketing Source

Field:

How did you hear about us?

Options:

- Google Search
- Instagram
- Facebook
- Recommendation
- Travel Agent
- Previous Guest
- Other

Important:
This helps marketing attribution.

---

# STEP 3 — Confirmation

Before submitting:

Show a summary.

---

## Journey Summary

Program:
3 Nights / 4 Days

Route:
Aswan → Luxor

Travel Date:
July 2026

Guests:
2 Adults

Boat Preference:
Recommend Best Available

Travel Style:
Culture & History

---

## CTA Button

Current:

Continue

Replace with:

Submit Journey Request

or

Request Personalized Proposal

---

# Success Screen

Do NOT use a generic thank-you page.

Create a premium confirmation experience.

---

## Success Message

Title:

Your Journey Request Has Been Received

Description:

Our travel specialists are preparing the best options for your selected itinerary.

You will receive a personalized response within 24 hours.

---

## Display Submitted Summary

Program:
3 Nights / 4 Days

Route:
Aswan → Luxor

Guests:
2 Adults

Preferred Date:
July 2026

---

## Actions

Primary Button:

Chat With Us on WhatsApp

Secondary Button:

Explore More Itineraries

---

# Lead Data Structure

When submitted, send the following data.

```json
{
  "program": "3 Nights / 4 Days",
  "route": "Aswan → Luxor",
  "preferredDate": "July 2026",
  "adults": 2,
  "children": 0,
  "boatPreference": "Recommend Best Available",
  "travelStyle": [
    "Culture & History"
  ],
  "notes": "Honeymoon trip",
  "fullName": "John Smith",
  "email": "john@example.com",
  "whatsapp": "+49123456789",
  "country": "Germany",
  "contactMethod": "WhatsApp",
  "marketingSource": "Google Search"
}
```

---

# CRM / Email Format

Send a structured inquiry.

Subject:

New VEDA Journey Request

Body:

Program:
3 Nights / 4 Days

Route:
Aswan → Luxor

Travel Date:
July 2026

Adults:
2

Children:
0

Boat Preference:
Recommend Best Available

Travel Style:
Culture & History

Special Notes:
Honeymoon Trip

Name:
John Smith

Country:
Germany

Email:
john@example.com

WhatsApp:
+49123456789

Preferred Contact:
WhatsApp

Marketing Source:
Google Search

---

# UX Notes

## Keep Existing Design Language

Maintain:

- Typography
- Color palette
- Luxury aesthetic
- White space
- Premium imagery

---

## Improve Journey Summary

Current summary card is too small.

Increase visual hierarchy.

Display:

- Duration
- Route
- Guests
- Date
- Boat Preference

Clearly.

---

## Mobile Experience

The form must be fully optimized for mobile.

Priority:

1. Large tap targets
2. Minimal typing
3. Dropdowns instead of free text where possible
4. WhatsApp-first experience

---

# Primary Goal

The goal is NOT booking.

The goal is generating highly qualified luxury travel leads while making the user feel they are designing a bespoke Nile journey with VEDA.