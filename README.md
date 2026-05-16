# Quietluxe Design System

> Modern · Posh · Cool · Refreshing

A design system for interfaces that feel like *quiet luxury*: editorial
elegance meets Silicon Valley precision. Minimal but never boring. Generous
whitespace. Subtle sophistication over loud decoration.

This system was created from a written brief (no existing codebase, Figma,
or product screens were attached). "Quietluxe" is a working handle for the
aesthetic — swap in your own brand name freely.

---

## Sources

- **Brief:** Provided inline by the user (color palette, type, spacing,
  component rules, hard-rules list).
- **Codebase / Figma:** None attached.
- **Fonts:** Loaded from Google Fonts (Fraunces, Inter, JetBrains Mono) —
  these are the recommended primaries from the brief; no font files needed
  to be substituted.

---

## Index

| File / Folder              | What it is                                      |
| -------------------------- | ----------------------------------------------- |
| `README.md`                | This document                                   |
| `SKILL.md`                 | Agent-skill manifest (Claude Code compatible)   |
| `colors_and_type.css`      | All design tokens + element styles              |
| `preview/`                 | Cards rendered in the Design System tab         |
| `assets/`                  | Logo marks, brand glyphs, placeholder imagery   |
| `ui_kits/marketing/`       | Marketing site UI kit (hero, nav, feature, CTA) |
| `ui_kits/dashboard/`       | App dashboard UI kit (sidebar, cards, table)    |

Slides were not requested; none were generated.

---

## Content Fundamentals

The voice is **confident, understated, and editorial**. It reads like the
copy of a well-designed magazine — never breathless, never salesy.

**Tone**
- Calm authority. State things plainly; never hype.
- "We" is rare; prefer the product as the subject ("Quietluxe brings…")
  or address the reader directly with "You."
- Avoid marketing intensifiers (*incredible, amazing, revolutionary*).
- Sentences are short and finished. No em-dash drama in body copy.

**Casing**
- Headlines: **sentence case**, never Title Case. Title Case feels corporate.
- Tiny labels above sections: **UPPERCASE** with `+0.12em` tracking.
- Buttons: sentence case ("Get started", not "Get Started").

**Person**
- Default to second person ("you") for product copy.
- First-person plural ("we") only on About / Manifesto type pages.

**Emoji**
- Never as UI affordances or bullet markers.
- Acceptable in editorial body copy *very* sparingly (one per page max),
  never as decoration.

**Examples**

> A new way to read your numbers. Calm, considered, *effortlessly* clear.

> 01 — Built for focus
> Quietluxe strips the dashboard down to what matters this week.

> Get started · No credit card · Cancel any time

The serif italic on a single emphasized word ("*effortlessly*") is the
signature move. Use it once per heading, not three times.

---

## Visual Foundations

**Color**
- Background is **paper**, not white: `#FAFAF7`. Pure white is reserved
  for cards and elevated surfaces.
- Text never goes pure black — use `#1A1A1A`. Borders are warm gray
  (`#E8E6E0`) so they read as paper folds, not lines.
- One accent per surface, max. The accent appears on **<10% of pixels** —
  primary CTA, an active tab marker, a selected dot. Never as a section
  background.
- Five accent options (sage, terracotta, midnight, champagne, lavender)
  are designed to rotate by project, not coexist on the same screen.

**Typography**
- A **serif/sans pairing** is the load-bearing visual signature: Fraunces
  for display, Inter for UI. Two fonts, never more.
