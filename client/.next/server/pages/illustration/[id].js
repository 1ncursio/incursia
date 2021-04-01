module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KHhN");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4I7n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__("aYjl");
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);

// EXTERNAL MODULE: ./utils/fetcher.js
var fetcher = __webpack_require__("dfzq");

// CONCATENATED MODULE: ./components/DropdownCommunity.tsx






const {
  Text
} = external_antd_["Typography"];

const DropdownCommunity = () => {
  const menu = /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Menu"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/community",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: "\uCEE4\uBBA4\uB2C8\uD2F0"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/notices",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: "\uACF5\uC9C0\uC0AC\uD56D"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/request",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: "\uAE30\uB2A5\uC694\uCCAD"
        })
      })
    })]
  });

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Dropdown"], {
    overlay: menu,
    overlayStyle: {
      width: 120
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
        strong: true,
        children: "\uCEE4\uBBA4\uB2C8\uD2F0\xA0"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["DownOutlined"], {
        style: {
          fontSize: 16,
          color: '#ff8634'
        }
      })]
    })
  });
};

/* harmony default export */ var components_DropdownCommunity = (DropdownCommunity);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: ./components/UserAvatar.tsx
var UserAvatar = __webpack_require__("YcKA");

// CONCATENATED MODULE: ./components/DropdownUser.tsx




 // @ts-ignore







const {
  Text: DropdownUser_Text
} = external_antd_["Typography"];

const DropdownUser = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    logOutDone,
    logInDone
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    data: userData,
    mutate
  } = external_swr_default()('/api/user', fetcher["a" /* fetcher */]);
  Object(external_react_["useEffect"])(() => {
    if (logOutDone) {
      mutate(null, false);
    }
  }, [logOutDone]);
  Object(external_react_["useEffect"])(() => {
    if (logInDone) {
      mutate(userData, false);
    }
  }, [logInDone]);
  const onLogout = Object(external_react_["useCallback"])(() => {
    dispatch(Object(user["J" /* logoutRequestAction */])());
  }, []);

  const menu = /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Menu"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Menu"].Item, {
      disabled: true,
      style: {
        cursor: 'default'
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: `/user/${userData === null || userData === void 0 ? void 0 : userData.id}/illustration`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Avatar"], {
              src: userData !== null && userData !== void 0 && userData.profile ? `http://localhost:3100/${userData === null || userData === void 0 ? void 0 : userData.profile}` : null,
              size: 64,
              children: userData !== null && userData !== void 0 && userData.profile ? null : userData === null || userData === void 0 ? void 0 : userData.nickname[0]
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: `/user/${userData === null || userData === void 0 ? void 0 : userData.id}/illustration`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownUser_Text, {
              strong: true,
              children: userData === null || userData === void 0 ? void 0 : userData.nickname
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownUser_Text, {
          type: "secondary",
          children: userData === null || userData === void 0 ? void 0 : userData.email
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: `/user/${userData === null || userData === void 0 ? void 0 : userData.id}/followings`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownUser_Text, {
              type: "secondary",
              children: "\uD314\uB85C\uC789"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownUser_Text, {
              style: {
                float: 'right'
              },
              children: userData === null || userData === void 0 ? void 0 : userData.Followings.length
            })]
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: `/user/${userData === null || userData === void 0 ? void 0 : userData.id}/followers`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownUser_Text, {
              type: "secondary",
              children: "\uD314\uB85C\uC6CC"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownUser_Text, {
              style: {
                float: 'right'
              },
              children: userData === null || userData === void 0 ? void 0 : userData.Followers.length
            })]
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: "\uD504\uB85C\uD544 \uC124\uC815"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Menu"].Item, {
      onClick: onLogout,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["LogoutOutlined"], {}), "\uB85C\uADF8\uC544\uC6C3"]
    })]
  });

  return userData && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Dropdown"], {
    overlay: menu,
    placement: "bottomCenter",
    overlayStyle: {
      width: 180
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(UserAvatar["a" /* default */], {
        userData: userData,
        size: "large",
        marginRight: 4,
        visibleNickname: false
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["DownOutlined"], {
        style: {
          fontSize: 10,
          color: '#ff8634'
        }
      })]
    })
  });
};

/* harmony default export */ var components_DropdownUser = (DropdownUser);
// EXTERNAL MODULE: ./hooks/useInput.ts
var useInput = __webpack_require__("QivM");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/AppLayout/styles.tsx


const Nav = external_styled_components_default.a.nav.withConfig({
  displayName: "styles__Nav",
  componentId: "sc-1a84yy4-0"
})(["background:#ffffff;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(0,0,0,0.2);height:60px;padding:0 30px;font-size:1rem;"]);
const UploadButton = external_styled_components_default()(external_antd_["Button"]).withConfig({
  displayName: "styles__UploadButton",
  componentId: "sc-1a84yy4-1"
})(["width:120px;"]);
const Menu = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Menu",
  componentId: "sc-1a84yy4-2"
})(["display:flex;"]);
const LeftMenu = external_styled_components_default()(Menu).withConfig({
  displayName: "styles__LeftMenu",
  componentId: "sc-1a84yy4-3"
})(["flex:1;"]);
const CenterMenu = external_styled_components_default()(Menu).withConfig({
  displayName: "styles__CenterMenu",
  componentId: "sc-1a84yy4-4"
})(["flex:2;"]);
const RightMenu = external_styled_components_default()(Menu).withConfig({
  displayName: "styles__RightMenu",
  componentId: "sc-1a84yy4-5"
})(["flex:2;justify-content:flex-end;"]);
const SearchInput = external_styled_components_default()(external_antd_["Input"].Search).withConfig({
  displayName: "styles__SearchInput",
  componentId: "sc-1a84yy4-6"
})([""]);
const MenuItem = external_styled_components_default.a.div.withConfig({
  displayName: "styles__MenuItem",
  componentId: "sc-1a84yy4-7"
})(["display:flex;align-items:center;justify-content:center;& + &{margin-left:30px;}"]);
const CenterMenuItem = external_styled_components_default()(MenuItem).withConfig({
  displayName: "styles__CenterMenuItem",
  componentId: "sc-1a84yy4-8"
})(["width:100%;"]);
// CONCATENATED MODULE: ./components/AppLayout/index.tsx














const {
  Text: AppLayout_Text
} = external_antd_["Typography"];

