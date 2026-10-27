# Local assets

Images are served as WebP. Each image has two files:

- `<name>.webp` — full size, at most 1920px wide
- `<name>-960.webp` — 960px wide, picked by the browser for cards and phones

`src/site.jsx` (`thumb`, `thumbImage`, `responsiveImage`) builds the paths, so a new image only needs both files with the same base name.

## Profile

- `me.webp` / `me-960.webp` — profile image
- `bg.jpeg` — cover image used by the old project page styles (`styles.css`)

## Projects

Project images are named after the project slug in `src/site.jsx`, for example `prism.webp`, `adroom.webp`, `sidegigs.webp`, `pixis.webp`, `mystop.webp`, `visibility.webp`, `care.webp`, `swaram.webp`, `pen.webp`, `Brand.webp`, `Awards.webp`.
