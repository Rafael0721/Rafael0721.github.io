# Rafael0721.github.io
Rafael's portfolio

## Local preview

Install dependencies with `npm install`, then run:

```sh
npx live-server --host=127.0.0.1 --port=8080 --no-browser
```

Open http://127.0.0.1:8080/.

## Page URLs

Pages use directory indexes so GitHub Pages can serve clean URLs without a front-end router or build step:

- `/` → `index.html`
- `/work/` → `work/index.html`
- `/work/fami-hive/` → `work/fami-hive/index.html`
- Other project pages follow `/work/<project>/index.html`.

Shared assets use root-relative paths (`/css/`, `/js/`, `/img/`). This assumes the site is hosted at the domain root, as on chenrafael.com or Rafael0721.github.io.

The original root-level `work.html` and `*_demo.html` files are compatibility redirects. Edit the directory index pages for content updates. JavaScript redirects preserve query strings and URL fragments; a meta refresh and a visible link provide fallbacks. These are browser redirects, not HTTP 301 redirects.
