const CACHE = "umrah-duas-v3"; // ← INCREMENT ON EVERY DEPLOY WITH CONTENT CHANGES
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./sw.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-180.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      // Optional: cache new GET requests as you browse
      const copy = res.clone();
      if (req.method === "GET" && req.url.startsWith(self.location.origin)) {
        caches.open(CACHE).then(cache => cache.put(req, copy)).catch(()=>{});
      }
      return res;
    }).catch(() => caches.match("./index.html")))
  );
});
