# DESIGN.md — D'Luxe Weddings & Events

## Color strategy: Committed
One protagonist color carries 40–55% of the surface. Gold is demoted to ≤8% accent.

## Palette (OKLCH)

| Role | Token | OKLCH | Notes |
|---|---|---|---|
| Protagonist | `--moss` | `oklch(0.30 0.045 155)` | Deep botanical emerald — backgrounds for cinematic sections, hero, footer, CTA. |
| Protagonist deep | `--moss-deep` | `oklch(0.22 0.038 155)` | Hover states, type-on-light hairlines. |
| Paper | `--paper` | `oklch(0.965 0.012 75)` | Warm cream, slight peach undertone. The PDF's signature surface — kept, but no longer the protagonist. |
| Paper deep | `--paper-deep` | `oklch(0.93 0.022 70)` | Section breaks. |
| Ink | `--ink` | `oklch(0.20 0.025 50)` | Body text on paper. Never `#000`. |
| Ink soft | `--ink-soft` | `oklch(0.42 0.025 55)` | Secondary text, captions. |
| Bone | `--bone` | `oklch(0.97 0.008 80)` | Type on `--moss`. Never `#fff`. |
| Brass | `--brass` | `oklch(0.68 0.10 75)` | Accent only. Hairlines on dark, marker dots, in-line emphasis. ≤8% of surface. |
| Brass deep | `--brass-deep` | `oklch(0.55 0.11 70)` | Buttons, links on paper. |
| Heliconia | `--heliconia` | `oklch(0.62 0.18 35)` | Editorial accent only. Drop caps, pull-quote glyphs, single deliberate moments. ≤2% of surface. |

## Typography

- **Display:** Cormorant Garamond — used in two voices: oversized (clamp 4–9rem) for hero/section openers, and intimate italic (1.1–1.5rem) for editorial pull copy and asides.
- **Body:** Inter — 300/400/500. Body sizes 16–18px. Tight letter-spacing on uppercase eyebrows (0.22em).
- **Hierarchy ratio ≥1.4** between steps. No flat scales.
- **Drop caps** on first paragraph of long-form sections (About, Process). Cormorant, ~5em, brass color, float left.
- **Mixed weights inside headlines** — `font-weight:300` italic for the romantic word, `font-weight:400` upright for the structural words. Never use weight to fix a small headline.

## Layout principles

- **No symmetric service-card grid as a primary structure.** Use it once at most, with deliberate variation between cells.
- **Editorial spreads** for the Process page: large numbered prose, asymmetric image placement, varying column widths. Not a timeline. Not a card grid.
- **Asymmetric hero:** type spans 7 of 12 cols, image spans 4, offset to right edge with bleed.
- **Bleeds.** Images touch the page edge frequently. The container does not contain everything.
- **Vary spacing.** Section padding alternates: `clamp(5rem,9vw,9rem)` and `clamp(8rem,14vw,14rem)` for cinematic moments.
- **One container width is wrong.** Use 1200px for grids, 720px for editorial prose, full-bleed for hero/CTA.

## Borders & elevation

- No gold-frame image borders as the default treatment. Most images: no border. Use a 1px brass hairline on one or two hero pieces only.
- **No side-stripe borders ever.** No `border-left: 3px solid X` pattern.
- Shadows: only `0 30px 80px -30px oklch(0.20 0.025 50 / 0.25)` — long, soft, low.

## Motion

- Reveal animations: `cubic-bezier(.16,1,.3,1)` (ease-out-quint), translate ≤24px, fade in ~900ms.
- Hover lifts: translateY(-2px), no scale on text/buttons.
- No layout property animations. Transform + opacity only.

## Components / patterns

- **Marquee letterform:** the brand wordmark sits BIG in section openers — 14–22vw display Cormorant, italic ampersand in brass.
- **Editorial caption:** image followed by italic Cormorant caption left-aligned, brass eyebrow above it. Never centered service-card style.
- **Pull quote:** full-bleed `--moss`, oversized italic Cormorant cream type, brass attribution rule.
- **Number pairs:** for the process, oversized numerals (Cormorant, 8–14rem, brass outline) anchor each section. Not in a row — stacked, with prose flowing alongside.
- **Inline form:** the questionnaire reads as letterhead correspondence. Underline-only inputs, generous vertical rhythm, italic field labels.

## Imagery direction

- Lean into the actual Costa Rica wedding photography. Tropical, real, sun-drenched.
- Avoid generic "wedding-stock" lookbook images.
- One portrait of Madelyn (real) anchors the About page.
- Captions on key images. Photos with stories beat photos as decoration.

## Bans (project-specific, in addition to global)

- No corner-decoration floral SVG flourishes.
- No `divider` with circle-and-line as a pervasive motif. Used at most twice site-wide.
- No emoji or symbol "icons" as service markers (no ✦ ❀ ♡ ✧). They read as Unicode flair.
- No "luxury" word in copy. Show, don't say.
