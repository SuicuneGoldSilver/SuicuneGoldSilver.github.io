'use strict';

const IMG_CACHE   = 'pokeref-img-v1';
const SHELL_CACHE = 'pokeref-shell-v1';
const ALL_CACHES  = [IMG_CACHE, SHELL_CACHE];

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Images (same-origin + CDN): cache-first
  if (request.destination === 'image') {
    event.respondWith(cacheFirst(IMG_CACHE, request));
    return;
  }

  // Everything else: same-origin only
  if (url.origin !== location.origin) return;

  // Hashed /assets/ (JS/CSS): cache-first — Vite content-hash means a new filename = new file
  if (url.pathname.startsWith('/assets/')) {
    event.respondWith(cacheFirst(SHELL_CACHE, request));
    return;
  }

  // HTML pages + /data/ JSON: network-first, cache fallback for offline
  if (request.destination === 'document' || url.pathname.startsWith('/data/')) {
    event.respondWith(networkFirst(SHELL_CACHE, request));
    return;
  }
});

async function cacheFirst(cacheName, request) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
}

async function networkFirst(cacheName, request) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return (await cache.match(request)) ?? new Response('オフライン', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}

// On activation, delete any caches from old SW versions
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => !ALL_CACHES.includes(k)).map(k => caches.delete(k)))
    )
  );
});