const AppLayout = ({
  children
}) => {
  const [searchInput, onChangeSearchInput] = Object(useInput["a" /* default */])('');
  const {
    data: userData
  } = external_swr_default()('/api/user', fetcher["a" /* fetcher */]);
  const onSearch = Object(external_react_["useCallback"])(() => {
    router_default.a.push(`/tag/${searchInput}`);
  }, [searchInput]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Nav, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(LeftMenu, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuItem, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AppLayout_Text, {
                strong: true,
                style: {
                  color: '#ff8634'
                },
                children: "\uC720\uD1A0\uD53C\uC544"
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuItem, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/community",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_DropdownCommunity, {})
            })
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CenterMenu, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CenterMenuItem, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchInput, {
            value: searchInput,
            onChange: onChangeSearchInput,
            onSearch: onSearch,
            placeholder: "\uBCF4\uACE0\uC2F6\uC740 \uD0DC\uADF8\uB97C \uAC80\uC0C9\uD574\uBCF4\uC138\uC694!"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(RightMenu, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuItem, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/upload",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(UploadButton, {
                shape: "round",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AppLayout_Text, {
                  strong: true,
                  children: "\uC791\uD488 \uC5C5\uB85C\uB4DC"
                })
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuItem, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["BellOutlined"], {
            style: {
              fontSize: 18,
              color: 'rgba(0, 0, 0, 0.7)'
            }
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuItem, {
          children: userData ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_DropdownUser, {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/login",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AppLayout_Text, {
                strong: true,
                children: "\uB85C\uADF8\uC778"
              })
            })
          })
        })]
      })]
    }), children]
  });
};

/* harmony default export */ var components_AppLayout = __webpack_exports__["a"] = (AppLayout);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "AQn3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./reducers/index.js





const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(external_redux_["combineReducers"])({
          user: user["H" /* default */],
          post: post["z" /* default */]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./sagas/post.js




function uploadImagesAPI(data) {
  return external_axios_default.a.post('/api/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: post["y" /* UPLOAD_IMAGES_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["w" /* UPLOAD_IMAGES_FAILURE */],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return external_axios_default.a.patch(`/api/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(effects_["call"])(likePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["o" /* LIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["m" /* LIKE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function dislikePostAPI(data) {
  return external_axios_default.a.delete(`/api/post/${data}/like`);
}

function* dislikePost(action) {
  try {
    const result = yield Object(effects_["call"])(dislikePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["l" /* DISLIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["j" /* DISLIKE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  return external_axios_default.a.post('/api/post', data);
}

function* addPost(action) {
  try {
    const result = yield Object(effects_["call"])(addPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["f" /* ADD_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["d" /* ADD_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return external_axios_default.a.delete(`/api/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(effects_["call"])(removePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["v" /* REMOVE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["t" /* REMOVE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return external_axios_default.a.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(effects_["call"])(addCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["c" /* ADD_COMMENT_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["a" /* ADD_COMMENT_FAILURE */],
      error: err.response.data
    });
  }
}

function addReplyAPI(data) {
  return external_axios_default.a.post(`/api/post/${data.postId}/reply`, data);
}

function* addReply(action) {
  try {
    const result = yield Object(effects_["call"])(addReplyAPI, action.data);
    yield Object(effects_["put"])({
      type: post["i" /* ADD_REPLY_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["g" /* ADD_REPLY_FAILURE */],
      error: err.response.data
    });
  }
}

function removeCommentAPI(data) {
  return external_axios_default.a.delete(`/api/post/comment/${data}`);
}

function* removeComment(action) {
  try {
    const result = yield Object(effects_["call"])(removeCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["r" /* REMOVE_COMMENT_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["p" /* REMOVE_COMMENT_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchUploadImages() {
  yield Object(effects_["takeEvery"])(post["x" /* UPLOAD_IMAGES_REQUEST */], uploadImages);
}

function* watchLikePost() {
  yield Object(effects_["takeLatest"])(post["n" /* LIKE_POST_REQUEST */], likePost);
}

function* watchDislikePost() {
  yield Object(effects_["takeLatest"])(post["k" /* DISLIKE_POST_REQUEST */], dislikePost);
}

function* watchAddPost() {
  yield Object(effects_["takeLatest"])(post["e" /* ADD_POST_REQUEST */], addPost);
}

function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(post["u" /* REMOVE_POST_REQUEST */], removePost);
}

function* watchAddComment() {
  yield Object(effects_["takeLatest"])(post["b" /* ADD_COMMENT_REQUEST */], addComment);
}

function* watchAddReply() {
  yield Object(effects_["takeLatest"])(post["h" /* ADD_REPLY_REQUEST */], addReply);
}

function* watchRemoveComment() {
  yield Object(effects_["takeLatest"])(post["q" /* REMOVE_COMMENT_REQUEST */], removeComment);
}

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchLikePost), Object(effects_["fork"])(watchDislikePost), Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchAddReply), Object(effects_["fork"])(watchRemoveComment)]);
}
// CONCATENATED MODULE: ./sagas/user.js




function removeFollowerAPI(data) {
  return external_axios_default.a.delete(`/api/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield Object(effects_["call"])(removeFollowerAPI, action.data);
    yield Object(effects_["put"])({
      type: user["A" /* REMOVE_FOLLOWER_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["y" /* REMOVE_FOLLOWER_FAILURE */],
      error: err.response.data
    });
  }
}

function loadFollowersAPI(data) {
  return external_axios_default.a.get('/api/user/followers', data);
}

function* loadFollowers() {
  try {
    const result = yield Object(effects_["call"])(loadFollowersAPI);
    yield Object(effects_["put"])({
      type: user["o" /* LOAD_FOLLOWERS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["m" /* LOAD_FOLLOWERS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  return external_axios_default.a.get('/api/user/followings', data);
}

function* loadFollowings() {
  try {
    const result = yield Object(effects_["call"])(loadFollowingsAPI);
    yield Object(effects_["put"])({
      type: user["r" /* LOAD_FOLLOWINGS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["p" /* LOAD_FOLLOWINGS_FAILURE */],
      error: err.response.data
    });
  }
}

function changeProfileAPI(data) {
  return external_axios_default.a.patch('/api/user/profile', data);
}

function* changeProfile(action) {
  try {
    const result = yield Object(effects_["call"])(changeProfileAPI, action.data);
    yield Object(effects_["put"])({
      type: user["i" /* CHANGE_PROFILE_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["g" /* CHANGE_PROFILE_FAILURE */],
      error: err.response.data
    });
  }
}

function changeNicknameAPI(data) {
  return external_axios_default.a.patch('/api/user/nickname', {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(effects_["call"])(changeNicknameAPI, action.data);
    yield Object(effects_["put"])({
      type: user["f" /* CHANGE_NICKNAME_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["d" /* CHANGE_NICKNAME_FAILURE */],
      error: err.response.data
    });
  }
}

function changeIntroAPI(data) {
  return external_axios_default.a.patch('/api/user/introduction', {
    introduction: data
  });
}

function* changeIntro(action) {
  try {
    const result = yield Object(effects_["call"])(changeIntroAPI, action.data);
    yield Object(effects_["put"])({
      type: user["c" /* CHANGE_INTRO_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["a" /* CHANGE_INTRO_FAILURE */],
      error: err.response.data
    });
  }
}

function followAPI(data) {
  return external_axios_default.a.patch(`/api/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield Object(effects_["call"])(followAPI, action.data);
    yield Object(effects_["put"])({
      type: user["l" /* FOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["j" /* FOLLOW_FAILURE */],
      error: err.response.data
    });
  }
}

