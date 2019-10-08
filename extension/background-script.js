/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/background-script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webextension-polyfill/dist/browser-polyfill.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webextension-polyfill/dist/browser-polyfill.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (module) {
  /* webextension-polyfill - v0.4.0 - Wed Feb 06 2019 11:58:31 */
  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */
  /* vim: set sts=2 sw=2 et tw=80: */
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)";

    // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.
    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getBrowserInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }

      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */
      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }
      }

      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */
      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };

      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */
      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";

      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */
      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({ resolve, reject }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);

                target[name](...args);

                // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.
                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;

                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({ resolve, reject }, metadata));
            }
          });
        };
      };

      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */
      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }
        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);

      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */
      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.

              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,
                get() {
                  return target[prop];
                },
                set(value) {
                  target[prop] = value;
                }
              });

              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }
            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }
        };

        // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.
        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };

      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */
      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }
      });

      // Keep track if the deprecation warning has been logged at least once.
      let loggedSendResponseDeprecationWarning = false;

      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */
        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;

          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }
              didCallSendResponse = true;
              resolve(response);
            };
          });

          let result;
          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result);

          // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.
          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          }

          // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).
          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;
              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          };

          // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.
          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          }

          // Let Chrome know that the listener is replying.
          return true;
        };
      });

      const wrappedSendMessageCallback = ({ reject, resolve }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, { resolve, reject });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 })
        }
      };
      const settingMetadata = {
        clear: { minArgs: 1, maxArgs: 1 },
        get: { minArgs: 1, maxArgs: 1 },
        set: { minArgs: 1, maxArgs: 1 }
      };
      apiMetadata.privacy = {
        network: {
          networkPredictionEnabled: settingMetadata,
          webRTCIPHandlingPolicy: settingMetadata
        },
        services: {
          passwordSavingEnabled: settingMetadata
        },
        websites: {
          hyperlinkAuditingEnabled: settingMetadata,
          referrersEnabled: settingMetadata
        }
      };

      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.
    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ }),

/***/ "./src/background-script.js":
/*!**********************************!*\
  !*** ./src/background-script.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/interaction */ "./src/common/interaction.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/constants */ "./src/common/constants.js");
/* harmony import */ var _background_reactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background/reactions */ "./src/background/reactions.js");
/* harmony import */ var _background_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background/messages */ "./src/background/messages.js");
/* harmony import */ var _background_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background/state */ "./src/background/state.js");
const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");







const FAVICON_SAVE_KEY = 'favicon';

window.__IS_BACKGROUND_SCRIPT__ = true;

browser.omnibox.setDefaultSuggestion({ description: _common_constants__WEBPACK_IMPORTED_MODULE_1__["SUGGESTIONS"].PREFIX + _common_constants__WEBPACK_IMPORTED_MODULE_1__["SUGGESTIONS"].DEFAULT });
browser.omnibox.onInputEntered.addListener(onInputEntered);
browser.omnibox.onInputChanged.addListener(onInputChanged);
browser.runtime.onMessage.addListener((message) => Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["onMessage"])(message, _background_reactions__WEBPACK_IMPORTED_MODULE_2__["default"]));
browser.storage.onChanged.addListener(_background_state__WEBPACK_IMPORTED_MODULE_4__["default"].onSettingsChange);
browser.tabs.onActivated.addListener(onTabActivated);
browser.tabs.onRemoved.addListener(onTabRemoved);
browser.tabs.onUpdated.addListener(onFaviconUpdated);

_background_state__WEBPACK_IMPORTED_MODULE_4__["default"].loadSettings();

function onFaviconUpdated (tabId, changedInfo, tab) {
  const origin = tab.url.split('/').slice(0, 3).join('/')
  browser.storage.local.set({ [origin + FAVICON_SAVE_KEY]: changedInfo.favIconUrl });
}

function onTabActivated ({ tabId }) {
  if (_background_state__WEBPACK_IMPORTED_MODULE_4__["default"].getTabState(tabId)) {
    _background_messages__WEBPACK_IMPORTED_MODULE_3__["default"].sendTagData({ tabId });
  }
}

function onTabRemoved (tabId) {
  if (_background_state__WEBPACK_IMPORTED_MODULE_4__["default"].getTabState(tabId)) {
    _background_state__WEBPACK_IMPORTED_MODULE_4__["default"].removeTabState(tabId);
  }
}

