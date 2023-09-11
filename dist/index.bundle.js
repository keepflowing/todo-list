/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/deepmind.jpg */ "./src/img/deepmind.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-family: 'Poppins';
    padding: 5rem;
    padding-top: 2rem;
}

.invisible {
    visibility: hidden;
}

#top-bar {
    align-items: center;
    display: flex;
    justify-content: space-between;
}

#menu {
    align-items: center;
    background-color: #F4FDFF;
    border-radius: 15px;
    box-shadow:
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    display: flex;
    gap: 10px;
    height: 50px;
    justify-content: start;
    padding: 15px;
    width: max-content;
}

#menu * {
    margin-bottom: 0;
    margin-top: 0;
}

#menu h1 {
    border-right: solid #dde1e2 1px;
    font-size: 28px;
    padding-left: 10px;
    padding-right: 20px;
}

#menu a {
    border-right: solid #dde1e2 1px;
    color: #585858;
    cursor: pointer;
    font-size: 24px;
    padding-left: 10px;
    padding-right: 20px;
}

#menu a:hover {
    color: black;
}

#add-list {
    color: #585858;
    cursor: pointer;
    font-size: 28px;
    padding-left: 10px;
    padding-right: 10px;
}

#add-list:hover {
    color: black;
}

#btn-container {
    align-items: center;
    background-color: #F4FDFF;
    border-radius: 15px;
    box-shadow:
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    display: flex;
    height: 50px;
    justify-content: space-around;
    padding: 15px;
    width: 120px;
}

#btn-container button {
    background-color: #e7e7e7;
    border: solid black 1px;
    border-radius: 100px;
    color: black;
    cursor: pointer;
    font-size: 18px;
    height: 45px;
    width: 45px;
}

#btn-container button:hover {
    background-color: #a2a2a2;
}

#content {
    align-items: start;
    display: flex;
    gap: 2rem;
    height: 600px;
    overflow: hidden;
    padding-top: 2rem;
}

#settings-page {
    align-items: center;
    background-color: #F4FDFF;
    border-radius: 15px;
    box-shadow:
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    display: flex;
    height: 400px;
    justify-content: center;
    width: 500px;
}

.column {
    background-color: #F4FDFF;
    border-radius: 15px;
    box-sizing: border-box;
    box-shadow:
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    flex: 0 0 auto;
    padding: 2rem;
    width: 370px;
}

.column h2 {
    font-size: 24px;
}

.add-list-item {
    border: solid black 1px;
    border-radius: 5px;
    color: #585858;
    cursor: pointer;
    font-size: 16px;
    height: 30px;
    margin-top: 10px;
    width: 30px;
}

.add-list-item:hover {
    color: black;
}

.todo {
    border: solid #dde1e2 1px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 5px;
    padding: 5px;
}

.todo:hover {
    background-color: #dde1e2;
    border-color: black;
}

.todo * {
    margin-bottom: 0;
    margin-top: 0;
}

dialog {
    border: none;
    border-radius: 10px;
    height: 600px;
    width: 400px;
}