function unfollowAPI(data) {
  return external_axios_default.a.delete(`/api/user/${data}/follow`);
}

function* unfollow(action) {
  try {
    const result = yield Object(effects_["call"])(unfollowAPI, action.data);
    yield Object(effects_["put"])({
      type: user["G" /* UNFOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["E" /* UNFOLLOW_FAILURE */],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return external_axios_default.a.post('/api/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield Object(effects_["call"])(logInAPI, action.data);
    yield Object(effects_["put"])({
      type: user["u" /* LOG_IN_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["s" /* LOG_IN_FAILURE */],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return external_axios_default.a.post('/api/user/logout');
}

function* logOut() {
  try {
    yield Object(effects_["call"])(logOutAPI);
    yield Object(effects_["put"])({
      type: user["x" /* LOG_OUT_SUCCESS */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["v" /* LOG_OUT_FAILURE */],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return external_axios_default.a.post('/api/user', data);
}

function* signUp(action) {
  try {
    const result = yield Object(effects_["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(effects_["put"])({
      type: user["D" /* SIGN_UP_SUCCESS */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["B" /* SIGN_UP_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchRemoveFollower() {
  yield Object(effects_["takeLatest"])(user["z" /* REMOVE_FOLLOWER_REQUEST */], removeFollower);
}

function* watchLoadFollowers() {
  yield Object(effects_["takeLatest"])(user["n" /* LOAD_FOLLOWERS_REQUEST */], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(effects_["takeLatest"])(user["q" /* LOAD_FOLLOWINGS_REQUEST */], loadFollowings);
}

function* watchChangeProfile() {
  yield Object(effects_["takeLatest"])(user["h" /* CHANGE_PROFILE_REQUEST */], changeProfile);
}

function* watchChangeNickname() {
  yield Object(effects_["takeLatest"])(user["e" /* CHANGE_NICKNAME_REQUEST */], changeNickname);
}

function* watchChangeIntro() {
  yield Object(effects_["takeLatest"])(user["b" /* CHANGE_INTRO_REQUEST */], changeIntro);
}

function* watchFollow() {
  yield Object(effects_["takeLatest"])(user["k" /* FOLLOW_REQUEST */], follow);
}

function* watchUnfollow() {
  yield Object(effects_["takeLatest"])(user["F" /* UNFOLLOW_REQUEST */], unfollow);
}

function* watchLogIn() {
  yield Object(effects_["takeLatest"])(user["t" /* LOG_IN_REQUEST */], logIn);
}

function* watchLogOut() {
  yield Object(effects_["takeLatest"])(user["w" /* LOG_OUT_REQUEST */], logOut);
}

function* watchSignUp() {
  yield Object(effects_["takeLatest"])(user["C" /* SIGN_UP_REQUEST */], signUp);
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchRemoveFollower), Object(effects_["fork"])(watchLoadFollowers), Object(effects_["fork"])(watchLoadFollowings), Object(effects_["fork"])(watchChangeProfile), Object(effects_["fork"])(watchChangeNickname), Object(effects_["fork"])(watchChangeIntro), Object(effects_["fork"])(watchFollow), Object(effects_["fork"])(watchUnfollow), Object(effects_["fork"])(watchLogIn), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchSignUp)]);
}
// CONCATENATED MODULE: ./sagas/index.js




external_axios_default.a.defaults.baseURL = 'http://localhost:3100';
external_axios_default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(postSaga), Object(effects_["fork"])(userSaga)]);
}
// CONCATENATED MODULE: ./store/configureStore.js







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "E0/1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__("boVf");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "dayjs/locale/ko"
var ko_ = __webpack_require__("XyoR");

// EXTERNAL MODULE: external "dayjs/plugin/relativeTime"
var relativeTime_ = __webpack_require__("jYNn");
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__("aYjl");
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);

// EXTERNAL MODULE: ./utils/fetcher.js
var fetcher = __webpack_require__("dfzq");

// CONCATENATED MODULE: ./components/CommentContent/index.tsx





const CommentContent = ({
  content
}) => {
  const emoticons = content.match(/:[^:\s]*(?:::[^:\s]*)*:/);
  const emoticon = emoticons ? emoticons[0].slice(1, emoticons[0].length - 1) : null;
  const {
    data: emoticonData
  } = external_swr_default()(emoticon ? `/api/emoticon/${emoticon}` : null, fetcher["a" /* fetcher */]);

  if (emoticonData) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      alt: emoticonData.name,
      src: `http://localhost:3100/${emoticonData.src}`,
      width: "100",
      height: "auto"
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: content
  });
};

/* harmony default export */ var components_CommentContent = (CommentContent);
// CONCATENATED MODULE: ./components/PopoverEmoticon/index.tsx






const PopoverEmoticon = ({
  setCommentText,
  setVisiblePopover
}) => {
  const {
    data: emoticonData
  } = external_swr_default()('/api/emoticon', fetcher["a" /* fetcher */]);
  const onClickEmoticon = Object(external_react_["useCallback"])(emoticon => {
    setCommentText(`:${emoticon.name}:`);
    setVisiblePopover(false);
  }, [emoticonData]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
    gutter: [16, 16],
    style: {
      width: 500
    },
    children: emoticonData === null || emoticonData === void 0 ? void 0 : emoticonData.map(emoticon => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
      span: 6,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        onClick: () => onClickEmoticon(emoticon),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          alt: emoticon.name,
          src: `http://localhost:3100/${emoticon.src}`,
          style: {
            width: '100%'
          }
        })
      })
    }))
  });
};

