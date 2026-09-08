// Service Worker for Full Offline Capability
const CACHE_NAME = 'kalbe-product-v1';

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
  '/images/carcan.png',
  '/images/brexel.png',
  '/images/rexta.png'
];

// Install Event - Pre-cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
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

// Fetch Event - Cache-first with network fallback strategy
self.addEventListener('fetch', (event) => {
  // Only handle GET requests and http/https schemes
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
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        })
        .catch(() => {
          // If offline and request is for a page navigation, return index.html
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html') || caches.match('/');
          }
        });
    })
  );
});
