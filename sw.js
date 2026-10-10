const CACHE = 'preceptor-d2d86bba87';
const FILES = ["","assets/index-DSLj8doO.js","assets/backend-Djz7IcW7.js","assets/db-EdKewTVZ.js","assets/sqlite-DFv-nFkZ.js","assets/index-m7S-BcA2.css","assets/sql-wasm-browser-DfANybxk.wasm","favicon.svg","fonts/BodoniModa-var.ttf","fonts/EBGaramond-Italic-var.ttf","fonts/EBGaramond-var.ttf","fonts/OFL-BodoniModa.txt","fonts/OFL-EBGaramond.txt","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons.svg","manifest.webmanifest","seed.db"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new URL(f, self.registration.scope).href))));
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(caches.match(new URL('./', self.registration.scope).href).then((r) => r || fetch(req)));
    return;
  }
  e.respondWith(caches.match(req).then((r) => r || fetch(req).then((res) => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
    return res;
  })));
});
