/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2018/01/05/VueInAction1/index.html","779e364217ff5cac2fa62674a58e8889"],["2018/01/05/hexoml/index.html","c003c044454f64c8e225c146c4953389"],["2018/01/05/vue-VueInAction1/index.html","c60758568dcb358b5b17f57a4d5f1505"],["2018/01/08/v-model/index.html","2d7814e88a054db7fadc70c04b753ea8"],["2018/01/08/vue-v-model/index.html","42660df0a0905790d1b2207402c57a9f"],["2018/01/12/VueInAction2/index.html","3ac616d5c219bfdfdee7cbece0256bb6"],["2018/01/12/vue-VueInAction2/index.html","8451df0eb336c8e81ec8a6b7d1df7fa5"],["2018/01/13/Array/index.html","d79e1c29a0288f78e6c18cb94a24b520"],["2018/01/13/js-Array/index.html","17296768164bf13313932d2ace3547c9"],["2018/01/16/instanceof/index.html","c2c11124552678437af80499464bca81"],["2018/01/16/js-instanceof/index.html","d25407f1125ffaa892283875d9a6752e"],["2018/01/18/js-prototype/index.html","10718266f68f2888fd3e5f0619cf285c"],["2018/01/18/prototype/index.html","11455314b6a079f29be470a475a6bb0e"],["2018/03/07/js-this/index.html","267c3ea0cc22d05e1976abc59999cefe"],["2018/03/07/this/index.html","1ecf9381310a9fd3aa8f34eef5376b58"],["2018/03/10/js-jsMemoryManagent/index.html","0bb832ea0e412665f901e5a775ede9db"],["2018/03/10/jsMemoryManagent/index.html","37627c2040668c15213170a63e353b3f"],["2018/03/25/debounce/index.html","9cf7aaa80381ee48b698bc110e3ec245"],["2018/03/25/js-debounce/index.html","52cc01ce5f78fe618ca48696ed669f39"],["2018/03/28/toLittleCute/index.html","98cebde4d67026aa4334466671c33dcd"],["2018/04/02/js-面试/index.html","ffd0f3c358355ad073cb38456694b614"],["2018/04/02/面试/index.html","8063d964d816411cf3ef0d506933ef0c"],["2018/04/05/JSX/index.html","e2f3fb122ce814c2394b3b1642497edf"],["2018/04/05/react-JSX/index.html","741089a1642d565b94a39b6d069ecd92"],["2018/04/10/axioshhh/index.html","ccec3843ad71282aae39a1cca5fd2dcb"],["2018/04/10/js-axioshhh/index.html","bc8f03957ccd740aa80109b3e3b548bc"],["2018/04/18/template/index.html","55b6ae5d8bf278960ba18cf35bd16d32"],["2018/04/18/vue-template/index.html","b4c4aaa8eee2eff4575c0905c432ab13"],["2018/04/19/http/index.html","dd910b46a8b3080aad82485af9d915c4"],["2018/04/19/网络-http/index.html","c0e09fcc03e6676e576cf4c22d019dbf"],["2018/04/29/timetravel/index.html","d256633f70d3b1765688360a16712f1f"],["2018/04/29/vue-lifecycle/index.html","39b3e0d3b098850539f40342e1ebab54"],["2018/04/29/指弹-timetravel/index.html","c870f642e5709301d2a6468dd730fb98"],["2018/05/20/指弹-流行的云/index.html","b21046004c49b5b25397b6bd10e6c680"],["2018/05/20/流行的云/index.html","11e307add70335dcf1bdd5ba2a96469a"],["2018/05/23/friendships/index.html","1b27b72f06a35d9be7a76b0ad8828732"],["2018/05/23/指弹-friendships/index.html","e1d8c8bb27574eccd7c50da77b53e5b0"],["2018/06/01/ReactNativeComponent/index.html","561fb0eb2c60a6ae25299d973bd969c0"],["2018/06/01/rn-ReactNativeComponent/index.html","eee91ca1801c6c31f8f756972d44eff3"],["2018/06/08/choppingHand1/index.html","fed52515c0073ca14a3db0ece1d3b4dc"],["2018/06/08/rn-choppingHand1/index.html","afbe3de974daddc9cf2c5c292f4f4043"],["2018/06/15/choppingHand2/index.html","6a44c7a10d13e6c10a4a742f4bf47355"],["2018/06/15/rn-choppingHand2/index.html","fd695c1a722f160e87832587ef60e8ba"],["2018/07/19/Ngnix/index.html","65f104e2d57626a18402b04638e1817b"],["2018/07/19/杂记-Ngnix/index.html","a57e3f556e3bd84b73bf958af7ed0e8d"],["2018/07/25/js-sort/index.html","7b47000089d1525218ddffbb3fb4240f"],["2018/07/25/sort/index.html","1afb9fb8645131bdcbef9a6577f1bd77"],["2018/08/07/koaMiddle/index.html","16756f53c4c38dc2d54f909fe042ca74"],["2018/08/07/node-koaMiddle/index.html","051251a7ad64d920d1088350415c40b5"],["2018/12/07/git杂记/index.html","3d962ee6926df41371fe17f06dd61cb2"],["2018/12/07/杂记-git杂记/index.html","13c7813d3d652cd4c5ebe1a609608534"],["2018/12/31/js-selfPromise/index.html","d152fd6a461e1cd92c2c51db3ce243bb"],["2018/12/31/selfPromise/index.html","87f20d458269344f1f460e1f430eaf0d"],["2019/01/04/react-react的setState/index.html","23e08ac7167e13b60d54bec83fae6f3c"],["2019/01/04/react的setState/index.html","2e4439d24f1eb1295d8a9465c7e30b86"],["2019/01/17/vue-vue的diff/index.html","4e4c8e0ec9467cb151f9bb8969e9162e"],["2019/01/17/vue的diff/index.html","3c95f8871d670153f3a5b6f89c00ee51"],["2019/07/22/其他-封培总结/index.html","7ac2809f9e97f16bbba3318cc0709ef3"],["2019/07/22/封培总结/index.html","017457180072f98fa3b540d11747e538"],["2019/07/25/杂记-MingJingNote/index.html","5ec7e68300799a8a3c2ffe750c95b0da"],["2019/08/07/网络-Quic/index.html","20a170d77858a25c05f34055ebd8f873"],["2019/09/17/浏览器-渲染/index.html","cb315090db32fda0fa9c90400b014613"],["2019/09/28/浏览器-垃圾回收/index.html","67a6d1599f5369eb253707e078c01158"],["README.html","323faa02c9476b83ddc09c6edf8e5b6f"],["about/MingJingNote.html","b7b1dd346167a68276dbfeada489e7c1"],["about/index.html","43a1da690a5b4484ab4cd5d3f055ef03"],["archives/2018/01/index.html","632d605a9625296bd3a904240e053efb"],["archives/2018/01/page/2/index.html","0dd0762c1a3d5232281c2b10d5b07fec"],["archives/2018/03/index.html","a9fbff54976396739111afe7f511ec13"],["archives/2018/04/index.html","26bc1c6aa9d09f8ce193f47c495b0826"],["archives/2018/04/page/2/index.html","db33298f915ccda86e7a6009014f3092"],["archives/2018/05/index.html","06d61928b430d8c4c4764c3a66741672"],["archives/2018/06/index.html","14d3c01eab178e17e265ce8702c04fc8"],["archives/2018/07/index.html","07dcede9d878c3df0e1e204456cb45f2"],["archives/2018/08/index.html","42faf65b60ad55446bd3da95c00fd0e8"],["archives/2018/12/index.html","683fe3f5e5a2f4bda8b9cca66459f679"],["archives/2018/index.html","d48cb3553d180a1a4aa1a5ec80a09e9c"],["archives/2018/page/2/index.html","35e7e4e9a095726b0537f6504576cd36"],["archives/2018/page/3/index.html","07b9406226fbc83080d8a40a6700036d"],["archives/2018/page/4/index.html","f13724672dbd36ba290579fe078f8cd3"],["archives/2018/page/5/index.html","61ba71076cb81af14fbe017574e224a1"],["archives/2018/page/6/index.html","287780da79b1980a7e3bff79b3220f33"],["archives/2019/01/index.html","f54fdbeec321fdc663b549887a3c0091"],["archives/2019/07/index.html","f85c87ff4da3b2d1073f7d965849d6fe"],["archives/2019/08/index.html","88e67b216b5817b77ee654e0578b2641"],["archives/2019/09/index.html","45bb3b5051dd1a6752e5c9890a91c671"],["archives/2019/index.html","bbf3e550696650b6f2e7eab3f16f3907"],["archives/index.html","74c5016bb0add8ba8ec80ec5448832aa"],["archives/page/2/index.html","92f7bf4edfdaa5ef547bccd59d35dbde"],["archives/page/3/index.html","2bb8fe6dee70ba807ef93f166ebd0c35"],["archives/page/4/index.html","a94a52d24247a8d687b658dea8892113"],["archives/page/5/index.html","f61f9ecc9b78eeff10bdcbe6475c6c16"],["archives/page/6/index.html","d58ddb8650a3f8c955d711d6872023ce"],["archives/page/7/index.html","b61eb549caf3693eb973c8198fa7b440"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/css/DPlayer.min.css","a04619266327f7509dcddcab9dbc63c2"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/DPlayer.min.js","44523270fca2596186eabd047b3b04eb"],["assets/js/Meting.min.js","6a5d4f8e7f21a3a4aa2f9de994430379"],["categories/学习/index.html","5b9648019dc27d097434ac9175115f50"],["categories/学习/page/2/index.html","bd4750eeaa22a7109516edaa2aa0c2a7"],["categories/学习/page/3/index.html","0cb0d940de4c679d9d1d694254b254fe"],["categories/学习/page/4/index.html","acbc25d3b7b3725c6d3ddc91c9b244f3"],["categories/学习/page/5/index.html","562b41eaecf4b61af6bcff0624c2a3e6"],["categories/指弹/index.html","9934e56e38af872e12228fd4e56aea5a"],["categories/生活/index.html","5f07e6d334ab69b895a5e865ce8c8d61"],["css/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["css/donate.css","a68e4a34e814ce3334186286f4655440"],["css/style.css","fd93467f16ed22766d2e3acad963b90b"],["donate/index.html","132e8b1d5495930e3b6ea7a4466e489c"],["img/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["img/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["img/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["img/alipay.svg","9239702087add999b29eda6c69b7fac3"],["img/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["img/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["img/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["img/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["img/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["index.html","0ddd4a5f5129b6ae8e71425696b6b7dd"],["js/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["js/donate.js","c5119c5bdd5049d805e03af774a47472"],["js/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["js/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["js/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["js/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["js/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["js/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["live2d/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2d/device.min.js","86a721c7735b03a0c12b172431e5cb2c"],["live2d/script.js","7d75535f43af497883c1b9a1b88c9e1a"],["page/2/index.html","91c73934bbfb1647b352045134066025"],["page/3/index.html","13fdfd874e91b338296209b623a98774"],["page/4/index.html","bf2737932b8f85dca4af643459f82a0b"],["page/5/index.html","0417702b733d245b026b5e7c093bd0b7"],["page/6/index.html","021f7818a27bf1242f153e8d2b33d085"],["page/7/index.html","f0d1b9bc4dfa0b94c22bd2b93527e4cd"],["tags/Hexo/index.html","7d81cbd385962e8233ca566933e92706"],["tags/React-Native/index.html","f63fbb1950fac204b6860c7f849e27d2"],["tags/http/index.html","4152f1d6eaa12f6d831bd19b6a869c7d"],["tags/javascript/index.html","932671684adaa2495116e9a2af5fde8b"],["tags/javascript/page/2/index.html","b27aa8d0230fc0b264aa270e0162ad26"],["tags/koa/index.html","06d3d6a53b572e5b1a7455526064c31f"],["tags/react/index.html","ee8970f3d56fe20385088124d0621e6c"],["tags/vue/index.html","2e071a54426aeecd74fb51f8648fd24d"],["tags/vue/page/2/index.html","44493bf5cc281b07418ac066137475a8"],["tags/不知道归为哪一列系列/index.html","9803c01b611567c21e349a06c5076795"],["tags/其他/index.html","d33b6e6c829144851637d5472b4178b4"],["tags/学习/index.html","f3c272a0074616116b0ef0f975819ee2"],["tags/指弹/index.html","b58266fee418c2cf597da70e2b132957"],["tags/杂记/index.html","b3bf2db22bd9c4b794919359d230f056"],["tags/浏览器/index.html","00ce5b6105641fead18e9af87a473355"],["tags/算法/index.html","541676b4f137c2e1aa3bd9801ce3e8a9"],["tags/网络/index.html","0ac4908975b28686d29115166eda329d"],["youlian/index.html","ffaea4542a7e737cdb4bf8b4685d0747"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







