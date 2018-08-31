
var box = document.querySelector('.box');
var button = document.querySelector('button');

button.addEventListener('click', function(event) {
  if (box.classList.contains('visible')) {
    box.classList.remove('visible');
  } else {
    box.classList.add('visible');
  }
});

let CACHE_STATIC_NAME = 'static-v2';
let CACHE_DYNAMIC_NAME = 'dynamic-v2';

// 1) Register a Service Worker
if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('./sw.js')
		.then(function() {
			console.log('SW registered !')
		});
}
// 2) Identify the AppShell (i.e. core assets your app requires to provide its basic "frame")
	/*->/,
			/index.html,
			/src/css/app.css, 
			/src/css/main.css, 
			https://fonts.googleapis.com/css?family=Roboto:400,700,
			https://fonts.googleapis.com/icon?family=Material+Icons,
			/src/js/material.min.js,
			/src/js/main.js
	*/
// 3) Precache the AppShell
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_STATIC_NAME)
			.then(function(cache) {
				cache.addAll([
						'/',
						'/index.html',
						'/src/css/app.css', 
						'/src/css/main.css', 
						'https://fonts.googleapis.com/css?family=Roboto:400,700',
						'https://fonts.googleapis.com/icon?family=Material+Icons',
						'/src/js/material.min.js',
						'/src/js/main.js'
					])
			})
	)
});


// 7) Make sure to clean up unused caches
self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys()
			.then(function(keyList) {
				return Promise.all(keyList.map(function(key) {
					if(key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
						return caches.delete(key);
					}
				}))
			})
	)
});

// 4) Add Code to fetch the precached assets from cache when needed
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.math(event.request)
			.then(function(res) {
				if(res) { return res; }
				else { 
					return fetch(event.request) 
						.then(function(res) {
							return caches.open(CACHE_DYNAMIC_NAME)
								.then(function(cache) {
									cache.put(event.request.url, response)
									return response;
								})
						})
						.catch(function(err) { })
				}
			})
	)
})
// 5) Precache other assets required to make the root index.html file work
// 6) Change some styling in the main.css file and make sure that the new file gets loaded + cached (hint: versioning)
// 8) Add dynamic caching (with versioning) to cache everything in your app when visited/ fetched by the user

// Important: Clear your Application Storage first to get rid of the old SW & Cache from the Main Course Project!