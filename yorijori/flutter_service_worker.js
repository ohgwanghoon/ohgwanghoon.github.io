'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8a63cb87b88dc1aaefbd8185332ee269",
"assets/AssetManifest.bin.json": "e71c41c34a08fb3c157c89a05f94e8c5",
"assets/AssetManifest.json": "3ea027cbdb65e42e939667d62287f374",
"assets/assets/fonts/NotoSansKR-Bold.ttf": "671db5f821991c90d7f8499bcf9fed7e",
"assets/assets/fonts/Pretendard-Bold.ttf": "dfb614ebecd405875f50a918ca11c17c",
"assets/assets/fonts/Pretendard-Medium.ttf": "7305f90c923d4409825ec2f4380b63d6",
"assets/assets/fonts/Pretendard-SemiBold.ttf": "459eff7ba5380583ccd6eda49c846c85",
"assets/assets/images/app_icon.png": "ec3998747ce4c998aee5a99a728c17ae",
"assets/assets/images/categoryfield.png": "577597bf6875bb918335e709067bf01a",
"assets/assets/images/food/asianfood.png": "e10e126ea16bc8ac798c4cf8b71ef400",
"assets/assets/images/food/chinesefood.png": "c3e489d0f78408a631f19cd914d20531",
"assets/assets/images/food/hotfood.png": "07c516543e991b0c95ce46db8a60c91f",
"assets/assets/images/food/japanesefood.png": "50e9340e5fbc6dcc9bd0c593d6bc8d3b",
"assets/assets/images/food/koreanfood.png": "4dac3cf8c887fb072fefeed1da6e55ba",
"assets/assets/images/food/meat.png": "c4328e74ed65a714e807c8a6f6bd6491",
"assets/assets/images/food/porridge.png": "08212d3d1af4d5689fba68b525618177",
"assets/assets/images/food/salad.png": "9d26d981e80765ebd9ac551a94ad7d70",
"assets/assets/images/food/westernfood.png": "0d447fe5ba4e255066414de832a4e14d",
"assets/assets/images/googlelogin.png": "8ae81719742cc705b86349b99f672f1e",
"assets/assets/images/ingredient.png": "efe3dd52b733143cf96e90e429deed5b",
"assets/assets/images/ingredient_small.png": "94a423f1826b5911637b6f79993946c3",
"assets/assets/images/kakaologin.png": "bab9582e630ecfef4b3ea2898e07b9e5",
"assets/assets/images/noselection.png": "57ba18cbe80c98ed5e16c78aced06213",
"assets/assets/images/profileImage.png": "b59903de562a25d1a2eb873c7181bd8f",
"assets/assets/images/snslogin.png": "107d29b9b0953045bbfc673503206d91",
"assets/assets/images/welcomelogo.png": "31af42e6123d10647470f8f7f9664e9a",
"assets/assets/images/yorijori.png": "11d4393350bbaa9eacb88245f2bc57d8",
"assets/assets/images/yorijori_black.png": "4be31a7cb88ddf29567c1fcf131cb999",
"assets/assets/images/yorijori_eye.png": "48609f6089d5774b4d31ce32bf276361",
"assets/FontManifest.json": "f438d4a4b285dae8cac1c0b34d1d89b7",
"assets/fonts/MaterialIcons-Regular.otf": "807cc851312d04292ebb10088dd5e6bf",
"assets/NOTICES": "7baa8ebaf561b3e7e35c0a28b9fe4360",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "b027543b0c3f04ccbaa35ef4ec4b7df2",
"canvaskit/canvaskit.wasm": "1060ba96b9ea7173ab9af029e52b1018",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "d8b07e2dc7fe884aec96aebff78e2875",
"canvaskit/chromium/canvaskit.wasm": "216cb8b9d8c5d367cb581089fe21cf07",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "01f22f771e3a26a0d4b52b9ff78f82fc",
"canvaskit/skwasm.wasm": "12cfa3089889ae9083809153e5193838",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "1a44619c58ffa0d17840e33eff862c82",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9e7a49d44ec88c58baf0e18519afdcaf",
"/": "9e7a49d44ec88c58baf0e18519afdcaf",
"main.dart.js": "f60691cea3b6123ac5989bf31ec35e85",
"manifest.json": "f03335a74cb48236fadee8916a706fa7",
"version.json": "eb218511dfab8e672fee9cdd08971c4f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
