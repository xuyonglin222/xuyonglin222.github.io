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

var precacheConfig = [["/xuyonglin222.github.io2018/01/05/VueInAction1/index.html","b084a189cfbea93f7df3c649bdab7158"],["/xuyonglin222.github.io2018/01/05/hexoml/index.html","b3195a672e2c389d1831f3be1a8ba3fc"],["/xuyonglin222.github.io2018/01/08/v-model/index.html","8fefdfd69cd4ef6e9cf96d99ef5b764a"],["/xuyonglin222.github.io2018/01/12/VueInAction2/index.html","2492fe49ad5ce05b0e1e014d1071a868"],["/xuyonglin222.github.io2018/01/13/Array/index.html","87a8df5608917cbb94a075eff40be8d2"],["/xuyonglin222.github.io2018/01/16/instanceof/index.html","80cf0e3486d613df55d0c574d7d2df08"],["/xuyonglin222.github.io2018/01/18/prototype/index.html","d7e9913dae4044010977f600a04b608e"],["/xuyonglin222.github.io2018/03/07/this/index.html","3cbbf98cbf4b37e05f4a45c3ccffa95c"],["/xuyonglin222.github.io2018/03/10/jsMemoryManagent/index.html","6a9d952137d6f90a29e0c0ab27f64f2f"],["/xuyonglin222.github.io2018/03/25/debounce/index.html","1e681b2cbc58b0c3a7fbc1fe881fd6af"],["/xuyonglin222.github.io2018/03/28/toLittleCute/index.html","17b8a4762cc523b8961a901dcfe7e48c"],["/xuyonglin222.github.io2018/04/02/面试/index.html","01967b63a7f59934f8db818d9a6eb099"],["/xuyonglin222.github.io2018/04/05/JSX/index.html","26ad0cd8a9e4740fa206be991a0da145"],["/xuyonglin222.github.io2018/04/10/axioshhh/index.html","02cc982382cb8a1e05f6aee3414192bb"],["/xuyonglin222.github.io2018/04/18/template/index.html","6ffd5a59e65878e2a81ace764bf6c6a8"],["/xuyonglin222.github.io2018/04/19/http/index.html","dcb133f8c313c9e585157b7cf82f0881"],["/xuyonglin222.github.io2018/04/29/Vue-lifecycle/index.html","570e86fef74cc4503b4340b08937ed76"],["/xuyonglin222.github.io2018/04/29/timetravel/index.html","9480b0cae1e250a1536b38338562c8d2"],["/xuyonglin222.github.io2018/05/20/流行的云/index.html","779ff5f2a3c4f3b8a8023aff131ea8f6"],["/xuyonglin222.github.io2018/05/23/friendships/index.html","9802e696efd8c3a2b69a24c573f90efe"],["/xuyonglin222.github.io2018/06/01/ReactNativeComponent/index.html","a273ef9067b0682b0880c3cda5cc754a"],["/xuyonglin222.github.io2018/06/08/choppingHand1/index.html","21dce08b3201c89a60bcccea83d76038"],["/xuyonglin222.github.io2018/06/15/choppingHand2/index.html","09bbf6d2fe47359711e669bda8b07592"],["/xuyonglin222.github.io2018/07/19/Ngnix/index.html","b3ae596d2dc8be3a8b631da41e497a1b"],["/xuyonglin222.github.io2018/07/25/sort/index.html","f5afb977206d194b4b35e5b67661792d"],["/xuyonglin222.github.io2018/08/07/koaMiddle/index.html","312df5f27a3ecb86f118b103edeeb76c"],["/xuyonglin222.github.io2018/12/07/git杂记/index.html","1a2a10de0be26751c2e85c1b3a56f758"],["/xuyonglin222.github.io2018/12/31/selfPromise/index.html","7c60f834381322547c4f075ac4c2daf4"],["/xuyonglin222.github.io2019/01/04/react的setState/index.html","c794b0a6d8401e12fc4cd16e73e1c995"],["/xuyonglin222.github.io2019/01/17/vue的diff/index.html","df4a40069bff8f58bbe49acebb113789"],["/xuyonglin222.github.io2019/07/22/封培总结/index.html","13da3a77f5f4f2cec18a590e213ec9d8"],["/xuyonglin222.github.io2019/07/25/MingJingNote/index.html","1bb8f6119f9da5a8badc6c419f3721b5"],["/xuyonglin222.github.io2019/08/07/Quic/index.html","c4ea53f9feb98ad9bdb41870efc09419"],["/xuyonglin222.github.ioabout/index.html","a10f607f35f36cf731d4a42dcb050311"],["/xuyonglin222.github.ioarchives/2018/01/index.html","060c7156b50c28a099c46bb85d160e67"],["/xuyonglin222.github.ioarchives/2018/03/index.html","2401a117c1d35f9fdd9901715bbd09d6"],["/xuyonglin222.github.ioarchives/2018/04/index.html","dbcb4f4716ff5a00c1ccbbfb7529ab7a"],["/xuyonglin222.github.ioarchives/2018/05/index.html","fa71ecffe0e3cbeace331212d9f13735"],["/xuyonglin222.github.ioarchives/2018/06/index.html","7ce2eeb7019931f93f349bbb0bfd84c8"],["/xuyonglin222.github.ioarchives/2018/07/index.html","b0bc0ac691d8009b6de5334269b69d3d"],["/xuyonglin222.github.ioarchives/2018/08/index.html","590e4f0be3132a549c44373cf855315b"],["/xuyonglin222.github.ioarchives/2018/12/index.html","a380079394d9b6d8e7aaa79fcd9c1c22"],["/xuyonglin222.github.ioarchives/2018/index.html","e1d463dee631b2feda1e55b497c1ed66"],["/xuyonglin222.github.ioarchives/2018/page/2/index.html","98bf3c6ccc87254b791fa8eec11ef6b9"],["/xuyonglin222.github.ioarchives/2018/page/3/index.html","455722592a47432c9926f1560f48f46c"],["/xuyonglin222.github.ioarchives/2019/01/index.html","12a3ae8567dc7458b3927650f7820cb6"],["/xuyonglin222.github.ioarchives/2019/07/index.html","2b3b6445562f5419f0e48d5c9d373922"],["/xuyonglin222.github.ioarchives/2019/08/index.html","b90ed70369ea4531b70d9e91fe5a1a2c"],["/xuyonglin222.github.ioarchives/2019/index.html","ab5d2675abe987bf934540fc799b6b20"],["/xuyonglin222.github.ioarchives/index.html","879e939231422296a1813c77b14a8363"],["/xuyonglin222.github.ioarchives/page/2/index.html","d40a302acfeac53df17eb5225f90e368"],["/xuyonglin222.github.ioarchives/page/3/index.html","15d26e32ec2eef1d99bb2d56cbece0cc"],["/xuyonglin222.github.ioarchives/page/4/index.html","58b5f534184390fd538a73b305a935c5"],["/xuyonglin222.github.ioassets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/xuyonglin222.github.ioassets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/xuyonglin222.github.ioassets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/xuyonglin222.github.iocategories/学习/index.html","df6dced9d497cfbec6a45100e420c7c9"],["/xuyonglin222.github.iocategories/学习/page/2/index.html","c6c72cc6ba4a0d16adcc45851e4ed0ff"],["/xuyonglin222.github.iocategories/学习/page/3/index.html","e2a3f02323b83d776cfc3a767de74866"],["/xuyonglin222.github.iocategories/指弹/index.html","e95e2d707cee98bf1b2882a7af31e2b9"],["/xuyonglin222.github.iocategories/生活/index.html","75c10428f7794fc3e80306b7941d97cd"],["/xuyonglin222.github.iocss/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["/xuyonglin222.github.iocss/donate.css","a68e4a34e814ce3334186286f4655440"],["/xuyonglin222.github.iodonate/index.html","6d6b078133399bfa400633ee47b5c6e1"],["/xuyonglin222.github.ioimg/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["/xuyonglin222.github.ioimg/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["/xuyonglin222.github.ioimg/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["/xuyonglin222.github.ioimg/alipay.svg","9239702087add999b29eda6c69b7fac3"],["/xuyonglin222.github.ioimg/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["/xuyonglin222.github.ioimg/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/xuyonglin222.github.ioimg/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/xuyonglin222.github.ioimg/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["/xuyonglin222.github.ioimg/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["/xuyonglin222.github.ioindex.html","ec6c1e3a31570c9113d7af231da4637f"],["/xuyonglin222.github.iojs/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["/xuyonglin222.github.iojs/donate.js","c5119c5bdd5049d805e03af774a47472"],["/xuyonglin222.github.iojs/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["/xuyonglin222.github.iojs/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["/xuyonglin222.github.iojs/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["/xuyonglin222.github.iojs/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["/xuyonglin222.github.iojs/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["/xuyonglin222.github.iojs/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["/xuyonglin222.github.iolive2d/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/xuyonglin222.github.iolive2d/device.min.js","86a721c7735b03a0c12b172431e5cb2c"],["/xuyonglin222.github.iolive2d/script.js","7d75535f43af497883c1b9a1b88c9e1a"],["/xuyonglin222.github.iopage/2/index.html","b25ee4f9c3bdb8141a822d57b8a73e7a"],["/xuyonglin222.github.iopage/3/index.html","3be06af622db9edbf4cc1b5c0050fe25"],["/xuyonglin222.github.iopage/4/index.html","9df295baeb162286bc0ad6874ebb274e"],["/xuyonglin222.github.iotags/About/index.html","e1090f354abdc7686b9aabc24dc006a2"],["/xuyonglin222.github.iotags/Hexo/index.html","382fc4fbffd41ea61125b0e41ff371e5"],["/xuyonglin222.github.iotags/React-Native/index.html","bb0089122013bdfe6371366aa6405952"],["/xuyonglin222.github.iotags/http/index.html","993e23b806cd577b00d53f3c8f0e9302"],["/xuyonglin222.github.iotags/javascript/index.html","da2c94d5b79c89a62e9f687d8849e7d4"],["/xuyonglin222.github.iotags/koa/index.html","1c13af18ce99f89ba3ab3037a9c07517"],["/xuyonglin222.github.iotags/react/index.html","42ea3a6b81f7ad542cbe0f3d3c37f48c"],["/xuyonglin222.github.iotags/vue/index.html","5663bf32b158c09d9b9ada2e768ff7a1"],["/xuyonglin222.github.iotags/不知道归为哪一列系列/index.html","4c33baa07a4cd0fe6a90158451462343"],["/xuyonglin222.github.iotags/学习/index.html","e68b75411806c5604cbe8f4f4fd87c54"],["/xuyonglin222.github.iotags/指弹/index.html","662622ff18e0ae24324aa38943377a5f"],["/xuyonglin222.github.iotags/杂记/index.html","7617eebc69bd3c23d958d29baee8a9ba"],["/xuyonglin222.github.iotags/算法/index.html","5a5301a8ef8cc04f1383f320eab70c6a"],["/xuyonglin222.github.ioyoulian/index.html","ae1797a474837e1aa1c290b4afbeddd5"]];
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







