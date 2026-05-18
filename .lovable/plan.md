# Bud's Pest Control — Build Plan

A professional single-page marketing site for a Cape Town pest control company, with all real content from the brief.

## Design system

Update `src/styles.css` tokens to brand colors (converted to oklch):
- `--primary`: deep navy `#1a2e5a`
- `--accent`: bold orange `#e87722`
- `--background`: white, `--secondary`: light grey `#f5f5f5`
- `--foreground`: charcoal `#1c1c1c`
- Radius: 8px
- Import Google Fonts (Oswald for headings, Lato for body) via `<link>` in `__root.tsx` head, register as Tailwind font families in `@theme`.

## Routes & files

Single landing page — keep everything on `/`:
- `src/routes/index.tsx` — page composition + SEO `head()` (title, description, og tags)
- `src/components/site/Navbar.tsx` — sticky nav, logo, links (Home/Services/Plans/Contact), orange "Call Now" button; mobile hamburger
- `src/components/site/Hero.tsx` — navy bg with diagonal orange accent (CSS clip-path), headline, sub, two CTAs (tel: + wa.me link), technician silhouette graphic on right
- `src/components/site/WhyChooseUs.tsx` — 4 icon cards (ShieldCheck, Leaf, CalendarClock, Zap)
- `src/components/site/PestsWeTreat.tsx` — 8-item grid, lucide icons (Bug, etc.) with orange hover
- `src/components/site/SubscriptionPlan.tsx` — navy bg section, R269 headline, "How it works" highlight box, CTA
- `src/components/site/Contact.tsx` — contact cards (Phone, MessageCircle, Mail, MapPin) + "Always Open" orange badge
- `src/components/site/Footer.tsx` — brand, tagline, copyright, Facebook + Instagram icons
- `src/components/site/FadeIn.tsx` — small framer-motion wrapper for scroll fade-in (whileInView)

Nav links use hash anchors (`#services`, `#plans`, `#contact`) since this is genuinely one scrolling page per the brief. Index `head()` still gets full SEO metadata.

## Content

All copy taken verbatim from the brief — no placeholder text. Phone links use `tel:+27824955147`, WhatsApp uses `https://wa.me/27824955147`, email `mailto:info@budspestcontrol.co.za`.

## Visuals

- Pest section: lucide `Bug`, `Rat`, `Worm` icons + emoji fallbacks where lucide lacks (Cockroach/Tick/Flea → stylized `Bug` variants with labels; consistent industrial look, no cartoon).
- Hero right side: CSS/SVG silhouette of a sprayer technician (inline SVG component) — keeps it lightweight and on-brand industrial. No AI image generation needed.
- Diagonal orange accent: absolutely positioned div with `clip-path: polygon(...)`.

## Dependencies

- Add `motion` (Framer Motion successor; install via `bun add motion`).
- `lucide-react` already available.

## Animations

`FadeIn` component wraps each section; uses `motion.div` with `initial={{opacity:0, y:20}}`, `whileInView={{opacity:1, y:0}}`, `viewport={{ once: true, margin: "-80px" }}`.

## Technical notes

- Tailwind v4 `@theme inline` block gets updated tokens; semantic classes (`bg-primary`, `text-accent`, etc.) used throughout — no hardcoded hex in components.
- Mobile-first: stacked sections, 2-col pest grid on mobile → 4-col desktop, hamburger nav under `md`.
- Sticky navbar: `sticky top-0 z-50 backdrop-blur bg-background/90 border-b`.
- SEO: index route `head()` with title "Bud's Pest Control — Cape Town Pest Management", meta description, og tags. Single H1 in Hero. Semantic `<section>` with ids.