function onInputChanged (query, addSuggestions) {
  addSuggestions([
    { description: _common_constants__WEBPACK_IMPORTED_MODULE_1__["SUGGESTIONS"].PREFIX + _common_constants__WEBPACK_IMPORTED_MODULE_1__["SUGGESTIONS"].SETTINGS, content: _common_constants__WEBPACK_IMPORTED_MODULE_1__["SUGGESTIONS"].SETTINGS },
    { description: _common_constants__WEBPACK_IMPORTED_MODULE_1__["SUGGESTIONS"].PREFIX + _common_constants__WEBPACK_IMPORTED_MODULE_1__["SUGGESTIONS"].HELP, content: _common_constants__WEBPACK_IMPORTED_MODULE_1__["SUGGESTIONS"].HELP },
  ]);
}

function onInputEntered (query) {
  switch (query) {
    case _common_constants__WEBPACK_IMPORTED_MODULE_1__["SUGGESTIONS"].SETTINGS:
      _background_reactions__WEBPACK_IMPORTED_MODULE_2__["default"].openSettings();
      break;

    case _common_constants__WEBPACK_IMPORTED_MODULE_1__["SUGGESTIONS"].HELP:
      _background_reactions__WEBPACK_IMPORTED_MODULE_2__["default"].openHelp();
      break;

    default:
      _background_reactions__WEBPACK_IMPORTED_MODULE_2__["default"].startSearch({ query });
  }
}


/***/ }),

/***/ "./src/background/common.js":
/*!**********************************!*\
  !*** ./src/background/common.js ***!
  \**********************************/
/*! exports provided: has, STRING_FILTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRING_FILTERS", function() { return STRING_FILTERS; });
function has (str, substr) {
  return str.indexOf(substr) >= 0;
}

const STRING_FILTERS = {
  '+url': (obj, str) => has(obj.url.toLowerCase(), str),
  '+title': (obj, str) => has(obj.title.toLowerCase(), str),
  '+urlortitle': (obj, str) => has(obj.title.toLowerCase(), str) || has(obj.url.toLowerCase(), str),
  '-url': (obj, str) => !has(obj.url.toLowerCase(), str),
  '-title': (obj, str) => !has(obj.title.toLowerCase(), str),
};



/***/ }),

/***/ "./src/background/messages.js":
/*!************************************!*\
  !*** ./src/background/messages.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/interaction */ "./src/common/interaction.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/background/state.js");
/* harmony import */ var _reactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactions */ "./src/background/reactions.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  switchPopup,
  sendTagData,
  buildPage,
  setupClientPage,
});

async function switchPopup (tab) {
  const tabState = _state__WEBPACK_IMPORTED_MODULE_1__["default"].getTabState(tab.id);
  
  if (typeof tabState === 'undefined') {
    return await initializePopup(tab);
  }

  return Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["sendMessage"])('popupState', { open: !tabState.popupOpen }).then(() => _state__WEBPACK_IMPORTED_MODULE_1__["default"].setPopupState(tab.id, !tabState.popupOpen));
}

async function initializePopup (tab) {
  return browser.tabs.executeScript({ file: '/page-script.js' })
    .then(() => _state__WEBPACK_IMPORTED_MODULE_1__["default"].setTabState(tab.id, { ...tab, popupOpen: true }))
    .then(() => Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["sendMessage"])('saveTabId', { tabId: tab.id }))
}

async function sendTagData ({ tabId }) {
  const data = await _reactions__WEBPACK_IMPORTED_MODULE_2__["default"].getData({ tabId });
  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["sendMessage"])('getData', data);
}

function buildPage ( tabId, list, pageNum) {
  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["sendMessageToTab"])(tabId, 'buildPage', { list, pageNum });
}

function setupClientPage (tabState) {
  return Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["sendMessageToTab"])(tabState.tabId, 'setupClientPage', tabState);
}


/***/ }),

/***/ "./src/background/parse.js":
/*!*********************************!*\
  !*** ./src/background/parse.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/background/common.js");


/* harmony default export */ __webpack_exports__["default"] = (parseRawOptions);

const EXTENSION_PREFIX = 'h';
const SPACE_REGEXP = /\s+/g;
const DEFAULT_START = new Date(0);
const DEFAULT_END = new Date(9999, 11, 31);

