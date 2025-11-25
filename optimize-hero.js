const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

// Correct input path
const inputPath = path.join(__dirname, "public/uploads/herobg.webp");
const outputDir = path.join(__dirname, "public/uploads/optimized");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Sizes and output filenames
const sizes = [
  { width: 768, name: "herobg-mobile.webp" },
  { width: 1920, name: "herobg-desktop.webp" },
];

async function optimizeHero() {
  for (const size of sizes) {
    const outputPath = path.join(outputDir, size.name);

    try {
      await sharp(inputPath)
        .resize({ width: size.width })
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log(`✅ Optimized image created: ${outputPath}`);
    } catch (err) {
      console.error(`❌ Error optimizing ${size.name}:`, err);
    }
  }
}

optimizeHero();
