'use strict';

const CACHE = 'pokeref-img-v1';

// Cache-first for all image requests (local JP images + pokemontcg.io CDN)
self.addEventListener('fetch', event => {
  if (event.request.destination !== 'image') return;

  event.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response.ok) cache.put(event.request, response.clone());
          return response;
        }).catch(() => cached); // serve stale on network failure
      })
    )
  );
});

// Remove old cache versions when a new SW activates
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});
