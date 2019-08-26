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

var precacheConfig = [["/xuyonglin222.github.io2018/01/05/VueInAction1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/01/05/hexoml/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/01/08/v-model/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/01/12/VueInAction2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/01/13/Array/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/01/16/instanceof/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/01/18/prototype/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/03/07/this/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/03/10/jsMemoryManagent/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/03/25/debounce/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/03/28/toLittleCute/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/04/02/面试/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/04/05/JSX/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/04/10/axioshhh/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/04/18/template/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/04/19/http/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/04/29/Vue-lifecycle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/04/29/timetravel/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/05/20/流行的云/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/05/23/friendships/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/06/01/ReactNativeComponent/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/06/08/choppingHand1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/06/15/choppingHand2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/07/19/Ngnix/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/07/25/sort/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/08/07/koaMiddle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/12/07/git杂记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2018/12/31/selfPromise/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2019/01/04/react的setState/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2019/01/17/vue的diff/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2019/07/22/封培总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2019/07/25/MingJingNote/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.io2019/08/07/Quic/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioabout/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/2018/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/2018/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/2018/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/2018/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/2018/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/2018/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/2018/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/2018/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/2018/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/2018/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/2018/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/2019/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/2019/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/2019/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/2019/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioarchives/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioassets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/xuyonglin222.github.ioassets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/xuyonglin222.github.ioassets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/xuyonglin222.github.iocategories/学习/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iocategories/学习/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iocategories/学习/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iocategories/指弹/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iocategories/生活/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioindex.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iolive2d/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/xuyonglin222.github.iolive2d/device.min.js","86a721c7735b03a0c12b172431e5cb2c"],["/xuyonglin222.github.iolive2d/script.js","7d75535f43af497883c1b9a1b88c9e1a"],["/xuyonglin222.github.iopage/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iopage/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iopage/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iotags/About/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iotags/Hexo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iotags/React-Native/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iotags/http/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iotags/javascript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iotags/koa/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iotags/react/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iotags/vue/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iotags/不知道归为哪一列系列/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iotags/学习/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iotags/指弹/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iotags/杂记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.iotags/算法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/xuyonglin222.github.ioyoulian/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