const DATE_REGEXPS = [
  { type: 'FullYear', regexp: /\/(\d{4})\// },
  { type: 'Month', regexp: /\/(\d{1,2})\// },
  { type: 'Date', regexp: /^(?!\/)(\d{1,2})\// },
  { type: 'Hours', regexp: /(\d{1,2})\:/ },
  { type: 'Minutes', regexp: /\:(\d{1,2})/ },
];

const DATE_TYPES = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes'];

const TIME_FRAMES = {
  FullYear: { start: () => 0, end: () => 9999 },
  Month: { start: () => 0, end: () => 11 },
  Date: { start: () => 1, end: getLastDayOfMonth },
  Hours: { start: () => 0, end: () => 23 },
  Minutes: { start: () => 0, end: () => 59 },
};

const LAST_DAYS_OF_MONTHS = [31, [28, 29], 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const SORT_TYPES = ['date', 'visit', 'url', 'title']
const REAL_SORT_TYPES = []
  .concat( SORT_TYPES.map((type) => '>' + type) )
  .concat( SORT_TYPES.map((type) => '>' + type[0]) )
  .concat( SORT_TYPES.map((type) => '<' + type) )
  .concat( SORT_TYPES.map((type) => '<' + type[0]) );

function parseRawOptions (rawString) {
  const rawOptions = rawString.split(SPACE_REGEXP).filter((str) => !!str);
  const options = { base: [], timeFrames: [], sort: [], tags: [], query: rawString, fullQuery: EXTENSION_PREFIX + ' ' + rawString };
  parseOptions(rawOptions, options, 'base');
  flattenTimes (options);

  if (!options.timeFrames.length) {
    options.timeFrames.push({ start: DEFAULT_START, end: DEFAULT_END });
  }

  if (options.tags.length) {
    options['+urlortitle'] = (options['+urlortitle'] || []).concat( options.base );
  }

  return options;
}

function parseOptions (rawOptions, options, curOption) {
  for (let i = 0; i < rawOptions.length; i++) {
    const word = rawOptions[i];
    
    if (isExactDate(word)) {
      options.timeFrames.push({ start: createDate(word, 'start'), end: createDate(word, 'end') });
      continue;
    }

    if (isStartDate(word)) {
      options.timeFrames.push({ start: createDate(word, 'start'), end: DEFAULT_END });
      continue;
    }

    if (isEndDate(word)) {
      options.timeFrames.push({ start: DEFAULT_START, end: createDate(word, 'end') });
      continue;
    }

    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["has"])(REAL_SORT_TYPES, word)) {
      options.sort.push(word);
      continue;
    }

    if (isTag(word)) {
      options.tags.push( word.slice(1) );
      continue;
    }

    if (_common__WEBPACK_IMPORTED_MODULE_0__["STRING_FILTERS"][word]) {
      if (!options[word]) {
        options[word] = [];
      }

      return parseOptions(rawOptions.slice(i + 1), options, word);
    }

    options[curOption].push(word);
  }
}

function flattenTimes (options) {
  const flattenedTimes = [];

  let cur;
  let next;
  for (let i = 0; i < options.timeFrames.length; i++) {
    cur = options.timeFrames[i];
    next = options.timeFrames[i + 1];

    if (next && cur.start < next.start && cur.end > next.start && cur.end < next.end) {
      options.timeFrames[i + 1] = { start: next.start, end: cur.end };
      continue;
    }

    if (next && cur.end > next.end && cur.start < next.end && cur.start > next.start) {
      options.timeFrames[i + 1] = { start: cur.start, end: next.end };
      continue;
    }

    if (next && cur.start < next.start && cur.end > next.end) {
      options.timeFrames[i + 1] = cur;
      continue;
    }

    if (next && cur.start > next.start && cur.end < next.end) {
      continue;
    }

    flattenedTimes.push(cur);
  }

  options.timeFrames = flattenedTimes;
}

function createDate (dateArg, borderType) {
  const dateStr = dateArg.slice(1);
  const date = new Date();
  let autoSetDateStartIdx = 0;
  
  DATE_REGEXPS.forEach((test) => {
    const match = test.regexp.exec(dateStr);
    
    if (match) {
      let number = match[1];
      autoSetDateStartIdx = DATE_TYPES.indexOf(test.type) + 1;
      
      if (test.type === 'Month') {
        number--;
      }

      date['set' + test.type](number);
    }

  });

  DATE_TYPES.slice(autoSetDateStartIdx).forEach((dateType) =>
    date['set' + dateType](TIME_FRAMES[dateType][borderType](date)));

  return date;
}

function getLastDayOfMonth (date) {
  const month = date.getMonth();

  if (month !== 1) {
    return LAST_DAYS_OF_MONTHS[month];
  }

  return LAST_DAYS_OF_MONTHS[month][ isLeapYear(date.getFullYear()) ];
}

function isLeapYear (year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return 1;
  }

  return 0;
}

function isExactDate (str) {
  return /^\=[\/\:]?\d+/.test(str);
}

function isStartDate (str) {
  return /^\+[\/\:]?\d+/.test(str);
}

function isEndDate (str) {
  return /^\-[\/\:]?\d+/.test(str);
}

function isTag (str) {
  return /^!.*/.test(str);
}


/***/ }),

