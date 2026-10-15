# Bloom Pro Template

Create a modern, clean B2B industrial company website template in React using Tailwind CSS (Light Mode, elegant whites, subtle grays, and crisp typography).

The component should accept these props:

- company: { name, logo_url, cover_url, description, location, email, mobile, whatsapp, gst, year_established, certifications }

- products: Array<{ id, name, category, price, moq, image_url, description }>

- posts: Array<{ id, content, media_urls }>

- reels: Array<{ id, video_url, thumbnail_url, content }>

- onOpenInquiry: (product) => void // triggers RFQ/quote drawer

Sections to include:

1. Top Navbar: Clean white header with company logo, navigation links, and a direct "WhatsApp Inquiry" CTA button.

2. Hero Section: Professional light aesthetic with high-impact headline, company bio, trust badges (GST Verified, ISO Certified), and contact buttons.

3. Statistics Bar: Clean metric counters (e.g. Years in Business, Products Cataloged, Pan-India Delivery).

4. Product Catalog: Responsive grid of product cards with category filter tabs, high-res image, price, MOQ badge, and "Request Quote" button.

5. Quality & Certifications: Clean visual cards highlighting certifications (ISO, MSME) and compliance.

6. Updates & Reels: Grid displaying recent media updates or videos.

7. Footer: Clean industrial footer with GST number, address, Google Maps link, and contact details.

Requirements:

- Must use standard Tailwind CSS classes.

- Use Lucide-react icons.

- Avoid hardcoding texts; read directly from the props.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4c0c0ff3-25fb-4d05-beb9-46604397d5b4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
