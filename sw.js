const CACHE_NAME = 'ib-pwa-v1';
// 缓存基础页面，最小可用Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