dialog::backdrop {
    backdrop-filter: blur(10px);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,yDAA2C;IAC3C,sBAAsB;IACtB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB;sCACkC;IAClC,aAAa;IACb,SAAS;IACT,YAAY;IACZ,sBAAsB;IACtB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;IAC/B,cAAc;IACd,eAAe;IACf,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB;sCACkC;IAClC,aAAa;IACb,YAAY;IACZ,6BAA6B;IAC7B,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,uBAAuB;IACvB,oBAAoB;IACpB,YAAY;IACZ,eAAe;IACf,eAAe;IACf,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,SAAS;IACT,aAAa;IACb,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB;sCACkC;IAClC,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,sBAAsB;IACtB;sCACkC;IAClC,cAAc;IACd,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,2BAA2B;AAC/B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\nbody {\n    background-image: url('./img/deepmind.jpg');\n    font-family: 'Poppins';\n    padding: 5rem;\n    padding-top: 2rem;\n}\n\n.invisible {\n    visibility: hidden;\n}\n\n#top-bar {\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n}\n\n#menu {\n    align-items: center;\n    background-color: #F4FDFF;\n    border-radius: 15px;\n    box-shadow:\n    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n    display: flex;\n    gap: 10px;\n    height: 50px;\n    justify-content: start;\n    padding: 15px;\n    width: max-content;\n}\n\n#menu * {\n    margin-bottom: 0;\n    margin-top: 0;\n}\n\n#menu h1 {\n    border-right: solid #dde1e2 1px;\n    font-size: 28px;\n    padding-left: 10px;\n    padding-right: 20px;\n}\n\n#menu a {\n    border-right: solid #dde1e2 1px;\n    color: #585858;\n    cursor: pointer;\n    font-size: 24px;\n    padding-left: 10px;\n    padding-right: 20px;\n}\n\n#menu a:hover {\n    color: black;\n}\n\n#add-list {\n    color: #585858;\n    cursor: pointer;\n    font-size: 28px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n#add-list:hover {\n    color: black;\n}\n\n#btn-container {\n    align-items: center;\n    background-color: #F4FDFF;\n    border-radius: 15px;\n    box-shadow:\n    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n    display: flex;\n    height: 50px;\n    justify-content: space-around;\n    padding: 15px;\n    width: 120px;\n}\n\n#btn-container button {\n    background-color: #e7e7e7;\n    border: solid black 1px;\n    border-radius: 100px;\n    color: black;\n    cursor: pointer;\n    font-size: 18px;\n    height: 45px;\n    width: 45px;\n}\n\n#btn-container button:hover {\n    background-color: #a2a2a2;\n}\n\n#content {\n    align-items: start;\n    display: flex;\n    gap: 2rem;\n    height: 600px;\n    overflow: hidden;\n    padding-top: 2rem;\n}\n\n#settings-page {\n    align-items: center;\n    background-color: #F4FDFF;\n    border-radius: 15px;\n    box-shadow:\n    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n    display: flex;\n    height: 400px;\n    justify-content: center;\n    width: 500px;\n}\n\n.column {\n    background-color: #F4FDFF;\n    border-radius: 15px;\n    box-sizing: border-box;\n    box-shadow:\n    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n    flex: 0 0 auto;\n    padding: 2rem;\n    width: 370px;\n}\n\n.column h2 {\n    font-size: 24px;\n}\n\n.add-list-item {\n    border: solid black 1px;\n    border-radius: 5px;\n    color: #585858;\n    cursor: pointer;\n    font-size: 16px;\n    height: 30px;\n    margin-top: 10px;\n    width: 30px;\n}\n\n.add-list-item:hover {\n    color: black;\n}\n\n.todo {\n    border: solid #dde1e2 1px;\n    border-radius: 10px;\n    cursor: pointer;\n    margin-bottom: 5px;\n    padding: 5px;\n}\n\n.todo:hover {\n    background-color: #dde1e2;\n    border-color: black;\n}\n\n.todo * {\n    margin-bottom: 0;\n    margin-top: 0;\n}\n\ndialog {\n    border: none;\n    border-radius: 10px;\n    height: 600px;\n    width: 400px;\n}\n\ndialog::backdrop {\n    backdrop-filter: blur(10px);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller/addListItem.js":
/*!***************************************!*\
  !*** ./src/controller/addListItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/storage */ "./src/models/storage.js");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todo */ "./src/models/todo.js");



const addListItem = (id, name, desc) => {
    let newTodo = new _models_todo__WEBPACK_IMPORTED_MODULE_1__["default"](name, desc, "Low", 2024);
    let lists = (0,_models_storage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();
    for (let i in lists) {
        if (lists[i].id === id) {
            lists[i].todos.push(newTodo);
        }
    }
    (0,_models_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(lists);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addListItem);

/***/ }),

/***/ "./src/controller/createList.js":
/*!**************************************!*\
  !*** ./src/controller/createList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/storage */ "./src/models/storage.js");
/* harmony import */ var _models_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/list */ "./src/models/list.js");



const createList = (name) => {
    const lists = (0,_models_storage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();
    if(lists) {
        let newList = new _models_list__WEBPACK_IMPORTED_MODULE_1__["default"](name);
        lists.push(newList);
        (0,_models_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(lists);
    }
    else {
        let newList = new _models_list__WEBPACK_IMPORTED_MODULE_1__["default"](name);
        let list = [newList];
        (0,_models_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(list);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createList);

/***/ }),

/***/ "./src/models/list.js":
/*!****************************!*\
  !*** ./src/models/list.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/models/todo.js");


class List {
    constructor(name) {
        this.id = Math.floor(Math.random() * 100000);
        this.name = name;
        this.todos = [];
    }
    
    add_todo(todo) {
        if(!(todo instanceof _todo__WEBPACK_IMPORTED_MODULE_0__["default"])) {
            throw new TypeError("The object is not of class Todo!")
        }
        this.todos.push(todo);
    }
}

/***/ }),

