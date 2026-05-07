// SW v7 — 캐시 전면 삭제, 네트워크 직통
const CACHE = 'collage-v7';

self.addEventListener('install', () => {
  // 모든 구 캐시 즉시 삭제
  caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// 캐시 사용 안 함 — 항상 네트워크에서 직접 가져옴
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => new Response('offline', {status: 503})));
});
