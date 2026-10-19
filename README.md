# Chris David Studios

A responsive, dependency-free agency homepage. Requires Node.js 20 or newer.

```sh
npm run dev
```

The server listens on port 3000 (override with `PORT`). `npm run build` copies the static site to `dist/`, which can be deployed to any static host.

Edit content in `index.html`, colors and container-query layouts in `styles.css`, and navigation/form behavior in `app.js`. The website preview is an illustrative concept, not a client project. Google Fonts are optional; system fonts are used if unavailable.

The contact form opens an email draft; it does not send or store submissions. Confirm the `hello@chrisdavidstudios.com` destination in `app.js` before publishing, or connect a production form service. Hosting, CMS editing, backups, and other agency services described on the page are service offerings, not implemented features of this static homepage.

## GitHub Pages

The root HTML, CSS, JavaScript, and favicon use relative asset paths and work under a GitHub Pages project URL. In the repository's Settings → Pages, select **Deploy from a branch**, branch **main**, and **/ (root)**, then save. GitHub reports the published URL after deployment completes.

## Etch / WordPress

`etch-export/homepage.html` contains the page fragment with inline logos and interaction script, and `etch-export/homepage.css` contains styles scoped to `#cds-home`. Use a full-width layout. If the builder does not execute inline scripts, place the included script in its supported custom JavaScript area. The form prepares an email draft and does not send submissions to a backend.
