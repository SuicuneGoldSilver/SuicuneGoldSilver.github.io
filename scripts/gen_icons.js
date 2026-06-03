'use strict';
const sharp = require('sharp');
const path = require('path');
const root = path.join(__dirname, '..');

// GS Ball SVG scaled up for raster rendering
const svgSrc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="96" fill="#0f1117"/>
  <path d="M64 256 A192 192 0 0 1 448 256 Z" fill="#c9a227"/>
  <path d="M64 256 A192 192 0 0 0 448 256 Z" fill="#a8a8b8"/>
  <rect x="64" y="232" width="384" height="48" fill="#1a1c24"/>
  <circle cx="256" cy="256" r="64" fill="#1a1c24"/>
  <circle cx="256" cy="256" r="40" fill="#c9a227"/>
  <text x="232" y="278" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="52" fill="#0f1117" text-anchor="middle">G</text>
  <text x="280" y="278" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="52" fill="#0f1117" text-anchor="middle">S</text>
</svg>`;

const buf = Buffer.from(svgSrc);

async function main() {
  await sharp(buf).resize(512, 512).png().toFile(path.join(root, 'icon-512.png'));
  console.log('icon-512.png done');
  await sharp(buf).resize(192, 192).png().toFile(path.join(root, 'icon-192.png'));
  console.log('icon-192.png done');
  await sharp(buf).resize(180, 180).png().toFile(path.join(root, 'apple-touch-icon.png'));
  console.log('apple-touch-icon.png done');
}

main().catch(e => { console.error(e); process.exit(1); });
