'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"data": "fb3d30177046045cfecc14277ec593c6",
"flutter_bootstrap.js": "781f1f9e2115d0d23b221baffd31cd2e",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/NOTICES": "ab643e95a5bc1d70e9bde63c44c14085",
"assets/AssetManifest.bin": "373234d664ffe656d0fb4039a86ad513",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b397d3ce70addd6dcfb42445f3ffd96b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "cd5a0fd6934a9f48244bd7c956ee04bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e3915dec48cbeefb42f1043b862cd183",
"assets/AssetManifest.bin.json": "4446c963dde6091a6b6de4cb1ae02947",
"manifest.json": "a095c6279f15967a89fa272ee8cb2fab",
"version.json": "2a5fadbc192b54c237529549321a8044",
".git/logs/HEAD": "a32dc6680f3d55fe8a33071658773cfa",
".git/logs/refs/remotes/origin/main": "c5e3100f1ff26bd8be5fae14d5fa0825",
".git/logs/refs/heads/main": "a9579010d16b934ac631a63d51e2d3ca",
".git/COMMIT_EDITMSG": "fc44cc775ff21c8823f81dcaf3d40d20",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "11999b638d16acf898c5713b7f0047e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/main": "96a380d2ff6a190d475d0d759937fc3d",
".git/refs/heads/main": "96a380d2ff6a190d475d0d759937fc3d",
".git/FETCH_HEAD": "90bb173e1801d03bf04af03c032e0656",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/ed/279f3fffa101dc05735e1c933b25073ffffe9f": "df15bbf17dced06f3245d0b53bf1261f",
".git/objects/5e/ea4f1d24322198d7e0fb3744bdc860e9e04e72": "0d85d1664af490a34906a197321ee529",
".git/objects/8d/6fb34866d0f9a5a7209cd1408b3837ab1c3b30": "0a3471e7f332a2480c5a551e2fa5cf2a",
".git/objects/ec/696a040e0eeb7485195c9c9ee162da013f4ef6": "9a6c02d060a93544dfc6b0c337d15e79",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/c641907ceaad9c9555fc8863ba2d0299294f08": "8b51fb0bbe791d061c85720257e10628",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/3f/786f9edfc54027322ef343656fa47e2ff7162c": "ffe44c53285ce5c88dfa1d945868da76",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/21/6717d4773f177a2d2742e0c3ae2de783c9e2b2": "e970e6e3181d5f657d916395ac25b1ca",
".git/objects/21/e6bc7c08071cf23595f9d3e5be1f8e2ac3df99": "0a47097572e6e666c3d38d1dd7f28857",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/0f/ecfd3666a91feb55d2412eb20b638dc3e3ffe1": "9b134764bdf782c2744b7ed9788401a1",
".git/objects/07/5234593c5f937deee6e78a68b6b648dc5bbdf5": "70968e71f03d2d9e3e8c9dac531a650c",
".git/objects/92/9d7c765bed97005b43af1001781e60007057f3": "c8b09bad912e91451fb197375e8c6c6e",
".git/objects/df/95c753c4a7338e1f380401764651be14203cd4": "e045716c1ebf0d2fa36701a68acdfc29",
".git/objects/e2/f9e7491a38c5a5ddb160e6a520eef9c4c218de": "e0c51e743de353601cb1433b8c893966",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/45/0b8097c7da1bdcce5cf7c91475a5f5e216bec8": "019d05a3054ac33ff481329610187b3b",
".git/objects/67/7e5c7af6daafb1038efa11d820649a3d90dc46": "46602f0d7ebcc930532152903f79d830",
".git/objects/67/9e3e48dd7b2aff7cde7a3b15fded28d6e575ef": "538e8e1f5846df37eadb210764d18b2c",
".git/objects/51/7e6cf8fa1368889a33a103e35293a8b4547bb8": "ed3536420d033abc24621754850e16fc",
".git/objects/29/0a4de9c10f759512b84f064591312bc4dc3c46": "4fc36708afb15bf8246fe74a59531327",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/7d/d66e506a7e7bdedaa8adcb19fb32feae6c8adf": "11829a8fd8bfe118d137be31cbb73241",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/20/1715e61d414e6c24b7af3f542f36226b85aa37": "b99d7d7e243408a33952da79aaf91580",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/e3/f8663d590305e4b56b2c8592f956710312b3fa": "a5e741528cdeaa45328fae08527b69eb",
".git/objects/e3/5242b23c0945a2fbc30befe481e99bd2ef342c": "3d1a763abf8ad6fb1065718ca00280e6",
".git/objects/fe/7c708e8d92962cd3e83a084901393b1e07ba02": "ec2b977d09054440ddb20ec2f626ecb2",
".git/objects/09/4af4ffe88131e3026ba98b3c5ee26cc0f2e4e6": "2fcd60b06ad08a5b5b4e6fb66d50c60b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/ce7e06024a16b68252ac3dc417fcdcd134574f": "bb331f5b889048c585dac66027ff6db7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/17/a6951d6cb1750929939adc157313de0aa76a2f": "fda6defd969c852288d901fffe2a0d46",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/30/5ae2fcacd181c0b155f84ced50f6a0bfc38f11": "91e34a8e979d25584bf5f5c29d7d71bb",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/44/4b4d7b44d87c39d4bbee76d4bc01589ede51d8": "b56f7cf863f65caca98bb4723f3b2960",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/acddc6a17f6f38a8b3ff583cb6ea68fe9d32a5": "9e3e3615599bbcb22ac7d38da01835ea",
".git/objects/be/2037e6e9376aae354af2e62d271bd9d363f0f0": "0a553448894f0f2089e87128d40544fc",
".git/objects/65/a11f980beeb6f509621feeb974e91e59480c0d": "f4b09eabf3b88153c29720eb483fd76e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/cf/8778e439da6fc704fe2f5ac7e240382ae00e88": "0aa514a67555972f764bc5559613f80e",
".git/objects/6c/3ecba12240d2f3ff3dd4cc498d076aa7730a54": "3df8559cd08a6e58946920c452c74384",
".git/objects/9e/9b8961f43ffff9fa422b1118855fad3970dbb4": "5f09cbd5faeac1be62c813c7335cc5c6",
".git/objects/97/d1293efd1fe376864f1dc86536297a7d1dd634": "4e5faf0215582050c8be77457a6934e8",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/e8/ca6b848b2164c275460c49acc80e569bf87dc6": "66fdf484b9f25d19c6cc907a5c4863b7",
".git/objects/72/e2392349e3d5bb2549590993616639f8e856a8": "646662556d47543df70bbecc21d73f5a",
".git/objects/75/d47e984d11f561226e70ce0cddb177a1d4ce81": "0aef08b59ccdb599a3b0d1fb85ad4bfd",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/d8/e81c35b348031300975149dac581371ff46125": "d909ad5b1a12ab304a109930dcbc7e98",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/59/400fbadb5aeed154994c32b5131db8552a416f": "c71f84f949f17ebcb2ccefd6b4875405",
".git/objects/06/8925369d32b663c7f33bc9cf4372f9addb83b2": "ce7f675fe205da397ccf9a69f429cc5b",
".git/objects/4a/fc77f5fd06fbb0c77a598a71bfdb864b8f5ec7": "43879322215fd0f97dcccc7c9af3b5dc",
".git/objects/55/e1714207965b664d5789d60f24cd779df36d6a": "ac222539073e0e1e200e4455d2fca7c7",
".git/objects/13/53d43f2747064615913b6fb0ca492fcd15c28c": "6ccdd4c5a0e4fd43b4ddbf32dba78f81",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/89/0c7c19d15d7e2ef6d7bc5afb33a479ec418c01": "d94643042856ab7082fd5ea3fe6d07dc",
".git/objects/31/e6e2e81699ce55b5f09d73acd3aa593572e457": "ae818503b55ac6500ba150552bcfb411",
".git/objects/c6/9622cc04d4463aeaf14a4689c7430e31a65b3f": "5db9adf11487790b5f97a2858b43a751",
".git/objects/b6/6dcba5feb1fa8613ccfe6e25991986a673a516": "cc54b1499f257b3a306d949067997ef4",
".git/objects/d2/1d86a0add5f9cfb847f472c46ca84ebdc1b9c1": "88ce17206a660b208c82d5ac263a9a3c",
".git/objects/24/1abddf2433f231d02b8a908d76a405e8425603": "f30d54df8eac8d6479f5f9b976831e9d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/61/bf85f532b3acf87ac6a9995cc59b836ac12ae8": "d9f5bf491d01af7a3ee1c01c1cff8831",
".git/config": "1923153af66049016044bf9d68745b76",
".git/ORIG_HEAD": "96a380d2ff6a190d475d0d759937fc3d",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"index.html": "9d71a2ae4f913688a7860c2a277ff73e",
"/": "9d71a2ae4f913688a7860c2a277ff73e",
"main.dart.js": "4b39506122dc54439da6be39fcaada6b",
"flutter.js": "f393d3c16b631f36852323de8e583132"};
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
