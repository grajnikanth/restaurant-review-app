// Service Worker Javascript file for this application

// Below console.log statement was for testing the sw.js file was being read
// when the service worker was registered.
console.log('Service Worker was Registered');

// listen for the install event which will be fired when the service worker inspect
// is registered. We will use this event listener to implement the requesting
// and storage of all the application files. Since this logic of storing cache
// will be in the initial install event, this will occur only once at the begining
// when the service worker is registered

// load all the application required files into cache when the first install
// event is triggered.

// do this by first create an array of all the urls to the file locations

self.addEventListener('install', function(event) {
  console.log('Install event was fired when service worker was registered');

  let urlsToCache = [
    '/',
    '/css/styles.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/index.html',
    '/restaurant.html'
  ];

  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// below code will deal with any fetch request made by the application. The
// service worker will first look for the request in the cache and retrun response
// if the request is present in cache. If not the request will be fetched from the
// server and this request and response are added to the cache for future use. 
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if(response) {
        // console.log('Found', event.request, 'in cache');
        return response;
      }
      else {
        // console.log('could not find',event.request,'in cache Fetching from server');
        return fetch(event.request).then(function(response) {
            const clonedResponse = response.clone();
            caches.open('v1').then(function(cache) {
            cache.put(event.request,clonedResponse);
          })
          return response;
        }).catch(function(err){
          console.error(err);
        });
      }
    })
  );
});