/***/ "./src/background/postProcess.js":
/*!***************************************!*\
  !*** ./src/background/postProcess.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/background/common.js");


/* harmony default export */ __webpack_exports__["default"] = (postProcess);

function postProcess (results, options) {
  const filteredResults = filterResults(results, options);
  const sortedResults = sortResults(filteredResults, options.sort);
  return sortedResults;
}

function filterResults (results, options) {

  for (let key in options) {
    if (_common__WEBPACK_IMPORTED_MODULE_0__["STRING_FILTERS"][key]) {
      const strings = options[key];
      strings.forEach((string) => {
        results = results.filter((obj) => _common__WEBPACK_IMPORTED_MODULE_0__["STRING_FILTERS"][key](obj, string.toLowerCase()));
      });
    }
  }

  return results;
}

function sortResults (results, sortRules) {
  let orderedResults = results;

  sortRules.forEach((rule) => {

    switch (rule) {
      case '>u':
      case '>url':
        orderedResults = orderedResults.sort((a, b) => a.url > b.url);
        break;
      case '<u':
      case '<url':
        orderedResults = orderedResults.sort((a, b) => a.url < b.url);
        break;
      case '>t':
      case '>title':
        orderedResults = orderedResults.sort((a, b) => a.title > b.title);
        break;
      case '<t':
      case '<title':
        orderedResults = orderedResults.sort((a, b) => a.title < b.title);
        break;
      case '>d':
      case '>date':
        orderedResults = orderedResults.sort((a, b) => a.lastVisitTime > b.lastVisitTime);
        break;
      case '<d':
      case '<date':
        orderedResults = orderedResults.sort((a, b) => a.lastVisitTime < b.lastVisitTime);
        break;
      case '>v':
      case '>visit':
        orderedResults = orderedResults.sort((a, b) => a.visitCount > b.visitCount);
        break;
      case '<v':
      case '<visit':
        orderedResults = orderedResults.sort((a, b) => a.visitCount < b.visitCount);
        break;
    }

  });

  return orderedResults;
}

/***/ }),

/***/ "./src/background/reactions.js":
/*!*************************************!*\
  !*** ./src/background/reactions.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/background/state.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./src/background/search.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags */ "./src/background/tags.js");
/* harmony import */ var _postProcess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postProcess */ "./src/background/postProcess.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse */ "./src/background/parse.js");
/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show */ "./src/background/show.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages */ "./src/background/messages.js");
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/interaction */ "./src/common/interaction.js");
const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");










/* harmony default export */ __webpack_exports__["default"] = ({
  movePage,
  jumpToPage,
  getData,
  addTagToPage,
  removeTagFromPage,
  getAllTags,
  createTag,
  removeTag,
  continueBuildingPage,
  saveSearchQuery,
  removeSearchQuery,
  startSearch,
  openSettings,
  openHelp,
});

const CONTENT_PAGE_URL = '/history_page/index.html';
const SETTINGS_PAGE_URL = '/options/options.html';
const HELP_PAGE_URL = '/help/help.html';

function movePage (message) {
  const tabState = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getTabState(message.tabId);
  const newPageNum = increment(tabState.pageNum, message.inc, [0, tabState.totalPages - 1]);
  tabState.pageNum = newPageNum;
  Object(_show__WEBPACK_IMPORTED_MODULE_5__["default"])(tabState);
}

function increment (num, inc, range) {
  const newNum = num + inc;
  if (newNum > range[1]) {
    return range[0];
  }

  if (newNum < range[0]) {
    return range[1];
  }

  return newNum;
}

