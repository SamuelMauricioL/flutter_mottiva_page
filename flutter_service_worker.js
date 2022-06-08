'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"manifest.json": "698e77c04c435ed911ad5c1ecd7ac262",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"assets/AssetManifest.json": "0cfaab9eadc86db099e91ffea54ff72a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_sound_web/js/howler/howler.spatial.min.js": "28305f7b4898c9b49d523b2e80293ec8",
"assets/packages/flutter_sound_web/js/howler/howler.min.js": "0245b64fba989b9e3fd5b253f683d0e4",
"assets/packages/flutter_sound_web/js/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/js/howler/howler.core.min.js": "55e0af0319483be8a7371a2cceacf921",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_player.js": "ab009562c726b262f996cb55447ef32a",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/NOTICES": "b17c16e946ab9881debda2b574e2f9a6",
"assets/audio/lyricslap.mp3": "debea44a8a5e08e5e577627d11f6ebb2",
"assets/audio/waveform.mp3": "ab0efd9d73f27a176a02ccf36cc5a351",
"assets/assets/font/BwNistaGrotesk-Bold.ttf": "300f88a31df5f9b07fb3f75df90f2cdf",
"assets/assets/font/BwNistaGrotesk-Black.ttf": "d9ab66f3dcd9ebd92fe05e73f78a1086",
"assets/assets/font/BwNistaGrotesk-Regular.ttf": "5ac4895b5e8bd913bf05050c9af1d0bd",
"assets/assets/font/BwNistaGrotesk-Medium.ttf": "3f155bd5e7421d5156a7aaeb8152315f",
"assets/assets/audios/waveform.mp3": "ab0efd9d73f27a176a02ccf36cc5a351",
"assets/assets/audios/audio_test.wav": "46b095eff26f13627566dfb3dbc16fd2",
"assets/assets/audios/sample-3s.mp3": "4f774d08f0c3e66594704d6be4a2d052",
"assets/assets/icon/icon_mottiva.jpg": "6224d1bd3b61fd793f96caa4e313f2d5",
"assets/assets/icon/icon_mottivateca_play.svg": "a5391bf98f90383ae517349497e7a189",
"assets/assets/icon/icon_favorite_on.svg": "85ae414734bbb7d5f0c0b4617592a044",
"assets/assets/icon/icon_favorite_off.svg": "0e23524745df0733943111abeb03971d",
"assets/assets/icon/icon_message_success.svg": "3257d2a0b1b4f80ed3d151afc3c1e660",
"assets/assets/icon/icon_message_danger.svg": "ba9acfde6e1b23cfba190bc1b3ade1f3",
"assets/assets/icon/icon_mottivateca_filter.svg": "69c3bacdfe36decf5759834a4c977bc3",
"assets/assets/icon/icon_clock.svg": "3637c67b7bc6664d7cab880ce6ac85a1",
"assets/assets/icon/icon_x.svg": "6425db3b61021bdf53f196cc3083e4df",
"assets/assets/icon/icon_mottiva.png": "3c761116bfe745260bc3a376d50ec034",
"assets/assets/icon/icon_info.svg": "f33c738901313e4b7cda644f9a1543ec",
"assets/assets/image/waiting_room.png": "f068ab0840ce1ccda270720bc3785eb9",
"assets/assets/image/icon_profile_security.svg": "3a63f64543678f67a9b49a7c30c92686",
"assets/assets/image/icon_room.svg": "6125caa5883b6510f57a0859ad97358b",
"assets/assets/image/icon_schedule_accent.svg": "24a979f7fd4b505dac03786aad21690b",
"assets/assets/image/image_task.svg": "89b95b72418eee071a398a3c2bf45156",
"assets/assets/image/icon_profile_birthday.svg": "1ec3c17a956bed78b7a84e0250fbd816",
"assets/assets/image/logo_whatsapp.svg": "f1f46c403f1d62e1360903b54aa560a7",
"assets/assets/image/icon_check_blue.svg": "c081bd351bc5bddb15b347f1b89e3f7f",
"assets/assets/image/icon_therapy.svg": "a7a926dbbbdd60a905b6570d5a0b3c0e",
"assets/assets/image/testing_gratitude_01.png": "47733cec67069c35e66e6ba6bf22d2b8",
"assets/assets/image/icon_play_white.svg": "87a862de304c186a2707e353a06b8c93",
"assets/assets/image/img_send_message.svg": "3d4e854697a433a78f7705d8188a30a1",
"assets/assets/image/img_camera.svg": "cc5167c1102054097af99686dea8b364",
"assets/assets/image/icon_help.svg": "8078804b502a7fdf9ec845020514839b",
"assets/assets/image/logo1.png": "4e72b1547b01187760d78ccdc9aa29ff",
"assets/assets/image/icon-verify-dni.png": "b7ece531865fb552426de153b62e9fb5",
"assets/assets/image/img_configure_secret_question.svg": "6042693b74d60b8014ebc62a50de94a3",
"assets/assets/image/diary/Video.png": "66cb468d02618d556b386d50ae85cccf",
"assets/assets/image/diary/Mask_group.png": "fffccdba6287560bd31658a796aaa8c8",
"assets/assets/image/diary/diary_record.png": "f9bc481639370a006c0f3a9c27b27c87",
"assets/assets/image/diary/diary_home.svg": "9bab341b1e8ec907409312fbcd0c0f62",
"assets/assets/image/diary/Vector6.png": "73392f69a6229cd6794bbb9a19c49ece",
"assets/assets/image/diary/Microphone.png": "d52d38885cf0b9828bd3244a622da6d1",
"assets/assets/image/diary/diary_next.png": "a69a6a1eb56c4f6066b41ed85e63fb49",
"assets/assets/image/diary/Ellipse20.png": "db506529da5f50d5d01c7011ebf21fe3",
"assets/assets/image/diary/background-complete.png": "13a19e11eefb823d9ebe5d8235104489",
"assets/assets/image/diary/Ellipse30.png": "171b05abe6175e390702a01bf98445e2",
"assets/assets/image/diary/diary_clock.png": "9c5a60b61ce1705271d21a957ea91ee0",
"assets/assets/image/diary/Plants.png": "d15c0c50cee69f5adac3831d408bdfff",
"assets/assets/image/diary/Microphone_outline.png": "151bc7a46bf3e9e7b73ddf39b240d2b3",
"assets/assets/image/diary/diary_message.svg": "b82a00b739622226780bbb2bc45e105d",
"assets/assets/image/diary/Ellipse30.svg": "fc1810779f1107eb995e14ea65d515e5",
"assets/assets/image/diary/diary_mask_group.png": "8a1482ca353584b49563f39b99c3b47c",
"assets/assets/image/diary/Microphone.svg": "b71de0f0e492bbb9e5c7f427ad9d7f8c",
"assets/assets/image/diary/Carpet.png": "c92adfa0df6e8e7eec60289580fde730",
"assets/assets/image/diary/Character.png": "642b996ef8499c498748cb02841070d4",
"assets/assets/image/splash/mottiva.svg": "702c82d71e712703bbe5629631dbb04b",
"assets/assets/image/splash/mottiva.png": "2507325c4e8014714af013a720550a98",
"assets/assets/image/icon_bell_accent.svg": "9fbf58c952adb77412b2e09b5e0a09e7",
"assets/assets/image/icon_profile_logout.svg": "0649b05eee85d42d0289d893cc14c420",
"assets/assets/image/therapy/therapy_slide_01.svg": "ff97917041b5d6d36ffcac882ed58024",
"assets/assets/image/therapy/therapy_inquest_icon_neutro.svg": "9b6a7c4bdfa5003a8cc6a518274a9ce6",
"assets/assets/image/therapy/therapy_inquest_icon_star_on.svg": "681cda4ac5606a5cb2c7aa7962f39e8a",
"assets/assets/image/therapy/therapy_inquest.svg": "c631a91ad493ee2bc639e92d6db207a6",
"assets/assets/image/therapy/therapy_slide_03.svg": "1002bd73b582104919c2539489c6b460",
"assets/assets/image/therapy/pool/like.png": "4f60756ba8afad76de476965322822cd",
"assets/assets/image/therapy/pool/dislike.png": "36f4609c3ca61d7684e71871aa995392",
"assets/assets/image/therapy/therapy_slide_02.svg": "5071aecb8aec83d288d21784e8ca35b4",
"assets/assets/image/therapy/therapy_inquest_icon_star_off.svg": "0f952d56390bdce9c25849f4bdd9e82e",
"assets/assets/image/therapy/therapy_info_icon.svg": "8ad956e78a64f237881361be4f9a8f8c",
"assets/assets/image/therapy/therapy_inquest_icon_sad.svg": "a417ff2ff5d995272db66b62939a23c3",
"assets/assets/image/therapy/therapy_inquest_icon_happy.svg": "ef310eae8c5598305a661a558866680f",
"assets/assets/image/icon_check_verified.svg": "697251aae1609edcafad0499e5b3fa30",
"assets/assets/image/icon_add.svg": "57c25cb079d9c0e6880f83d945bb74b0",
"assets/assets/image/profile/icon/icon_birth_day.svg": "1ec3c17a956bed78b7a84e0250fbd816",
"assets/assets/image/profile/icon/icon_ocupation.svg": "515671c8eb5e436bad75cc817aadfcdd",
"assets/assets/image/profile/icon/icon_stude_nivel.svg": "a91baad5d30e01980131d4bb449afd85",
"assets/assets/image/profile/icon/icon_civil_status.svg": "87099515a96865a30a9c7e774c47a9ea",
"assets/assets/image/profile/img_profile_security.svg": "f8e269378c8e38f43d969ba6d4955425",
"assets/assets/image/icon-verify-dni.svg": "b2f00cb1b0f380917ac238ba8ee171f1",
"assets/assets/image/icon_profile_phone.svg": "e1a7d90153633e4f0fc46d911e17d072",
"assets/assets/image/icon_home.svg": "4b65dcf8ddc761c3dca1519e97431ad0",
"assets/assets/image/img_avatar_guide.png": "fc7530d90173c1b2c09cf7df04d0b635",
"assets/assets/image/logo_mibienestar_h.svg": "e3b592b4c75ce2fb4ec775a34558060b",
"assets/assets/image/icon_bell.svg": "722c967c8fcfd1875d3fa9f3bef1e7a2",
"assets/assets/image/icon_arrow.svg": "2947fff853fcdd7bc6052a6708f4f046",
"assets/assets/image/icon_help_accent.svg": "a214e549d2dbe2662cca32f1fc21bc5c",
"assets/assets/image/icon_profile_dni.svg": "cf8c161111d2710f8f35688a209c07b2",
"assets/assets/image/icon_profile_civil_state.svg": "87099515a96865a30a9c7e774c47a9ea",
"assets/assets/image/login/login_slide_01.svg": "9db692b826e4d9c50fb60822b9931781",
"assets/assets/image/login/slider_image_1.jpg": "f18a83ce026c277a223526981ea27a64",
"assets/assets/image/login/slider_image_3.jpg": "91022b3bb12f9374d07a35ff3426f1bc",
"assets/assets/image/login/login_slide_03.svg": "aff12f588a745ff2080891fb7416d0f9",
"assets/assets/image/login/login_slide_02.svg": "db1ef9782803552f66c5b02bd2ca52a0",
"assets/assets/image/login/slider_image_2.jpg": "48961feef8168f83e76fdab50a9582fa",
"assets/assets/image/icon_home_accent.svg": "0304e3bc0345cbb8a6e2ef8875ce87c2",
"assets/assets/image/icon_profile_study.svg": "a91baad5d30e01980131d4bb449afd85",
"assets/assets/image/wellness_network/group_room.svg": "a04ec9ca40a8b53070f20edb1bd95c9b",
"assets/assets/image/wellness_network/others.svg": "5995566c2bd4f89079619e0e894e8c8a",
"assets/assets/image/icon_profile_name.svg": "5803e20409ddd62ab2234ce0ed21558e",
"assets/assets/image/icon_profile_policy.svg": "cb2c8a6e31f09cb705579a7067b0f569",
"assets/assets/image/home/icon_room.svg": "69332ffa9b29c790696f8b4a60b52c82",
"assets/assets/image/home/icon_diary.svg": "522438297c5dffd447b0021753fe5c8a",
"assets/assets/image/home/icon_agenda.svg": "c26517294f521ed9e36bcdf3775291c4",
"assets/assets/image/home/icon_mottivateca.svg": "4dc720fedf7a225c2f490e22367fd33b",
"assets/assets/image/home/heart.svg": "4e686ebce3e286f305060fcee926b4e5",
"assets/assets/image/home/mi_bienestar.jpeg": "b7debef4e385408f2612198408e1a35b",
"assets/assets/image/home/icon_mottiva.svg": "702c82d71e712703bbe5629631dbb04b",
"assets/assets/image/home/people.svg": "f5930d61185d5fedb358b9dcf1499df8",
"assets/assets/image/testing_form_01.png": "5a3f1bb2c9bda788176a91f200632212",
"assets/assets/image/icon_profile_work.svg": "515671c8eb5e436bad75cc817aadfcdd",
"assets/assets/image/icon_profile_term.svg": "239ef62e015e09a98cc2d06674ec6509",
"assets/assets/icons/icon_message_ok.svg": "c081bd351bc5bddb15b347f1b89e3f7f",
"assets/assets/icons/chevron-right-solid.svg": "1fce70541cd225507e29c233e23f2cb2",
"assets/assets/icons/chevron-left-solid.svg": "dc880f17456d5cad7f07d83554c22b9b",
"assets/env": "8d179d364b498230b8e44b2705984a24",
"assets/FontManifest.json": "4561801c29081e92a9cd2a28b76f391d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"version.json": "3305ce9d35eeacac8426b7bdc94d31ac",
"index.html": "24faea5ce95532beb04f64f3dff14e77",
"/": "24faea5ce95532beb04f64f3dff14e77",
"main.dart.js": "16683d708a21b45640134681fa703433",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
