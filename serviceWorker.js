const staticDababy = "dababy-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/main.css",
  "/app/app.js",
  "/media/letsgo.jpg",
  "/media/letsgo.mp3",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDababy).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })