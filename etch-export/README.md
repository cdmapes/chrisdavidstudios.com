# Etch export for Automatic.css 4.x

Paste `homepage.html` into your Etch page and `homepage.css` into page CSS or global CSS. Use a full-width page template; the export supplies its own content containers. Keep the `cds-home` wrapper. The CSS is scoped to that wrapper and does not redefine ACSS variables or alter unrelated pages.

## Set the palette in ACSS

The existing neon palette is supplied as a fallback only. When ACSS is loaded, its values win. To keep the current appearance, configure these color slots in ACSS:

| ACSS color | Variable | Suggested value | Controls |
| --- | --- | --- | --- |
| Base | `--base` | `#091b34` | Dark background and text on bright buttons |
| Primary | `--primary` | `#00e5ff` | Cyan accents, primary buttons, icons |
| Secondary | `--secondary` | `#f334ff` | Magenta accents and inquiry button |
| Accent | `--accent` | `#ff9c38` | Orange accents and header button |
| White | `--white` | `#f5f2ff` | Light text and derived text shades |
| Black | `--black` | `#000000` | Shadow color |

Cards, borders, muted text, hover states, glows, gradients, the inline logo, and the SVG illustration derive their colors from those slots. There are no standalone hex colors in the HTML. All hex values in the CSS are fallbacks at the top of the stylesheet. Changing Primary, Secondary, Accent, or Base in ACSS updates their associated colors throughout this export.

These ACSS slots are global. If the site already uses them for a different palette, changing them also affects other components using those slots. The mapping is visible in the `--cds-*` aliases at the top of the export stylesheet.

Set Base to `#091b34` for the updated dark blue background. If you previously set it to purple, change that value in ACSS; its configured value takes precedence over the CSS fallback. Keep Base dark and Primary/Secondary/Accent bright for this design; recheck text contrast when changing the palette.

The page background layers a subtle cyan grid, static SVG grain, and a vertical gradient derived from Base and the accent colors. The pattern does not move and does not intercept clicks.

## Adjust spacing, typography, and sizing in ACSS

| Setting | Tokens used |
| --- | --- |
| Component spacing | `--space-xs`, `--space-s`, `--space-m`, `--space-l`, `--space-xl`, `--space-xxl` |
| Section spacing | `--section-space-m` |
| Card grid gaps | `--grid-gap` |
| Page width and gutters | `--content-width`, `--gutter` |
| Headings | `--h1`, `--h2`, `--h3` |
| Paragraphs and all supporting text | `--text-m` |
| Font families | `--h-font-family` (also accepts `--heading-font-family`), `--text-font-family` |
| Corner radii | `--radius-s`, `--radius-m`, `--radius-l` |

The export consumes these variables and does not set their values. Font-size and spacing fallbacks let the page render when ACSS is absent. There are exactly four font-size roles: H1, H2, H3, and paragraph. Navigation, labels, captions, buttons, form fields, and other supporting text use the paragraph token without reductions. Decorative illustration geometry, SVG viewboxes, hairline borders, and container-query thresholds remain local design values; they are not part of the ACSS spacing scale. Container queries control layout, and the ACSS scales control fluid type and spacing.

Configure fonts through ACSS/WordPress. This export does not import Google Fonts or force its original font choices when ACSS provides a family.

## Interactions and form

If Etch does not execute inline scripts in the HTML editor, move the script at the end of `homepage.html` to the supported JavaScript area. The inquiry form prepares an email draft; it does not send or store submissions. Confirm `hello@chrisdavidstudios.com`, or replace the sample with your production form integration.

## Validation scope

The export was checked in Chromium with and without an ACSS-like global token fixture, including changes to colors, spacing, type sizes, fonts, width, gutters, radii, and SVG fills. This confirms CSS variable inheritance and responsive behavior, not installation in a live ACSS 4.x/WordPress site. Verify the pasted result with your installed ACSS settings before publishing.