function jumpToPage (message) {
  const tabState = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getTabState(message.tabId);

  if (message.pageNum > tabState.totalPages || message.pageNum < 1) {
    return;
  }

  tabState.pageNum = message.pageNum - 1;
  Object(_show__WEBPACK_IMPORTED_MODULE_5__["default"])(tabState);
}

async function getData () {
  const pageData = await Object(_common_interaction__WEBPACK_IMPORTED_MODULE_7__["getCurrentTab"])();

  return {
    allExistingTags: await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].getAll(),
    assignedTags: await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].getForPage(pageData),
    savedSearches: await _state__WEBPACK_IMPORTED_MODULE_0__["default"].getSavedSearches(),
  }
}

async function addTagToPage ({ tag }) {
  const allExistingTags = await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].create(tag);

  const pageData = await Object(_common_interaction__WEBPACK_IMPORTED_MODULE_7__["getCurrentTab"])();
  await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].addToPage(tag, pageData);
  const tagsForPage = await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].getForPage(pageData);
  
  return { allExistingTags, assignedTags: tagsForPage };
}

async function removeTagFromPage ({ tag }) {
  const pageData = await Object(_common_interaction__WEBPACK_IMPORTED_MODULE_7__["getCurrentTab"])();
  await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].removeFromPage(tag, pageData);
  return { assignedTags: await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].getForPage(pageData) };
}

async function getAllTags () {
  return { allExistingTags: await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].getAll() };
}

async function createTag ({ tag }) {
  return { allExistingTags: await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].create(tag) }
}

async function removeTag ({ tag }) {
  return { allExistingTags: await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].remove(tag) };
}

function startSearch ({ query }) {
  return browser.tabs.create({ active: true, url: CONTENT_PAGE_URL })
    .then((tab) => _state__WEBPACK_IMPORTED_MODULE_0__["default"].setTabState(tab.id, { tab, query }));
}

function continueBuildingPage ({ tabId }) {
  const { query, tab } = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getTabState(tabId);
  const options = Object(_parse__WEBPACK_IMPORTED_MODULE_4__["default"])(query);

  let baseSearch;
  if (options.tags.length) {
    baseSearch = _search__WEBPACK_IMPORTED_MODULE_1__["default"].tags(options.tags);
  } else {
    const searchTerms = options.base.join(' ');
    baseSearch = _search__WEBPACK_IMPORTED_MODULE_1__["default"].history(searchTerms, options.timeFrames);
  }

  baseSearch.then((results) => {
    const handledResults = Object(_postProcess__WEBPACK_IMPORTED_MODULE_3__["default"])(results, options);
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].saveResults(tab.id, handledResults, 0).then(() => {
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].initTabState(tab.id, handledResults, options).then((tabState) => {
        _messages__WEBPACK_IMPORTED_MODULE_6__["default"].setupClientPage(tabState).then(() => Object(_show__WEBPACK_IMPORTED_MODULE_5__["default"])(tabState));
      });
    });
  });
}

function saveSearchQuery ({ query }) {
  return _state__WEBPACK_IMPORTED_MODULE_0__["default"].saveSearch(query).then(() => ({ saved: true }));
}

async function removeSearchQuery ({ query }) {
  return { savedSearches: await _state__WEBPACK_IMPORTED_MODULE_0__["default"].removeSearch(query), saved: false }; 
}

function openSettings () {
  browser.tabs.create({ active: true, url: SETTINGS_PAGE_URL }).then((tab) => _state__WEBPACK_IMPORTED_MODULE_0__["default"].setTabState(tab.id, true));
}

function openHelp () {
  browser.tabs.create({ active: true, url: HELP_PAGE_URL });
}


/***/ }),

/***/ "./src/background/search.js":
/*!**********************************!*\
  !*** ./src/background/search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags */ "./src/background/tags.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/background/state.js");
const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  history: searchHistory,
  tags: searchTags,
  visitsForHistory: getVisitsForHistoryEntries,
});

function searchHistory (searchTerms, timeFrames) {
  const historyRequests = timeFrames.map((timeFrame) => makeHistoryRequest(searchTerms, timeFrame.start.getTime(), timeFrame.end.getTime()));

  return Promise.all(historyRequests).then(flattenArray);
}

function makeHistoryRequest (text, startTime, endTime) {
  return browser.history.search({ text, startTime, endTime, maxResults: 2147483647 });
}

function flattenArray (arr) {
  return arr.reduce((a, c) => {
    a.splice.apply(a, [a.length, 0].concat(c));
    return a;
  },[]);
}

