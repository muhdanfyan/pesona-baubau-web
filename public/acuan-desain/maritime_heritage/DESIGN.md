---
name: Maritime Heritage
colors:
  surface: '#fff8f1'
  surface-dim: '#e0d9d0'
  surface-bright: '#fff8f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf3e9'
  surface-container: '#f4ede3'
  surface-container-high: '#eee7de'
  surface-container-highest: '#e8e1d8'
  on-surface: '#1e1b16'
  on-surface-variant: '#41474e'
  inverse-surface: '#33302a'
  inverse-on-surface: '#f7f0e6'
  outline: '#72787f'
  outline-variant: '#c1c7cf'
  surface-tint: '#2f6388'
  primary: '#003b5a'
  on-primary: '#ffffff'
  primary-container: '#1a5276'
  on-primary-container: '#94c5ee'
  inverse-primary: '#9bccf6'
  secondary: '#745a27'
  on-secondary: '#ffffff'
  secondary-container: '#fedb9b'
  on-secondary-container: '#795f2b'
  tertiary: '#373736'
  on-tertiary: '#ffffff'
  tertiary-container: '#4e4e4c'
  on-tertiary-container: '#c1bfbd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbe6ff'
  primary-fixed-dim: '#9bccf6'
  on-primary-fixed: '#001e30'
  on-primary-fixed-variant: '#0e4b6e'
  secondary-fixed: '#ffdea4'
  secondary-fixed-dim: '#e4c285'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5a4312'
  tertiary-fixed: '#e4e2df'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#474745'
  background: '#fff8f1'
  on-background: '#1e1b16'
  surface-variant: '#e8e1d8'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
---

## Brand & Style
The design system for this platform centers on the concept of "The Maritime Hub," blending the professional requirements of a digital gateway with the warmth of Buton culture. The identity is rooted in a **Corporate/Modern** style infused with **Minimalist** sensibilities, ensuring that the rich cultural heritage of Baubau is presented through a sophisticated, clean lens.

The target audience ranges from international travelers to local residents and government stakeholders. The UI must evoke a sense of reliability and hospitality, utilizing expansive whitespace to let high-quality photography of landscapes and traditional weavings take center stage. Interaction patterns should feel deliberate and grounded, avoiding unnecessary visual noise to maintain an editorial, authoritative atmosphere.

## Colors
The palette is a sophisticated reflection of Baubau’s geography and craft. **Biru Laut** (Primary) serves as the anchor, representing the deep waters surrounding the city and providing a foundation of trust. **Emas Tenun** (Accent) is used sparingly for call-to-actions and highlights, echoing the intricate gold threads of traditional Sultra textiles.

The background uses **Krem** to provide a warmer, more inviting experience than a sterile white, reducing eye strain for long-form reading. Functional colors for success, error, and warnings are calibrated for high legibility against the cream background.

## Typography
The system uses **Plus Jakarta Sans** (a modern alternative to Poppins with better screen optimization) for headlines to provide a friendly yet professional geometric feel. **Inter** is utilized for all body copy and UI elements due to its exceptional legibility and systematic performance in data-heavy views.

Hierarchies are strictly enforced to ensure clarity in navigation. Display styles use tighter letter spacing and heavier weights to command attention, while body text maintains generous line heights to ensure comfortable reading of cultural articles and travel guides.

## Layout & Spacing
This design system employs a **Fixed Grid** model for desktop to maintain editorial control over content density, while shifting to a **Fluid Grid** for mobile devices. All spacing follows a strict 4px base scale, ensuring mathematical harmony across the UI.

- **Desktop:** A 12-column grid with a maximum container width of 1280px. Large 24px gutters ensure content has room to breathe.
- **Tablet:** An 8-column grid with 24px margins.
- **Mobile:** A 4-column grid with 16px margins. Components like cards should stack vertically, while the Bottom Navigation bar remains fixed to the viewport.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Ambient Shadows**, avoiding heavy gradients to keep the design modern. 

- **Level 0 (Base):** Krem #F5F3F0. All main background surfaces.
- **Level 1 (Cards/Surface):** Pure White #FFFFFF. This creates a subtle lift against the Krem background even without shadows.
- **Light Shadow:** `0 2px 8px rgba(0,0,0,0.06)`. Used for standard interactive cards and navigation bars.
- **Medium Shadow:** `0 4px 12px rgba(0,0,0,0.1)`. Used for hovered states, dropdown menus, and floating action buttons to suggest immediate proximity to the user.

## Shapes
The shape language is **Rounded**, echoing the organic shapes of the coast and traditional pottery.
- **Small (8px):** Form inputs, checkboxes, and small utility buttons.
- **Medium (12px):** Primary component containers and feature cards.
- **Large (16px):** Large image containers, modals, and bottom sheets.
- **Pill:** Reserved exclusively for status badges (chips) and high-priority "Call to Action" buttons.

## Components
Consistent implementation of components ensures a professional and unified user experience:

- **Buttons:** Primary buttons use the Biru Laut background with White text. Secondary buttons use an outline of Biru Laut. CTA buttons should use Emas Tenun to draw immediate attention.
- **Cards:** Travel and destination cards must use a 12px border radius. Images should have a subtle darkening overlay (15% black) if white text is placed directly over them.
- **Pills/Badges:** Use for categories (e.g., "Culture," "Nature"). These use a semi-transparent version of the Accent color or Status colors with 9999px radius.
- **Input Fields:** 8px radius with a 1px border in Abu Hangat. On focus, the border shifts to Biru Laut with a subtle glow.
- **Bottom Navigation (Mobile):** A fixed bar at the bottom of the screen with a white background and a Light Shadow. Use Material Icons (Filled for active states, Outlined for inactive).
- **Lists:** Use 16px horizontal padding and 1px Krem separators to define items in settings or directory views.