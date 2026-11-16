// 오프라인에서도 열리도록 파일을 기기에 보관합니다.
// 화면(HTML)과 사진 목록은 항상 최신본을 먼저 받고, 사진 파일은 보관본을 씁니다.
const CACHE = 'gmi-v3';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', 'index.html', 'photos.json', 'manifest.json', 'icon-192.png'])).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const isPhoto = /\/photos\/[^/]+$/.test(new URL(req.url).pathname);
  if (isPhoto) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
    })));
  } else {
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
    }).catch(() => caches.match(req).then(hit => hit || caches.match('index.html'))));
  }
});