function searchTags (tags) {
  const tagedPagesRequests = tags.map((tag) => _tags__WEBPACK_IMPORTED_MODULE_0__["default"].getTagedPages(tag));
  return Promise.all(tagedPagesRequests).then(getIntersections);
}

function getIntersections(arrs) {
  let pages = {};

  arrs.forEach((arr, i) => {

    if (!i) {
      pages = arr;
    } else {
      pages = getIntersection(pages, arr);
    }

  });

  for (let key in pages) {
    pages[key].url = key;
  }

  return Object.values(pages);
}

function getIntersection (a, b) {
  const usedKeys = {};
  const intersection = {};

  for (let key in a) {
    if (b[key]) {
      intersection[key] = a[key];
    }
    usedKeys[key] = true;
  }

  for (let key in b) {
    if (usedKeys[key]) {
      continue;
    }

    if (a[key]) {
      intersection[key] = a[key];
    }
  }

  return intersection;
}

function getVisitsForHistoryEntries (historyList, opts) {
  if (!historyList) {
    return Promise.resolve([]);
  }

  if (historyList.visitsLoaded) {
    return Promise.resolve(historyList);
  }

  const visitRequests = historyList.map((historyItem) => getVisits(historyItem, opts.timeFrames));
  return Promise.all(visitRequests)
    .then((historyWithVisits) => {
      historyWithVisits.visitsLoaded = true;
      return _state__WEBPACK_IMPORTED_MODULE_1__["default"].saveResultsPage(opts.tabId, opts.pageNum, historyWithVisits).then(() => historyWithVisits);
    });
}

function getVisits (historyItem, timeFrames) {
  return browser.history.getVisits({ url: historyItem.url })
    .then((visits) => {
      historyItem.visitTimes = visits.filter((visitItem) => isWithinTimeFrames(visitItem, timeFrames));
      return historyItem;
    });
}

function isWithinTimeFrames (visitItem, timeFrames) {
  let acceptable = false;

  for (let i = 0; i < timeFrames.length; i++) {

    if (visitItem.visitTime >= timeFrames[i].start && visitItem.visitTime <= timeFrames[i].end) {
      acceptable = true;
      break;
    }

  }

  return acceptable;
}


/***/ }),

/***/ "./src/background/show.js":
/*!********************************!*\
  !*** ./src/background/show.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showResults; });
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ "./src/background/search.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ "./src/background/messages.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/background/state.js");




function showResults (opts) {
  _state__WEBPACK_IMPORTED_MODULE_2__["default"].getResultsPage(opts.tabId, opts.pageNum)
    .then((list) => _search__WEBPACK_IMPORTED_MODULE_0__["default"].visitsForHistory(list, opts)
    .then((listWithVisits) => _messages__WEBPACK_IMPORTED_MODULE_1__["default"].buildPage(opts.tabId, listWithVisits, opts.pageNum + 1)))
}


/***/ }),

/***/ "./src/background/state.js":
/*!*********************************!*\
  !*** ./src/background/state.js ***!
  \*********************************/
