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

var precacheConfig = [["2018/01/05/VueInAction1/index.html","697602c4114bf33e7ffcf8bd18f7deab"],["2018/01/05/hexoml/index.html","eefaf070050effd06403e5bac1d45ae6"],["2018/01/08/v-model/index.html","4e5cb5290de8d75d26f15b348382466a"],["2018/01/12/VueInAction2/index.html","4184ad6cf478e3b7b0cbd62fac99eb05"],["2018/01/13/Array/index.html","8ea39ebf5bb8d103cc07eac0da024c5f"],["2018/01/16/instanceof/index.html","9d87b87d3025b6571ae9bc79abeb7d15"],["2018/01/18/prototype/index.html","ee02ee28e1294368b5e586de03bb33d3"],["2018/03/07/this/index.html","5803255b0cb279e6fa2ad6e4779138c6"],["2018/03/10/jsMemoryManagent/index.html","a66b5df380385804ae03d4da3d3a57f0"],["2018/03/25/debounce/index.html","6d082217de6fd1dd3882555d125fa752"],["2018/03/28/toLittleCute/index.html","13751c9e288cfb5fc3eda761cf837015"],["2018/04/02/面试/index.html","51da47cfcfd270a40701266fea693d7d"],["2018/04/05/JSX/index.html","bc91f55a0764deb10f37a81bfb08783b"],["2018/04/10/axioshhh/index.html","deac8d8d039c36a419b6a658594af4bd"],["2018/04/18/template/index.html","0559dba6166824b4760b79d4b5e8a5fa"],["2018/04/19/http/index.html","c2e83a71dd123eba6364d90302425e99"],["2018/04/29/Vue-lifecycle/index.html","634b0560096d00fc426abd81aea1b50e"],["2018/04/29/timetravel/index.html","2fe91d8cd3af24ed3acfb957c0150751"],["2018/05/20/流行的云/index.html","ca3787142b4aad6ece4cf571d8a4d2a2"],["2018/05/23/friendships/index.html","74f09c02c48ce751c8413e722f482204"],["2018/06/01/ReactNativeComponent/index.html","ac5a3f0278b027bb26247885721b3275"],["2018/06/08/choppingHand1/index.html","1a15832d2c1c74fa570ff22576986418"],["2018/06/15/choppingHand2/index.html","a19986a9218467df50eb5e5b6ab358c0"],["2018/07/19/Ngnix/index.html","e239214c853c61a1711e51e27e71d4b4"],["2018/07/25/sort/index.html","e5cd6fb492c818acc5b4457a18cd5f8a"],["2018/08/07/koaMiddle/index.html","92836dc49b6beadfeba68fd054b078fe"],["2018/12/07/git杂记/index.html","8bd8b7fc9906bed62fac3ca8a71c07e0"],["2018/12/31/selfPromise/index.html","67a5a7214735d52f26a9396daf34b3c4"],["2019/01/04/react的setState/index.html","5d1ba91c919fb8becbb37d7faa9fac8a"],["2019/01/17/vue的diff/index.html","9d1802ebfd0028f04b8a273a9fb08b30"],["2019/07/22/封培总结/index.html","a07f832ae724a6630ceea16ef4efa9fd"],["2019/07/25/MingJingNote/index.html","88fd2c1e973c26f3ae356b106e96a804"],["2019/08/07/Quic/index.html","f138244cd71ccc7ec12c1755a6879170"],["about/index.html","e2be9a4ac2ec33a2acd4df04b755d00e"],["archives/2018/01/index.html","1b885cf98574b5e3f8195627fa7e8c4a"],["archives/2018/03/index.html","7d5329fb27594ce20b8abb366667b4cc"],["archives/2018/04/index.html","87d2138d652726fc5d3dd891952d27de"],["archives/2018/05/index.html","7d8ed15e24dcefb715d5cbf28230091e"],["archives/2018/06/index.html","bdcfbc926d32fd7a78be0b5b5d208445"],["archives/2018/07/index.html","fb8ab6817f1687972e2f54b4dbecd02b"],["archives/2018/08/index.html","b991cce9024d19598fd2d7a379668648"],["archives/2018/12/index.html","60db6ddb92c90611be959ca9974aaf23"],["archives/2018/index.html","7b8a6301809e0b63a117c609f3265af7"],["archives/2018/page/2/index.html","925ce3e1262d8b2bec3110710621eb8e"],["archives/2018/page/3/index.html","fb42cd22894f8538e7600eb1d1485bdf"],["archives/2019/01/index.html","56aadf5026282a49460adaf511006e28"],["archives/2019/07/index.html","a0163883c9e92551564ecd7064ff7b24"],["archives/2019/08/index.html","f0db138a205f182d7c97c823eb8bb703"],["archives/2019/index.html","ebc3d299440979a90c15f0f0ab43c7ab"],["archives/index.html","f2fa0903dc9f28bc412999e27b0b9f0c"],["archives/page/2/index.html","53bf6450bb75caa20e35a1a73c4114e2"],["archives/page/3/index.html","adda44a7c8c901e20d0bb887a669973d"],["archives/page/4/index.html","942fb79422284ee549ebaa94c83545c5"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/学习/index.html","d4821b4982ea0d631e5acb01faa022ae"],["categories/学习/page/2/index.html","51a106746ed3d8c720af3395d1122bd0"],["categories/学习/page/3/index.html","5b393ee1ec70949a96f58532635c6ea1"],["categories/指弹/index.html","2857643144f30c247185d10578602f72"],["categories/生活/index.html","b414e19d454fb734681110de72a1fd16"],["css/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["css/donate.css","a68e4a34e814ce3334186286f4655440"],["donate/index.html","6d6b078133399bfa400633ee47b5c6e1"],["img/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["img/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["img/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["img/alipay.svg","9239702087add999b29eda6c69b7fac3"],["img/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["img/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["img/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["img/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["img/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["index.html","55b992277856549cbc309396b8e3efe3"],["js/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["js/donate.js","c5119c5bdd5049d805e03af774a47472"],["js/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["js/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["js/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["js/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["js/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["js/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["live2d/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2d/device.min.js","86a721c7735b03a0c12b172431e5cb2c"],["live2d/script.js","7d75535f43af497883c1b9a1b88c9e1a"],["page/2/index.html","089ed9414f2478af97cd12932b35d66d"],["page/3/index.html","7f8d5713d1dcba2dc2a6fb8fe05e2a73"],["page/4/index.html","241f8d512deb1c9b505afd51d5f34f47"],["tags/About/index.html","e1eccef9c9461c43eae19ebc4d46ed83"],["tags/Hexo/index.html","eb669839ca33efa40e0dca7af31f1e82"],["tags/React-Native/index.html","ac8e27140a26b3832c096d7d5dcb05b9"],["tags/http/index.html","6f39d380a3450ad697c336b3c8d6f34d"],["tags/javascript/index.html","03da1b4b8e2b2123a023b4d785e8d7d2"],["tags/koa/index.html","3d41356d99c3279095deb471e50609b9"],["tags/react/index.html","30ead755269f20920f5affc388cde705"],["tags/vue/index.html","1527c234c0b457f2971aed6160739bf7"],["tags/不知道归为哪一列系列/index.html","9f62feac60bd4f952b777df5d6ffd1c4"],["tags/学习/index.html","367a714e3ad083c0bd7c7fb893d56b5b"],["tags/指弹/index.html","5cee0bb8592d73dec67870156f0babf9"],["tags/杂记/index.html","05bfc191043108428f14a865bd99489a"],["tags/算法/index.html","58f9efc3e7f5afa6114a778c0090aec8"],["youlian/index.html","a06dbe2e60e7dd8bbf53ae24b8457da9"]];
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







