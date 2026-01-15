'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1941cf1b061e1b11b1c8716112c087e2",
"version.json": "03acefc4795e8573b194262cd3a4419f",
"index.html": "631755fc204876954d82a70807b49e59",
"/": "631755fc204876954d82a70807b49e59",
"main.dart.js": "9d9bad7f28ff4012fb7a8a0f18991c65",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0d4c1e42ed79fa8e7efcdf268c751482",
".git/config": "6585036910ca204cf0fbc1860b29d636",
".git/objects/66/1b2cbece1749c4f0692b9b6cd401d32dcc38dc": "bc3c42ee6469d44f1c6c20e3bcd041b1",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/03/f2858a37661af9de5b078fec014c77511dd3e2": "3e27a027d231e027d8a8958caecf90cb",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/fcf5a886a21e38ee15b3af0ffb7c4a55c1c95c": "88b26811456bb1a3af5284038ba94f60",
".git/objects/67/52d9cd2014936081f6ff26b133385f7ffbfc72": "218c127dcbe55cf79be7159d8195520e",
".git/objects/67/48ffcba9f592be74ab23035e2793ba3916fbf7": "52dd5f1ccd594b1f29ccd6e616ca2d16",
".git/objects/0b/ff45409821fc1b8e83cca0c6f57f23a6085a30": "ac426a41e9b7b79198ce08fabf85176c",
".git/objects/93/5f8bf2bd9a52610298605fc7345f1127767e88": "5a0493b1e9390192b0a92d37351dd120",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/df/30d6d08a430fd11c5261aad46dc2cc7e59d051": "d767b8c640ada879243f394a89c26fe1",
".git/objects/a5/39eb302d6cfc70e891394938aa72393b3a333d": "b59489216175297beff97bf13271c8a5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/fed797a6b359b14618fb6e4a1dfa52c6782b37": "0b65462960df5478debc15e12da86939",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/d68a929673b139575d61cd0edd33c4b2c53258": "e6cb5194780e77c7a497a80e6a66597d",
".git/objects/e3/6b8274e671a5ab6542f4e326713f66fcbd5e47": "b3419e5385316360ca492581e1fb15c5",
".git/objects/e3/0452e3458c1a73b0a3760feec0e7a7089bbfb9": "a71ac949492200b0ed9ebf821aa37f70",
".git/objects/cf/53553760cd195fed17839c3d705824c3b83933": "ea4698535b71ba71dac4ecc3a249d807",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/4e/93d543582f956a5409d04a1a1662f97407f60e": "92730e1527cbad9357a0861f85f7e11e",
".git/objects/42/444449500028f8a3dc26cfe33761b6978022e3": "b362fa50484e82499aed2ab2cd38a25e",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1a/2ceb33f4085094f72ba41d11a2f4a14dc20ce7": "9c592e1e4684dd4f12b3be33e173cd7e",
".git/objects/7b/2ecb815cf3490aef507c1aa14707f0a9b39457": "c6be8938a913c0d3a7c9f66fbd049035",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/7272057d8ea0d9420316a2dd9bc2b50ebf8c92": "cc5bc2d104372b0798add852bbea8772",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/72e0de98b503e2f0018551eb4ffbe86ae01d27": "277b276d8a2b7a0771b34abdf25842cb",
".git/objects/09/94391915381c871eef67b1dc9bfdfc2be14ddf": "4039f426a3a784a8bb7265df85e05dde",
".git/objects/62/84f7c388232bbd4b225c63d580836197d346d8": "d0841b46511f0ce059eeffb275e9bfb6",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/30/2c6707b4b8a0099340f3d9c4345eeb20cdbcaf": "7bebed696819cd7b8b2a309d7722e9a8",
".git/objects/5e/a767186fe307829c185cab499eb0fa9e97d72d": "fbc591136ee0cad5d9bf8d7391a7c516",
".git/objects/08/eee995d2c54766ced963e83dc24096683a6067": "1d1adeab4878753325e079308bbc4fd6",
".git/objects/55/4b36b6baa1e6021f544c8de2d15985717408c3": "9c83cb037eb431ed1753f1f66efd1ade",
".git/objects/63/95e8098819fcc818b4dc8db46dbfc3944b5c18": "040f003f0d0fec44589b12a91d222b2f",
".git/objects/0a/cdca51513ef6a4fcda4c57d0cb5cc3d49a1619": "a39b5b4ad71f677d4dc37f620b141acc",
".git/objects/90/05feebc67b4755cf22d10611b398dc066d3198": "048d2cdaec5bffa20a5d87615a6cdbcf",
".git/objects/d3/77450e01ab4ddf2c858c019cf24ad363f01323": "019e53490e7de45ad1cc40473f7d391f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c6b7ac7578c732528c28cf20f8cc42aae0aa6b": "b4ea64645bb48732331100cd67144829",
".git/objects/ba/8da60d3ee7fcc2c2354858c862759302b09cb9": "7dc60d0ddf2e5557c77ccd4217df33fe",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/a9/4eaa687b71394f2b704d357297eba97f60d702": "2cba9814285d8df1b711428e04b439cc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/f7/6ea8b12edff9faa74191bcf918e2ee191c057e": "61ba43e38ea7d56cb5dcd21222e0c11c",
".git/objects/fa/fc62c64ccd6e1fc87be4f4573e64f26e4677d8": "578e01a03d4dd0cb8816016059375e1a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/e0/b7ed2d3bb35581f31cae3e72578b11d7113942": "28039dc499339821d0c542cb03b6848c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/36dbef8ef9abca3e001179626aecba83066887": "4860964387e93ff609f8bb51ef57c7c0",
".git/objects/83/bd7af6f5cae84b06e8262e23f804354f696539": "68bd0ac0927781193cac52e6eefe34c5",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/12/2ebf51cbbb5ffaa0b8c0e91d4568e30cc87259": "987d825565e9fad3c2c01cfff3cb45cc",
".git/objects/85/0a79893113b0e0d13bcae281e18fe327f8f621": "09ed97778c252a33503b232c7f51620e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5204c8e2aeb83d184dc90e286dffe204",
".git/logs/refs/heads/main": "568cee8313f5f2d10f16e9e68ce7f448",
".git/logs/refs/remotes/origin/main": "ed824e91868b30cbf1a126406154285d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/original/refs/heads/main": "d26a9a623438847b590392bcca051e08",
".git/refs/heads/main": "f0ef688c19e918f7e447fab3815e917f",
".git/refs/remotes/origin/main": "f0ef688c19e918f7e447fab3815e917f",
".git/index": "c57281947758f90dd8a5ac6abd4c7719",
".git/COMMIT_EDITMSG": "a8097da885b6f74a4a72bc4ab0009fca",
"assets/AssetManifest.json": "4885ddd6e80e4cc82f2d861161fc9ec2",
"assets/resume.pdf": "35aa704734c44d64eac2ec0d030b506d",
"assets/NOTICES": "c2d43e32437337f7034c9b579a1ef777",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f5ec3d5a709dad58f76942c0f4bc9d51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c76eef4c1cb8013e0cd09bb026e7f831",
"assets/fonts/MaterialIcons-Regular.otf": "b6a3c9e6b673e236d7699c70fb190adb",
"assets/assets/geoguessr_thumbnail.png": "cfd70a3ac465f5e5ccfacf449e7ffd17",
"assets/assets/lin101_thumbnail.png": "83a130a66080b744dd05e5eb426b984b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
