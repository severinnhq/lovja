// resize-favicons.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFile = path.join("public", "favicons", "favicon.ico.png");
const outputDir = path.join("public", "favicons");

const sizes = [
  16,
  32,
  48,
  64,
  96,
  180,
  192,
  512,
];

(async () => {
  if (!fs.existsSync(inputFile)) {
    console.error("Input file not found:", inputFile);
    return;
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const size of sizes) {
    const outputFile = path.join(outputDir, `favicon-${size}x${size}.png`);
    try {
      await sharp(inputFile)
        .resize(size, size)
        .toFile(outputFile);

      console.log(`Created: ${outputFile}`);
    } catch (err) {
      console.error(`Error creating ${outputFile}:`, err);
    }
  }

  console.log("All favicon sizes created successfully!");
})();