/* harmony default export */ var components_PopoverEmoticon = (PopoverEmoticon);
// EXTERNAL MODULE: ./hooks/useInput.ts
var useInput = __webpack_require__("QivM");

// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./components/CommentForm/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // @ts-ignore








const CommentForm = ({
  placeholder = '',
  replyId = -1,
  type,
  setReplyId,
  postData,
  postMutate
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: visiblePopover,
    1: setVisiblePopover
  } = Object(external_react_["useState"])(false);
  const [commentText, onChangeCommentText, setCommentText] = Object(useInput["a" /* default */])('');
  const {
    addCommentDone,
    addCommentLoading,
    addedCommentId,
    removeCommentDone,
    removedCommentId
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const {
    data: userData
  } = external_swr_default()('/api/user', fetcher["a" /* fetcher */]);
  Object(external_react_["useEffect"])(() => {
    if (addCommentDone) {
      if (type === 'comment') {
        // postMutate(
        //   {
        //     ...postData,
        //     Comments: [
        //       ...postData.Comments,
        //       {
        //         id: addedCommentId,
        //         replyId: addedCommentId,
        //         userId: userData.id,
        //         content: commentText,
        //         User: {
        //           id: userData.id,
        //           nickname: userData.nickname,
        //           profile: userData.profile,
        //         },
        //       },
        //     ],
        //   },
        //   false,
        // );
        postMutate();
        console.log('코멘트 작성');
      } else if (type === 'reply') {
        postMutate();
        console.log('답글 작성');
      }

      setCommentText('');
    }
  }, [addCommentDone]);
  Object(external_react_["useEffect"])(() => {
    if (removeCommentDone) {
      postMutate(_objectSpread(_objectSpread({}, postData), {}, {
        Comments: postData.Comments.filter(v => v.id !== removedCommentId)
      }), false);
    }
  }, [removeCommentDone]);
  const onSubmitComment = Object(external_react_["useCallback"])(() => {
    if (!commentText || !commentText.trim()) {
      return external_antd_["Modal"].error({
        content: '내용을 작성해주세요.'
      });
    }

    if (!userData) {
      return external_antd_["Modal"].error({
        content: '로그인한 사용자만 접근 가능합니다.',
        okText: '확인'
      });
    }

    if (type === 'comment') {
      dispatch({
        type: post["b" /* ADD_COMMENT_REQUEST */],
        data: {
          content: commentText,
          postId: postData.id,
          userId: userData.id,
          replyId
        }
      });
    } else {
      dispatch({
        type: post["h" /* ADD_REPLY_REQUEST */],
        data: {
          content: commentText,
          postId: postData.id,
          userId: userData.id,
          replyId
        }
      });
    }

    return setReplyId(-1);
  }, [commentText, userData, addedCommentId, replyId, setReplyId]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Form"], {
    onFinish: onSubmitComment,
    layout: "inline",
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Form"].Item, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Popover"], {
        trigger: "click",
        placement: "bottomRight",
        title: "\uC774\uBAA8\uD2F0\uCF58",
        visible: visiblePopover,
        content: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PopoverEmoticon, {
          setCommentText: setCommentText,
          setVisiblePopover: setVisiblePopover
        }),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["SmileOutlined"], {
          style: {
            fontSize: 22,
            opacity: 0.7,
            marginRight: 8
          },
          onClick: () => setVisiblePopover(prev => !prev)
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Form"].Item, {
      style: {
        width: '88%',
        background: 'white'
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"].TextArea, {
        value: commentText,
        onChange: onChangeCommentText,
        placeholder: placeholder,
        style: {
          resize: 'none',
          width: '100%',
          height: 55
        },
        bordered: true
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Form"].Item, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
        type: "primary",
        htmlType: "submit",
        loading: addCommentLoading,
        style: {
          float: 'right',
          height: 55
        },
        block: true,
        children: "\uC791\uC131"
      })
    })]
  });
};

/* harmony default export */ var components_CommentForm = (CommentForm);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/CommentSection/styles.tsx


const CommentWrapper = external_styled_components_default()(external_antd_["Comment"]).withConfig({
  displayName: "styles__CommentWrapper",
  componentId: "bm5oc1-0"
})(["", ""], ({
  nested
}) => nested && Object(external_styled_components_["css"])(["padding-left:40px;"]));
/* harmony default export */ var styles = (CommentWrapper);
// CONCATENATED MODULE: ./components/CommentSection/index.tsx







 // @ts-ignore










external_dayjs_default.a.locale('ko');
external_dayjs_default.a.extend(relativeTime_default.a);