/*! exports provided: SETTINGS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");

const RESULTS_SAVE_KEY = 'results';
const SEARCHES_SAVE_KEY = 'searches'

const COLOR_SCHEMES = {
  grey: '210, 210, 210',
  green: '169, 255, 148',
  blue: '162, 210, 254',
  orange: '254, 208, 162',
  pink: '255, 208, 247',
};

const DEFAULT_SETTINGS = {
  PAGE_SIZE: 300,
  COLOR: 'grey',
};

const STATE = {
  tabs: {},
};

const SETTINGS = {
  COLOR_SCHEMES,
  DEFAULT: DEFAULT_SETTINGS,
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getTabState,
  setTabState,
  setPopupState,
  loadSettings,
  onSettingsChange,
  saveResults,
  removeResults,
  initTabState,
  removeTabState,
  getResultsPage,
  saveResultsPage,
  removeResultsPage,
  getSavedSearches,
  saveSearch,
  removeSearch,
  isSearchSaved,
});

function getTabState (tabId) {
  return STATE.tabs[ tabId ];
}

function setTabState (tabId, state) {
  return STATE.tabs[ tabId ] = state;
}

function setPopupState (tabId, state) {
  return STATE.tabs[ tabId ].popupOpen = state;
}

async function initTabState (tabId, results, options) {
  return setTabState(tabId, {
    ...options,
    pageNum: 0,
    totalCount: results.length,
    totalPages: Math.ceil(results.length / SETTINGS.PAGE_SIZE),
    tabId,
    color: COLOR_SCHEMES[ SETTINGS.COLOR ],
    isSaved: await isSearchSaved(options.query),
  });
}

function loadSettings () {
  const settings_names = Object.keys(DEFAULT_SETTINGS);
  browser.storage.local.get(settings_names).then((savedOptions) => {
    
    for (let key in DEFAULT_SETTINGS) {
      if (typeof savedOptions[key] === 'undefined') {
        savedOptions[key] = DEFAULT_SETTINGS[key];
        browser.storage.local.set({ [key]: savedOptions[key] });
      }
    }

    Object.assign(SETTINGS, savedOptions);
  });
}

function onSettingsChange (changes) {
  for (let key in changes) {
    if (DEFAULT_SETTINGS[key]) {
      SETTINGS[key] = changes[key].newValue;
    }
  }
}

function saveResults (tabId, results, pageNum) {
  const list = results.slice(pageNum * SETTINGS.PAGE_SIZE, pageNum * SETTINGS.PAGE_SIZE + SETTINGS.PAGE_SIZE);
  
  if (!list.length) {
    return Promise.resolve(results);
  }

  return saveResultsPage(tabId, pageNum, list).then(() => saveResults(tabId, results, pageNum + 1));
}

function removeResults (tabId, pageNum, pagesLength) {
  if (pageNum > pagesLength) {
    return true;
  }

  return removeResultsPage(tabId, pageNum).then(() => removeResults(tabId, pageNum + 1, pagesLength));
}

function removeTabState (tabId) {
  removeResults(tabId, 0, getTabState(tabId).totalPages || 0);
  setTabState(tabId, undefined);
}

function getResultsPage (tabId, pageNum) {
  const listKey = tabId + RESULTS_SAVE_KEY + pageNum;
  return browser.storage.local.get(listKey).then((savedResults) => savedResults[listKey]);
}

function saveResultsPage (tabId, pageNum, list) {
  return browser.storage.local.set({ [tabId + RESULTS_SAVE_KEY + pageNum]: list });
}

function removeResultsPage (tabId, pageNum) {
  return browser.storage.local.remove(tabId + RESULTS_SAVE_KEY + pageNum);
}

function getSavedSearches () {
  return browser.storage.local.get(SEARCHES_SAVE_KEY).then((result) => result[SEARCHES_SAVE_KEY] || []);
}

function setSavedSearches (searches) {
  return browser.storage.local.set({ [SEARCHES_SAVE_KEY]: searches });
}

async function isSearchSaved (searchString) {
  const allSearches = await getSavedSearches();
  return allSearches.includes(searchString);
} 

async function saveSearch (searchString) {
  const allSearches = await getSavedSearches();
  
  if (!allSearches.includes(searchString)) {
    allSearches.unshift(searchString);
    await setSavedSearches(allSearches);
  }
  
  return allSearches;
}

async function removeSearch (searchString) {
  const allSearches = await getSavedSearches();
  allSearches.splice( allSearches.indexOf(searchString), 1);
  await setSavedSearches(allSearches);
  return allSearches;
}


/***/ }),

/***/ "./src/background/tags.js":
/*!********************************!*\
  !*** ./src/background/tags.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");

const ALL_TAGS_KEY = 'ALL_TAGS';
const TAG_KEY_PREFIX = 'TAG_KEY';

/* harmony default export */ __webpack_exports__["default"] = ({
  create: createTag,
  remove: removeTag,
  getAll: getAllTags,
  setAll: setAllTags,
  getForPage: getTagsForPage,
  addToPage: addTagToPage,
  removeFromPage: removeTagFromPage,
  getTagedPages: getTagedPages,
  setTagedPages: setTagedPages,
});

function getAllTags () {
  return browser.storage.local.get(ALL_TAGS_KEY).then((savedResults) => savedResults[ALL_TAGS_KEY] || []);
}

function setAllTags (tags) {
  return browser.storage.local.set({ [ALL_TAGS_KEY]: tags }).then(() => tags);
}

function getTagedPages (tag) {
  const tagKey = TAG_KEY_PREFIX + tag
  return browser.storage.local.get(tagKey).then((savedResults) => savedResults[tagKey] || {});
}

function setTagedPages (tag, pages) {
  const tagKey = TAG_KEY_PREFIX + tag;
  return browser.storage.local.set({ [tagKey]: pages });
}

