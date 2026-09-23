# Site photographs

`src/lib/media.ts` loads every image in this folder by file name:

- `media-001.webp` … `media-113.webp` — gallery / section photos (the ids map to the
  original file names listed in `src/lib/media.ts`)
- `optimized-hero-1.webp`, `optimized-hero-2.webp`, `optimized-hero-3.webp` — homepage
  carousel banners

Drop the image files here using exactly these names. Any missing file simply renders
without an image.
