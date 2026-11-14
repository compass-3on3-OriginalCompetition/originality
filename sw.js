// Service worker for installing the site as an app.
// Always asks the network first, so an open app gets the newest version of the site; the saved copy is used only offline.
// Results themselves come live from Firebase and are not touched here.
const CACHE = "compass3on3-v21";
const SHELL = ["./", "./index.html", "./reader.js", "./firebase-config.js", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).catch(() => {})); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return; // Firebase, fonts, reCAPTCHA: straight to the network
  // "no-cache": always ask the server whether the file changed (cheap when it did not), so an update is never hidden by the browser cache
  e.respondWith(fetch(req, { cache: "no-cache" }).then(res => {
    if (res.ok && res.type === "basic") { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || (req.mode === "navigate" ? caches.match("./index.html") : Response.error()))));
});