const CommentSection = ({
  postData,
  postMutate
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: replyId,
    1: setReplyId
  } = Object(external_react_["useState"])(-1);
  const {
    data: userData
  } = external_swr_default()('/api/user', fetcher["a" /* fetcher */]);
  const toggleReplyForm = Object(external_react_["useCallback"])(id => {
    console.log('toggleReplyForm called');

    if (id !== replyId) {
      setReplyId(id);
      console.log(`${id} !== ${replyId}`);
    } else {
      setReplyId(-1);
      console.log(`${id} === ${replyId}`);
    }
  }, [replyId]);
  const onDeleteComment = Object(external_react_["useCallback"])(commentId => {
    external_antd_["Modal"].confirm({
      content: '정말로 이 댓글을 삭제하시겠어요?',
      okText: '삭제',
      cancelText: '취소',
      onOk: () => {
        dispatch({
          type: post["q" /* REMOVE_COMMENT_REQUEST */],
          data: commentId
        });
      }
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CommentForm, {
      placeholder: "\uB313\uAE00 \uB2EC\uAE30",
      type: "comment",
      setReplyId: setReplyId,
      postData: postData,
      postMutate: postMutate
    }), (postData === null || postData === void 0 ? void 0 : postData.Comments) && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["List"], {
      header: `${postData.Comments.length}개의 댓글`,
      itemLayout: "horizontal",
      dataSource: postData.Comments,
      renderItem: item => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles, {
          nested: item.id !== item.replyId,
          actions: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            onClick: () => toggleReplyForm(item.id),
            children: "\uB2F5\uAE00"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Tooltip"], {
            title: "\uC0AD\uC81C",
            children: item.User.id === (userData === null || userData === void 0 ? void 0 : userData.id) && /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["DeleteOutlined"], {
              onClick: () => onDeleteComment(item.id)
            })
          })],
          author: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: `/user/${item.User.id}/illustration`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: item.User.nickname
            })
          }),
          avatar: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: `/user/${item.User.id}/illustration`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Avatar"], {
                src: item.User.profile && `http://localhost:3100/${item.User.profile}`,
                children: !item.User.profile && item.User.nickname[0]
              })
            })
          }),
          datetime: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Tooltip"], {
            title: external_dayjs_default()(item.createdAt).format('YYYY년 MM월 DD일 HH:mm'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: external_dayjs_default()(item.createdAt).fromNow()
            })
          }),
          content: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CommentContent, {
            content: item.content
          }),
          children: replyId === item.id && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CommentForm, {
            placeholder: "\uB2F5\uAE00 \uB2EC\uAE30",
            type: "reply",
            setReplyId: setReplyId,
            replyId: replyId,
            postData: postData,
            postMutate: postMutate
          })
        })
      })
    })]
  });
};

/* harmony default export */ var components_CommentSection = __webpack_exports__["a"] = (CommentSection);

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Ibkh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);


const immer = (...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(...args);
};

/* harmony default export */ __webpack_exports__["a"] = (immer);

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "KHhN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__("aYjl");
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./components/AppLayout/index.tsx + 3 modules
var AppLayout = __webpack_require__("4I7n");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__("boVf");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "dayjs/locale/ko"
var ko_ = __webpack_require__("XyoR");

// EXTERNAL MODULE: ./reducers/post.js
var reducers_post = __webpack_require__("p+NB");

// EXTERNAL MODULE: ./utils/fetcher.js
var fetcher = __webpack_require__("dfzq");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/IllustCard.tsx






// @ts-ignore








external_dayjs_default.a.locale('ko');
const {
  Title,
  Paragraph,
  Text
} = external_antd_["Typography"];
const PostContent = external_styled_components_default.a.div.withConfig({
  displayName: "IllustCard__PostContent",
  componentId: "yph7z8-0"
})(["margin:32px 0 48px 0;"]);

