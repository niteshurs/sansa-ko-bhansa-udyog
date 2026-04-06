# Sansa Ko Bhansa Udyog

## Current State
New project. Empty backend actor and default frontend scaffold.

## Requested Changes (Diff)

### Add
- Full marketing website for Sansa Ko Bhansa Udyog, a Nepali food brand
- Pages: Home (hero + products + about + social), Products, Contact
- Product listings: Chicken Achar (Packet & Jar), Buff Achar (Packet & Jar), Lasun Achar (Packet & Jar), Frozen Chicken Momo, Buff Momo, Veg Momo
- Social media links: Facebook, X, Instagram, Threads, TikTok, YouTube, WhatsApp Channel
- WhatsApp floating button and order/contact via WhatsApp
- SEO: meta tags, Open Graph, structured data, well-commented code for easy editing
- Contact page with WhatsApp-powered order/message flow

### Modify
- None

### Remove
- Default scaffold content

## Implementation Plan
1. Generate hero/product images via image generation
2. Build React frontend: multi-page SPA with React Router
   - Header with nav
   - Home: hero, featured products, about, social section
   - Products page: full product grid
   - Contact page: WhatsApp CTA
   - Footer with social links
3. SEO meta tags in index.html and per-page, with comments for editing
4. Floating WhatsApp button
5. Theme: burnt orange (#C5531F), golden (#C89A3A), dark brown, white
