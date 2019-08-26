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

var precacheConfig = [["/666666666666.xyz2018/01/05/VueInAction1/index.html","af55eb868ec0c08ff0b45df9ad58ac4b"],["/666666666666.xyz2018/01/05/hexoml/index.html","101ae16d9255c9d0ead096992662c03b"],["/666666666666.xyz2018/01/08/v-model/index.html","d039ab228de8422fc9433902d7973dac"],["/666666666666.xyz2018/01/12/VueInAction2/index.html","bb084966566c844cab992b1b74e623f8"],["/666666666666.xyz2018/01/13/Array/index.html","0cc37ca897ac8cb277c4c795dc2a6875"],["/666666666666.xyz2018/01/16/instanceof/index.html","10be596ae7af83862af47a03001151c2"],["/666666666666.xyz2018/01/18/prototype/index.html","32f7262ecd496341e7b3cf19e20269cf"],["/666666666666.xyz2018/03/07/this/index.html","7592d08828e3aaca6bba566163170a72"],["/666666666666.xyz2018/03/10/jsMemoryManagent/index.html","ff11147fcd03831b918ddfcc5fe06717"],["/666666666666.xyz2018/03/25/debounce/index.html","4e65b183cda7533555c3a679a07b653a"],["/666666666666.xyz2018/03/28/toLittleCute/index.html","4109efead5a990c72aa6c64d047d8dbc"],["/666666666666.xyz2018/04/02/面试/index.html","687452f3fbfb5547d36b9b18a2870556"],["/666666666666.xyz2018/04/05/JSX/index.html","6385111f6ea951e1c6225378be94bcf2"],["/666666666666.xyz2018/04/10/axioshhh/index.html","daa0a908c21f14f81d7f5ce5ee77dc4c"],["/666666666666.xyz2018/04/18/template/index.html","982581b830ef22e607da7369c7814d25"],["/666666666666.xyz2018/04/19/http/index.html","22531fb21185c1eaec6ef7e8e4a06eb2"],["/666666666666.xyz2018/04/29/Vue-lifecycle/index.html","8e69db461ad4ee571dfd3758b7fcfac6"],["/666666666666.xyz2018/04/29/timetravel/index.html","2b67180c90085e18127822317d1e145f"],["/666666666666.xyz2018/05/20/流行的云/index.html","c5dacfe5cdfb65697c9deb04c40894c8"],["/666666666666.xyz2018/05/23/friendships/index.html","82886163afa904f360ef8ee2fb7f05d5"],["/666666666666.xyz2018/06/01/ReactNativeComponent/index.html","cfcafe087f14a5939f0982a77f866cc8"],["/666666666666.xyz2018/06/08/choppingHand1/index.html","5bf1b59db82cf4b56d5126d679ab786d"],["/666666666666.xyz2018/06/15/choppingHand2/index.html","31a3ed6fbcb86a4a32fde26a38b0bae9"],["/666666666666.xyz2018/07/19/Ngnix/index.html","87fba0f2bf0c7d4dd82bbc0390027e6c"],["/666666666666.xyz2018/07/25/sort/index.html","9581ac0d09528765ecaaa61183e25c66"],["/666666666666.xyz2018/08/07/koaMiddle/index.html","643e5cafb4d955066db1d51aab1d1525"],["/666666666666.xyz2018/12/07/git杂记/index.html","a91dca931452d491d4a3744945ff0ed0"],["/666666666666.xyz2018/12/31/selfPromise/index.html","cca159bb7c2b1f13cc8e5f3b87651cf9"],["/666666666666.xyz2019/01/04/react的setState/index.html","0f45b8666c55504c4ace4efa9880a38d"],["/666666666666.xyz2019/01/17/vue的diff/index.html","cefab2d8797ef2c6d4fca4d816ac727e"],["/666666666666.xyz2019/07/22/封培总结/index.html","d44f08397c7d730479a8bdc968a57efd"],["/666666666666.xyz2019/07/25/MingJingNote/index.html","090a97c13759065a341a2bb805aa7bb4"],["/666666666666.xyz2019/08/07/Quic/index.html","8ca3a92d33bdb43964feaa01655c5cdf"],["/666666666666.xyzabout/index.html","6b984cd92864d4fcedc818ed80c2c73f"],["/666666666666.xyzarchives/2018/01/index.html","1b885cf98574b5e3f8195627fa7e8c4a"],["/666666666666.xyzarchives/2018/03/index.html","7d5329fb27594ce20b8abb366667b4cc"],["/666666666666.xyzarchives/2018/04/index.html","87d2138d652726fc5d3dd891952d27de"],["/666666666666.xyzarchives/2018/05/index.html","7d8ed15e24dcefb715d5cbf28230091e"],["/666666666666.xyzarchives/2018/06/index.html","bdcfbc926d32fd7a78be0b5b5d208445"],["/666666666666.xyzarchives/2018/07/index.html","fb8ab6817f1687972e2f54b4dbecd02b"],["/666666666666.xyzarchives/2018/08/index.html","b991cce9024d19598fd2d7a379668648"],["/666666666666.xyzarchives/2018/12/index.html","60db6ddb92c90611be959ca9974aaf23"],["/666666666666.xyzarchives/2018/index.html","7b8a6301809e0b63a117c609f3265af7"],["/666666666666.xyzarchives/2018/page/2/index.html","925ce3e1262d8b2bec3110710621eb8e"],["/666666666666.xyzarchives/2018/page/3/index.html","fb42cd22894f8538e7600eb1d1485bdf"],["/666666666666.xyzarchives/2019/01/index.html","56aadf5026282a49460adaf511006e28"],["/666666666666.xyzarchives/2019/07/index.html","a0163883c9e92551564ecd7064ff7b24"],["/666666666666.xyzarchives/2019/08/index.html","f0db138a205f182d7c97c823eb8bb703"],["/666666666666.xyzarchives/2019/index.html","ebc3d299440979a90c15f0f0ab43c7ab"],["/666666666666.xyzarchives/index.html","f2fa0903dc9f28bc412999e27b0b9f0c"],["/666666666666.xyzarchives/page/2/index.html","53bf6450bb75caa20e35a1a73c4114e2"],["/666666666666.xyzarchives/page/3/index.html","adda44a7c8c901e20d0bb887a669973d"],["/666666666666.xyzarchives/page/4/index.html","942fb79422284ee549ebaa94c83545c5"],["/666666666666.xyzassets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/666666666666.xyzassets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/666666666666.xyzassets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/666666666666.xyzcategories/学习/index.html","d4821b4982ea0d631e5acb01faa022ae"],["/666666666666.xyzcategories/学习/page/2/index.html","51a106746ed3d8c720af3395d1122bd0"],["/666666666666.xyzcategories/学习/page/3/index.html","5b393ee1ec70949a96f58532635c6ea1"],["/666666666666.xyzcategories/指弹/index.html","2857643144f30c247185d10578602f72"],["/666666666666.xyzcategories/生活/index.html","b414e19d454fb734681110de72a1fd16"],["/666666666666.xyzcss/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["/666666666666.xyzcss/donate.css","a68e4a34e814ce3334186286f4655440"],["/666666666666.xyzdonate/index.html","6d6b078133399bfa400633ee47b5c6e1"],["/666666666666.xyzimg/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["/666666666666.xyzimg/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["/666666666666.xyzimg/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["/666666666666.xyzimg/alipay.svg","9239702087add999b29eda6c69b7fac3"],["/666666666666.xyzimg/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["/666666666666.xyzimg/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/666666666666.xyzimg/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/666666666666.xyzimg/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["/666666666666.xyzimg/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["/666666666666.xyzindex.html","677601fe08604288e0d7bb63e200bbe0"],["/666666666666.xyzjs/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["/666666666666.xyzjs/donate.js","c5119c5bdd5049d805e03af774a47472"],["/666666666666.xyzjs/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["/666666666666.xyzjs/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["/666666666666.xyzjs/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["/666666666666.xyzjs/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["/666666666666.xyzjs/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["/666666666666.xyzjs/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["/666666666666.xyzlive2d/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/666666666666.xyzlive2d/device.min.js","86a721c7735b03a0c12b172431e5cb2c"],["/666666666666.xyzlive2d/script.js","7d75535f43af497883c1b9a1b88c9e1a"],["/666666666666.xyzpage/2/index.html","089ed9414f2478af97cd12932b35d66d"],["/666666666666.xyzpage/3/index.html","7f8d5713d1dcba2dc2a6fb8fe05e2a73"],["/666666666666.xyzpage/4/index.html","241f8d512deb1c9b505afd51d5f34f47"],["/666666666666.xyztags/About/index.html","e1eccef9c9461c43eae19ebc4d46ed83"],["/666666666666.xyztags/Hexo/index.html","eb669839ca33efa40e0dca7af31f1e82"],["/666666666666.xyztags/React-Native/index.html","ac8e27140a26b3832c096d7d5dcb05b9"],["/666666666666.xyztags/http/index.html","6f39d380a3450ad697c336b3c8d6f34d"],["/666666666666.xyztags/javascript/index.html","03da1b4b8e2b2123a023b4d785e8d7d2"],["/666666666666.xyztags/koa/index.html","3d41356d99c3279095deb471e50609b9"],["/666666666666.xyztags/react/index.html","30ead755269f20920f5affc388cde705"],["/666666666666.xyztags/vue/index.html","1527c234c0b457f2971aed6160739bf7"],["/666666666666.xyztags/不知道归为哪一列系列/index.html","9f62feac60bd4f952b777df5d6ffd1c4"],["/666666666666.xyztags/学习/index.html","367a714e3ad083c0bd7c7fb893d56b5b"],["/666666666666.xyztags/指弹/index.html","5cee0bb8592d73dec67870156f0babf9"],["/666666666666.xyztags/杂记/index.html","05bfc191043108428f14a865bd99489a"],["/666666666666.xyztags/算法/index.html","58f9efc3e7f5afa6114a778c0090aec8"],["/666666666666.xyzyoulian/index.html","30cdce97478e18b19c42ea4a2320361a"]];
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