const IllustCard = ({
  postData
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: liked,
    1: setLiked
  } = Object(external_react_["useState"])(false);
  const {
    data: userData,
    error: userError
  } = external_swr_default()('/api/user', fetcher["a" /* fetcher */]);
  const {
    removePostDone
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  Object(external_react_["useEffect"])(() => {
    if (userData && postData.Likers) setLiked(postData.Likers.find(v => v.id === userData.id) ? true : false);
  }, [userData]);
  const onLike = Object(external_react_["useCallback"])(() => {
    if (!userData) {
      return alert('로그인이 필요합니다.');
    }

    dispatch({
      type: reducers_post["n" /* LIKE_POST_REQUEST */],
      data: postData.id
    });
    setLiked(prev => !prev);
  }, [userData, postData === null || postData === void 0 ? void 0 : postData.id]);
  const onDislike = Object(external_react_["useCallback"])(() => {
    if (!userData) {
      return alert('로그인이 필요합니다.');
    }

    dispatch({
      type: reducers_post["k" /* DISLIKE_POST_REQUEST */],
      data: postData.id
    });
    setLiked(prev => !prev);
  }, [userData, postData === null || postData === void 0 ? void 0 : postData.id]);
  const onClickDelete = Object(external_react_["useCallback"])(() => {
    // 로그인 안 한 경우
    if (!userData) {
      return external_antd_["Modal"].error({
        content: '로그인이 필요합니다.',
        okText: '확인'
      });
    }

    external_antd_["Modal"].confirm({
      title: '글 삭제',
      content: '정말로 이 글을 삭제하시겠어요?',
      okText: '삭제',
      cancelText: '취소',
      onOk: () => {
        dispatch({
          type: reducers_post["u" /* REMOVE_POST_REQUEST */],
          data: postData.id
        });
      }
    });
  }, [userData, postData === null || postData === void 0 ? void 0 : postData.id]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Image"].PreviewGroup, {
      children: postData === null || postData === void 0 ? void 0 : postData.Images.map(v => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Image"], {
        width: "100%",
        src: `http://localhost:3100/${v.src}`
      }, v.src))
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Space"], {
      style: {
        float: 'right'
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Tooltip"], {
        title: "\uC88B\uC544\uC694!",
        children: liked ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["HeartFilled"], {
          style: {
            fontSize: 24,
            opacity: 0.9
          },
          onClick: onDislike
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["HeartOutlined"], {
          style: {
            fontSize: 24,
            opacity: 0.9
          },
          onClick: onLike
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Tooltip"], {
        title: "\uACF5\uC720\uD558\uAE30!",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["ShareAltOutlined"], {
          style: {
            fontSize: 24,
            opacity: 0.9
          }
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Tooltip"], {
        title: "\uC2E0\uACE0\uD558\uAE30",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["AlertOutlined"], {
          style: {
            fontSize: 24,
            opacity: 0.9
          }
        })
      }), (userData === null || userData === void 0 ? void 0 : userData.id) === (postData === null || postData === void 0 ? void 0 : postData.User.id) ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Tooltip"], {
        title: "\uC0AD\uC81C\uD558\uAE30",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["DeleteOutlined"], {
          style: {
            fontSize: 24
          },
          onClick: onClickDelete
        })
      }) : null]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(PostContent, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Title, {
        level: 3,
        children: postData === null || postData === void 0 ? void 0 : postData.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paragraph, {
        children: postData === null || postData === void 0 ? void 0 : postData.caption
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: postData === null || postData === void 0 ? void 0 : postData.Tags.map(tag => /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: `/tag/${encodeURIComponent(tag.name)}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Tag"], {
              color: "blue",
              children: tag.name
            })
          })
        }, tag.name))
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Space"], {
        size: "middle",
        style: {
          margin: '16px 0'
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["HeartFilled"], {
            style: {
              opacity: 0.45,
              padding: 4
            }
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
            type: "secondary",
            style: {
              fontSize: '0.8rem'
            },
            children: postData === null || postData === void 0 ? void 0 : postData.Likers.length
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["EyeFilled"], {
            style: {
              opacity: 0.45,
              padding: 4
            }
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
            type: "secondary",
            style: {
              fontSize: '0.8rem'
            },
            children: postData === null || postData === void 0 ? void 0 : postData.views
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
          type: "secondary",
          children: external_dayjs_default()(postData === null || postData === void 0 ? void 0 : postData.createdAt).format('YYYY년 MM월 DD일 HH:mm')
        })
      })]
    })]
  });
};

/* harmony default export */ var components_IllustCard = (IllustCard);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__("T5ka");
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// CONCATENATED MODULE: ./components/FollowButton.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // @ts-ignore








const FollowButton = ({
  postData
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();
  const {
    0: isFollowing,
    1: setIsFollowing
  } = Object(external_react_["useState"])(false);
  const {
    data: userData,
    mutate: userMutate
  } = external_swr_default()('/api/user', fetcher["a" /* fetcher */]);
  const {
    followLoading,
    unfollowLoading,
    followDone,
    unfollowDone
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  Object(external_react_["useEffect"])(() => {
    if (userData) {
      setIsFollowing(userData.Followings.find(v => v.id === postData.User.id));
      console.log('isFollowing', isFollowing);
    }
  }, [userData]);
  Object(external_react_["useEffect"])(() => {
    if (followDone) {
      userMutate(_objectSpread(_objectSpread({}, userData), {}, {
        Followings: [...userData.Followings, {
          id: postData.User.id
        }]
      }));
    }
  }, [followDone]);
  Object(external_react_["useEffect"])(() => {
    if (unfollowDone) {
      userMutate(_objectSpread(_objectSpread({}, userData), {}, {
        Followings: userData.Followings.filter(v => v.id !== postData.User.id)
      }));
    }
  }, [unfollowDone]);
  const onClickButton = Object(external_react_["useCallback"])(() => {
    if (!isFollowing) {
      if (userData) {
        dispatch({
          type: user["k" /* FOLLOW_REQUEST */],
          data: postData.User.id
        });
      } else {
        router.push('/login');
      }
    } else {
      dispatch({
        type: user["F" /* UNFOLLOW_REQUEST */],
        data: postData.User.id
      });
    }
  }, [isFollowing]);

  if (postData.User.id === (userData === null || userData === void 0 ? void 0 : userData.id)) {
    return null;
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    type: isFollowing ? 'default' : 'primary',
    shape: "round",
    block: true,
    children: isFollowing ? '팔로우 중' : '팔로우 하기'
  });
};

/* harmony default export */ var components_FollowButton = (FollowButton);
// CONCATENATED MODULE: ./components/UserProfile.tsx









const CurrentPostCover = external_styled_components_default.a.div.withConfig({
  displayName: "UserProfile__CurrentPostCover",
  componentId: "sc-16ali0l-0"
})(["background-color:rgba(255,255,255,0.5);width:100%;height:100%;position:absolute;z-index:10;"]);
const {
  Text: UserProfile_Text
} = external_antd_["Typography"];

const UserProfile = ({
  postData
}) => {
  const {
    data: userData
  } = external_swr_default()('/api/user', fetcher["a" /* fetcher */]);
  Object(external_react_["useEffect"])(() => {
    console.log(postData);
  }, []);
  const currentPostIndex = postData.User.Posts.findIndex(v => v.id === postData.id);
  const prevAndCurrentAndNextPost = postData.User.Posts.filter((v, i) => Math.abs(i - currentPostIndex) <= 1);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Space"], {
    direction: "vertical",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: `/user/${postData.User.id}/illustration`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Avatar"], {
          size: 48,
          src: postData.User.profile && `http://localhost:3100/${postData.User.profile}`,
          style: {
            marginRight: 8
          },
          children: !postData.User.profile && postData.User.nickname[0]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(UserProfile_Text, {
          children: postData.User.nickname
        })]
      })
    }), (userData === null || userData === void 0 ? void 0 : userData.id) !== postData.User.id ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_FollowButton, {
      postData: postData
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
      type: "primary",
      shape: "round",
      block: true,
      children: "\uC791\uD488 \uD3B8\uC9D1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
      gutter: 8,
      children: prevAndCurrentAndNextPost.map(post => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        span: 8,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: `/illustration/${post.id}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
            children: [post.id === postData.id ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(CurrentPostCover, {}) : null, /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              style: {
                width: '100%',
                height: 100
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: `http://localhost:3100/${post.Images[0].src}`,
                alt: post.title,
                style: {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 8
                }
              }, post.id), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Badge"], {
                count: post.Images.length,
                style: {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  position: 'absolute',
                  right: '5px',
                  bottom: '25px',
                  boxShadow: 'none'
                }
              })]
            })]
          })
        })
      }, post.id))
    })]
  });
};

/* harmony default export */ var components_UserProfile = (UserProfile);
// EXTERNAL MODULE: ./components/CommentSection/index.tsx + 4 modules
var CommentSection = __webpack_require__("E0/1");

// EXTERNAL MODULE: ./components/ExpiredValidation/index.tsx
var ExpiredValidation = __webpack_require__("Kwez");

// EXTERNAL MODULE: ./store/configureStore.js + 4 modules
var configureStore = __webpack_require__("AQn3");

// CONCATENATED MODULE: ./pages/illustration/[id].tsx






 // @ts-ignore











