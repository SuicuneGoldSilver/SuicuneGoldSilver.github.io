// Inspect raw HTML around card links to find the correct parse pattern
const https = require('https');
const fs = require('fs');

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.serebii.net/' }
    }, res => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

async function main() {
  const html = await get('https://www.serebii.net/card/starterdeck100battlecollection/');
  // Find the first occurrence of the card link pattern and dump 500 chars around it
  const idx = html.indexOf('/card/starterdeck100battlecollection/001.shtml');
  if (idx === -1) { console.log('Pattern not found'); return; }
  console.log('=== CONTEXT AROUND CARD 1 LINK ===');
  console.log(html.slice(Math.max(0, idx - 200), idx + 600));
  console.log('\n\n=== CONTEXT AROUND CARD 2 LINK ===');
  const idx2 = html.indexOf('/card/starterdeck100battlecollection/002.shtml');
  if (idx2 !== -1) console.log(html.slice(Math.max(0, idx2 - 100), idx2 + 400));
}

main().catch(console.error);
