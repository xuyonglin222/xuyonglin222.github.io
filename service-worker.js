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

var precacheConfig = [["/xuyonglin222.github.io2018/01/05/VueInAction1/index.html","b949b5058cb39c6e12224b3749f65582"],["/xuyonglin222.github.io2018/01/05/hexoml/index.html","3986019648db9d7d7b09f28a916d6c4d"],["/xuyonglin222.github.io2018/01/08/v-model/index.html","25596449d71355d91ebf6baa0c7498ad"],["/xuyonglin222.github.io2018/01/12/VueInAction2/index.html","0470c28c7274ce57c8b057e063bbc68e"],["/xuyonglin222.github.io2018/01/13/Array/index.html","b564d091bcbb58558662dc483717ace9"],["/xuyonglin222.github.io2018/01/16/instanceof/index.html","1cd1b4aafa75a7b455073f1b872dbd4a"],["/xuyonglin222.github.io2018/01/18/prototype/index.html","56ea0f03ed8370c615bffc7143c4e6cb"],["/xuyonglin222.github.io2018/03/07/this/index.html","0e132a06a3bb90d07146adb42d95d546"],["/xuyonglin222.github.io2018/03/10/jsMemoryManagent/index.html","805ab730936a9983a6f1a1e1a477781b"],["/xuyonglin222.github.io2018/03/25/debounce/index.html","bb991923f80a5704a7864914d0e8d6fc"],["/xuyonglin222.github.io2018/03/28/toLittleCute/index.html","a75ee076580257e36720f5ba7fcc16af"],["/xuyonglin222.github.io2018/04/02/面试/index.html","c166c0d1d122fd273331028e52bdf9a6"],["/xuyonglin222.github.io2018/04/05/JSX/index.html","31e027e5cf55bb60e83d420d899f30e0"],["/xuyonglin222.github.io2018/04/10/axioshhh/index.html","8b8db7a2b4c1e7b2cbad9074d06fbba0"],["/xuyonglin222.github.io2018/04/18/template/index.html","ae6c88029fa4cbfa947629b0428de62e"],["/xuyonglin222.github.io2018/04/19/http/index.html","321c0a7dfb68ec8e457fa78723b20e39"],["/xuyonglin222.github.io2018/04/29/Vue-lifecycle/index.html","49563d6800cca8de295175ade0afdb6e"],["/xuyonglin222.github.io2018/04/29/timetravel/index.html","1e12f2189232621a7311201da95725d2"],["/xuyonglin222.github.io2018/05/20/流行的云/index.html","6b47b0c9cb27d5d676ecbde5e4d01a42"],["/xuyonglin222.github.io2018/05/23/friendships/index.html","1dce174244e3005a51c7a356c4887f63"],["/xuyonglin222.github.io2018/06/01/ReactNativeComponent/index.html","85aa4aa2c8587304383a8bf43eefccae"],["/xuyonglin222.github.io2018/06/08/choppingHand1/index.html","b5805b22cd646e771f55938a001cc238"],["/xuyonglin222.github.io2018/06/15/choppingHand2/index.html","a97ca289d44cb78e38fcd4b76cfd8131"],["/xuyonglin222.github.io2018/07/19/Ngnix/index.html","111adb7d6339aadd71d20df92cf9574e"],["/xuyonglin222.github.io2018/07/25/sort/index.html","84e664971e5eb91f4495a5f0f3c48067"],["/xuyonglin222.github.io2018/08/07/koaMiddle/index.html","3e2f63f7d0cb1587844b4310b78f55c6"],["/xuyonglin222.github.io2018/12/07/git杂记/index.html","87c739cd49df86caa67694461ec0e761"],["/xuyonglin222.github.io2018/12/31/selfPromise/index.html","bfa16f924388c18956962ba5461da8d3"],["/xuyonglin222.github.io2019/01/04/react的setState/index.html","50eca4d390c670b5c52d26deac051308"],["/xuyonglin222.github.io2019/01/17/vue的diff/index.html","f0bc3a1966ee0a44434f8674154706f3"],["/xuyonglin222.github.io2019/07/22/封培总结/index.html","32459107769a3325640ef2128bf83ac4"],["/xuyonglin222.github.io2019/07/25/MingJingNote/index.html","cb5360af28e367b440f9de843087ad36"],["/xuyonglin222.github.io2019/08/07/Quic/index.html","2fb1596bfcbc7bc6643b53b617189f34"],["/xuyonglin222.github.ioabout/index.html","8ddcc7cded5b69304b6073b1f4934cda"],["/xuyonglin222.github.ioarchives/2018/01/index.html","42b62a306dcf5d193434f83b253f84e1"],["/xuyonglin222.github.ioarchives/2018/03/index.html","0a9c34363a00c94aa45749b72b506a73"],["/xuyonglin222.github.ioarchives/2018/04/index.html","6e980ab88bf431c0d1a31f635330be39"],["/xuyonglin222.github.ioarchives/2018/05/index.html","395498610f3b7ebbd8c3d5290e23af68"],["/xuyonglin222.github.ioarchives/2018/06/index.html","41f77a6307a68d91c90ef835f2d682af"],["/xuyonglin222.github.ioarchives/2018/07/index.html","56d1d4aca0060007c69cca92b3110490"],["/xuyonglin222.github.ioarchives/2018/08/index.html","67feab1777f083e50eecd7a3c8c0a1ef"],["/xuyonglin222.github.ioarchives/2018/12/index.html","1dccad1c84190ce9dd3b87f3c3b0b368"],["/xuyonglin222.github.ioarchives/2018/index.html","c95a8842ed25bd14ef57fbb996dd173c"],["/xuyonglin222.github.ioarchives/2018/page/2/index.html","69e7046830821d2cf7ecc19a7eb9ab67"],["/xuyonglin222.github.ioarchives/2018/page/3/index.html","87c25b3d101a89e4e02f91d6bac9b7b7"],["/xuyonglin222.github.ioarchives/2019/01/index.html","0e9c0203ecc531eb95559d1875946b51"],["/xuyonglin222.github.ioarchives/2019/07/index.html","0599f5a79b9a118e20b13c13bba64f61"],["/xuyonglin222.github.ioarchives/2019/08/index.html","2d00ff08690a95b84567829cd8863a24"],["/xuyonglin222.github.ioarchives/2019/index.html","4e8395642acb438512b30a967074822b"],["/xuyonglin222.github.ioarchives/index.html","8bf4c0153307cd84e0cc8724dca14914"],["/xuyonglin222.github.ioarchives/page/2/index.html","635cb945c0375b67dfed76d53451dd79"],["/xuyonglin222.github.ioarchives/page/3/index.html","f53945eb28adbd9627a3a51e7c035dab"],["/xuyonglin222.github.ioarchives/page/4/index.html","7caea9667cb394212d36055aa0199ae7"],["/xuyonglin222.github.ioassets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/xuyonglin222.github.ioassets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/xuyonglin222.github.ioassets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/xuyonglin222.github.iocategories/学习/index.html","d70f3af82f25714a7dcc0b3b59490464"],["/xuyonglin222.github.iocategories/学习/page/2/index.html","6d7efb9f054a945be90f7b6eb39855e6"],["/xuyonglin222.github.iocategories/学习/page/3/index.html","d2cd0c83ceb6d10df9b34eacdafaa027"],["/xuyonglin222.github.iocategories/指弹/index.html","beeef14ef86db1d3919cc42f9bd88d5e"],["/xuyonglin222.github.iocategories/生活/index.html","6c91eecc56b95e05fb236d6b253d115b"],["/xuyonglin222.github.iocss/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["/xuyonglin222.github.iocss/donate.css","a68e4a34e814ce3334186286f4655440"],["/xuyonglin222.github.iodonate/index.html","6d6b078133399bfa400633ee47b5c6e1"],["/xuyonglin222.github.ioimg/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["/xuyonglin222.github.ioimg/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["/xuyonglin222.github.ioimg/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["/xuyonglin222.github.ioimg/alipay.svg","9239702087add999b29eda6c69b7fac3"],["/xuyonglin222.github.ioimg/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["/xuyonglin222.github.ioimg/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/xuyonglin222.github.ioimg/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/xuyonglin222.github.ioimg/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["/xuyonglin222.github.ioimg/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["/xuyonglin222.github.ioindex.html","043710c032c2b3d8792d4680255542a2"],["/xuyonglin222.github.iojs/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["/xuyonglin222.github.iojs/donate.js","c5119c5bdd5049d805e03af774a47472"],["/xuyonglin222.github.iojs/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["/xuyonglin222.github.iojs/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["/xuyonglin222.github.iojs/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["/xuyonglin222.github.iojs/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["/xuyonglin222.github.iojs/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["/xuyonglin222.github.iojs/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["/xuyonglin222.github.iolive2d/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/xuyonglin222.github.iolive2d/device.min.js","86a721c7735b03a0c12b172431e5cb2c"],["/xuyonglin222.github.iolive2d/script.js","7d75535f43af497883c1b9a1b88c9e1a"],["/xuyonglin222.github.iopage/2/index.html","b6e7505236253aeb803f2d5890cbbed4"],["/xuyonglin222.github.iopage/3/index.html","b1972b18a6ab8b41a3bd50452ac5ee67"],["/xuyonglin222.github.iopage/4/index.html","de9d29fd8f398d7d3c4d06e1d9bd8296"],["/xuyonglin222.github.iotags/About/index.html","841ff5076fd2a56011258e9b81539b87"],["/xuyonglin222.github.iotags/Hexo/index.html","123e4621ab9195d9ccd97f219ad64348"],["/xuyonglin222.github.iotags/React-Native/index.html","03feb688ab67b9ea54604fb3846fce56"],["/xuyonglin222.github.iotags/http/index.html","f202005504abe620110b315ea4c30175"],["/xuyonglin222.github.iotags/javascript/index.html","19d9f6964ab7b0c410bc608fc43ac2bd"],["/xuyonglin222.github.iotags/koa/index.html","38ff49786c5c70ee013d90e41048cd65"],["/xuyonglin222.github.iotags/react/index.html","f2c77653118b8fbe465cca079f785061"],["/xuyonglin222.github.iotags/vue/index.html","d7e1f2cd4b42a4eb6681ae8830fe9f67"],["/xuyonglin222.github.iotags/不知道归为哪一列系列/index.html","2ce00a9da06554cd7e139d89efbf94f4"],["/xuyonglin222.github.iotags/学习/index.html","5a9ec41c0eb764a97d783ebafd3dfe11"],["/xuyonglin222.github.iotags/指弹/index.html","db6d636e1f70e73980160b443eba3610"],["/xuyonglin222.github.iotags/杂记/index.html","3f54b214c0037ef9b1e704faaa2b24c3"],["/xuyonglin222.github.iotags/算法/index.html","db368458d9b448bf569ef74cfe865c1d"],["/xuyonglin222.github.ioyoulian/index.html","cda72f1e203e036d1a65a2f4376ae003"]];
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