const Illustration = ({
  post: initialPost
}) => {
  const router = Object(router_["useRouter"])();
  const {
    id
  } = router.query;
  const {
    data: postData,
    mutate: postMutate
  } = external_swr_default()(`/api/post/${id}`, fetcher["a" /* fetcher */], {
    initialData: initialPost
  });
  const {
    data: userData
  } = external_swr_default()('/api/user', fetcher["a" /* fetcher */]);
  const {
    removePostDone,
    likePostDone,
    dislikePostDone
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  Object(external_react_["useEffect"])(() => {
    if (removePostDone) {
      router_default.a.replace('/');
    }
  }, [removePostDone]);
  Object(external_react_["useEffect"])(() => {
    if (likePostDone) {
      // postMutate(
      //   {
      //     ...postData,
      //     Likers: [
      //       ...postData.Likers,
      //       {
      //         id: userData?.id,
      //       },
      //     ],
      //   },
      //   false,
      // );
      postMutate(external_immer_default()(draft => {
        draft.Likers.push({
          id: userData === null || userData === void 0 ? void 0 : userData.id
        });
      }), false);
    }
  }, [likePostDone]);
  Object(external_react_["useEffect"])(() => {
    if (dislikePostDone) {
      // postMutate(
      //   {
      //     ...postData,
      //     Likers: postData.Likers.filter((v: IUser) => v.id !== userData?.id),
      //   },
      //   false,
      // );
      postMutate(external_immer_default()(draft => {
        draft.Likers.filter(v => v.id !== (userData === null || userData === void 0 ? void 0 : userData.id));
      }));
    }
  }, [dislikePostDone]);

  if ((userData === null || userData === void 0 ? void 0 : userData.status) === 'pending') {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExpiredValidation["a" /* default */], {});
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(AppLayout["a" /* default */], {
    children: [postData && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("title", {
        children: [postData.User.nickname, "\uB2D8\uC758 \uC77C\uB7EC\uC2A4\uD2B8 - \uC720\uD1A0\uD53C\uC544"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: postData.caption
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "og:title",
        content: `${postData.User.nickname}님의 일러스트`
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "og:description",
        content: postData.caption
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "og:image",
        content: postData.Images[0] ? postData.Images[0].src : 'https://nodebird.com/favicon.ico'
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "og:url",
        content: `https://nodebird.com/post/${id}`
      })]
    }), postData && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
      justify: "center",
      gutter: 16,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Col"], {
        span: 12,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_IllustCard, {
          postData: postData
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CommentSection["a" /* default */], {
          postData: postData,
          postMutate: postMutate
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        span: 4,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_UserProfile, {
          postData: postData
        })
      })]
    })]
  });
};

const getServerSideProps = configureStore["a" /* default */].getServerSideProps(async context => {
  var _context$params;

  // const cookie = context.req ? context.req.headers.cookie : '';
  // axios.defaults.headers.Cookie = '';
  // if (context.req && cookie) {
  //   axios.defaults.headers.Cookie = cookie;
  // }
  const post = await Object(fetcher["a" /* fetcher */])(`/api/post/${(_context$params = context.params) === null || _context$params === void 0 ? void 0 : _context$params.id}`); // const parsedCookie = post.headers['set-cookie'] ? parseCookies(post.headers['set-cookie'][0]) : '';
  // const { data } = post;
  // return { props: { post: data, cookie: parsedCookie && parsedCookie } };

  return {
    props: {
      post
    }
  };
});
/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Illustration);

/***/ }),

/***/ "Kwez":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("QivM");







const {
  Paragraph
} = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"];

const ExpiredValidation = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: visibleInput,
    1: setVisibleInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [email, onChangeEmail] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('');
  const onClickRequest = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setVisibleInput(true);
  }, []);
  const onFinish = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setIsLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/user/mail', {
      email
    }).then(() => {
      antd__WEBPACK_IMPORTED_MODULE_2__["Modal"].success({
        title: '이메일이 전송되었습니다',
        content: '이메일이 전송되었습니다. 메일확인을 부탁드려요!',
        okText: '확인'
      });
      setIsLoading(false);
      router.replace('/');
    }).catch(error => {
      console.error(error);
      antd__WEBPACK_IMPORTED_MODULE_2__["Modal"].error({
        title: '🤔 메일주소를 확인해 주세요.',
        content: '가입되지 않았거나 이미 인증이 완료된 계정입니다.',
        okText: '확인'
      });
      setIsLoading(false);
    });
  }, [email]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    justify: "center",
    align: "middle",
    style: {
      height: '100vh',
      textAlign: 'center'
    },
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: 24,
      md: 4,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Paragraph, {
        children: "\uAC00\uC785\uC2DC \uC804\uC1A1\uB41C \uC774\uBA54\uC77C\uB85C \uC778\uC99D\uC744 \uC9C4\uD589\uD574\uC8FC\uC138\uC694!!"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Paragraph, {
        children: "\uBA54\uC77C\uC744 \uBC1B\uC9C0 \uBABB\uD558\uC168\uB2E4\uBA74 \uB2E4\uC2DC \uC694\uCCAD\uD574 \uC8FC\uC138\uC694."
      }), visibleInput ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onFinish: onFinish,
        layout: "vertical",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            type: "email",
            onChange: onChangeEmail,
            value: email,
            size: "large",
            placeholder: "\uAC00\uC785\uB41C \uC774\uBA54\uC77C\uC744 \uC815\uD655\uD788 \uC785\uB825\uD574 \uC8FC\uC138\uC694."
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "primary",
            htmlType: "submit",
            loading: isLoading,
            size: "large",
            block: true,
            children: "\uC778\uC99D\uBA54\uC77C \uBCF4\uB0B4\uAE30"
          })
        })]
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        onClick: onClickRequest,
        size: "large",
        block: true,
        children: "\uC778\uC99D \uBA54\uC77C \uC694\uCCAD"
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ExpiredValidation);

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CHANGE_PROFILE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CHANGE_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHANGE_PROFILE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_INTRO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_INTRO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_INTRO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return logoutRequestAction; });
/* harmony import */ var _utils_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ibkh");

const initialState = {
  followLoading: false,
  // 팔로우 시도 중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도 중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도 중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도 중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도 중
  signUpDone: false,
  signUpError: null,
  changeProfileLoading: false,
  // 프로필 변경 시도중
  changeProfileDone: false,
  changeProfileError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  changeIntroLoading: false,
  // 자기소개 변경 시도중
  changeIntroDone: false,
  changeIntroError: null,
  removeFollowerLoading: false,
  // 팔로잉 가져오기 시도중
  removeFollowerDone: false,
  removeFollowerError: null
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_PROFILE_REQUEST = 'CHANGE_PROFILE_REQUEST';
const CHANGE_PROFILE_SUCCESS = 'CHANGE_PROFILE_SUCCESS';
const CHANGE_PROFILE_FAILURE = 'CHANGE_PROFILE_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const CHANGE_INTRO_REQUEST = 'CHANGE_INTRO_REQUEST';
const CHANGE_INTRO_SUCCESS = 'CHANGE_INTRO_SUCCESS';
const CHANGE_INTRO_FAILURE = 'CHANGE_INTRO_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const loginRequestAction = data => {
  return {
    type: 'LOG_IN_REQUEST',
    data
  };
};
const logoutRequestAction = data => {
  return {
    type: 'LOG_OUT_REQUEST',
    data
  };
};

