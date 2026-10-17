# Explore Bicol – Discover the Wonders of Region V

IT ELEC 3 midterm project. Static site: HTML5, CSS3, vanilla JS, Bootstrap 5 (CDN).

## Run
Open `index.html` in a browser. Bootstrap, Bootstrap Icons, and fonts use their configured CDN links. Destination and food photos are always loaded from local files; missing photos use the built-in gradient fallback.

The homepage hero uses the local `images/hero/camarines-sur-aerial.mp4` clip when motion is allowed, with the Mayon image as its poster and fallback. The muted video plays from 0:14 to 1:23, then restarts at 0:14. If the clip is shorter than 1:23, it restarts when it reaches the end; it is not loaded when reduced motion is requested.

## Live site
Visit [Explore Bicol on GitHub Pages](https://ari-yana143.github.io/explore-bicol/). Changes pushed to `main` deploy automatically.

## Content and photos
- `content/bicol-content.md` is the instructor-provided content extracted from `midterm-ni-sir-james.docx`; `js/data.js` is generated from those listed items.
- `IMAGE_CHECKLIST.md` lists every image path, the intended subject, and search keywords. Add matching, properly licensed `.jpg` files at those paths.
- Record the source page, author, and license in `images/PHOTO-CREDITS.txt` and update each corresponding `imageCredit` in `js/data.js`.
- Photos should show the real subject, not a substitute. Until a matching photo is available, the UI shows a local gradient placeholder.

## Files
- `js/data.js` – provinces, source items, image details, and source-check flags
- `js/main.js` – navbar/footer, theme toggle, live search, skeleton, spinner, modal, back-to-top
- `js/pages.js` – filters, carousel, charts, accordions, form validation, dropzone