- Italics are reserved for **emphasis inside headings** ("Truly *modern*
  design"). Never italicize body paragraphs.
- Tiny uppercase labels (13px, +0.12em tracking) act as section markers
  in lieu of heavier dividers.
- Numerals like **01 — , 02 — , 03 —** appear before section titles to
  give the editorial cadence.

**Spacing & layout**
- 8px base grid. Sections breathe at 96px desktop / 64px mobile vertical.
- Container max-width is 1200px with generous side padding.
- Asymmetric layouts (left-weighted hero, off-center quote, indented body)
  are preferred over rigid 12-col grids when content allows.

**Backgrounds & imagery**
- Solid paper background is the default. No gradients on background fills.
- Imagery, when present, is warm-toned, often slightly desaturated, with a
  hint of grain. No glossy stock-photo vibes.
- Optional ultra-low-opacity grain texture (`opacity: 0.03`) can sit on the
  body background — never on cards.

**Borders, shadows, elevation**
- **Hairline borders** (1px, `var(--border)`) do most of the work.
- Drop shadows are a *whisper*: `0 1px 2px rgba(0,0,0,0.04)` on cards,
  nothing more for normal elevation. Popovers/menus may use
  `0 8px 24px rgba(0,0,0,0.06)`.
- No glowing accents, no neon, no glassmorphism.

**Corner radii**
- Cards `12px`, buttons `8px`, inputs `4px`, pills full. Sharp 90° corners
  are reserved for editorial layouts (full-bleed photo, table cell).

**Hover & press**
- Buttons: `transform: scale(1.02)` on hover, 220ms cubic-bezier(.4,0,.2,1).
  No background flash, no color change for primary.
- Secondary buttons fill on hover (transparent → cream surface) and the
  border darkens to `var(--fg)`.
- Cards: border darkens from `--border` to `--border-strong` on hover.
  No lift, no scale.
- Press state: `transform: scale(0.98)` on the same easing — barely
  perceptible.
- Links: underline appears under the word, never a colored highlight.

**Motion**
- 200–300ms is the entire range. Anything faster feels twitchy; anything
  slower feels sluggish.
- Scroll reveals are fades only (`opacity 0 → 1` + `translateY(8px) → 0`),
  never aggressive parallax.
- Loading: a thin progress bar in `--accent`, not a spinner.

**Transparency & blur**
- Almost never. The header may use a 90%-opaque paper background with no
  blur, so cards beneath read crisply when scrolled. No frosted glass.

---

## Iconography

The system **does not ship a custom icon font**. It uses
[**Lucide**](https://lucide.dev) icons via CDN — a thin-stroke, geometric,
open-source set whose 1.5px stroke and 24×24 grid match the editorial
restraint of the system.

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="arrow-up-right"></i>
<script>lucide.createIcons();</script>
```

**Rules**

- **Stroke weight:** 1.5px (Lucide default). Do not mix with filled icons.
- **Sizes:** 16px (inline / buttons), 20px (UI controls), 24px (feature),
  32px+ (hero illustration). Never below 14px.
- **Color:** inherits `currentColor`. Use `--fg` for primary, `--fg-muted`
  for inactive states. Accent color is reserved for the *one* primary
  action on a screen.
- **Emoji:** never used as icons. Acceptable only in long editorial copy.
- **Unicode glyphs:** the bullet `·` is used as a separator in metadata
  rows ("3 min read · May 2026"). The em-dash `—` separates editorial
  numerals ("01 — Built for focus"). No other unicode decoration.
- **Custom marks:** the only custom SVG in `assets/` is the wordmark and
  the monogram glyph. Everything else is Lucide.

If a future project needs a more distinctive icon set, swap to
[Phosphor](https://phosphoricons.com) at the same stroke weight and
update this section.

---

## How to use this system

1. Link `colors_and_type.css` from any HTML you build.
2. Add an accent class on `<html>` or a section: `accent-sage`,
   `accent-terracotta`, `accent-midnight`, `accent-champagne`,
   `accent-lavender`. Default is sage.
3. Compose with the helpers (`.card`, `.btn`, `.btn-primary`, `.label`,
   `.numeral`, `.italic-emphasis`).
4. For dark mode, add `data-theme="dark"` on `<html>`.
5. Pull components from `ui_kits/` rather than rebuilding from scratch.

---

## Caveats

- Fonts are loaded from Google Fonts at runtime; no local font files are
  bundled. If you need offline use, download Fraunces, Inter, and
  JetBrains Mono into `fonts/` and update the `@import` in
  `colors_and_type.css`.
- Iconography uses Lucide via CDN. No custom icon set was provided.
- No real product photography ships in `assets/` — placeholders only.
