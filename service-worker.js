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

var precacheConfig = [["/666666666666.xyz2018/01/05/VueInAction1/index.html","e1ac61a0f4d13e0a230443cb9f23e1aa"],["/666666666666.xyz2018/01/05/hexoml/index.html","b301309eedc4bb9e86e18a262d603a08"],["/666666666666.xyz2018/01/08/v-model/index.html","9d5cef16cd40ec35916e273a1ecbbf71"],["/666666666666.xyz2018/01/12/VueInAction2/index.html","e8134f543d617d83b685ef79de47e138"],["/666666666666.xyz2018/01/13/Array/index.html","331ef2b8d84ecf3c6076a9cb2d9da9c6"],["/666666666666.xyz2018/01/16/instanceof/index.html","2d553c8c0a117a3c23c3b0736e8a224f"],["/666666666666.xyz2018/01/18/prototype/index.html","bea84cf5aacaa6e4cda2438328fb16ca"],["/666666666666.xyz2018/03/07/this/index.html","135ff18c953d898c1707c804a8041c1e"],["/666666666666.xyz2018/03/10/jsMemoryManagent/index.html","a5a40c5e2c022a71c385a1182aa3936b"],["/666666666666.xyz2018/03/25/debounce/index.html","773e2943053f38bc97dc9b98a84dbef9"],["/666666666666.xyz2018/03/28/toLittleCute/index.html","0a22452ac6c9a5fd5db28595aaf8fba4"],["/666666666666.xyz2018/04/02/面试/index.html","19353b6a39f643a6dcb960a8b52a326b"],["/666666666666.xyz2018/04/05/JSX/index.html","cf86614571f298d4f23100d33204aaf2"],["/666666666666.xyz2018/04/10/axioshhh/index.html","5fcba083ac5edacf8b37247a31d5c7fb"],["/666666666666.xyz2018/04/18/template/index.html","2b6babd19f1b491ccf55492714258097"],["/666666666666.xyz2018/04/19/http/index.html","5038516f1e311bebdf2042186afe7a3a"],["/666666666666.xyz2018/04/29/Vue-lifecycle/index.html","43d45aa40ccbc56521810fea57f253f4"],["/666666666666.xyz2018/04/29/timetravel/index.html","e89d3f525e4c5cbaeaecbe9a9b35b6eb"],["/666666666666.xyz2018/05/20/流行的云/index.html","345d3ab724c667cc65c2582a29547717"],["/666666666666.xyz2018/05/23/friendships/index.html","9a5dbee45ec02b6fc046ae041bdf53fc"],["/666666666666.xyz2018/06/01/ReactNativeComponent/index.html","9e41e8e37e27925403bc061cdfcac715"],["/666666666666.xyz2018/06/08/choppingHand1/index.html","b25e38e16f52daffb6c67c6d71ac5ca9"],["/666666666666.xyz2018/06/15/choppingHand2/index.html","b372980c33d3c2a0de4de59ce1838262"],["/666666666666.xyz2018/07/19/Ngnix/index.html","5c4612bd443585dbdfc67549c8afb329"],["/666666666666.xyz2018/07/25/sort/index.html","7b5a4e0281d8d5024cde93ab6a0d94c4"],["/666666666666.xyz2018/08/07/koaMiddle/index.html","78033e67ae5f556258238c2770624286"],["/666666666666.xyz2018/12/07/git杂记/index.html","52cbe09b3fc15e50ccf11e3e0222b61e"],["/666666666666.xyz2018/12/31/selfPromise/index.html","e449754a06acf138a401b561df561c88"],["/666666666666.xyz2019/01/04/react的setState/index.html","cd0a6b1f2f6135ed6932c532207bbad6"],["/666666666666.xyz2019/01/17/vue的diff/index.html","a697ed3b54e6de085868557062b83e98"],["/666666666666.xyz2019/07/22/封培总结/index.html","b5264beff4301a0214221ce06579dd4c"],["/666666666666.xyz2019/07/25/MingJingNote/index.html","7881201d4b1ccd4e6f58f83053a89eb9"],["/666666666666.xyz2019/08/07/Quic/index.html","a015ce0959b4b2edccb11042c107c67a"],["/666666666666.xyzabout/index.html","e04031ca8f01b95dd86dd38e82bbaa06"],["/666666666666.xyzarchives/2018/01/index.html","30a54fed7ab7be51d56e7a219f437a4b"],["/666666666666.xyzarchives/2018/03/index.html","f52775e1bd13ac7bce0b09a8d2631378"],["/666666666666.xyzarchives/2018/04/index.html","91e6367a12192ef2aa3869417b51fb66"],["/666666666666.xyzarchives/2018/05/index.html","e3eb60817ebdd60eca0ed0ffeb464614"],["/666666666666.xyzarchives/2018/06/index.html","7a1b304d19dc6248996f3844cddb04d1"],["/666666666666.xyzarchives/2018/07/index.html","28971113355857083aea413641cb4405"],["/666666666666.xyzarchives/2018/08/index.html","77251071c95dcd588d5f2991338ff0b4"],["/666666666666.xyzarchives/2018/12/index.html","f44223409058265e9c4a392d318be698"],["/666666666666.xyzarchives/2018/index.html","390819eb83d0685dec2c69e97099ef4d"],["/666666666666.xyzarchives/2018/page/2/index.html","9d84505689cbe694eb6dcba37c5bb89c"],["/666666666666.xyzarchives/2018/page/3/index.html","b8798cd782255583a74b8bc6fbbf252b"],["/666666666666.xyzarchives/2019/01/index.html","8697d4d948bfd7d65208a366ad00f643"],["/666666666666.xyzarchives/2019/07/index.html","37695db76e6965cb62f2aba1c598b1d2"],["/666666666666.xyzarchives/2019/08/index.html","0d4de43a69ffad961310201575e4cf06"],["/666666666666.xyzarchives/2019/index.html","4cd27e2f5ddca19d73f5ec4d15c8943e"],["/666666666666.xyzarchives/index.html","7dc6f851bfe784479797f51fc6c6d848"],["/666666666666.xyzarchives/page/2/index.html","698eacd3dc3c21e279ff1e9c588d9c3c"],["/666666666666.xyzarchives/page/3/index.html","a29bae195bfaedbaf2296d0b5fef80c4"],["/666666666666.xyzarchives/page/4/index.html","87446cec8e607cb16425931668a372e4"],["/666666666666.xyzassets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/666666666666.xyzassets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/666666666666.xyzassets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/666666666666.xyzcategories/学习/index.html","6188fdee1299fd042a95d9fe2c345d41"],["/666666666666.xyzcategories/学习/page/2/index.html","5d0131bef91e803e977d2b08728377fe"],["/666666666666.xyzcategories/学习/page/3/index.html","e0ebf54dc98c034c0f1f1035decf97ad"],["/666666666666.xyzcategories/指弹/index.html","d614dbde90bba95a2f8ca80f265ef5a9"],["/666666666666.xyzcategories/生活/index.html","509827bc9c5867c96e3aa67a5f0def19"],["/666666666666.xyzcss/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["/666666666666.xyzcss/donate.css","a68e4a34e814ce3334186286f4655440"],["/666666666666.xyzdonate/index.html","6d6b078133399bfa400633ee47b5c6e1"],["/666666666666.xyzimg/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["/666666666666.xyzimg/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["/666666666666.xyzimg/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["/666666666666.xyzimg/alipay.svg","9239702087add999b29eda6c69b7fac3"],["/666666666666.xyzimg/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["/666666666666.xyzimg/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/666666666666.xyzimg/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/666666666666.xyzimg/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["/666666666666.xyzimg/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["/666666666666.xyzindex.html","de24a58f3643d0c4365c311ec6e4aa37"],["/666666666666.xyzjs/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["/666666666666.xyzjs/donate.js","c5119c5bdd5049d805e03af774a47472"],["/666666666666.xyzjs/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["/666666666666.xyzjs/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["/666666666666.xyzjs/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["/666666666666.xyzjs/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["/666666666666.xyzjs/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["/666666666666.xyzjs/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["/666666666666.xyzlive2d/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/666666666666.xyzlive2d/device.min.js","86a721c7735b03a0c12b172431e5cb2c"],["/666666666666.xyzlive2d/script.js","7d75535f43af497883c1b9a1b88c9e1a"],["/666666666666.xyzpage/2/index.html","0650254f94f6b6159ea18effa1d695e0"],["/666666666666.xyzpage/3/index.html","2094892d68b8da047211c09ef250dcea"],["/666666666666.xyzpage/4/index.html","97ad6f08548b4508f31583d67e03b74f"],["/666666666666.xyztags/About/index.html","b637b7f456ba4214a72c16cffb8cfd76"],["/666666666666.xyztags/Hexo/index.html","9ed2bd35d13ba9c26167d0be44fb378d"],["/666666666666.xyztags/React-Native/index.html","0b901a0410417e475d862c72fb4a3b0e"],["/666666666666.xyztags/http/index.html","97180f2518c5455c4e5e28daf801fe86"],["/666666666666.xyztags/javascript/index.html","0a606401db6d5a6afff0525909273e84"],["/666666666666.xyztags/koa/index.html","47f5d6c035a7353bd3f3a421feaa562d"],["/666666666666.xyztags/react/index.html","5a8cb3055f95db4d3f7fb5f72e4405ed"],["/666666666666.xyztags/vue/index.html","2a3a79d5c2d5e2998ccfa2ee2b36412b"],["/666666666666.xyztags/不知道归为哪一列系列/index.html","a4df8f5d78aba4483ce69b810e1745c0"],["/666666666666.xyztags/学习/index.html","bcfd0d24fecadd73ed34b4fb151e2602"],["/666666666666.xyztags/指弹/index.html","989496b6a449f877abeeabb813f5868a"],["/666666666666.xyztags/杂记/index.html","6a03d2a35179e1ac5d46d4ae8dc4c2ef"],["/666666666666.xyztags/算法/index.html","cf2fecc142810c96b8742370467e684e"],["/666666666666.xyzyoulian/index.html","6298693f416be26be93f276959feaa02"]];
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







