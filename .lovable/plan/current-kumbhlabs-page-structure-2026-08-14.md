# Current KumbhLabs Page Structure

## Routes (URLs)

| URL           | File                        | Purpose                    |
| ------------- | --------------------------- | -------------------------- |
| `/`           | `src/routes/index.tsx`      | Homepage / landing page    |
| `/about`      | `src/routes/about.tsx`      | About / institutional page |
| `/kumbhdoot`  | `src/routes/kumbhdoot.tsx`  | Product detail page        |
| `/philosophy` | `src/routes/philosophy.tsx` | Philosophy page            |
| `/research`   | `src/routes/research.tsx`   | Research page              |

All routes share the layout in `src/routes/__root.tsx`, which renders:

- `<Nav />` — floating frosted-glass pill navigation
- `<Outlet />` — page content
- `<Footer />` — site footer

## Homepage (`/`) sections in order

1. **Hero** — full-screen ivory section with saffron aura background, main headline, tagline, and centered "Download KumbhLabs" CTA.
2. **Credibility strip** — collaboration line (Project NANDA · KumbhDoot).
3. **The Context** — Kumbh Mela as a temporary city, with auto-slideshow of Kumbh images.
4. **The Thesis** — the core problem statement and scale argument.
5. **Milestones / Progress** — scroll-driven timeline with sticky media panel (Feb–Aug 2026).
6. **Flagship Product** — KumbhDoot introduction (dark indigo section).
7. **AI, Differently** — architecture / approach section.
8. **Philosophy** — design principles.
9. **System Architecture** — technical building blocks.
10. **The Bigger Idea** — vision for decentralized AI at mass gatherings.
11. **Research** — research areas and publications direction.
12. **About** — initiative background and team context.
13. **Final CTA** — closing call to action.

## Shared components

- `Nav.tsx` — floating pill navigation
- `Footer.tsx` — site footer
- `Reveal.tsx` — scroll-reveal animation wrapper
- `Contours.tsx` / `PointField` — topographic / particle motifs
- `HeroAura.tsx` — soft saffron gradient bloom behind hero
- `ProgressTimeline.tsx` — scroll-driven milestone timeline
- `KumbhSlideshow.tsx` — cross-fading image slideshow
- `waves-background.tsx` — WebGL shader background

## Next step

Decide whether to reorganize, add, remove, or rename any of these sections, or create additional routes.
