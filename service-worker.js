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

var precacheConfig = [["／xuyonglin222.github.io2018/01/05/VueInAction1/index.html","eb1600f8799e7d1aab6a5bf9af30cf4d"],["／xuyonglin222.github.io2018/01/05/hexoml/index.html","42c3974decedcef2530b0e29be1ae58a"],["／xuyonglin222.github.io2018/01/08/v-model/index.html","d0b36c780f0f31f8b75e543db55f5746"],["／xuyonglin222.github.io2018/01/12/VueInAction2/index.html","ca43c73432a70db53a91622e02e5d075"],["／xuyonglin222.github.io2018/01/13/Array/index.html","2503d1ef0c1854537a6904166dc360fa"],["／xuyonglin222.github.io2018/01/16/instanceof/index.html","556865c13e72ba646c503d843a137db3"],["／xuyonglin222.github.io2018/01/18/prototype/index.html","58c499f51f16994bdbd4c6703cb4eb87"],["／xuyonglin222.github.io2018/03/07/this/index.html","531728c5fb7cfabbc92d4b6abeb995b0"],["／xuyonglin222.github.io2018/03/10/jsMemoryManagent/index.html","8a605c5d90c8a8d44f8f3932472256b2"],["／xuyonglin222.github.io2018/03/25/debounce/index.html","64b3a88eb83702327f65ac48fbc8f6ca"],["／xuyonglin222.github.io2018/03/28/toLittleCute/index.html","455b281fd34c2730273f4cbdaa097444"],["／xuyonglin222.github.io2018/04/02/面试/index.html","cb25e168fe0451ace2de046a90fb25b8"],["／xuyonglin222.github.io2018/04/05/JSX/index.html","78f88c1f69a2380815c90176c32df7d1"],["／xuyonglin222.github.io2018/04/10/axioshhh/index.html","f5171a784181d5f640d16b4f68757e43"],["／xuyonglin222.github.io2018/04/18/template/index.html","c98ed9af27ca08fd0ad63335943dd52d"],["／xuyonglin222.github.io2018/04/19/http/index.html","df8eefdfeb3c6a8f7d896e62ac7fd2ff"],["／xuyonglin222.github.io2018/04/29/Vue-lifecycle/index.html","85f502721d1440976bb6c78f6d0c8700"],["／xuyonglin222.github.io2018/04/29/timetravel/index.html","20eaa5f683b8bfecaf8c965946f47fa4"],["／xuyonglin222.github.io2018/05/20/流行的云/index.html","fd3d814645375bfe0781c625e07afd16"],["／xuyonglin222.github.io2018/05/23/friendships/index.html","11c86ea6af70a2b41482969927c7209f"],["／xuyonglin222.github.io2018/06/01/ReactNativeComponent/index.html","ca99c813b4fb84ad86dbda90cf781ee6"],["／xuyonglin222.github.io2018/06/08/choppingHand1/index.html","5ff79342ed025d008e2a2c54dec1476b"],["／xuyonglin222.github.io2018/06/15/choppingHand2/index.html","0ab58f2bdd0ff04970a4131414b3a3d1"],["／xuyonglin222.github.io2018/07/19/Ngnix/index.html","8640eb9f377aa6092b305367a095a4ee"],["／xuyonglin222.github.io2018/07/25/sort/index.html","2acbd61488888cb12c41772685f71050"],["／xuyonglin222.github.io2018/08/07/koaMiddle/index.html","bff940b4b23b3ed207fb5dae5f875f2c"],["／xuyonglin222.github.io2018/12/07/git杂记/index.html","c84565fbe53b36f38f8dd751b2abeb88"],["／xuyonglin222.github.io2018/12/31/selfPromise/index.html","46da711fd5781a7826d133fb4be97671"],["／xuyonglin222.github.io2019/01/04/react的setState/index.html","552494c667d2c09ce43f3778cbcfaf3e"],["／xuyonglin222.github.io2019/01/17/vue的diff/index.html","961b35957c386d0d57321da49d647c4a"],["／xuyonglin222.github.io2019/07/22/封培总结/index.html","4f162b55c6d9bb421e91aee5fe081239"],["／xuyonglin222.github.io2019/07/25/MingJingNote/index.html","9fb6460572e5cd35974f66272708b663"],["／xuyonglin222.github.io2019/08/07/Quic/index.html","4ba9da22610014612b87e0e4b3aaf532"],["／xuyonglin222.github.ioabout/index.html","d0bdffab9f862c00e797e609ed7035e5"],["／xuyonglin222.github.ioarchives/2018/01/index.html","060c7156b50c28a099c46bb85d160e67"],["／xuyonglin222.github.ioarchives/2018/03/index.html","2401a117c1d35f9fdd9901715bbd09d6"],["／xuyonglin222.github.ioarchives/2018/04/index.html","dbcb4f4716ff5a00c1ccbbfb7529ab7a"],["／xuyonglin222.github.ioarchives/2018/05/index.html","fa71ecffe0e3cbeace331212d9f13735"],["／xuyonglin222.github.ioarchives/2018/06/index.html","7ce2eeb7019931f93f349bbb0bfd84c8"],["／xuyonglin222.github.ioarchives/2018/07/index.html","b0bc0ac691d8009b6de5334269b69d3d"],["／xuyonglin222.github.ioarchives/2018/08/index.html","590e4f0be3132a549c44373cf855315b"],["／xuyonglin222.github.ioarchives/2018/12/index.html","a380079394d9b6d8e7aaa79fcd9c1c22"],["／xuyonglin222.github.ioarchives/2018/index.html","e1d463dee631b2feda1e55b497c1ed66"],["／xuyonglin222.github.ioarchives/2018/page/2/index.html","98bf3c6ccc87254b791fa8eec11ef6b9"],["／xuyonglin222.github.ioarchives/2018/page/3/index.html","455722592a47432c9926f1560f48f46c"],["／xuyonglin222.github.ioarchives/2019/01/index.html","12a3ae8567dc7458b3927650f7820cb6"],["／xuyonglin222.github.ioarchives/2019/07/index.html","2b3b6445562f5419f0e48d5c9d373922"],["／xuyonglin222.github.ioarchives/2019/08/index.html","b90ed70369ea4531b70d9e91fe5a1a2c"],["／xuyonglin222.github.ioarchives/2019/index.html","ab5d2675abe987bf934540fc799b6b20"],["／xuyonglin222.github.ioarchives/index.html","879e939231422296a1813c77b14a8363"],["／xuyonglin222.github.ioarchives/page/2/index.html","d40a302acfeac53df17eb5225f90e368"],["／xuyonglin222.github.ioarchives/page/3/index.html","15d26e32ec2eef1d99bb2d56cbece0cc"],["／xuyonglin222.github.ioarchives/page/4/index.html","58b5f534184390fd538a73b305a935c5"],["／xuyonglin222.github.ioassets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["／xuyonglin222.github.ioassets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["／xuyonglin222.github.ioassets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["／xuyonglin222.github.iocategories/学习/index.html","df6dced9d497cfbec6a45100e420c7c9"],["／xuyonglin222.github.iocategories/学习/page/2/index.html","c6c72cc6ba4a0d16adcc45851e4ed0ff"],["／xuyonglin222.github.iocategories/学习/page/3/index.html","e2a3f02323b83d776cfc3a767de74866"],["／xuyonglin222.github.iocategories/指弹/index.html","e95e2d707cee98bf1b2882a7af31e2b9"],["／xuyonglin222.github.iocategories/生活/index.html","75c10428f7794fc3e80306b7941d97cd"],["／xuyonglin222.github.iocss/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["／xuyonglin222.github.iocss/donate.css","a68e4a34e814ce3334186286f4655440"],["／xuyonglin222.github.iodonate/index.html","6d6b078133399bfa400633ee47b5c6e1"],["／xuyonglin222.github.ioimg/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["／xuyonglin222.github.ioimg/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["／xuyonglin222.github.ioimg/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["／xuyonglin222.github.ioimg/alipay.svg","9239702087add999b29eda6c69b7fac3"],["／xuyonglin222.github.ioimg/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["／xuyonglin222.github.ioimg/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["／xuyonglin222.github.ioimg/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["／xuyonglin222.github.ioimg/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["／xuyonglin222.github.ioimg/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["／xuyonglin222.github.ioindex.html","4791b6d4822fa237412301cb08205527"],["／xuyonglin222.github.iojs/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["／xuyonglin222.github.iojs/donate.js","c5119c5bdd5049d805e03af774a47472"],["／xuyonglin222.github.iojs/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["／xuyonglin222.github.iojs/gitment.browser.js","d41d8cd98f00b204e9800998ecf8427e"],["／xuyonglin222.github.iojs/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["／xuyonglin222.github.iojs/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["／xuyonglin222.github.iojs/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["／xuyonglin222.github.iojs/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["／xuyonglin222.github.iolive2d/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["／xuyonglin222.github.iolive2d/device.min.js","86a721c7735b03a0c12b172431e5cb2c"],["／xuyonglin222.github.iolive2d/script.js","7d75535f43af497883c1b9a1b88c9e1a"],["／xuyonglin222.github.iopage/2/index.html","b25ee4f9c3bdb8141a822d57b8a73e7a"],["／xuyonglin222.github.iopage/3/index.html","3be06af622db9edbf4cc1b5c0050fe25"],["／xuyonglin222.github.iopage/4/index.html","9df295baeb162286bc0ad6874ebb274e"],["／xuyonglin222.github.iotags/About/index.html","e1090f354abdc7686b9aabc24dc006a2"],["／xuyonglin222.github.iotags/Hexo/index.html","382fc4fbffd41ea61125b0e41ff371e5"],["／xuyonglin222.github.iotags/React-Native/index.html","bb0089122013bdfe6371366aa6405952"],["／xuyonglin222.github.iotags/http/index.html","993e23b806cd577b00d53f3c8f0e9302"],["／xuyonglin222.github.iotags/javascript/index.html","da2c94d5b79c89a62e9f687d8849e7d4"],["／xuyonglin222.github.iotags/koa/index.html","1c13af18ce99f89ba3ab3037a9c07517"],["／xuyonglin222.github.iotags/react/index.html","42ea3a6b81f7ad542cbe0f3d3c37f48c"],["／xuyonglin222.github.iotags/vue/index.html","5663bf32b158c09d9b9ada2e768ff7a1"],["／xuyonglin222.github.iotags/不知道归为哪一列系列/index.html","4c33baa07a4cd0fe6a90158451462343"],["／xuyonglin222.github.iotags/学习/index.html","e68b75411806c5604cbe8f4f4fd87c54"],["／xuyonglin222.github.iotags/指弹/index.html","662622ff18e0ae24324aa38943377a5f"],["／xuyonglin222.github.iotags/杂记/index.html","7617eebc69bd3c23d958d29baee8a9ba"],["／xuyonglin222.github.iotags/算法/index.html","5a5301a8ef8cc04f1383f320eab70c6a"],["／xuyonglin222.github.ioyoulian/index.html","5b2915a6558bdf12197353b0d7eab77d"]];
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







