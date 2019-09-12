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

var precacheConfig = [["2018/01/05/VueInAction1/index.html","5ee989aa827a828e87603975e43f08a0"],["2018/01/05/hexoml/index.html","5196e4f06593226273572578a666232b"],["2018/01/08/v-model/index.html","a55b44e285911c76b9f3e36952ccdf82"],["2018/01/12/VueInAction2/index.html","5a6e49796c0eb255d6f3a64f35a77e6d"],["2018/01/13/Array/index.html","805cb9ef1303519961d7a01dbfe53612"],["2018/01/16/instanceof/index.html","530ba0a402bddb294812ebc58bbeaff9"],["2018/01/18/prototype/index.html","c810a6d84e24af4e5e0328f311d96673"],["2018/03/07/this/index.html","53decbaecf567c79104ab314edb87bf6"],["2018/03/10/jsMemoryManagent/index.html","9d5c5ba267d47bdffd45af2ddd089d3c"],["2018/03/25/debounce/index.html","7c107af9fc49441c426d46a16c3e681e"],["2018/03/28/toLittleCute/index.html","eb9e3b8f2c401fd11082d7e284e10a74"],["2018/04/02/面试/index.html","5935b922214b38d5b7d9f0ee0e68df18"],["2018/04/05/JSX/index.html","86d57a4003da2e5e5126cc4a1076cb34"],["2018/04/10/axioshhh/index.html","6f613b62464e0ee48f5de79922230fd5"],["2018/04/18/template/index.html","fccbf942d214216811e566cc3dadbe84"],["2018/04/19/http/index.html","93ba93be63b3a883ab052d5e8e6056b0"],["2018/04/29/Vue-lifecycle/index.html","efdea7f026f1da9c8a0b571329ac6f66"],["2018/04/29/timetravel/index.html","a85f2caaf4d967ffbafd386a8a5ffc4a"],["2018/05/20/流行的云/index.html","26042b2eabbee47b671eb92077007269"],["2018/05/23/friendships/index.html","b7493a52472c2dc2cd177fc0311d8d37"],["2018/06/01/ReactNativeComponent/index.html","800a3944b81ec1327a4110fb3e57516e"],["2018/06/08/choppingHand1/index.html","e5d1b8e89b5769934ec8570b80a39fb6"],["2018/06/15/choppingHand2/index.html","64a7755590f1c52f2e12ae69364f4229"],["2018/07/19/Ngnix/index.html","162ad527650f0bd451bd9a15ed08859a"],["2018/07/25/sort/index.html","6ab3518452aade6a7caf2ab7899f5a83"],["2018/08/07/koaMiddle/index.html","ceb1aeaa2a3732e09a4d9fd0c47f45bf"],["2018/12/07/git杂记/index.html","10126cf6480a90c5604e0abcaa690772"],["2018/12/31/selfPromise/index.html","bcd3b88f99acf211514f0ac84dc9a1fd"],["2019/01/04/react的setState/index.html","59a5d242fdb863abbb84de4780845d37"],["2019/01/17/vue的diff/index.html","b6a1f2aeebd793898fe45ca09a623e70"],["2019/07/22/封培总结/index.html","c200cbd105b3455829e9ac0b83f2917d"],["2019/07/25/MingJingNote/index.html","fe2302f57c8b0755cfe684c7c878e13c"],["2019/08/07/Quic/index.html","f68e24d0e417436f90042f96f39d75db"],["about/index.html","a10bdeb6fa0967805259745caace26f0"],["archives/2018/01/index.html","8a877a4e23dc1aa6b1d8b311e9ac945c"],["archives/2018/03/index.html","481eae30415263b1fd2f3d192eefdd3d"],["archives/2018/04/index.html","bd367b629b902083331baf26a00b271b"],["archives/2018/05/index.html","ba3ab6d8b6c2132518413346b12744d7"],["archives/2018/06/index.html","da00bd6d710ed3f85b204a1752d4befb"],["archives/2018/07/index.html","7fa81f69b3cef88c841f34a9d5e4b10a"],["archives/2018/08/index.html","5e535131320e5edf072e0699e65ea081"],["archives/2018/12/index.html","e0a2e10605d7ff11fe87d0261b622ab9"],["archives/2018/index.html","8ed675d81abc339972fb7d64a338f314"],["archives/2018/page/2/index.html","ea5bab66fefa8fe9c1941ff0c41cfda6"],["archives/2018/page/3/index.html","a9604ad64af81df30df0eb9d428ab4de"],["archives/2019/01/index.html","45f5210006e9f2dfdb298b319e20b040"],["archives/2019/07/index.html","33a7608fbcc387f54171cb95aec068d0"],["archives/2019/08/index.html","6c2492fdd2bbcc8ae1eea02884df9394"],["archives/2019/index.html","304fdc1af1bf455f7f036c40d8376a88"],["archives/index.html","40736227bc2141005c4b4e8ec3e42087"],["archives/page/2/index.html","de6554a568575221bbbe661903939116"],["archives/page/3/index.html","c0678219c2df001b9b7b6cc05be6a711"],["archives/page/4/index.html","ca675752bda756c4c70a81f418715c34"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/学习/index.html","d6e6085175365d2b731e757d903aa475"],["categories/学习/page/2/index.html","ecd44b429e35998d48845d8377112a5c"],["categories/学习/page/3/index.html","aa11a80a7fde325de3149b8f78c2cf28"],["categories/指弹/index.html","f01a10f89b79b366fcbfd9cf4b34104c"],["categories/生活/index.html","94b341de3d3630bf5bc06ebfb856a40d"],["css/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["css/donate.css","a68e4a34e814ce3334186286f4655440"],["css/style.css","fd93467f16ed22766d2e3acad963b90b"],["donate/index.html","6d6b078133399bfa400633ee47b5c6e1"],["img/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["img/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["img/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["img/alipay.svg","9239702087add999b29eda6c69b7fac3"],["img/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["img/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["img/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["img/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["img/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["index.html","79ec1880c1bc8871ea22cb6df621ccc9"],["js/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["js/donate.js","c5119c5bdd5049d805e03af774a47472"],["js/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["js/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["js/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["js/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["js/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["js/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["live2d/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2d/device.min.js","86a721c7735b03a0c12b172431e5cb2c"],["live2d/script.js","7d75535f43af497883c1b9a1b88c9e1a"],["page/2/index.html","401b636cae1f58fbd066e5848e368a58"],["page/3/index.html","d3e5ed530f3738a259359f35fb1c8513"],["page/4/index.html","7656e873ac326261396a584b7029a576"],["tags/About/index.html","ffb452ea5d7b25898d749e4eca85b965"],["tags/Hexo/index.html","38c174e387092a134dfbf4b0165a2017"],["tags/React-Native/index.html","d0076b19017eb12d800c21105a467e04"],["tags/http/index.html","32549ebb648e487c40824d2db38dc3d2"],["tags/javascript/index.html","1d7892e5b6d42532ea53963d013bd74d"],["tags/koa/index.html","f5aca3ac62e09a1ae94a28f4a378902c"],["tags/react/index.html","dcd77775c23b0060218c16bf00167e30"],["tags/vue/index.html","c84d48b61e6fd2274c1931fd4276a1be"],["tags/不知道归为哪一列系列/index.html","e097c94c02780c6bde74b34c471dc685"],["tags/学习/index.html","7f3ca68bc3dca6a0ca023f98b39291a6"],["tags/指弹/index.html","7286971ae9532d4496e7b4d74941b1f5"],["tags/杂记/index.html","baf6d62297a86b0d5ed7b94389385b8a"],["tags/算法/index.html","d00683e437bfc63de4ecae7ddfe0265c"],["youlian/index.html","48c88b4ca3d9da004ed667a53220fcd1"]];
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







