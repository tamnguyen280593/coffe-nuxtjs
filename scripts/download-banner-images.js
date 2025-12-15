// Script to download banner images from Unsplash
// Run with: node scripts/download-banner-images.js

const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop&q=80',
    filename: 'cafe-interior-space.jpg',
    description: 'Coffee shop interior space'
  },
  {
    url: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=1920&h=1080&fit=crop&q=80',
    filename: 'coffee-brewing-art.jpg',
    description: 'Coffee brewing with latte art'
  },
  {
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a14a8ba?w=1920&h=1080&fit=crop&q=80',
    filename: 'cafe-relaxing-ambiance.jpg',
    description: 'Relaxing cafe ambiance'
  }
];

const bannerDir = path.join(__dirname, '../public/images/banner');

// Create directory if it doesn't exist
if (!fs.existsSync(bannerDir)) {
  fs.mkdirSync(bannerDir, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        file.close();
        fs.unlinkSync(filepath);
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Downloading banner images...\n');
  
  for (const image of images) {
    const filepath = path.join(bannerDir, image.filename);
    try {
      await downloadImage(image.url, filepath);
    } catch (error) {
      console.error(`✗ Failed to download ${image.filename}:`, error.message);
    }
  }
  
  console.log('\nDone!');
}

downloadAll();

