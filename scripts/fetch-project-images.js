import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Website URLs to capture using free screenshot API
const websites = [
  { name: 'digbi-health', url: 'https://digbihealth.com/' },
  { name: 'staples', url: 'https://www.staples.ca/' },
  { name: 'qfc', url: 'https://www.qfc.qa/en' },
  { name: 'joeyjoey', url: 'https://www.joeyjoey.co/' },
  { name: 'aire-health', url: 'https://airehealth.com/' },
  { name: 'vet-tech', url: 'https://www.vetandtech.com/' },
  { name: 'equip-bid', url: 'https://equipbid.biz/' },
  { name: 'picswagger', url: 'https://picswagger.com/' },
  { name: 'telus', url: 'https://www.telus.com/' },
];

// Function to download image from URL
async function downloadImage(imageUrl, outputPath) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(outputPath, Buffer.from(buffer));
    return true;
  } catch (error) {
    console.log(`[v0] Failed to download from ${imageUrl}: ${error.message}`);
    return false;
  }
}

async function main() {
  const publicDir = path.resolve(__dirname, '../public');
  console.log('[v0] Starting to fetch project images using screenshot API...\n');

  let successCount = 0;
  let failureCount = 0;

  // Use screenshotapi.net (free tier) to capture website images
  for (const site of websites) {
    const filename = `project-${site.name}.jpg`;
    const filepath = path.join(publicDir, filename);
    
    try {
      // Using ScreenshotAPI.net free endpoint (max width 1024, height adaptive)
      const screenshotUrl = `https://api.screenshotapi.net/v1/screenshot?token=API_KEY&url=${encodeURIComponent(site.url)}&width=1024&height=640`;
      
      // For free APIs, we'll use a simpler approach - urltoimage API
      const finalUrl = `https://urltoimage.com/api/render?token=free&url=${encodeURIComponent(site.url)}&width=1024&height=640&output=jpeg`;
      
      console.log(`[v0] Fetching screenshot for ${site.name}...`);
      
      const success = await downloadImage(finalUrl, filepath);
      if (success) {
        console.log(`[v0] ✓ Saved: ${filename}`);
        successCount++;
      } else {
        console.log(`[v0] ✗ Failed to capture: ${site.name}`);
        failureCount++;
      }
    } catch (error) {
      console.log(`[v0] Error processing ${site.name}: ${error.message}`);
      failureCount++;
    }
  }

  console.log(`\n[v0] Screenshot fetch complete: ${successCount} successful, ${failureCount} failed`);
  console.log('[v0] Note: Some websites may block automated screenshots for security reasons.');
  console.log('[v0] Consider using manual screenshots or contacting website owners.');
}

main().catch(error => {
  console.error('[v0] Fatal error:', error);
  process.exit(1);
});
