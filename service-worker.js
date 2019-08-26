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

var precacheConfig = [["/xuyonglin222.github.io2018/01/05/VueInAction1/index.html","17b3d4cbf2c2216f25eb4945a6e867a3"],["/xuyonglin222.github.io2018/01/05/hexoml/index.html","5b062372470feac8f284100d18690122"],["/xuyonglin222.github.io2018/01/08/v-model/index.html","1f76a671ecd663743633b1f069eb43c1"],["/xuyonglin222.github.io2018/01/12/VueInAction2/index.html","709ec417be9cec72d12ab6756eb89f72"],["/xuyonglin222.github.io2018/01/13/Array/index.html","e9a9a7dab8aedf4f1a25f031a0fc8b6c"],["/xuyonglin222.github.io2018/01/16/instanceof/index.html","c10d54209828f5f6e74efa464cff56c4"],["/xuyonglin222.github.io2018/01/18/prototype/index.html","3b282688b45183caf3d6682e4b85ce74"],["/xuyonglin222.github.io2018/03/07/this/index.html","c90b9f67ad4a35a186f03b0258258493"],["/xuyonglin222.github.io2018/03/10/jsMemoryManagent/index.html","1a29b0d2329e4d8c45662c34ae9b1a65"],["/xuyonglin222.github.io2018/03/25/debounce/index.html","c603232d8f1074da1790478cd260274a"],["/xuyonglin222.github.io2018/03/28/toLittleCute/index.html","9a766db3577b0b9f812772e4a07c1a9b"],["/xuyonglin222.github.io2018/04/02/面试/index.html","b10d2bbdff357b24d0ea8112771bf33c"],["/xuyonglin222.github.io2018/04/05/JSX/index.html","09284a627ced303972e015f1ec16e32e"],["/xuyonglin222.github.io2018/04/10/axioshhh/index.html","c0e0fe7c5b521f64b7e83de33407ed3f"],["/xuyonglin222.github.io2018/04/18/template/index.html","b33420f17fd5e85256aad64d076e5963"],["/xuyonglin222.github.io2018/04/19/http/index.html","cd74f5fcf9c09989efa6cbfb8bfd0b22"],["/xuyonglin222.github.io2018/04/29/Vue-lifecycle/index.html","8c7af68cc2f767a2249ba92067d481f8"],["/xuyonglin222.github.io2018/04/29/timetravel/index.html","bd042fb0b3604d67f37875430373365c"],["/xuyonglin222.github.io2018/05/20/流行的云/index.html","35bb2f3c0c1acfaf0c7b1b519f144118"],["/xuyonglin222.github.io2018/05/23/friendships/index.html","15bd61f87715fb6cbab79c1197e9fa31"],["/xuyonglin222.github.io2018/06/01/ReactNativeComponent/index.html","3e493b23a959f396bfc01cde26b4bbf0"],["/xuyonglin222.github.io2018/06/08/choppingHand1/index.html","53b546ba27c9ff2983b6e7649fa3d17a"],["/xuyonglin222.github.io2018/06/15/choppingHand2/index.html","6d55051b12f106a3cfe7c695b59a9279"],["/xuyonglin222.github.io2018/07/19/Ngnix/index.html","10e6c3464b667cb8941337f23d128f31"],["/xuyonglin222.github.io2018/07/25/sort/index.html","bd3bd014c8609d6f43cc6dbdb8657465"],["/xuyonglin222.github.io2018/08/07/koaMiddle/index.html","e173144c6eb165951a91e4636fcf1c5b"],["/xuyonglin222.github.io2018/12/07/git杂记/index.html","42226400b1e5a4e4312e8c966c012e25"],["/xuyonglin222.github.io2018/12/31/selfPromise/index.html","2bd116906a167a367871edc85fa26dde"],["/xuyonglin222.github.io2019/01/04/react的setState/index.html","b661375c9c9e969674ecfc21a38587e7"],["/xuyonglin222.github.io2019/01/17/vue的diff/index.html","49e81f429f2393369bca389b2b1618c0"],["/xuyonglin222.github.io2019/07/22/封培总结/index.html","d72b9291f1efd494dcf874524dd34fa6"],["/xuyonglin222.github.io2019/07/25/MingJingNote/index.html","95679e3bc254b28551cba4f9e5f4dd7c"],["/xuyonglin222.github.io2019/08/07/Quic/index.html","dcaab26d92b8d55798b0a5ebffbde939"],["/xuyonglin222.github.ioabout/index.html","c3d24557b288f4b635cb64348997e7f3"],["/xuyonglin222.github.ioarchives/2018/01/index.html","295d199323361b0a2d8c8b02b963e0ec"],["/xuyonglin222.github.ioarchives/2018/03/index.html","511675d10a1d5ddf260264a898670688"],["/xuyonglin222.github.ioarchives/2018/04/index.html","3eaf95f67e7d8e64d0799d00434ad6ca"],["/xuyonglin222.github.ioarchives/2018/05/index.html","1ec32cb831cfa9dc309bc8041dfe8332"],["/xuyonglin222.github.ioarchives/2018/06/index.html","71d82f3f10d15424898f7b56dd4fb279"],["/xuyonglin222.github.ioarchives/2018/07/index.html","a58e5fe9c4f864f433c3426b96c1df73"],["/xuyonglin222.github.ioarchives/2018/08/index.html","4211cabffd5a6e11b17ce719ac17b0ec"],["/xuyonglin222.github.ioarchives/2018/12/index.html","48ff5b5f539d4e23876c9ca0d9e0547d"],["/xuyonglin222.github.ioarchives/2018/index.html","30e53be5fae6505fd25bbf8c7d2c3d49"],["/xuyonglin222.github.ioarchives/2018/page/2/index.html","dbb95cbbe6d92e02b534211a6885f8ce"],["/xuyonglin222.github.ioarchives/2018/page/3/index.html","4a228d3cbe3f23b094d4aa753a3d0f8d"],["/xuyonglin222.github.ioarchives/2019/01/index.html","a38d70d7807a1d87ef7ab9028a6fe637"],["/xuyonglin222.github.ioarchives/2019/07/index.html","5630bd902be8b3a9d0bce1ed54b3b7f0"],["/xuyonglin222.github.ioarchives/2019/08/index.html","400b8f0743a058888c9f58234427228a"],["/xuyonglin222.github.ioarchives/2019/index.html","0c26f029aee227799b0f7a0502583435"],["/xuyonglin222.github.ioarchives/index.html","3d4cf6642407211889c065970093eddf"],["/xuyonglin222.github.ioarchives/page/2/index.html","31d7179f9da5fdbcbd924460ba7f2a92"],["/xuyonglin222.github.ioarchives/page/3/index.html","3910d43161a105a2c08d3aa90dfe54ff"],["/xuyonglin222.github.ioarchives/page/4/index.html","57a4c2944e0fa7566df75fbc0f498bc7"],["/xuyonglin222.github.ioassets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/xuyonglin222.github.ioassets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/xuyonglin222.github.ioassets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/xuyonglin222.github.iocategories/学习/index.html","01e464745ffc72b5ec556f248cf62eb4"],["/xuyonglin222.github.iocategories/学习/page/2/index.html","8dd550d6384094e94057e0dfc309ddb5"],["/xuyonglin222.github.iocategories/学习/page/3/index.html","da671e1f6f120df104bae59f8fa9cf8c"],["/xuyonglin222.github.iocategories/指弹/index.html","0d06f6ea0ec96de39814fceabe75ea02"],["/xuyonglin222.github.iocategories/生活/index.html","0b20fdb5c836b518340a19dfc82cdd40"],["/xuyonglin222.github.iocss/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["/xuyonglin222.github.iocss/donate.css","a68e4a34e814ce3334186286f4655440"],["/xuyonglin222.github.iodonate/index.html","6d6b078133399bfa400633ee47b5c6e1"],["/xuyonglin222.github.ioimg/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["/xuyonglin222.github.ioimg/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["/xuyonglin222.github.ioimg/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["/xuyonglin222.github.ioimg/alipay.svg","9239702087add999b29eda6c69b7fac3"],["/xuyonglin222.github.ioimg/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["/xuyonglin222.github.ioimg/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/xuyonglin222.github.ioimg/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/xuyonglin222.github.ioimg/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["/xuyonglin222.github.ioimg/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["/xuyonglin222.github.ioindex.html","e1b6ec7d4332149a153fef13e1b38da0"],["/xuyonglin222.github.iojs/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["/xuyonglin222.github.iojs/donate.js","c5119c5bdd5049d805e03af774a47472"],["/xuyonglin222.github.iojs/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["/xuyonglin222.github.iojs/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["/xuyonglin222.github.iojs/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["/xuyonglin222.github.iojs/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["/xuyonglin222.github.iojs/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["/xuyonglin222.github.iojs/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["/xuyonglin222.github.iolive2d/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/xuyonglin222.github.iolive2d/device.min.js","86a721c7735b03a0c12b172431e5cb2c"],["/xuyonglin222.github.iolive2d/script.js","7d75535f43af497883c1b9a1b88c9e1a"],["/xuyonglin222.github.iopage/2/index.html","6fe0c286edd0f60eade3b10b57b4e9e1"],["/xuyonglin222.github.iopage/3/index.html","9c21c19cea8a93c6f37756984b64de70"],["/xuyonglin222.github.iopage/4/index.html","672c275381d3fed3ebbb2ff0f7a6499f"],["/xuyonglin222.github.iotags/About/index.html","2c9a22a759d252bdd06f99a221529cc6"],["/xuyonglin222.github.iotags/Hexo/index.html","2b390d4ff1de2b20f7cf7d60785d5474"],["/xuyonglin222.github.iotags/React-Native/index.html","a463e51ac143eb56d58966231cd655cc"],["/xuyonglin222.github.iotags/http/index.html","0cf290787cadfa1bf4fe66fc16233864"],["/xuyonglin222.github.iotags/javascript/index.html","8158e13f61f3a0dcc5892830b94d0952"],["/xuyonglin222.github.iotags/koa/index.html","20d98862ce075635c56625de73df53e7"],["/xuyonglin222.github.iotags/react/index.html","d08f7f9a4b49489810931d43c688d0dd"],["/xuyonglin222.github.iotags/vue/index.html","56f877244d0dad314f4572bb84b77315"],["/xuyonglin222.github.iotags/不知道归为哪一列系列/index.html","e36f76d807b256981b68f016f20aca30"],["/xuyonglin222.github.iotags/学习/index.html","9cee7171a5296eb255eafe1c91781791"],["/xuyonglin222.github.iotags/指弹/index.html","53b21564ed6c77270fa46131ad764a28"],["/xuyonglin222.github.iotags/杂记/index.html","100a696e03f2343c565fc8b40230321f"],["/xuyonglin222.github.iotags/算法/index.html","7e77e7435cedc42d5f92430e737c76a8"],["/xuyonglin222.github.ioyoulian/index.html","c28686beff765c0137c6479d12688a68"]];
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







