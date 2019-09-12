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

var precacheConfig = [["2018/01/05/VueInAction1/index.html","498491a254d8218fbd6ca310f52ff227"],["2018/01/05/hexoml/index.html","cdcc25734386a7c756dd9246ccb218ba"],["2018/01/08/v-model/index.html","2e8eded9036f1740a891dbdcf61b0d81"],["2018/01/12/VueInAction2/index.html","199f6d7afd7bfbbdf0012f4f8d8de65b"],["2018/01/13/Array/index.html","9f09da1b09bbbc46c3e306c0e59b092f"],["2018/01/16/instanceof/index.html","cdd79d7965110fe5527564ce4d692d4e"],["2018/01/18/prototype/index.html","5b0499bc1ae8d63f6778d49742c84486"],["2018/03/07/this/index.html","e8bc2dc87adb5f77ea5f8884cbdf322f"],["2018/03/10/jsMemoryManagent/index.html","8a2176f59136fd2d3b7c50b79cca6c67"],["2018/03/25/debounce/index.html","4a47c44f69c5d2b1d99e21282ef4dbd1"],["2018/03/28/toLittleCute/index.html","a277bf3766b1252b61296c3ed58c74a1"],["2018/04/02/面试/index.html","8c202faf3268bb6f0a76a303fedadd0c"],["2018/04/05/JSX/index.html","7383fcc43dc1e3714d4c6a8c65c9c164"],["2018/04/10/axioshhh/index.html","e894f080f2e3e8cf9a9d389c0114a40a"],["2018/04/18/template/index.html","766cd28857d7a2f72c8c9e1d1785bbe6"],["2018/04/19/http/index.html","6a6eb826d401e9530211e70d3df818a2"],["2018/04/29/Vue-lifecycle/index.html","721f70a7aab30d9782141d8cabb4182e"],["2018/04/29/timetravel/index.html","985717fc0d93dcf90d0e418b335ac085"],["2018/05/20/流行的云/index.html","0fc32e6e2f4e0f42932556972ec2cb32"],["2018/05/23/friendships/index.html","98e58a61cc5913ed4f76d6a019a01f42"],["2018/06/01/ReactNativeComponent/index.html","3da0e265929121d68dd74fb2f57f5604"],["2018/06/08/choppingHand1/index.html","cd31168c7c4b1e50a05dfd72ee218f1d"],["2018/06/15/choppingHand2/index.html","c4bb09c521042f21d9d347d05608fecb"],["2018/07/19/Ngnix/index.html","43018602d6be0bf433b8605c0b7f603b"],["2018/07/25/sort/index.html","3dc9b1dfd5aef7470325c0b784b5c888"],["2018/08/07/koaMiddle/index.html","216756106ecf85cb0b79afa5f6550484"],["2018/12/07/git杂记/index.html","590c926129070cd0ada4c939d29bc506"],["2018/12/31/selfPromise/index.html","e8c12cfcb01ad91dc393bc4f376a0ed8"],["2019/01/04/react的setState/index.html","a5aa07383e9008271711bf8ec1a57738"],["2019/01/17/vue的diff/index.html","e5075518b46b504cb017927b2779acb9"],["2019/07/22/封培总结/index.html","bcb58d6319fea6a397b1333bba3a5722"],["2019/07/25/MingJingNote/index.html","494cd09b47dc24507d17b8ed9cd9e1b7"],["2019/08/07/Quic/index.html","81c67f4b21f30d79b999e36e68f7fbb3"],["about/index.html","72dd7fa2af68aeaa47e5422331aa1a85"],["archives/2018/01/index.html","517288457789416610908d24b20e47f4"],["archives/2018/03/index.html","4c23c86829b880bd2ea37c78a6fdbf90"],["archives/2018/04/index.html","e7317c261b800600db3e1f66a1845c9d"],["archives/2018/05/index.html","18d730fa7c3ead9c4429a30eb44276af"],["archives/2018/06/index.html","cf33a33b04793be1a2e99dd1285dc32e"],["archives/2018/07/index.html","ad27d8d200d1e995c4c6d869acc253c4"],["archives/2018/08/index.html","504c2466fdd6528bf8b33a9868cb80c6"],["archives/2018/12/index.html","da21a92f81251181f2be8181ff817f20"],["archives/2018/index.html","47a75a9269a13767245cb8c54fd8b1d5"],["archives/2018/page/2/index.html","1422df25176c7b4ff4039a07c50db35a"],["archives/2018/page/3/index.html","07c87cbe14f49d79dbee34d1a7df3ea8"],["archives/2019/01/index.html","4bfd51111b7bdb8c24bb8f943f67a4fd"],["archives/2019/07/index.html","cf117022cb39e4bdd91495171b00c47b"],["archives/2019/08/index.html","89d811129f49e0fccf455ba44db69989"],["archives/2019/index.html","8c69b8a258d05416b372b76aef7af2a1"],["archives/index.html","5b50a85e31f22b2833190bbccc95c997"],["archives/page/2/index.html","db1b6296a1334ec8ee113c82bd7af582"],["archives/page/3/index.html","6ab2bd60609357b12764421d261d037a"],["archives/page/4/index.html","7ca10a3ab278ce38caafa110dd4a5c7b"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/学习/index.html","d3db6a90e9984f22c6239534fc706dce"],["categories/学习/page/2/index.html","a181c35c79e6996221a9ceadc53c649e"],["categories/学习/page/3/index.html","591b88a2cf0333ee5c0c122f15bb7509"],["categories/指弹/index.html","80fa4ac56a1afd99655a1a9e32b2cc87"],["categories/生活/index.html","07a1810fe68ac45c0e6f50dd50e31f01"],["css/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["css/donate.css","a68e4a34e814ce3334186286f4655440"],["css/style.css","fd93467f16ed22766d2e3acad963b90b"],["donate/index.html","6d6b078133399bfa400633ee47b5c6e1"],["img/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["img/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["img/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["img/alipay.svg","9239702087add999b29eda6c69b7fac3"],["img/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["img/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["img/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["img/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["img/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["index.html","42d2cac7e2f0c50360ecc3188eddf99d"],["js/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["js/donate.js","c5119c5bdd5049d805e03af774a47472"],["js/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["js/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["js/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["js/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["js/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["js/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["live2d/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2d/device.min.js","86a721c7735b03a0c12b172431e5cb2c"],["live2d/script.js","7d75535f43af497883c1b9a1b88c9e1a"],["page/2/index.html","db1a9f4fa72478f590a67b7f90da861b"],["page/3/index.html","76b4cbbd721508bf42b63e468ea3cc47"],["page/4/index.html","ea93b1538ae8133187d38d6a23902f18"],["tags/Hexo/index.html","b99f165fa801f6abf881ae1808aa1611"],["tags/React-Native/index.html","35fc6782972fb6ade1ed463c554e0cfc"],["tags/http/index.html","6111c361adea8e91733976ae37af8b60"],["tags/javascript/index.html","beb61a850a96f22dcf777ca87386cbe0"],["tags/koa/index.html","f6a74a23542dd0cd921add3a4d778b24"],["tags/react/index.html","f8557e31648fdedda7fca0f0a2e002f5"],["tags/vue/index.html","64b5732eeef40043aa77b203493b516a"],["tags/不知道归为哪一列系列/index.html","5d9427338e5ef0e02e2364409b614126"],["tags/学习/index.html","f4c04a369ed8b042aa6898c6fcaba67a"],["tags/指弹/index.html","998bdeceb6e8923ae676fe44029ab8b7"],["tags/杂记/index.html","3e3a8deabf842d372f1b1ba0bcdff252"],["tags/算法/index.html","6a8e8bf2d8f141f15b7c5765329b91cb"],["youlian/index.html","d66143d29e28bed738585dc2e5f0ad2e"]];
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







