# Chris David Studios

A static agency homepage built entirely with HTML and CSS. There is no JavaScript, package installation, build step, or external font dependency.

## View locally

From this directory, run:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

Python is only a convenience for serving the static files, not an application dependency. The page can also be opened directly from `index.html` or hosted by any static web server.

## GitHub Pages

Publish the `main` branch and `/ (root)` directory under Settings → Pages. `index.html` and `styles.css` are the complete site; the favicon is embedded in the HTML and the illustration is made from editable HTML/CSS. CSS uses relative paths and contains no external requests.

## Edit in Etch with Automatic.css 4.x

Paste `etch-export/homepage.html` into a full-width Etch page and `etch-export/homepage.css` into its CSS. See [the ACSS mapping](etch-export/README.md). The export stylesheet is identical to `styles.css`, and its HTML is the contents of the standalone page's body. Keep them in sync when editing.

The four text sizes are H1, H2, H3, and paragraph. ACSS's `--h1`, `--h2`, `--h3`, and `--text-m` control those sizes. Colors, spacing, content width, gutters, fonts, and radii also consume ACSS tokens, with local fallbacks when ACSS is absent.

## Interactions and contact

Native HTML `details` elements provide the mobile navigation and support accordions, including keyboard interaction. The mobile menu closes using its Menu disclosure control; navigating to a section does not run a script to close it. Hover effects respect reduced-motion preferences.

Contact links open the visitor's email app. Confirm that `hello@chrisdavidstudios.com` is your working inbox before public use. No form submission or customer information is stored. Booking, lead forms, no-code editing, e-commerce, hosting, backups, and maintenance are agency service offerings, not implemented backends on this static homepage. The website concept in the hero is illustrative.
