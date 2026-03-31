```markdown
# Design System Documentation


## 1. Colors
Our palette is rooted in deep charcoal and slate, punctuated by a high-chroma primary red.

### Surface Hierarchy & The "No-Line" Rule
To achieve a premium, editorial feel, **1px solid borders are prohibited for sectioning.** Boundaries must be defined through background shifts or tonal transitions.
- **Base Layer:** Use `surface` (#10131B) for the main background.
- **Sectioning:** Use `surface_container_low` (#181B24) to define large content blocks.
- **Nesting:** Place `surface_container_highest` (#32353D) cards inside `surface_container_low` sections to create a natural, "physical" lift.

### The "Glass & Gradient" Rule
- **Glassmorphism:** For floating menus, tooltips, or navigation bars, use `surface_container` with a 70% opacity and a `20px` backdrop-blur. This integrates the UI into the environment.
- **Signature Textures:** Main CTAs and Hero sections should utilize a linear gradient (45°) from `primary` (#FFB3AE) to `primary_container` (#FF5352). This adds "visual soul" and prevents the flat look of bootstrap-era systems.

---

## 2. Typography
We employ a high-contrast technical pairing to reinforce the "Lab" aesthetic.

- **Display & Headlines (Space Grotesk):** This is our "Editorial Voice." It should be used with generous letter-spacing and occasionally as background-watermark elements to break grid rigidity.
- **Body & Technical (Inter / Roboto):** Used for density and high readability.
- **Monospaced Accents:** Use monospaced fonts for labels, small captions, and data points to provide that "code-like" precision.

| Level | Token | Font | Size | Character |
| :--- | :--- | :--- | :--- | :--- |
| **Display LG** | `display-lg` | Space Grotesk | 3.5rem | Bold, tight tracking |
| **Headline MD** | `headline-md` | Space Grotesk | 1.75rem | Authoritative |
| **Title SM** | `title-sm` | Inter | 1rem | Semi-bold, clean |
| **Body MD** | `body-md` | Inter | 0.875rem | High legibility |
| **Label SM** | `label-sm` | Space Grotesk | 0.6875rem | All-caps, wide tracking |

---

## 3. Elevation & Depth
Depth is not an afterthought; it is the structural backbone of the system.

- **The Layering Principle:** Stack tiers to create hierarchy. A `surface_container_lowest` (#0B0E16) card sitting on a `surface` background creates an "inset" feel, perfect for code blocks.
- **Ambient Shadows:** Shadows should be used sparingly and must be extra-diffused. Use a 24px-48px blur at 6% opacity, tinted with the `primary` color for active elements to simulate a subtle glow.
- **The Ghost Border:** If accessibility requires a border, use `outline_variant` at 15% opacity. Never use 100% opaque borders.
- **Interactive Depth:** On hover, a card should not just change color; it should transition from `surface_container` to a "Glass" state with a subtle `primary` glow (8px blur).

---

## 4. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), `4px` (md) radius, `label-md` typography.
- **Secondary:** Transparent with a "Ghost Border" and `on_surface` text.
- **Tertiary:** Text-only with a monospaced font; adds a "CLI" (Command Line) feel to actions.

### Cards & Lists
- **Rule:** Absolute prohibition of divider lines.
- **Execution:** Use `spacing-8` (2rem) of vertical white space to separate list items. For cards, use background tonal shifts (`surface_container_low` to `surface_container_high`).
- **Lab-specific detail:** Add a small `primary` color accent (2px stripe) on the left side of "Active" or "Critical" cards to denote status.

### Input Fields
- **Resting:** `surface_container_low` background with no border.
- **Active/Focus:** Transition to a `0.5px` Ghost Border in `primary` and a subtle inner-glow. Label should use `label-sm` in a monospaced font.

### Chips (Action & Status)
- Used for tagging projects (e.g., "Agentic AI", "Research").
- Style: Semi-transparent `primary` background with `on_primary_container` text. Use `full` (9999px) roundness for a soft contrast against sharp technical headers.

---

## 5. Do's and Don'ts

### Do
- **Do** use intentional asymmetry. Place a `display-lg` header slightly overlapping a container to create an editorial, "high-end" look.
- **Do** use the Spacing Scale strictly. Gaps must be consistent (e.g., use `spacing-4` for internal padding and `spacing-12` for section gaps).
- **Do** use monospaced fonts for any numerical value or status indicator.

### Don't
- **Don't** use 1px solid white or grey borders. This immediately makes the system look like a generic dashboard.
- **Don't** use standard drop shadows. If it looks like a "box-shadow," it's too heavy. It should look like "ambient light."
- **Don't** crowd the interface. The "Lab" feel requires breathing room. If a section feels cramped, increase the padding to the next tier in the Spacing Scale.
- **Don't** use pure black (#000). Always use `surface` (#10131B) to maintain tonal depth and prevent eye strain.```
```

