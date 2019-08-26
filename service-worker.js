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

var precacheConfig = [["/666666666666.xyz2018/01/05/VueInAction1/index.html","9bf7a6bf0eb7d43948c2d839f4015051"],["/666666666666.xyz2018/01/05/hexoml/index.html","b013839a46304b0985034b61b26217db"],["/666666666666.xyz2018/01/08/v-model/index.html","cb40e35abb0e896da578b55d89132660"],["/666666666666.xyz2018/01/12/VueInAction2/index.html","9074f423db02341f608000fe85b41155"],["/666666666666.xyz2018/01/13/Array/index.html","2c8284328d98aa9124b032ce92f500b4"],["/666666666666.xyz2018/01/16/instanceof/index.html","832d63eadc904e9ea9d63d7d53a25f56"],["/666666666666.xyz2018/01/18/prototype/index.html","8bf6e09c6adcb83f9abdcfa94d7bd668"],["/666666666666.xyz2018/03/07/this/index.html","2d95cce1d6551841bcba506da7f28054"],["/666666666666.xyz2018/03/10/jsMemoryManagent/index.html","8906ec85fcfb8e534e5833d7025cab71"],["/666666666666.xyz2018/03/25/debounce/index.html","4cd4ff4f3f884e99052501a7edef5491"],["/666666666666.xyz2018/03/28/toLittleCute/index.html","09fd35ff320d669e60a2bdf31170169f"],["/666666666666.xyz2018/04/02/面试/index.html","d7247b36605ebd0537f2c81db954b2c2"],["/666666666666.xyz2018/04/05/JSX/index.html","02192205ee8c0a3a92452aa2ebc041be"],["/666666666666.xyz2018/04/10/axioshhh/index.html","ec67b906cf945f62ee6820f92c6aff44"],["/666666666666.xyz2018/04/18/template/index.html","e51c822541c8da368c529a15fff3f97f"],["/666666666666.xyz2018/04/19/http/index.html","480f5c0e8c24d68438d7ebb12515e16b"],["/666666666666.xyz2018/04/29/Vue-lifecycle/index.html","36d9ea72580308346170ec2468cbeabb"],["/666666666666.xyz2018/04/29/timetravel/index.html","e8b1294bf8003b733988c379ec7ce1bb"],["/666666666666.xyz2018/05/20/流行的云/index.html","d62f7a74c4ffd4dc139fa10df58e144c"],["/666666666666.xyz2018/05/23/friendships/index.html","8a8c40a6f84e18e3eb95eb34e055a7f2"],["/666666666666.xyz2018/06/01/ReactNativeComponent/index.html","0586e6f6122c2c143acef7af02e9c010"],["/666666666666.xyz2018/06/08/choppingHand1/index.html","305ffb2fd92633630fe6645a4996d145"],["/666666666666.xyz2018/06/15/choppingHand2/index.html","10490f7dc56aa77a0aefaa5b790b97a7"],["/666666666666.xyz2018/07/19/Ngnix/index.html","6f058d685e6c1b9b1fb3c1e21c6bf312"],["/666666666666.xyz2018/07/25/sort/index.html","d7c9788cf0d089c5b6bbdff261a76de6"],["/666666666666.xyz2018/08/07/koaMiddle/index.html","f6e5ac62c122bf83bffc157c0c512b8f"],["/666666666666.xyz2018/12/07/git杂记/index.html","039c190c52cb654832e05bb5adc6404c"],["/666666666666.xyz2018/12/31/selfPromise/index.html","7cfb0435720dafa8045a6f1e5210ec00"],["/666666666666.xyz2019/01/04/react的setState/index.html","7b6ecd6f1ac19e8507e9a9feb3b2e4b1"],["/666666666666.xyz2019/01/17/vue的diff/index.html","393db60f20cdb75e56db579ec8ca8480"],["/666666666666.xyz2019/07/22/封培总结/index.html","8292e30aeaa4bc83a3862281fa87829e"],["/666666666666.xyz2019/07/25/MingJingNote/index.html","070e84bdc55f095d4a372fd3b133d62b"],["/666666666666.xyz2019/08/07/Quic/index.html","2f2e5278f4a027e3a8b5d971d2295b63"],["/666666666666.xyzabout/index.html","277806847a298bce26f950a6733695c9"],["/666666666666.xyzarchives/2018/01/index.html","7f03f70d545f4598d84a25ce8563f9eb"],["/666666666666.xyzarchives/2018/03/index.html","e474cd362c9df0d21020e19435ce5356"],["/666666666666.xyzarchives/2018/04/index.html","f0a17e66cb8fc23fbd9f2a38bd61a923"],["/666666666666.xyzarchives/2018/05/index.html","f9e35866c513627dcf18fc432a20a686"],["/666666666666.xyzarchives/2018/06/index.html","4636b5204eaf3ad7b7f4e020ccaa2728"],["/666666666666.xyzarchives/2018/07/index.html","66e356a17b5de6a6407870e25762d0b6"],["/666666666666.xyzarchives/2018/08/index.html","2384039fa2043d58e3aecdca1f0e33f2"],["/666666666666.xyzarchives/2018/12/index.html","ee7bc5e1b889a23e1a4d97e9f8affed3"],["/666666666666.xyzarchives/2018/index.html","1607b2c635251637adf3348c7e95884d"],["/666666666666.xyzarchives/2018/page/2/index.html","a8934d2317e13787bff717816cad49c8"],["/666666666666.xyzarchives/2018/page/3/index.html","9ddb8d2b1f650940d76c188bc69d5d7c"],["/666666666666.xyzarchives/2019/01/index.html","ce3442e884a1cbc77bc0980e9a5b636f"],["/666666666666.xyzarchives/2019/07/index.html","fda6808f89044d6488d7d346a399354d"],["/666666666666.xyzarchives/2019/08/index.html","3d46890bf6fa905f62e4fc5120e33694"],["/666666666666.xyzarchives/2019/index.html","b91743fee253fb155fc62b4e95a13168"],["/666666666666.xyzarchives/index.html","ec7eef8fb05b0e73538680d89b225dc1"],["/666666666666.xyzarchives/page/2/index.html","d0faa820661b4721c053074986fee692"],["/666666666666.xyzarchives/page/3/index.html","131b2cffa4102ae237c176586fc7ab17"],["/666666666666.xyzarchives/page/4/index.html","851a956ed19e380082c9998a326c8e7a"],["/666666666666.xyzassets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/666666666666.xyzassets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/666666666666.xyzassets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/666666666666.xyzcategories/学习/index.html","2e66292d5d2cfaf846653158a805fbd8"],["/666666666666.xyzcategories/学习/page/2/index.html","6b04c7554c92f2de431d2498caf1a16c"],["/666666666666.xyzcategories/学习/page/3/index.html","45d3ee977eb0afdaf6bd6d13b801353f"],["/666666666666.xyzcategories/指弹/index.html","9f875d540d0366a4aa6419a69aa07fae"],["/666666666666.xyzcategories/生活/index.html","e5b22a61a30de106446c3b18b12f04d0"],["/666666666666.xyzcss/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["/666666666666.xyzcss/donate.css","a68e4a34e814ce3334186286f4655440"],["/666666666666.xyzdonate/index.html","6d6b078133399bfa400633ee47b5c6e1"],["/666666666666.xyzimg/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["/666666666666.xyzimg/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["/666666666666.xyzimg/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["/666666666666.xyzimg/alipay.svg","9239702087add999b29eda6c69b7fac3"],["/666666666666.xyzimg/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["/666666666666.xyzimg/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/666666666666.xyzimg/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/666666666666.xyzimg/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["/666666666666.xyzimg/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["/666666666666.xyzindex.html","fc66bd301f6f312e6f220eb44e1348ce"],["/666666666666.xyzjs/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["/666666666666.xyzjs/donate.js","c5119c5bdd5049d805e03af774a47472"],["/666666666666.xyzjs/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["/666666666666.xyzjs/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["/666666666666.xyzjs/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["/666666666666.xyzjs/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["/666666666666.xyzjs/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["/666666666666.xyzjs/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["/666666666666.xyzlive2d/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/666666666666.xyzlive2d/device.min.js","86a721c7735b03a0c12b172431e5cb2c"],["/666666666666.xyzlive2d/script.js","7d75535f43af497883c1b9a1b88c9e1a"],["/666666666666.xyzpage/2/index.html","f0b642764db64c1790253c6b2023fe76"],["/666666666666.xyzpage/3/index.html","52d681b653ff62f80d8c9cb06e299277"],["/666666666666.xyzpage/4/index.html","6fdc49f22c117f6c47741620649593e2"],["/666666666666.xyztags/About/index.html","57c0e55bc5ad3fdbdf0d4ee6056a7b2f"],["/666666666666.xyztags/Hexo/index.html","55b9f66a60a9a9b68b3d91e3b902da5b"],["/666666666666.xyztags/React-Native/index.html","c5eea12f22272dd222d75d09e9ce5085"],["/666666666666.xyztags/http/index.html","d2b4c68e9dca27cafa02b2c906a363e8"],["/666666666666.xyztags/javascript/index.html","c0473aabebc5516c2b83486b6dec8fa2"],["/666666666666.xyztags/koa/index.html","7adc55c94c134326a77d4f462dc4597f"],["/666666666666.xyztags/react/index.html","2a54a6dc337edcbc77a564ee61837175"],["/666666666666.xyztags/vue/index.html","ed5773353133f9a2b4a272820c1e219e"],["/666666666666.xyztags/不知道归为哪一列系列/index.html","c5dc987bb297e241ca8ec8a88603c4f7"],["/666666666666.xyztags/学习/index.html","d367bca649248df62a3f9e660a31c03d"],["/666666666666.xyztags/指弹/index.html","7005008902a9785d96d21e0da017deb9"],["/666666666666.xyztags/杂记/index.html","e6ac81acff634cbfc76dc8483f0da382"],["/666666666666.xyztags/算法/index.html","b6d80d0ecf3981e9c0fa0aa766268646"],["/666666666666.xyzyoulian/index.html","657f5c6a64bb65d0caca2d5ff4fa5c6f"]];
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