/***/ "./src/models/storage.js":
/*!*******************************!*\
  !*** ./src/models/storage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLocalStorage: () => (/* binding */ getLocalStorage),
/* harmony export */   setLocalStorage: () => (/* binding */ setLocalStorage)
/* harmony export */ });
const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("lists"));
}

const setLocalStorage = (list) => {
    let listStr = JSON.stringify(list);
    localStorage.setItem("lists", listStr);
}



/***/ }),

/***/ "./src/models/todo.js":
/*!****************************!*\
  !*** ./src/models/todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(title, description, priority, dueDate) {
        this.id = Math.floor(Math.random() * 100000);
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.tasks = [];
        this.dueDate = dueDate;
    }
}

/***/ }),

/***/ "./src/view/createListDialog.js":
/*!**************************************!*\
  !*** ./src/view/createListDialog.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_createList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/createList */ "./src/controller/createList.js");
/* harmony import */ var _loadLists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadLists */ "./src/view/loadLists.js");



const createListDialog = () => {
    const dialog = document.createElement("dialog");
    const h1 = document.createElement("h1");
    const form = document.createElement("form")
    const name = document.createElement("input");
    const btn = document.createElement("input");
    name.type = "text";
    name.id = "name-input";
    form.appendChild(name);
    form.appendChild(btn);
    btn.type = "submit";
    btn.value = "Submit";


    h1.innerText = "hello world";
    dialog.appendChild(h1);
    dialog.appendChild(form);

    btn.addEventListener("click", () => {
        (0,_controller_createList__WEBPACK_IMPORTED_MODULE_0__["default"])(name.value);
        (0,_loadLists__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });


    return dialog;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createListDialog);

/***/ }),

/***/ "./src/view/createTodoDialog.js":
/*!**************************************!*\
  !*** ./src/view/createTodoDialog.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_addListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/addListItem */ "./src/controller/addListItem.js");
/* harmony import */ var _loadLists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadLists */ "./src/view/loadLists.js");



const createTodoDialog = (id) => {
    let oldDiag = document.querySelector("#create-todo-dialog");
    if(oldDiag !== null) {
        document.body.removeChild(oldDiag);
    }
    const dialog = document.createElement("dialog");
    const h1 = document.createElement("h1");
    const form = document.createElement("form")
    const name = document.createElement("input");
    const desc = document.createElement("input");
    const btn = document.createElement("input");
    dialog.id = "create-todo-dialog";
    name.type = "text";
    name.id = "name-input";
    form.appendChild(name);
    desc.type = "text";
    desc.id = "desc-input";
    form.appendChild(desc);
    form.appendChild(btn);
    btn.type = "submit";
    btn.value = "Submit";


    h1.innerText = "hello world";
    dialog.appendChild(h1);
    dialog.appendChild(form);

    btn.addEventListener("click", () => {
        (0,_controller_addListItem__WEBPACK_IMPORTED_MODULE_0__["default"])(id, name.value, desc.value);
        (0,_loadLists__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });


    return dialog;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoDialog);

/***/ }),

/***/ "./src/view/loadBar.js":
/*!*****************************!*\
  !*** ./src/view/loadBar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadLists */ "./src/view/loadLists.js");
/* harmony import */ var _loadSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadSettings */ "./src/view/loadSettings.js");
/* harmony import */ var _createListDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createListDialog */ "./src/view/createListDialog.js");




const loadScroll = (topBar) => {

    const btnContainer = document.createElement("div");
    btnContainer.id = "btn-container"

    const leftBtn = document.createElement("button");
    leftBtn.id = "left-btn";
    leftBtn.innerText = "<"

    leftBtn.addEventListener("click", () => {
        content.scroll({
            left: content.scrollLeft - 400,
            behavior: "smooth",
          });
    });

    const rightBtn = document.createElement("button");
    rightBtn.id = "right-btn";
    rightBtn.innerText = ">"

    rightBtn.addEventListener("click", () => {
        content.scroll({
            left: content.scrollLeft + 400,
            behavior: "smooth",
          });
    });

    btnContainer.appendChild(leftBtn);
    btnContainer.appendChild(rightBtn);
    topBar.appendChild(btnContainer);

    return btnContainer;
}

