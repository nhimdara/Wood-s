// Service Worker for 100% Offline Capability
const CACHE_NAME = 'kalbe-product-v2';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/Kalbe-logo-web.png',
  '/kalbe-logo.png',
  '/logo.png',
  '/ceo-kalbe.png',
  '/images/ENDO-METABOLIC.png',
  '/images/Mednut.png',
  '/images/Children-Product.png',
  '/images/CELEBROVASCULAR.png',
  '/images/Hospital-Line.png',
  '/images/Oncology.png',
  '/images/efesa.png',
  '/images/hemapo.png',
  '/images/nocid.png',
  '/images/kalxid.png',
  '/images/kalmeco.png',
  '/images/nevox_xr.png',
  '/images/nephrisol.png',
  '/images/nephrisol_d.png',
  '/images/pulmosol.png',
  '/images/nutrican.png',
  '/images/hepatosol.png',
  '/images/rillus_jr.png',
  '/images/prospan.png',
  '/images/kalmaxime_ds.png',
  '/images/brainact_inj.png',
  '/images/brainact_cap.png',
  '/images/brainact_500.png',
  '/images/brainact_odis.png',
  '/images/car_q.png',
  '/images/daneuron.png',
  '/images/myores.png',
  '/images/rillus_tab.png',
  '/images/hepafit.png',
  '/images/bioplacenton.png',
  '/images/kalmaxime_200.png',
  '/images/broadced.png',
  '/images/merofen.png',
  '/images/claventin.png',
  '/images/paxus.png',
  '/images/leucogen.png',
  '/images/carcan.png'
];

// Install Event - Pre-cache critical assets individually (resilient to single-file errors)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.allSettled(
        STATIC_ASSETS.map(async (url) => {
          try {
            const res = await fetch(url);
            if (res.ok) {
              await cache.put(url, res);
            }
          } catch (e) {
            // Silently ignore individual network hiccups during cache warmup
          }
        })
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up outdated caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Cache-first with network fallback and dynamic caching
self.addEventListener('fetch', (event) => {
  // Only handle GET requests with http/https schemes
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache).catch(() => {});
          });
          return networkResponse;
        })
        .catch(() => {
          // If offline and request is for a page navigation or HTML document, return cached index.html
          if (event.request.mode === 'navigate' || event.request.destination === 'document') {
            return caches.match('/index.html') || caches.match('/');
          }
        });
    })
  );
});