const reducer = (state = initialState, action) => Object(_utils_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
  switch (action.type) {
    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.followDone = true;
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;

    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      break;

    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.unfollowDone = true;
      break;

    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;

    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.logInDone = true;
      draft.logOutLoading = false; // logOut state 초기화

      draft.logOutDone = false;
      draft.logOutError = null;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.logInLoading = false; // logIn state 초기화

      draft.logInDone = false;
      draft.logInError = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case CHANGE_PROFILE_REQUEST:
      draft.changeProfileLoading = true;
      draft.changeProfileError = null;
      draft.changeProfileDone = false;
      break;

    case CHANGE_PROFILE_SUCCESS:
      draft.changeProfileLoading = false;
      draft.changeProfileDone = true;
      break;

    case CHANGE_PROFILE_FAILURE:
      draft.changeProfileLoading = false;
      draft.changeProfileError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameError = null;
      draft.changeNicknameDone = false;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    case CHANGE_INTRO_REQUEST:
      draft.changeIntroLoading = true;
      draft.changeIntroError = null;
      draft.changeIntroDone = false;
      break;

    case CHANGE_INTRO_SUCCESS:
      draft.changeIntroLoading = false;
      draft.changeIntroDone = true;
      break;

    case CHANGE_INTRO_FAILURE:
      draft.changeIntroLoading = false;
      draft.changeIntroError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["H"] = (reducer);

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QivM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInput = initialState => {
  const {
    0: State,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setState(e.target.value);
  }, []);
  return [State, handler, setState];
};

/* harmony default export */ __webpack_exports__["a"] = (useInput);

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlNW":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XyoR":
/***/ (function(module, exports) {

module.exports = require("dayjs/locale/ko");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YcKA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__);






// interface AvatarWrapperProps {
//   src: string;
//   size: number;
//   marginRight: number;
//   theme?: Theme | undefined;
// }
const AvatarWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"])`
  ${({
  marginRight
}) => marginRight && `margin-right: ${marginRight}px;`}
`;
const {
  Text,
  Title
} = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"];

const UserAvatar = ({
  userData,
  marginRight = 0,
  size = 'default',
  type = 'text',
  level = 3,
  visibleNickname = true
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AvatarWrapper, {
      src: userData.profile && `http://localhost:3100/${userData.profile}`,
      size: size // @ts-ignore
      ,
      marginRight: marginRight,
      children: !userData.profile && userData.nickname[0]
    }), type === 'text' && visibleNickname && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Text, {
      children: userData.nickname
    }), type === 'title' && visibleNickname && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Title, {
      level: level,
      style: {
        display: 'inline-block'
      },
      children: userData.nickname
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (UserAvatar);

/***/ }),

/***/ "aYjl":
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "boVf":
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dfzq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetcher; });
/* unused harmony export fetcher2 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetcherPatch; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = 'http://localhost:3100';
axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
const fetcher = url => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(res => res.data);
const fetcher2 = url => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(res => res);
const fetcherPatch = (url, data) => axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(url, data).then(res => res.data);
/* unused harmony default export */ var _unused_webpack_default_export = (fetcher);

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "jYNn":
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DISLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return DISLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DISLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ADD_REPLY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ADD_REPLY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ADD_REPLY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return REMOVE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return REMOVE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return REMOVE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return REMOVE_IMAGE; });
/* unused harmony export addPost */
/* unused harmony export addComment */
/* harmony import */ var _utils_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ibkh");

const initialState = {
  imagePaths: [],
  addedPostId: null,
  addedCommentId: null,
  hasMorePosts: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  dislikePostLoading: false,
  dislikePostDone: false,
  dislikePostError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removedCommentId: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null
};
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const DISLIKE_POST_REQUEST = 'DISLIKE_POST_REQUEST';
const DISLIKE_POST_SUCCESS = 'DISLIKE_POST_SUCCESS';
const DISLIKE_POST_FAILURE = 'DISLIKE_POST_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const ADD_REPLY_REQUEST = 'ADD_REPLY_REQUEST';
const ADD_REPLY_SUCCESS = 'ADD_REPLY_SUCCESS';
const ADD_REPLY_FAILURE = 'ADD_REPLY_FAILURE';
const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const reducer = (state = initialState, action) => {
  return Object(_utils_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
    switch (action.type) {
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesError = null;
        draft.uploadImagesDone = false;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        {
          draft.imagePaths = draft.imagePaths.concat(action.data);
          draft.uploadImagesLoading = false;
          draft.uploadImagesDone = true;
          break;
        }

      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostError = null;
        draft.likePostDone = false;
        break;

      case LIKE_POST_SUCCESS:
        {
          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;

      case DISLIKE_POST_REQUEST:
        draft.dislikePostLoading = true;
        draft.dislikePostError = null;
        draft.dislikePostDone = false;
        break;

      case DISLIKE_POST_SUCCESS:
        {
          draft.dislikePostLoading = false;
          draft.dislikePostDone = true;
          break;
        }

      case DISLIKE_POST_FAILURE:
        draft.dislikePostLoading = false;
        draft.dislikePostError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostError = null;
        draft.addPostDone = false;
        break;

      case ADD_POST_SUCCESS:
        draft.addedPostId = action.data.id;
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostError = null;
        draft.removePostDone = false;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
      case ADD_REPLY_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentError = null;
        draft.addCommentDone = false;
        break;

      case ADD_COMMENT_SUCCESS:
      case ADD_REPLY_SUCCESS:
        {
          draft.addedCommentId = action.data.id;
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }

      case ADD_COMMENT_FAILURE:
      case ADD_REPLY_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      case REMOVE_COMMENT_REQUEST:
        draft.removeCommentLoading = true;
        draft.removeCommentError = null;
        draft.removeCommentDone = false;
        break;

      case REMOVE_COMMENT_SUCCESS:
        draft.removedCommentId = action.data.id;
        draft.removeCommentLoading = false;
        draft.removeCommentDone = true;
        break;

      case REMOVE_COMMENT_FAILURE:
        draft.removeCommentLoading = false;
        draft.removeCommentError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["z"] = (reducer);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });