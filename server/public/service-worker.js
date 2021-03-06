importScripts("/precache-manifest.8c40bf8c86e700981e418b576dd46385.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
  // workbox.routing.registerRoute(
  //   '/employees',
  //   new workbox.strategies.NetworkFirst({
  //     cacheName: 'deineMutter-cache',
  //   }),
  // );
  workbox.routing.registerRoute(
    new RegExp('/images/.*.jpg'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'deineMutter-image-cache',
    }),
  );
} else {
  console.log(`Workbox didn't load`);
}