async function addTagToPage (tag, { url, title }) {
  const tagsPages = await getTagedPages(tag);
  tagsPages[url] = { title };
  return setTagedPages(tag, tagsPages)
}

async function removeTagFromPage (tag, { url}) {
  const tagsPages = await getTagedPages(tag);
  delete tagsPages[ url ];
  return setTagedPages(tag, tagsPages);
}

async function getTagsForPage ({ url }) {
  const allExistingTags = await getAllTags();
  
  const tagsForPage = [];

  for (let i = 0; i < allExistingTags.length; i++) {
    const tag = allExistingTags[i];
    const tagsPages = await getTagedPages(tag);

    if (tagsPages[ url ]) {
      tagsForPage.push(tag);
    }
  }

  return tagsForPage;
}

async function createTag (tag) {
  const allExistingTags = await getAllTags();

  if (!allExistingTags.includes(tag)) {
    allExistingTags.push(tag);
    allExistingTags.sort();
    await setAllTags(allExistingTags);
  }

  return allExistingTags;
}

async function removeTag (tag) {
  const allTags = await getAllTags();
  allTags.splice( allTags.indexOf(tag), 1);
  browser.storage.local.remove(TAG_KEY_PREFIX + tag);
  return setAllTags(allTags);
}


/***/ }),

/***/ "./src/common/constants.js":
/*!*********************************!*\
  !*** ./src/common/constants.js ***!
  \*********************************/
/*! exports provided: SUGGESTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUGGESTIONS", function() { return SUGGESTIONS; });
const SUGGESTIONS = {
  PREFIX: 'Histocher - ',
  DEFAULT: 'Search history with query',
  SETTINGS: 'Controls',
  HELP: 'How to Use'
};


/***/ }),

/***/ "./src/common/interaction.js":
/*!***********************************!*\
  !*** ./src/common/interaction.js ***!
  \***********************************/
/*! exports provided: getCurrentTab, sendMessage, sendMessageToTab, sendMessageToBackground, sendMessageFromBackground, onMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTab", function() { return getCurrentTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageToTab", function() { return sendMessageToTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageToBackground", function() { return sendMessageToBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageFromBackground", function() { return sendMessageFromBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMessage", function() { return onMessage; });
const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");

const PROMISES_RESOLVES = {};

function getCurrentTab () {
  return browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => tabs[0]);
}

function sendMessage (action, payload, tabId) {
  const { callbackId, promise } = payload.callbackId || saveCallback(action);
  const message = { action, callbackId, ...payload };
  
  if (window.__IS_BACKGROUND_SCRIPT__ && !payload.__TO_BACKGROUND__) {

    let getTabId = Promise.resolve(tabId);

    if (!tabId) {
      getTabId = getCurrentTab().then((tab) => tab.id);
    }

    getTabId.then((id) => {
      browser.tabs.sendMessage(id, { ...message, background: true });
    });
    
  } else {
    browser.runtime.sendMessage(message);
  }

  return promise;
}

function sendMessageToTab (tabId, action, payload) {
  return sendMessage(action, payload, tabId);
}

function sendMessageToBackground (action, payload) {
  return sendMessage(action, { ...payload, __TO_BACKGROUND__: true });
}

function sendMessageFromBackground (action, payload) {
  return sendMessage(action, { ...payload , __FROM_BACKGROUND__: true,  __TO_BACKGROUND__: true });
}

async function onMessage (message, actions = {}) {
  if (message.__TO_BACKGROUND__ && !window.__IS_BACKGROUND_SCRIPT__) {
    return;
  }

  if (message.isAnswer) {
    if (PROMISES_RESOLVES[message.callbackId]) {
      PROMISES_RESOLVES[message.callbackId](message);
      delete PROMISES_RESOLVES[message.callbackId];
    }
    return;
  }

  if (actions[message.action]) {
    const result = await actions[ message.action ](message);
    
    if (message.callbackId) {
      sendMessage(message.action, { callbackId: message.callbackId, isAnswer: true, ...result, __TO_BACKGROUND__: message.__FROM_BACKGROUND__ });
    }
  }
}

function saveCallback (action, cb) {
  const callbackId = Date.now() + Math.random() + action;

  return {
    promise: new Promise ((res) => PROMISES_RESOLVES[ callbackId ] = res),
    callbackId
  };
}


/***/ })

/******/ });