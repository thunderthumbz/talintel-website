import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '../client/src/assets');

async function optimizeImages() {
  const imageExts = ['.png', '.jpg', '.jpeg'];
  
  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (imageExts.includes(path.extname(file).toLowerCase())) {
        optimizeImage(filePath);
      }
    }
  }
  
  async function optimizeImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const baseName = path.basename(filePath, ext);
    const dir = path.dirname(filePath);
    const webpPath = path.join(dir, `${baseName}.webp`);
    
    try {
      const stat = fs.statSync(filePath);
      const originalSize = stat.size;
      
      // Convert to WebP
      await sharp(filePath)
        .webp({ quality: 85 })
        .toFile(webpPath);
      
      const webpStat = fs.statSync(webpPath);
      const webpSize = webpStat.size;
      const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);
      
      console.log(`✓ ${baseName} optimized: ${(originalSize/1024).toFixed(1)}KB → ${(webpSize/1024).toFixed(1)}KB (${savings}% savings)`);
    } catch (error) {
      console.error(`✗ Failed to optimize ${filePath}:`, error.message);
    }
  }
  
  walkDir(assetsDir);
}

optimizeImages().catch(console.error);
