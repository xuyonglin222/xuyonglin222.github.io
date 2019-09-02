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

var precacheConfig = [["2018/01/05/VueInAction1/index.html","99ca328d9af861c91c5bf5b2ef8cd018"],["2018/01/05/hexoml/index.html","e258ecf8f0ff3f402d7d435805592a6f"],["2018/01/08/v-model/index.html","1c57c74f754be160b81412c038d3ff73"],["2018/01/12/VueInAction2/index.html","662d5b64ce6d2a3c60984aa663605a42"],["2018/01/13/Array/index.html","637e33e1484853896787342c15f050f3"],["2018/01/16/instanceof/index.html","4062dbbb1f6f7e018f84880bdc68c990"],["2018/01/18/prototype/index.html","3269f1156e7097d670d2065d80fbf976"],["2018/03/07/this/index.html","8f8a126aea247f4a62881a084acc87fd"],["2018/03/10/jsMemoryManagent/index.html","2944992e4557f2bd8594ee27f3eb6457"],["2018/03/25/debounce/index.html","673dffb3d0d9930ef0b2fada41c2d60d"],["2018/03/28/toLittleCute/index.html","aac267f1acaa89195abf920931fbe03b"],["2018/04/02/面试/index.html","e278cbd62f8163fc7ddc1d3b2035a04f"],["2018/04/05/JSX/index.html","7c51362772da5fbca47da48fddeebb51"],["2018/04/10/axioshhh/index.html","1d70b3fb68e82635c8bcab5e30beaf63"],["2018/04/18/template/index.html","7279e703be975975b631a508b96ff5bf"],["2018/04/19/http/index.html","3ef2b074df5b8da7e653b92eb0a5765f"],["2018/04/29/Vue-lifecycle/index.html","e4bb9f08986e7cfae1205378b125df18"],["2018/04/29/timetravel/index.html","629850d1f8e58915183754da63697495"],["2018/05/20/流行的云/index.html","c119488cc036626274f61c470ec9b275"],["2018/05/23/friendships/index.html","4833a4733041282c403a292915d70028"],["2018/06/01/ReactNativeComponent/index.html","5ca1015ea80f691962a98a6e6b18650f"],["2018/06/08/choppingHand1/index.html","dfefabdc6cd4ef52e0d330256a039d3e"],["2018/06/15/choppingHand2/index.html","e4454b6b23c5da07dbe6a6bbcba895a2"],["2018/07/19/Ngnix/index.html","6780fc9447ca9411931a3b60c611c64c"],["2018/07/25/sort/index.html","e0b4369279e3e531053e7b4873822142"],["2018/08/07/koaMiddle/index.html","fedcfe33a1ee379c609e90db15de38a9"],["2018/12/07/git杂记/index.html","72ea84f176592ec006b1b9d6d62f9ac1"],["2018/12/31/selfPromise/index.html","8090e4ec5f1e899dc1b6ca7bb54112fc"],["2019/01/04/react的setState/index.html","82b8f147e63914a8ed3cef36b8790cd1"],["2019/01/17/vue的diff/index.html","bed852e6412d8da9d3156fbeda7f054d"],["2019/07/22/封培总结/index.html","d6ea334f9ad413cb0c0b7d9ba48d836a"],["2019/07/25/MingJingNote/index.html","d78f00ad3a0b7b56f4002eec2703b6f3"],["2019/08/07/Quic/index.html","083f1fc124f843d6da7a136024964b1b"],["about/index.html","fb3aff9b8a3829724c8a491a291f13f2"],["archives/2018/01/index.html","630c9949714e50fff59810a5da1ea51f"],["archives/2018/03/index.html","68768a573cc17ac280107b16841a2155"],["archives/2018/04/index.html","e7291c6ed1eae7fd409296c6b68891d2"],["archives/2018/05/index.html","25e979ac1622e9bef72587558e8bf70a"],["archives/2018/06/index.html","7adc0b89379acbccd50bdfcc6e29184b"],["archives/2018/07/index.html","59e51bdb50ce5a970890c1902ad5954f"],["archives/2018/08/index.html","3fd0c8db99ed69509d8a95a8f7345d72"],["archives/2018/12/index.html","19977566c2bbea9365fdc418f351fe16"],["archives/2018/index.html","5fc2a6a0b795311f66dae535acf7e3da"],["archives/2018/page/2/index.html","c72ca7733728f7f351ac13a9b5e531e9"],["archives/2018/page/3/index.html","e8dabd6d323415931bba3cf70b85bc24"],["archives/2019/01/index.html","a9e3373fc7280a150c8a8c9abd7bf8aa"],["archives/2019/07/index.html","0a1e9fb7cec646836706caab2b0a726c"],["archives/2019/08/index.html","a8f11c367e154fe84f49b7950a69cd9c"],["archives/2019/index.html","8feb0cab70f043a66796dde88fa3f734"],["archives/index.html","3fcbb4233013696cacdaadc7fc20caac"],["archives/page/2/index.html","1dd19019fea93a499751c2d0d4f4c25b"],["archives/page/3/index.html","fef7a983794b21c24fa9f3115d0a50c1"],["archives/page/4/index.html","7a584d8a6da824875b0dcd01185da573"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/学习/index.html","8e71a3319675315c1bd6bcb2d514747e"],["categories/学习/page/2/index.html","64807fe23cd7f5ffcef96cead376a585"],["categories/学习/page/3/index.html","9c35854539f7b3ada8c1356d98d14aee"],["categories/指弹/index.html","855d5b9d7c8fb1a25d23564d8932c495"],["categories/生活/index.html","ceecd6e6faa3a73d542801a0a2d8546d"],["css/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["css/donate.css","a68e4a34e814ce3334186286f4655440"],["donate/index.html","6d6b078133399bfa400633ee47b5c6e1"],["img/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["img/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["img/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["img/alipay.svg","9239702087add999b29eda6c69b7fac3"],["img/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["img/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["img/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["img/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["img/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["index.html","44bb9e4591c662694ffa05444407785b"],["js/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["js/donate.js","c5119c5bdd5049d805e03af774a47472"],["js/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["js/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["js/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["js/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["js/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["js/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["live2d/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2d/device.min.js","86a721c7735b03a0c12b172431e5cb2c"],["live2d/script.js","7d75535f43af497883c1b9a1b88c9e1a"],["page/2/index.html","86c655c98a0dbe166934b30b98e07828"],["page/3/index.html","ae9282ba37d9ba5476399fee4165686f"],["page/4/index.html","08520aaea3ff11bf37f6faa24ad801dd"],["tags/About/index.html","198a599975b4c1e16b78061c03d439bd"],["tags/Hexo/index.html","85286a438b1389d1b750d589daef7652"],["tags/React-Native/index.html","39a4f4fa760b4a6af263629bc655777c"],["tags/http/index.html","b34079610a2b96d91c4477a0383f5e0f"],["tags/javascript/index.html","543bb6e44863eb26610c703e95b127c5"],["tags/koa/index.html","26126d79ca352d6ab8dc221b12d3a20d"],["tags/react/index.html","664346e2972acec82072fa79793ffcaf"],["tags/vue/index.html","13c781aba451e78f58fe65201723156a"],["tags/不知道归为哪一列系列/index.html","b8e4d425e425aad54e029e1cd373d0f5"],["tags/学习/index.html","7b152f5870399a02294178c714fbef30"],["tags/指弹/index.html","0c1388e997b5db68547159b169c6c1ec"],["tags/杂记/index.html","3324e92b5b39c4f761d91d1b63615092"],["tags/算法/index.html","ff9da13cb59e63489ec96a72532656aa"],["youlian/index.html","16b0594abaf04367729865389e64ac86"]];
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







