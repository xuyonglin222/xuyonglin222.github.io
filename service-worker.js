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

var precacheConfig = [["2018/01/05/vue-VueInAction1/index.html","afefdd3cc4d955dbc230acf1e917ac33"],["2018/01/08/vue-v-model/index.html","6543d52b2c8c8f9ce62f1fc4600da12f"],["2018/01/12/vue-VueInAction2/index.html","f3eb4736a9bd20295db490fd380a77f3"],["2018/01/13/js-Array/index.html","c189152721afda9ba90e04823bf38b12"],["2018/01/16/js-instanceof/index.html","606f3ea3d9997ccce0e4bb5c1cdc1fda"],["2018/01/18/js-prototype/index.html","bf416ffdd0d8bb0c7a943422b601ea7d"],["2018/03/07/js-this/index.html","1f72f8e09ff1bba48859d14f0f997ac2"],["2018/03/10/js-jsMemoryManagent/index.html","70308887f888ae7e04fdfffcf083441a"],["2018/03/25/js-debounce/index.html","97bae90e364970fe990cc6406e72e369"],["2018/04/02/js-面试/index.html","d17d7bb103f36dbf1d0f56328cdc984d"],["2018/04/05/react-JSX/index.html","05682a217567539368605c7ab72addc5"],["2018/04/10/js-axioshhh/index.html","e5eff5c8efec1c285988adb2b1d7e1f3"],["2018/04/18/vue-template/index.html","0ecb66cb80a983f119802eb843f06720"],["2018/04/19/网络-http/index.html","4fc01a882bf8d9c4e5ca7fe898773d69"],["2018/04/29/vue-lifecycle/index.html","68a47076c0333f0768e7211e4f0d2dd1"],["2018/04/29/指弹-timetravel/index.html","428e86635e04e31534a6d5fc474bd608"],["2018/05/20/指弹-流行的云/index.html","c6f81c76956c448649bdc615d835dcc0"],["2018/05/23/指弹-friendships/index.html","35a731b3f3eb8b0dad59c78a06dc08f6"],["2018/06/01/rn-ReactNativeComponent/index.html","ed3663750cb5a9c80394d08b74cf96bf"],["2018/06/08/rn-choppingHand1/index.html","c69fb93c7ddd3a41cfe77adcf5b30ae4"],["2018/06/15/rn-choppingHand2/index.html","f7f9e73a35469db8e4a068436199c123"],["2018/07/19/杂记-Ngnix/index.html","9e050da2ea5fd4b3ef4306e0a07192c8"],["2018/07/25/js-sort/index.html","2f6f9dca2e157fc886ab58c9cd390b83"],["2018/08/07/node-koaMiddle/index.html","330aaa690ba91ad0ea046f7de04d0efc"],["2018/12/07/杂记-git杂记/index.html","c5eaf387c35115f3d7b89270de856451"],["2018/12/31/js-selfPromise/index.html","f698810772e45db91d7f2f48029fc167"],["2019/01/04/react-react的setState/index.html","25b6f8ca6db755d4dad59694cf02019f"],["2019/01/17/vue-vue的diff/index.html","91a59454ef7842a355def1b37cb497a6"],["2019/07/22/其他-封培总结/index.html","127cd1a5466032186f0a6491f7f4218d"],["2019/07/25/杂记-MingJingNote/index.html","f9b510abbd7ce5f32a153bd2fe234d4d"],["2019/08/07/网络-Quic/index.html","9d099aea635af9ff40237d84acec3233"],["2019/09/17/浏览器-渲染/index.html","ca7e9b854a3696079ed0fa6fe7b828d4"],["about/index.html","154f00d5f152a84530b1e3ca0445134e"],["archives/2018/01/index.html","5bd9ac3c2c51d1b73189e7d34f0660e6"],["archives/2018/03/index.html","1996761e3baa6095f242059448d8909b"],["archives/2018/04/index.html","8fb8cc0eae1e48284edc3ef4356f0acb"],["archives/2018/05/index.html","8ce6b478c299b9da2f8ef905b1145c06"],["archives/2018/06/index.html","54b5a371a27b5e6a5912caca250ff2b2"],["archives/2018/07/index.html","6228a227aea89bce28b96d197f2bf62a"],["archives/2018/08/index.html","9f04fef68bd46e86f30a57f037527677"],["archives/2018/12/index.html","397fd171067b554efe1516ced4b68cc5"],["archives/2018/index.html","46d5c920bad4360682eca9e00acb5cd5"],["archives/2018/page/2/index.html","a571905ec638ce16e3e42fc5042d4c4a"],["archives/2018/page/3/index.html","d09959f4c6f205fa162c3b8525a551cc"],["archives/2019/01/index.html","11063981601d6d74747b0d9ce8c9b314"],["archives/2019/07/index.html","e1fea358e41d54f29d1de7a32f01ef9e"],["archives/2019/08/index.html","5f1f656462ec4b29e977c731fcf2990c"],["archives/2019/09/index.html","4cb5047b8bdd3de47d5fe5bc8d13d67a"],["archives/2019/index.html","0a942746c743923eb5ee0bbd39f39c24"],["archives/index.html","2964c1bb4041fa17034c648f9490f4cd"],["archives/page/2/index.html","25657c92ae817cf6dda882063a2b9d4f"],["archives/page/3/index.html","cf3a89a9f4210919dd947372d81fb07a"],["archives/page/4/index.html","5809603e50fcaab1c050b058d1060423"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/学习/index.html","082ac868e1684d192225450c74139eb4"],["categories/学习/page/2/index.html","700427686cb053e9de7a3ea6d82d241a"],["categories/学习/page/3/index.html","9294849c4afc21f639fe76c76ddc89d5"],["categories/指弹/index.html","a361a33db6d7e80399fdc54f63fdc78f"],["css/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["css/donate.css","a68e4a34e814ce3334186286f4655440"],["css/style.css","fd93467f16ed22766d2e3acad963b90b"],["donate/index.html","6d6b078133399bfa400633ee47b5c6e1"],["img/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["img/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["img/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["img/alipay.svg","9239702087add999b29eda6c69b7fac3"],["img/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["img/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["img/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["img/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["img/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["index.html","e2922901b70369e31b74cccbe5aac385"],["js/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["js/donate.js","c5119c5bdd5049d805e03af774a47472"],["js/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["js/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["js/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["js/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["js/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["js/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["live2d/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2d/device.min.js","86a721c7735b03a0c12b172431e5cb2c"],["live2d/script.js","7d75535f43af497883c1b9a1b88c9e1a"],["page/2/index.html","385c30840cbeb46751ac942cb11ad9c8"],["page/3/index.html","f5140c458d8b2fbb9600cd49a000d933"],["page/4/index.html","588b931debd5faad8bb0c227b8b41ec9"],["tags/React-Native/index.html","90bdc0d5f515946dcaf496a918d526f6"],["tags/javascript/index.html","7d4f3d9442d1544b2ce0b7f212a0535a"],["tags/koa/index.html","47de8f408bb9f593b8b2298efd7f33eb"],["tags/react/index.html","edde7d427d9f88524d259b9d984af8fe"],["tags/vue/index.html","34c9fda0eed6f6a339bfd87619cabe43"],["tags/其他/index.html","809b41f8a1b604c78de49fdd89f60f5f"],["tags/学习/index.html","59fbdb6d8a6033588c7adfe73c227ddd"],["tags/指弹/index.html","e0603c39f6f646121f62764afb3823a5"],["tags/杂记/index.html","3ccf212b5499e9a793c8cb7c0930934c"],["tags/浏览器/index.html","00e5eb2ac2823a158ebe28dcefb49694"],["tags/算法/index.html","9727e747bcd2a70fc7df136447223164"],["tags/网络/index.html","5718c4cddaad4d5c03b08cd22db0a9c4"],["youlian/index.html","e58a37c9a0c2a1a0beaa0cd45e1c86db"]];
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







