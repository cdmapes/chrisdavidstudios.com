# Etch export — HTML, CSS, and Automatic.css 4.x

Use `homepage.html` on a full-width Etch page and add `homepage.css` to its page or global CSS. Keep the `cds-home` wrapper. No JavaScript, imports, build step, or external font download is required. The stylesheet is the same as the standalone site's `styles.css` and is scoped to `#cds-home`.

## Palette in ACSS

Set these values in ACSS to reproduce the simple dark purple, cyan, and orange palette:

| ACSS slot | Variable | Suggested value | Use |
| --- | --- | --- | --- |
| Base | `--base` | `#1a1429` | Dark purple background and text on bright buttons |
| Primary | `--primary` | `#30e6ef` | Cyan buttons, details, icons, subtle glows |
| Accent | `--accent` | `#ffa45b` | Orange secondary buttons and highlights |
| White | `--white` | `#f5f2fa` | Light text and derived text/surface colors |
| Black | `--black` | `#000000` | Shadows and the darker end of the gradient |

Secondary/magenta is not used. Configured ACSS values override the fallback colors. If Base is still set to the previous dark blue or indigo, update it to `#1a1429` in ACSS. Colors used by other components on your WordPress site also follow changes to these global ACSS slots.

Borders, muted text, cards, the simple illustration, and hover effects derive from the palette using `color-mix()`. The background has a subtle cyan grid, a static noise texture, and a vertical gradient. The `--cds-*` variables at the top of the stylesheet are aliases, not overrides of ACSS variables.

## Four text sizes, plus ACSS spacing and sizing

| Setting | Variables consumed |
| --- | --- |
| H1 | `--h1` |
| H2 | `--h2` |
| H3 | `--h3` |
| Paragraphs, navigation, labels, captions, buttons | `--text-m` |
| Heading and text fonts | `--h-font-family` (with `--heading-font-family` fallback), `--text-font-family` |
| Component spacing | `--space-xs`, `--space-s`, `--space-m`, `--space-l`, `--space-xl`, `--space-xxl` |
| Section spacing and grid gaps | `--section-space-m`, `--grid-gap` |
| Content width and gutters | `--content-width`, `--gutter` |
| Corner radii | `--radius-s`, `--radius-m` |

There are only four font-size roles; supporting copy is not reduced below the paragraph size. The default paragraph fallback is 16px at a standard 16px root size. All font families use your ACSS settings or system fallbacks. Container queries control layout. Decorative geometry, hairline borders, grid texture spacing, and container-query thresholds remain local design values.

## Native controls and email contact

The mobile menu and add-on disclosures use HTML `details`/`summary`. They work with JavaScript disabled. The menu is non-modal, closes through its summary, and has no scripted auto-close behavior. Email links open the visitor's email client; confirm the inbox address in the HTML before publishing. No contact form or backend is required for the demo.

## Validation scope

The standalone and exported page are checked in Chromium with JavaScript disabled, at mobile, tablet, and desktop widths. Global-token fixtures check that ACSS-style palette, typography, spacing, and width changes propagate. These checks do not replace validation on your live WordPress/ACSS installation.
