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

var precacheConfig = [["2018/01/05/VueInAction1/index.html","258523f5543ec4d870264a9898c734de"],["2018/01/05/hexoml/index.html","5f79daf04c004aa27f7add5873a9f077"],["2018/01/05/vue-VueInAction1/index.html","21cfd8c2f7ccfe402bd0e0079eef42a3"],["2018/01/08/v-model/index.html","23854e0e43ee95583fa233c532ff7965"],["2018/01/08/vue-v-model/index.html","903039f6356fd1263754a909a0007192"],["2018/01/12/VueInAction2/index.html","859c8f639aaa5c66cdd13be09cb16ff5"],["2018/01/12/vue-VueInAction2/index.html","0bf0a252de77893ccb8496a98d5d3fc8"],["2018/01/13/Array/index.html","f300a43fe6f4c4790f8400a36685c1d8"],["2018/01/13/js-Array/index.html","358ff43c133f15419183a439418938fc"],["2018/01/16/instanceof/index.html","d23f8bf74ff19685004bf200865db5ea"],["2018/01/16/js-instanceof/index.html","a6b73aed1be02bd5985f1f5f1b6e910f"],["2018/01/18/js-prototype/index.html","b03141118627033c481f1409d2b68770"],["2018/01/18/prototype/index.html","d4f4536edf9c859358faf71d84ba9313"],["2018/03/07/js-this/index.html","929e57b2744bb2ff1afa271aa00d413f"],["2018/03/07/this/index.html","63f0bb0eca9d4b0a37c51bc6ea8657e1"],["2018/03/10/js-jsMemoryManagent/index.html","2aed26c60307d224675465bfd7c8c76e"],["2018/03/10/jsMemoryManagent/index.html","9b98b7e490211d9d00881c6cf5e892b2"],["2018/03/25/debounce/index.html","b4081db2edab704793103894968adeaf"],["2018/03/25/js-debounce/index.html","a1ff5366cc42e3033e57d128ec509c69"],["2018/03/28/toLittleCute/index.html","774d29fb535a6e2a4781e0ba161f2a48"],["2018/04/02/js-面试/index.html","b6386efe9cd72b4d32b695c25a960094"],["2018/04/02/面试/index.html","cf3b519e7e97f3d26299f75352d774f3"],["2018/04/05/JSX/index.html","6ecfa5651eafb0161b2179fed46c6eca"],["2018/04/05/react-JSX/index.html","26124fa667212f85408445bcc5de3f1e"],["2018/04/10/axioshhh/index.html","fcfd473ae2a67c4a10d7f304d75885b0"],["2018/04/10/js-axioshhh/index.html","a6f3ab87f4cd5b970a284c15bd889e25"],["2018/04/18/template/index.html","274ad65c68773b820a0b29f88de5ae63"],["2018/04/18/vue-template/index.html","cbdd02ca1a51392360e616ef2b0c5585"],["2018/04/19/http/index.html","bd327cfe247f2868608c8f08547818a6"],["2018/04/19/网络-http/index.html","0076190192be2430149767ed0fcb5ca3"],["2018/04/29/timetravel/index.html","b57666952e661bdc0f0a883d8f94af2a"],["2018/04/29/vue-lifecycle/index.html","de13926f55fcda5676a758380b686461"],["2018/04/29/指弹-timetravel/index.html","3d45f9958f0b9ddd0830d05b324c8dbe"],["2018/05/20/指弹-流行的云/index.html","a3d5dffa32a481fcb1608f58eb82e1ea"],["2018/05/20/流行的云/index.html","3eea5182a5f3b375f7ac1d749fdfa36a"],["2018/05/23/friendships/index.html","9f4483a14c056cd62cfdb54ea2972abf"],["2018/05/23/指弹-friendships/index.html","38421b2e591ca8eb6a030cec92469573"],["2018/06/01/ReactNativeComponent/index.html","1fbabf7b1be7f9484eb20e5a91d7ab06"],["2018/06/01/rn-ReactNativeComponent/index.html","3f77a0fc9cb448e88590fa51f840a97c"],["2018/06/08/choppingHand1/index.html","b53c25ce9421ee9db257eb18f67e3c1f"],["2018/06/08/rn-choppingHand1/index.html","44ce2e0fd1eb8f263787966283aa5bf6"],["2018/06/15/choppingHand2/index.html","b19205d445de6474aaa37f682b229373"],["2018/06/15/rn-choppingHand2/index.html","438b77ce3cea9f8825f91a7ace2de335"],["2018/07/19/Ngnix/index.html","320b695d1a14ee375ba9db38ce67f685"],["2018/07/19/杂记-Ngnix/index.html","83fdd0571e89738222054e146faa04e0"],["2018/07/25/js-sort/index.html","87741beb2fb7a612c459fec6f3ce0fa7"],["2018/07/25/sort/index.html","4bc5f8768a3048185a90ac12d37dd8bb"],["2018/08/07/koaMiddle/index.html","366c45d6e2505bff61ba84073bf65b29"],["2018/08/07/node-koaMiddle/index.html","817e2aac0603f7671b90d7fde232100d"],["2018/12/07/git杂记/index.html","10ac8d87e317b87d0b23ce5080244602"],["2018/12/07/杂记-git杂记/index.html","ed6e343cd6e7878e142b2eff683a7793"],["2018/12/31/js-selfPromise/index.html","4b908687f7eed29e9df4e8dbff9872b1"],["2018/12/31/selfPromise/index.html","2049bf3cd4ce41d015d3d80eea179c84"],["2019/01/04/react-react的setState/index.html","8af2dc62a5654dfc5ced3156fbd342e3"],["2019/01/04/react的setState/index.html","f0813b4a67e53d40bf151d88e0c9e373"],["2019/01/17/vue-vue的diff/index.html","d8f76e8529075d6967c5beeedb501faf"],["2019/01/17/vue的diff/index.html","754d675f904e0c8814d3c27df3650480"],["2019/07/22/其他-封培总结/index.html","2a0e63404b733c65d5f144daf1cb80f5"],["2019/07/22/封培总结/index.html","5342f822e4a69c24f69f47a7989d8446"],["2019/07/25/杂记-MingJingNote/index.html","e2aaedf8441477e5bb3cdcdc4109df63"],["2019/08/07/网络-Quic/index.html","58291825e4d2d7e114ed833a1873377f"],["2019/09/17/浏览器-渲染/index.html","c2cb616aae35ab5f9208ea21aaec34f1"],["2019/09/28/浏览器-垃圾回收/index.html","da8d20897d3226af0b65cb75751819cf"],["README.html","2d98a69d75ae90acd816ab66e5ac5a96"],["about/MingJingNote.html","4dadb9bda2cc64c4bb4debd4c605920f"],["about/index.html","2673e9095ee3214c9444132368cc375b"],["archives/2018/01/index.html","952f8051a1f29457a2b2682419bb1118"],["archives/2018/01/page/2/index.html","d046293f8f5041c30d16b3ebb7f80feb"],["archives/2018/03/index.html","231e87ce02232c33e400b4c36ff891be"],["archives/2018/04/index.html","f29be51e5b61579dd047e25f0d0aaf00"],["archives/2018/04/page/2/index.html","2c5e125511bcfdee90076de914789989"],["archives/2018/05/index.html","a0d2377ef1500a70e7c0aa68d7019adc"],["archives/2018/06/index.html","5e590694f907bee792fe75b2d7c3779d"],["archives/2018/07/index.html","705230ac43c0bafbee71099419eabbfc"],["archives/2018/08/index.html","b8ff46e5996c97b098edf48e0269dbee"],["archives/2018/12/index.html","eab6abe55fc57a1eddd812598c67841e"],["archives/2018/index.html","cd752cf48306ac5e25297094da8edfdc"],["archives/2018/page/2/index.html","ca7fae21bd93c8041f790a7e55b66360"],["archives/2018/page/3/index.html","b167a793cf3f2dda6fe51c5fdef5dd54"],["archives/2018/page/4/index.html","a475d4fc16612b1cb7748116d62d9df1"],["archives/2018/page/5/index.html","5a97f5a69bc70b9c9eb5b37cf8a22a73"],["archives/2018/page/6/index.html","d3884f7bf1da4205b0f815b67b6732c7"],["archives/2019/01/index.html","034ee1dea6f8327505037032fded5543"],["archives/2019/07/index.html","205f6175a40009709883d3efe47cbc82"],["archives/2019/08/index.html","e6708e1edca9d1aa44eeb6dab775dd7d"],["archives/2019/09/index.html","4677a1359752e12452dbe84977d2381d"],["archives/2019/index.html","8abfeadeeeca7e0406338be1bdc5d54e"],["archives/index.html","ce6c5c7957515531cf1d82a59a339101"],["archives/page/2/index.html","33b5e6fab594f6e27f6151ed01463ac8"],["archives/page/3/index.html","8425f5c46e59f225d000f16a005e66c0"],["archives/page/4/index.html","747ef716ed22b998cb8f76b87d490fc7"],["archives/page/5/index.html","caf740d42713dff1ba83c43895235a7c"],["archives/page/6/index.html","c4670939068d67874aeb99737e1b0691"],["archives/page/7/index.html","6e43b67a6f7b512c764e34d599ee0ecf"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/css/DPlayer.min.css","a04619266327f7509dcddcab9dbc63c2"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/DPlayer.min.js","44523270fca2596186eabd047b3b04eb"],["assets/js/Meting.min.js","6a5d4f8e7f21a3a4aa2f9de994430379"],["categories/学习/index.html","13236eed0c368fccf7e703c5ad5858da"],["categories/学习/page/2/index.html","3d8996eedd8161bfe560e98e2133889e"],["categories/学习/page/3/index.html","e5e82f58fb1e26a7a56fe356f929f43a"],["categories/学习/page/4/index.html","a71e69118fccc4eceb96b9f7f26e6b04"],["categories/学习/page/5/index.html","51a7b59fdf4df6ed5cd3e68f9c5e84bb"],["categories/指弹/index.html","db821dd4abf1b7ba863a4e6201b97e6f"],["categories/生活/index.html","8f9dab9f75f63ac157f9bf6f986718ce"],["css/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["css/donate.css","a68e4a34e814ce3334186286f4655440"],["css/style.css","fd93467f16ed22766d2e3acad963b90b"],["donate/index.html","03f6e342eee9cdf279e4baaa16f8874a"],["img/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["img/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["img/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["img/alipay.svg","9239702087add999b29eda6c69b7fac3"],["img/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["img/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["img/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["img/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["img/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["index.html","6dd24b9eb5606f97e151890cd9b87e1f"],["js/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["js/donate.js","c5119c5bdd5049d805e03af774a47472"],["js/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["js/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["js/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["js/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["js/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["js/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["live2d/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2d/device.min.js","86a721c7735b03a0c12b172431e5cb2c"],["live2d/script.js","7d75535f43af497883c1b9a1b88c9e1a"],["page/2/index.html","445b618f74afdbd93961172d5756f4eb"],["page/3/index.html","c73c7a9d2f04d58451d9678d1d2d34fe"],["page/4/index.html","b3ad02edd39051ea581e1f5addad68f4"],["page/5/index.html","70c1bc2891286e13eaa2cee74e184b3e"],["page/6/index.html","ff904b058b84fad0cf3d79abd0568377"],["page/7/index.html","75ef594a3ae9f66b5def39b878806edb"],["tags/Hexo/index.html","6550da1f94ac603921b3b5d98d374ea0"],["tags/React-Native/index.html","2ec7bd6eab02ed0d335f6b0f8c18bfb2"],["tags/http/index.html","4af1cf965cece90b89a802b1d19eb4ff"],["tags/javascript/index.html","ead84cae318984c33216f4b7015bfe23"],["tags/javascript/page/2/index.html","ddb412ab703e90d4452e4d821f5dcba6"],["tags/koa/index.html","056e534bc6c38dffd929bfc73c4f6834"],["tags/react/index.html","fe5d608f51f0931726a6875fcfe0e3ec"],["tags/vue/index.html","45dc9a2e9ee16cbf836e28ea1db29dd5"],["tags/vue/page/2/index.html","7f36f27eee428587754355c9ebaa940c"],["tags/不知道归为哪一列系列/index.html","0ee25b52422915da7ba7e42baff05b6c"],["tags/其他/index.html","1266a7dc81b1936edf65ae32f8062ddb"],["tags/学习/index.html","4d8ea567aaed103b88075128258103a0"],["tags/指弹/index.html","f152e24286ffaf3c2860de35c37e3475"],["tags/杂记/index.html","d60869999d6021f649528b7fb0e60b87"],["tags/浏览器/index.html","98f901a2861c083844fec4d8dc6e9747"],["tags/算法/index.html","c638b76b1487f194c0b9d79390eb24c7"],["tags/网络/index.html","25b9cf8f0e62142e38358b7d84a730ca"],["youlian/index.html","cf5f47bb9d86a32f00c93a56fc5decaa"]];
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