const loadBar = () => {
    const dialog = (0,_createListDialog__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const topBar = document.createElement("div");
    topBar.id = "top-bar";

    const nav = document.createElement('nav');
    nav.id = "menu";
    
    const h1 = document.createElement('h1');
    h1.innerText = "Todo List";
    nav.appendChild(h1);
    
    const navLinks = ["Home", "Lists", "Settings"]
    for (let i = 0; i < navLinks.length; i++) {
        let link = document.createElement("a");
        link.id = `nav${navLinks[i]}`;
        link.innerText = navLinks[i];

        nav.appendChild(link)
        navLinks[i] = link;
    }

    const addList = document.createElement("div");
    addList.id = "add-list";
    addList.innerText = "+";

    nav.appendChild(addList);

    const scroll = loadScroll(topBar);

    topBar.appendChild(nav);
    topBar.appendChild(scroll);

    navLinks[1].addEventListener("click", () => {
        (0,_loadLists__WEBPACK_IMPORTED_MODULE_0__["default"])();
        scroll.classList.remove("invisible");
    });

    navLinks[2].addEventListener("click", () => {
        (0,_loadSettings__WEBPACK_IMPORTED_MODULE_1__["default"])();
        scroll.classList.add("invisible");
    });

    addList.addEventListener("click", () => {
        document.body.appendChild(dialog);
        dialog.showModal();
    });

    document.body.appendChild(topBar);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadBar);

/***/ }),

/***/ "./src/view/loadListItems.js":
/*!***********************************!*\
  !*** ./src/view/loadListItems.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadListItems = (list) => {
    let id = list.id;
    const listDOM = document.querySelector(`#l${id} .listContainer`);
    for (let i = 0; i < list.todos.length; i++) {
        let div = document.createElement("div");
        div.classList.add("todo");
        let todo = list.todos[i];
        div.innerHTML = `
        <h3>${todo.title}</h3>
        <p>${todo.description}</p>
        <p>${todo.dueDate}</p>
        <p>${todo.priority}</p>`
        listDOM.appendChild(div);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadListItems);

/***/ }),

/***/ "./src/view/loadLists.js":
/*!*******************************!*\
  !*** ./src/view/loadLists.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/storage */ "./src/models/storage.js");
/* harmony import */ var _loadListItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadListItems */ "./src/view/loadListItems.js");
/* harmony import */ var _createTodoDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTodoDialog */ "./src/view/createTodoDialog.js");




const loadLists = () => {
    let list = (0,_models_storage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();
    if (list === null) {
        list = []
    }
    content.innerHTML = "";
    content.scroll(0,0);
    for (let i = 0; i < list.length; i++) {
        let currList = list[i];
        let column = document.createElement("div");
        column.classList.add("column");
        column.id = "l" + currList.id;
        let h2 = document.createElement("h2");
        h2.innerText = currList.name;
        column.appendChild(h2);

        let listsDiv = document.createElement("div");
        listsDiv.classList.add("listContainer");

        column.append(listsDiv);

        let btn = document.createElement("button");
        btn.classList = "add-list-item"
        btn.innerText = "+";

        btn.addEventListener("click", () => {
            let dialog = (0,_createTodoDialog__WEBPACK_IMPORTED_MODULE_2__["default"])(currList.id);
            document.body.appendChild(dialog);
            dialog.showModal();
        })

        column.append(btn);

        content.appendChild(column);

        (0,_loadListItems__WEBPACK_IMPORTED_MODULE_1__["default"])(currList);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadLists);

/***/ }),

/***/ "./src/view/loadSettings.js":
/*!**********************************!*\
  !*** ./src/view/loadSettings.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadSettings = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const settingsPage = document.createElement("div");
    settingsPage.id = "settings-page";

    const deleteLocal = document.createElement("button");
    deleteLocal.id = "delete-local";
    deleteLocal.innerText = "Delete Local Storage";

    deleteLocal.addEventListener("click", () => {
        localStorage.removeItem("lists");
        location.reload();
    });

    settingsPage.append(deleteLocal);
    content.appendChild(settingsPage);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSettings);

/***/ }),

/***/ "./src/img/deepmind.jpg":
/*!******************************!*\
  !*** ./src/img/deepmind.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9aa3b35909770c307cf4.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _view_loadBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/loadBar */ "./src/view/loadBar.js");
