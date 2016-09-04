// This polyfill provides Cache.add(), Cache.addAll(), and CacheStorage.match(),
// which are not implemented in Chrome 40.

var staticCacheName = 'realestateQ-static-v1';
var allCaches = [
  staticCacheName
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/houses',
        '/index.html',
        '/inline.js',
        '/inline.map',
        '/main.map',
        '/main.bundle.js',
        '/polyfills.map',
        '/polyfills.bundle.js',
        '/sw.js',
        '/sockjs-node/info',
        '/assets/css/bootstrap-theme.min.css',
        '/assets/css/bootstrap.min.css',
        '/assets/css/icon.css',
        '/assets/css/styles.css',
        '/assets/fonts/glyphicons-halflings-regular.woff2',
        '/assets/img/C1.jpg',
        '/assets/js/bootstrap.min.js',
        '/assets/js/jquery.min.js',
        'http://localhost:4200/sockjs-node/info'
      ]);
    })
  );
});


self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      console.log(cacheNames);

      return Promise.all(
        cacheNames.filter(function(cacheName) {

          return cacheName.startsWith('realestateQ-static-') && !allCaches.includes(cacheName);

        }).map(function(cacheName) {

          console.log(cacheName);
          return caches.delete(cacheName);

        })

      );

    })
  );
});

self.addEventListener('fetch', function(event) {
  if(event.request.method === "GET"){
    // if (event.request.url.indexOf('https://maps.googleapi.com/js') == 0) { 
    //     event.respondWith(

    //     );
    // } else {
        var requestUrl = new URL(event.request.url);
        event.respondWith(
            caches.match(event.request).then(function(response) {
                if (response) {
                return response;
                }

                var fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(function(response) {

                    if(!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                    }

                    var responseToCache = response.clone();

                    caches.open(staticCacheName).then(function(cache) {
                        cache.put(event.request, responseToCache);
                    });

                    return response;
                });
            })
        );
    //}
  }

});
