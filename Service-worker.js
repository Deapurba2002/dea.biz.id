const CACHE_NAME = 'toko-baju-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.js',
    '/script.js',
    '/manifest.json',
    '/baju1.jpg',
    '/baju2.jpg',
    '/baju3.jpg',
    '/baju4.jpg',
    '/baju5.jpg',
    '/baju6.jpg',
    '/baju7.jpg',
    '/baju8.jpg',
    '/baju9.jpg',
    '/baju10.jpg',
    '/baju11.jpg',
    '/baju12.jpg'
];

// Install Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache dibuka');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch Resources
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached resource or fetch from network
                return response || fetch(event.request);
            })
    );
});

// Activate Service Worker
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        console.log('Cache lama dihapus:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