/* harmony import */ var _view_loadLists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/loadLists */ "./src/view/loadLists.js");




(0,_view_loadBar__WEBPACK_IMPORTED_MODULE_1__["default"])();

const content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);

(0,_view_loadLists__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZ0I7QUFDSTs7QUFFekMseURBQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBLDJEQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci9hZGRMaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci9jcmVhdGVMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L2NyZWF0ZUxpc3REaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvY3JlYXRlVG9kb0RpYWxvZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9sb2FkQmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L2xvYWRMaXN0SXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvbG9hZExpc3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L2xvYWRTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvZGVlcG1pbmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIHBhZGRpbmc6IDVyZW07XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cbi5pbnZpc2libGUge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuI3RvcC1iYXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNtZW51IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEZERkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3gtc2hhZG93OlxuICAgIDAuM2VtIDAuM2VtIDFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbiNtZW51ICoge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuI21lbnUgaDEge1xuICAgIGJvcmRlci1yaWdodDogc29saWQgI2RkZTFlMiAxcHg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4jbWVudSBhIHtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkICNkZGUxZTIgMXB4O1xuICAgIGNvbG9yOiAjNTg1ODU4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbiNtZW51IGE6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuI2FkZC1saXN0IHtcbiAgICBjb2xvcjogIzU4NTg1ODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4jYWRkLWxpc3Q6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuI2J0bi1jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RkRGRjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6XG4gICAgMC4zZW0gMC4zZW0gMWVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHdpZHRoOiAxMjBweDtcbn1cblxuI2J0bi1jb250YWluZXIgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbn1cblxuI2J0bi1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJhMmEyO1xufVxuXG4jY29udGVudCB7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAycmVtO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cblxuI3NldHRpbmdzLXBhZ2Uge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RkRGRjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6XG4gICAgMC4zZW0gMC4zZW0gMWVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwMHB4O1xufVxuXG4uY29sdW1uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGREZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OlxuICAgIDAuM2VtIDAuM2VtIDFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICB3aWR0aDogMzcwcHg7XG59XG5cbi5jb2x1bW4gaDIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmFkZC1saXN0LWl0ZW0ge1xuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogIzU4NTg1ODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xufVxuXG4uYWRkLWxpc3QtaXRlbTpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4udG9kbyB7XG4gICAgYm9yZGVyOiBzb2xpZCAjZGRlMWUyIDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4udG9kbzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZTFlMjtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4udG9kbyAqIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbmRpYWxvZyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICB3aWR0aDogNDAwcHg7XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSx5REFBMkM7SUFDM0Msc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CO3NDQUNrQztJQUNsQyxhQUFhO0lBQ2IsU0FBUztJQUNULFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQjtzQ0FDa0M7SUFDbEMsYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0lBQ1QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQjtzQ0FDa0M7SUFDbEMsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCO3NDQUNrQztJQUNsQyxjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9kZWVwbWluZC5qcGcnKTtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgcGFkZGluZzogNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxufVxcblxcbi5pbnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiN0b3AtYmFyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEZERkY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6XFxuICAgIDAuM2VtIDAuM2VtIDFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbiNtZW51ICoge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4jbWVudSBoMSB7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgI2RkZTFlMiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jbWVudSBhIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjZGRlMWUyIDFweDtcXG4gICAgY29sb3I6ICM1ODU4NTg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbiNtZW51IGE6aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNhZGQtbGlzdCB7XFxuICAgIGNvbG9yOiAjNTg1ODU4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4jYWRkLWxpc3Q6aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNidG4tY29udGFpbmVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RkRGRjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzpcXG4gICAgMC4zZW0gMC4zZW0gMWVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG4jYnRuLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgd2lkdGg6IDQ1cHg7XFxufVxcblxcbiNidG4tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMmEyYTI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG4jc2V0dGluZ3MtcGFnZSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEZERkY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6XFxuICAgIDAuM2VtIDAuM2VtIDFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGREZGO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2hhZG93OlxcbiAgICAwLjNlbSAwLjNlbSAxZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgd2lkdGg6IDM3MHB4O1xcbn1cXG5cXG4uY29sdW1uIGgyIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uYWRkLWxpc3QtaXRlbSB7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiAjNTg1ODU4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmFkZC1saXN0LWl0ZW06aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50b2RvIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAjZGRlMWUyIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRlMWUyO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udG9kbyAqIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2V0TG9jYWxTdG9yYWdlLCBzZXRMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3JhZ2VcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuLi9tb2RlbHMvdG9kb1wiO1xuXG5jb25zdCBhZGRMaXN0SXRlbSA9IChpZCwgbmFtZSwgZGVzYykgPT4ge1xuICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8obmFtZSwgZGVzYywgXCJMb3dcIiwgMjAyNCk7XG4gICAgbGV0IGxpc3RzID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgZm9yIChsZXQgaSBpbiBsaXN0cykge1xuICAgICAgICBpZiAobGlzdHNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICBsaXN0c1tpXS50b2Rvcy5wdXNoKG5ld1RvZG8pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldExvY2FsU3RvcmFnZShsaXN0cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZExpc3RJdGVtOyIsImltcG9ydCB7IGdldExvY2FsU3RvcmFnZSwgc2V0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL21vZGVscy9zdG9yYWdlXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vbW9kZWxzL2xpc3RcIjtcblxuY29uc3QgY3JlYXRlTGlzdCA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgbGlzdHMgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICBpZihsaXN0cykge1xuICAgICAgICBsZXQgbmV3TGlzdCA9IG5ldyBMaXN0KG5hbWUpO1xuICAgICAgICBsaXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UobGlzdHMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IG5ld0xpc3QgPSBuZXcgTGlzdChuYW1lKTtcbiAgICAgICAgbGV0IGxpc3QgPSBbbmV3TGlzdF07XG4gICAgICAgIHNldExvY2FsU3RvcmFnZShsaXN0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUxpc3Q7IiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMuaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuICAgIFxuICAgIGFkZF90b2RvKHRvZG8pIHtcbiAgICAgICAgaWYoISh0b2RvIGluc3RhbmNlb2YgVG9kbykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgb2JqZWN0IGlzIG5vdCBvZiBjbGFzcyBUb2RvIVwiKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG59IiwiY29uc3QgZ2V0TG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdHNcIikpO1xufVxuXG5jb25zdCBzZXRMb2NhbFN0b3JhZ2UgPSAobGlzdCkgPT4ge1xuICAgIGxldCBsaXN0U3RyID0gSlNPTi5zdHJpbmdpZnkobGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0c1wiLCBsaXN0U3RyKTtcbn1cblxuZXhwb3J0IHtnZXRMb2NhbFN0b3JhZ2UsIHNldExvY2FsU3RvcmFnZX07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cbn0iLCJpbXBvcnQgY3JlYXRlTGlzdCBmcm9tIFwiLi4vY29udHJvbGxlci9jcmVhdGVMaXN0XCI7XG5pbXBvcnQgbG9hZExpc3RzIGZyb20gXCIuL2xvYWRMaXN0c1wiO1xuXG5jb25zdCBjcmVhdGVMaXN0RGlhbG9nID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmFtZS5pZCA9IFwibmFtZS1pbnB1dFwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChidG4pO1xuICAgIGJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBidG4udmFsdWUgPSBcIlN1Ym1pdFwiO1xuXG5cbiAgICBoMS5pbm5lclRleHQgPSBcImhlbGxvIHdvcmxkXCI7XG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGgxKTtcbiAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY3JlYXRlTGlzdChuYW1lLnZhbHVlKTtcbiAgICAgICAgbG9hZExpc3RzKCk7XG4gICAgfSk7XG5cblxuICAgIHJldHVybiBkaWFsb2c7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUxpc3REaWFsb2c7IiwiaW1wb3J0IGFkZExpc3RJdGVtIGZyb20gXCIuLi9jb250cm9sbGVyL2FkZExpc3RJdGVtXCI7XG5pbXBvcnQgbG9hZExpc3RzIGZyb20gXCIuL2xvYWRMaXN0c1wiO1xuXG5jb25zdCBjcmVhdGVUb2RvRGlhbG9nID0gKGlkKSA9PiB7XG4gICAgbGV0IG9sZERpYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZS10b2RvLWRpYWxvZ1wiKTtcbiAgICBpZihvbGREaWFnICE9PSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob2xkRGlhZyk7XG4gICAgfVxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkaWFsb2cuaWQgPSBcImNyZWF0ZS10b2RvLWRpYWxvZ1wiO1xuICAgIG5hbWUudHlwZSA9IFwidGV4dFwiO1xuICAgIG5hbWUuaWQgPSBcIm5hbWUtaW5wdXRcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGRlc2MudHlwZSA9IFwidGV4dFwiO1xuICAgIGRlc2MuaWQgPSBcImRlc2MtaW5wdXRcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2MpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICBidG4udHlwZSA9IFwic3VibWl0XCI7XG4gICAgYnRuLnZhbHVlID0gXCJTdWJtaXRcIjtcblxuXG4gICAgaDEuaW5uZXJUZXh0ID0gXCJoZWxsbyB3b3JsZFwiO1xuICAgIGRpYWxvZy5hcHBlbmRDaGlsZChoMSk7XG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFkZExpc3RJdGVtKGlkLCBuYW1lLnZhbHVlLCBkZXNjLnZhbHVlKTtcbiAgICAgICAgbG9hZExpc3RzKCk7XG4gICAgfSk7XG5cblxuICAgIHJldHVybiBkaWFsb2c7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvZG9EaWFsb2c7IiwiaW1wb3J0IGxvYWRMaXN0cyBmcm9tIFwiLi9sb2FkTGlzdHNcIjtcbmltcG9ydCBsb2FkU2V0dGluZ3MgZnJvbSBcIi4vbG9hZFNldHRpbmdzXCI7XG5pbXBvcnQgY3JlYXRlTGlzdERpYWxvZyBmcm9tIFwiLi9jcmVhdGVMaXN0RGlhbG9nXCI7XG5cbmNvbnN0IGxvYWRTY3JvbGwgPSAodG9wQmFyKSA9PiB7XG5cbiAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0bkNvbnRhaW5lci5pZCA9IFwiYnRuLWNvbnRhaW5lclwiXG5cbiAgICBjb25zdCBsZWZ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZWZ0QnRuLmlkID0gXCJsZWZ0LWJ0blwiO1xuICAgIGxlZnRCdG4uaW5uZXJUZXh0ID0gXCI8XCJcblxuICAgIGxlZnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGVudC5zY3JvbGwoe1xuICAgICAgICAgICAgbGVmdDogY29udGVudC5zY3JvbGxMZWZ0IC0gNDAwLFxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByaWdodEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmlnaHRCdG4uaWQgPSBcInJpZ2h0LWJ0blwiO1xuICAgIHJpZ2h0QnRuLmlubmVyVGV4dCA9IFwiPlwiXG5cbiAgICByaWdodEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250ZW50LnNjcm9sbCh7XG4gICAgICAgICAgICBsZWZ0OiBjb250ZW50LnNjcm9sbExlZnQgKyA0MDAsXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0QnRuKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRCdG4pO1xuICAgIHRvcEJhci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuXG4gICAgcmV0dXJuIGJ0bkNvbnRhaW5lcjtcbn1cblxuY29uc3QgbG9hZEJhciA9ICgpID0+IHtcbiAgICBjb25zdCBkaWFsb2cgPSBjcmVhdGVMaXN0RGlhbG9nKCk7XG4gICAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b3BCYXIuaWQgPSBcInRvcC1iYXJcIjtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5pZCA9IFwibWVudVwiO1xuICAgIFxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS5pbm5lclRleHQgPSBcIlRvZG8gTGlzdFwiO1xuICAgIG5hdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgXG4gICAgY29uc3QgbmF2TGlua3MgPSBbXCJIb21lXCIsIFwiTGlzdHNcIiwgXCJTZXR0aW5nc1wiXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2TGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay5pZCA9IGBuYXYke25hdkxpbmtzW2ldfWA7XG4gICAgICAgIGxpbmsuaW5uZXJUZXh0ID0gbmF2TGlua3NbaV07XG5cbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKGxpbmspXG4gICAgICAgIG5hdkxpbmtzW2ldID0gbGluaztcbiAgICB9XG5cbiAgICBjb25zdCBhZGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRMaXN0LmlkID0gXCJhZGQtbGlzdFwiO1xuICAgIGFkZExpc3QuaW5uZXJUZXh0ID0gXCIrXCI7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoYWRkTGlzdCk7XG5cbiAgICBjb25zdCBzY3JvbGwgPSBsb2FkU2Nyb2xsKHRvcEJhcik7XG5cbiAgICB0b3BCYXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICB0b3BCYXIuYXBwZW5kQ2hpbGQoc2Nyb2xsKTtcblxuICAgIG5hdkxpbmtzWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxvYWRMaXN0cygpO1xuICAgICAgICBzY3JvbGwuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICB9KTtcblxuICAgIG5hdkxpbmtzWzJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxvYWRTZXR0aW5ncygpO1xuICAgICAgICBzY3JvbGwuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICB9KTtcblxuICAgIGFkZExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2cpO1xuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvcEJhcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRCYXI7IiwiY29uc3QgbG9hZExpc3RJdGVtcyA9IChsaXN0KSA9PiB7XG4gICAgbGV0IGlkID0gbGlzdC5pZDtcbiAgICBjb25zdCBsaXN0RE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2wke2lkfSAubGlzdENvbnRhaW5lcmApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICBsZXQgdG9kbyA9IGxpc3QudG9kb3NbaV07XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMz4ke3RvZG8udGl0bGV9PC9oMz5cbiAgICAgICAgPHA+JHt0b2RvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPHA+JHt0b2RvLmR1ZURhdGV9PC9wPlxuICAgICAgICA8cD4ke3RvZG8ucHJpb3JpdHl9PC9wPmBcbiAgICAgICAgbGlzdERPTS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZExpc3RJdGVtczsiLCJpbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2UsIHNldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9tb2RlbHMvc3RvcmFnZVwiO1xuaW1wb3J0IGxvYWRMaXN0SXRlbXMgZnJvbSBcIi4vbG9hZExpc3RJdGVtc1wiO1xuaW1wb3J0IGNyZWF0ZVRvZG9EaWFsb2cgZnJvbSBcIi4vY3JlYXRlVG9kb0RpYWxvZ1wiO1xuXG5jb25zdCBsb2FkTGlzdHMgPSAoKSA9PiB7XG4gICAgbGV0IGxpc3QgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICBpZiAobGlzdCA9PT0gbnVsbCkge1xuICAgICAgICBsaXN0ID0gW11cbiAgICB9XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnRlbnQuc2Nyb2xsKDAsMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyTGlzdCA9IGxpc3RbaV07XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImNvbHVtblwiKTtcbiAgICAgICAgY29sdW1uLmlkID0gXCJsXCIgKyBjdXJyTGlzdC5pZDtcbiAgICAgICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoMi5pbm5lclRleHQgPSBjdXJyTGlzdC5uYW1lO1xuICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoaDIpO1xuXG4gICAgICAgIGxldCBsaXN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxpc3RzRGl2LmNsYXNzTGlzdC5hZGQoXCJsaXN0Q29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbHVtbi5hcHBlbmQobGlzdHNEaXYpO1xuXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidG4uY2xhc3NMaXN0ID0gXCJhZGQtbGlzdC1pdGVtXCJcbiAgICAgICAgYnRuLmlubmVyVGV4dCA9IFwiK1wiO1xuXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRpYWxvZyA9IGNyZWF0ZVRvZG9EaWFsb2coY3Vyckxpc3QuaWQpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2cpO1xuICAgICAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbHVtbi5hcHBlbmQoYnRuKTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbHVtbik7XG5cbiAgICAgICAgbG9hZExpc3RJdGVtcyhjdXJyTGlzdCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTGlzdHM7IiwiY29uc3QgbG9hZFNldHRpbmdzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3Qgc2V0dGluZ3NQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZXR0aW5nc1BhZ2UuaWQgPSBcInNldHRpbmdzLXBhZ2VcIjtcblxuICAgIGNvbnN0IGRlbGV0ZUxvY2FsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVMb2NhbC5pZCA9IFwiZGVsZXRlLWxvY2FsXCI7XG4gICAgZGVsZXRlTG9jYWwuaW5uZXJUZXh0ID0gXCJEZWxldGUgTG9jYWwgU3RvcmFnZVwiO1xuXG4gICAgZGVsZXRlTG9jYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsaXN0c1wiKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBzZXR0aW5nc1BhZ2UuYXBwZW5kKGRlbGV0ZUxvY2FsKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNldHRpbmdzUGFnZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRTZXR0aW5nczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkQmFyIGZyb20gJy4vdmlldy9sb2FkQmFyJztcbmltcG9ydCBsb2FkTGlzdHMgZnJvbSAnLi92aWV3L2xvYWRMaXN0cyc7XG5cbmxvYWRCYXIoKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250ZW50LmlkID0gXCJjb250ZW50XCI7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5sb2FkTGlzdHMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=