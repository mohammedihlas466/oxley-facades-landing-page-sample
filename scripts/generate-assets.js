/*
 * Regenerates the smaller srcset variants in assets/.
 * The full-size files are the source of truth and are never overwritten.
 *
 *   npm install && npm run generate-assets
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const DIR = "assets";

const VARIANTS = [
  { file: "hero.webp", widths: [900] },
  { file: "institute.webp", widths: [800] },
  { file: "discipline.webp", widths: [700] },
  { file: "programme-certificate.webp", widths: [600] },
  { file: "programme-diploma.webp", widths: [600] },
  { file: "programme-professional.webp", widths: [600] },
  { file: "logo.webp", widths: [280] },
];

const kb = (n) => Math.round(n / 1024) + " kB";

(async () => {
  for (const { file, widths } of VARIANTS) {
    const src = path.join(DIR, file);
    if (!fs.existsSync(src)) throw new Error("Missing source " + src);

    const base = file.replace(/\.webp$/, "");
    const meta = await sharp(src).metadata();

    for (const width of widths) {
      const out = path.join(DIR, `${base}-${width}.webp`);
      await sharp(src)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toFile(out);

      const from = fs.statSync(src).size;
      const to = fs.statSync(out).size;
      console.log(
        `${base}: ${meta.width}w ${kb(from)}  ->  ${width}w ${kb(to)}`
      );
    }
  }
})().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
