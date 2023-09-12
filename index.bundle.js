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

.prio {
    border: solid black 1px;
    border-radius: 10px;
    height: 12px;
    width: 12px;
}

.high {
    background-color: red;
}

.medium {
    background-color: yellow;
}

.low {
    background-color: green;
}

.none {
    background-color: blue;
}

.invisible {
    visibility: hidden;
}

#top-bar {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
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

#content {
    align-items: start;
    display: flex;
    height: 700px;
    overflow: hidden;
    padding-top: 35px;
    width: 1740px;
}

.column {
    background-color: #F4FDFF;
    border-radius: 15px;
    box-sizing: border-box;
    box-shadow:
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    flex: 0 0 auto;
    margin-right: 35px;
    padding: 32px;
    width: 400px;
}

#content:last-child {
    margin-right: 0px;
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

.todo-top {
    align-items: center;
    display: flex;
    gap: 8px;
    justify-content: space-between;
    margin-left: 5px;
    margin-right: 10px;
}

.todo-desc {
    margin-left: 10px;
    margin-right: 10px;
}

.display-none {
    display: none;
}

dialog {
    border: none;
    border-radius: 10px;
    height: 320px;
    padding: 25px;
    width: 300px;
}

dialog::backdrop {
    backdrop-filter: blur(10px);
}

form * {
    display: block;
    margin: 5px;
}

form input {
    border: solid #dde1e2 2px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    height: 24px;
    margin-top: 10px;
    padding: 2px;
}

form input:focus {
    border: solid black 2px;
    outline: none;
}

form input[type="submit"] {
    height: 35px;
} 

form label {
    display: inline-block;
    font-size: 20px;
}

form select {
    display: inline-block;
    font-size: 18px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\nbody {\n    background-image: url('./img/deepmind.jpg');\n    font-family: 'Poppins';\n    padding: 5rem;\n    padding-top: 2rem;\n}\n\n.prio {\n    border: solid black 1px;\n    border-radius: 10px;\n    height: 12px;\n    width: 12px;\n}\n\n.high {\n    background-color: red;\n}\n\n.medium {\n    background-color: yellow;\n}\n\n.low {\n    background-color: green;\n}\n\n.none {\n    background-color: blue;\n}\n\n.invisible {\n    visibility: hidden;\n}\n\n#top-bar {\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    margin-right: 10px;\n}\n\n#menu {\n    align-items: center;\n    background-color: #F4FDFF;\n    border-radius: 15px;\n    box-shadow:\n    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n    display: flex;\n    gap: 10px;\n    height: 50px;\n    justify-content: start;\n    padding: 15px;\n    width: max-content;\n}\n\n#menu * {\n    margin-bottom: 0;\n    margin-top: 0;\n}\n\n#menu h1 {\n    border-right: solid #dde1e2 1px;\n    font-size: 28px;\n    padding-left: 10px;\n    padding-right: 20px;\n}\n\n#menu a {\n    border-right: solid #dde1e2 1px;\n    color: #585858;\n    cursor: pointer;\n    font-size: 24px;\n    padding-left: 10px;\n    padding-right: 20px;\n}\n\n#menu a:hover {\n    color: black;\n}\n\n#add-list {\n    color: #585858;\n    cursor: pointer;\n    font-size: 28px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n#add-list:hover {\n    color: black;\n}\n\n#btn-container {\n    align-items: center;\n    background-color: #F4FDFF;\n    border-radius: 15px;\n    box-shadow:\n    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n    display: flex;\n    height: 50px;\n    justify-content: space-around;\n    padding: 15px;\n    width: 120px;\n}\n\n#btn-container button {\n    background-color: #e7e7e7;\n    border: solid black 1px;\n    border-radius: 100px;\n    color: black;\n    cursor: pointer;\n    font-size: 18px;\n    height: 45px;\n    width: 45px;\n}\n\n#btn-container button:hover {\n    background-color: #a2a2a2;\n}\n\n#settings-page {\n    align-items: center;\n    background-color: #F4FDFF;\n    border-radius: 15px;\n    box-shadow:\n    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n    display: flex;\n    height: 400px;\n    justify-content: center;\n    width: 500px;\n}\n\n#content {\n    align-items: start;\n    display: flex;\n    height: 700px;\n    overflow: hidden;\n    padding-top: 35px;\n    width: 1740px;\n}\n\n.column {\n    background-color: #F4FDFF;\n    border-radius: 15px;\n    box-sizing: border-box;\n    box-shadow:\n    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n    flex: 0 0 auto;\n    margin-right: 35px;\n    padding: 32px;\n    width: 400px;\n}\n\n#content:last-child {\n    margin-right: 0px;\n}\n\n.column h2 {\n    font-size: 24px;\n}\n\n.add-list-item {\n    border: solid black 1px;\n    border-radius: 5px;\n    color: #585858;\n    cursor: pointer;\n    font-size: 16px;\n    height: 30px;\n    margin-top: 10px;\n    width: 30px;\n}\n\n.add-list-item:hover {\n    color: black;\n}\n\n.todo {\n    border: solid #dde1e2 1px;\n    border-radius: 10px;\n    cursor: pointer;\n    margin-bottom: 5px;\n    padding: 5px;\n}\n\n.todo:hover {\n    background-color: #dde1e2;\n    border-color: black;\n}\n\n.todo * {\n    margin-bottom: 0;\n    margin-top: 0;\n}\n\n.todo-top {\n    align-items: center;\n    display: flex;\n    gap: 8px;\n    justify-content: space-between;\n    margin-left: 5px;\n    margin-right: 10px;\n}\n\n.todo-desc {\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n.display-none {\n    display: none;\n}\n\ndialog {\n    border: none;\n    border-radius: 10px;\n    height: 320px;\n    padding: 25px;\n    width: 300px;\n}\n\ndialog::backdrop {\n    backdrop-filter: blur(10px);\n}\n\nform * {\n    display: block;\n    margin: 5px;\n}\n\nform input {\n    border: solid #dde1e2 2px;\n    border-radius: 10px;\n    cursor: pointer;\n    font-size: 20px;\n    height: 24px;\n    margin-top: 10px;\n    padding: 2px;\n}\n\nform input:focus {\n    border: solid black 2px;\n    outline: none;\n}\n\nform input[type=\"submit\"] {\n    height: 35px;\n} \n\nform label {\n    display: inline-block;\n    font-size: 20px;\n}\n\nform select {\n    display: inline-block;\n    font-size: 18px;\n}"],"sourceRoot":""}]);
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



const addListItem = (id, name, desc, prio, date) => {
    let newTodo = new _models_todo__WEBPACK_IMPORTED_MODULE_1__["default"](name, desc, prio, date);
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
    let newList = new _models_list__WEBPACK_IMPORTED_MODULE_1__["default"](name);
    if(lists) {
        lists.push(newList);
        (0,_models_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(lists);
    }
    else {
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class List {
    constructor(name) {
        this.id = Math.floor(Math.random() * 100000);
        this.name = name;
        this.todos = [];
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
    constructor(title, description, priority, dueDate) {
        this.id = Math.floor(Math.random() * 100000);
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

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
    name.placeholder = "Title..."
    name.required = true;
    form.appendChild(name);
    form.appendChild(btn);
    btn.type = "submit";
    btn.value = "Submit";


    h1.innerText = "Create List";
    dialog.appendChild(h1);
    dialog.appendChild(form);

    btn.addEventListener("click", () => {
        if (name.value.length > 0) {
            (0,_controller_createList__WEBPACK_IMPORTED_MODULE_0__["default"])(name.value);
            (0,_loadLists__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
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
    const date = document.createElement("input");
    const prio = document.createElement("select");
    const btn = document.createElement("input");

    prio.innerHTML = `
    <option value="None">None</option>
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>`;

    dialog.id = "create-todo-dialog";
    
    name.type = "text";
    name.placeholder = "Title..."
    name.maxLength = 15;
    name.required = true;
    form.appendChild(name);
    
    desc.type = "text";
    desc.placeholder = "Description..."
    desc.maxLength = 25;
    form.appendChild(desc);
    
    date.type = "date";
    date.required = true;
    form.appendChild(date);
    
    let label = document.createElement("label");
    prio.id = "prio";
    label.for = "prio";
    label.innerText = "Priority:"
    form.appendChild(label);
    form.appendChild(prio);

    btn.type = "submit";
    btn.value = "Submit";
    form.appendChild(btn);


    h1.innerText = "Create Todo:";
    dialog.appendChild(h1);
    dialog.appendChild(form);

    btn.addEventListener("click", () => {
        if (name.value.length > 0 && date.value !== "") {
            (0,_controller_addListItem__WEBPACK_IMPORTED_MODULE_0__["default"])(id, name.value, desc.value, prio.value, date.value);
            (0,_loadLists__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
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
            left: content.scrollLeft - 435,
            behavior: "smooth",
          });
    });

    const rightBtn = document.createElement("button");
    rightBtn.id = "right-btn";
    rightBtn.innerText = ">"

    rightBtn.addEventListener("click", () => {
        content.scroll({
            left: content.scrollLeft + 435,
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
        
        let prioDiv = document.createElement("div");
        prioDiv.classList.add("prio");
        if(todo.priority === "High") {
            prioDiv.classList.add("high");
        }
        else if (todo.priority === "Medium"){
            prioDiv.classList.add("medium");
        }
        else if (todo.priority === "Low"){
            prioDiv.classList.add("low");
        }
        else {
            prioDiv.classList.add("none");
        }

        let todoTop = document.createElement("div");
        let todoTitle = document.createElement("div");

        todoTop.classList.add("todo-top");
        todoTitle.classList.add("todo-top");

        div.appendChild(todoTop);
        todoTop.appendChild(todoTitle);
        todoTitle.appendChild(prioDiv);

        let h3 = document.createElement("h3");
        h3.innerText = todo.title;
        todoTitle.appendChild(h3)

        let p = document.createElement("p");
        p.innerText = todo.dueDate;
        todoTop.appendChild(p);

        let todoHidden = document.createElement("div");
        todoHidden.classList.add("todo-desc");
        todoHidden.classList.add("display-none");

        todoHidden.innerHTML = `
        <p>${todo.description}</p>
        <p>Priority: ${todo.priority}</p>`;
        div.appendChild(todoHidden);

        div.addEventListener("click", () => {
            todoHidden.classList.toggle("display-none");
        });
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
        let topDiv = document.createElement("div");
        topDiv.classList.add("todo-top");
        let h2 = document.createElement("h2");
        h2.innerText = currList.name;
        topDiv.appendChild(h2);
        column.appendChild(topDiv);

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

        topDiv.append(btn);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YscUhBQXFIO0FBQ3JILHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFB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QTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZ0I7QUFDSTs7QUFFekMseURBQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBLDJEQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci9hZGRMaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci9jcmVhdGVMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L2NyZWF0ZUxpc3REaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvY3JlYXRlVG9kb0RpYWxvZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9sb2FkQmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L2xvYWRMaXN0SXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvbG9hZExpc3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L2xvYWRTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvZGVlcG1pbmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIHBhZGRpbmc6IDVyZW07XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cbi5wcmlvIHtcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICB3aWR0aDogMTJweDtcbn1cblxuLmhpZ2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLm1lZGl1bSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4ubG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLm5vbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5pbnZpc2libGUge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuI3RvcC1iYXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4jbWVudSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGREZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm94LXNoYWRvdzpcbiAgICAwLjNlbSAwLjNlbSAxZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4jbWVudSAqIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbiNtZW51IGgxIHtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkICNkZGUxZTIgMXB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuI21lbnUgYSB7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjZGRlMWUyIDFweDtcbiAgICBjb2xvcjogIzU4NTg1ODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4jbWVudSBhOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiNhZGQtbGlzdCB7XG4gICAgY29sb3I6ICM1ODU4NTg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuI2FkZC1saXN0OmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiNidG4tY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEZERkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3gtc2hhZG93OlxuICAgIDAuM2VtIDAuM2VtIDFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB3aWR0aDogMTIwcHg7XG59XG5cbiNidG4tY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG59XG5cbiNidG4tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EyYTJhMjtcbn1cblxuI3NldHRpbmdzLXBhZ2Uge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RkRGRjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6XG4gICAgMC4zZW0gMC4zZW0gMWVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwMHB4O1xufVxuXG4jY29udGVudCB7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA3MDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAzNXB4O1xuICAgIHdpZHRoOiAxNzQwcHg7XG59XG5cbi5jb2x1bW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEZERkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6XG4gICAgMC4zZW0gMC4zZW0gMWVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZzogMzJweDtcbiAgICB3aWR0aDogNDAwcHg7XG59XG5cbiNjb250ZW50Omxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uY29sdW1uIGgyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5hZGQtbGlzdC1pdGVtIHtcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICM1ODU4NTg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMzBweDtcbn1cblxuLmFkZC1saXN0LWl0ZW06aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnRvZG8ge1xuICAgIGJvcmRlcjogc29saWQgI2RkZTFlMiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnRvZG86aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGUxZTI7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuLnRvZG8gKiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4udG9kby10b3Age1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50b2RvLWRlc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmRpc3BsYXktbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuZGlhbG9nIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG5kaWFsb2c6OmJhY2tkcm9wIHtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG59XG5cbmZvcm0gKiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbmZvcm0gaW5wdXQge1xuICAgIGJvcmRlcjogc29saWQgI2RkZTFlMiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDJweDtcbn1cblxuZm9ybSBpbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG59IFxuXG5mb3JtIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5mb3JtIHNlbGVjdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltd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QUMvQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2RlZXBtaW5kLmpwZycpO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBwYWRkaW5nOiA1cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG59XFxuXFxuLnByaW8ge1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICB3aWR0aDogMTJweDtcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLm5vbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jdG9wLWJhciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEZERkY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6XFxuICAgIDAuM2VtIDAuM2VtIDFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbiNtZW51ICoge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4jbWVudSBoMSB7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgI2RkZTFlMiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jbWVudSBhIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjZGRlMWUyIDFweDtcXG4gICAgY29sb3I6ICM1ODU4NTg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbiNtZW51IGE6aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNhZGQtbGlzdCB7XFxuICAgIGNvbG9yOiAjNTg1ODU4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4jYWRkLWxpc3Q6aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNidG4tY29udGFpbmVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RkRGRjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzpcXG4gICAgMC4zZW0gMC4zZW0gMWVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG4jYnRuLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgd2lkdGg6IDQ1cHg7XFxufVxcblxcbiNidG4tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMmEyYTI7XFxufVxcblxcbiNzZXR0aW5ncy1wYWdlIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RkRGRjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzpcXG4gICAgMC4zZW0gMC4zZW0gMWVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNzAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmctdG9wOiAzNXB4O1xcbiAgICB3aWR0aDogMTc0MHB4O1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RkRGRjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNoYWRvdzpcXG4gICAgMC4zZW0gMC4zZW0gMWVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMzVweDtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4jY29udGVudDpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcblxcbi5jb2x1bW4gaDIge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5hZGQtbGlzdC1pdGVtIHtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6ICM1ODU4NTg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uYWRkLWxpc3QtaXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBib3JkZXI6IHNvbGlkICNkZGUxZTIgMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGUxZTI7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxufVxcblxcbi50b2RvICoge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4udG9kby10b3Age1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50b2RvLWRlc2Mge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uZGlzcGxheS1ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxufVxcblxcbmZvcm0gKiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICAgIGJvcmRlcjogc29saWQgI2RkZTFlMiAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuZm9ybSBpbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMnB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn0gXFxuXFxuZm9ybSBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5mb3JtIHNlbGVjdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdldExvY2FsU3RvcmFnZSwgc2V0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL21vZGVscy9zdG9yYWdlXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi4vbW9kZWxzL3RvZG9cIjtcblxuY29uc3QgYWRkTGlzdEl0ZW0gPSAoaWQsIG5hbWUsIGRlc2MsIHByaW8sIGRhdGUpID0+IHtcbiAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKG5hbWUsIGRlc2MsIHByaW8sIGRhdGUpO1xuICAgIGxldCBsaXN0cyA9IGdldExvY2FsU3RvcmFnZSgpO1xuICAgIGZvciAobGV0IGkgaW4gbGlzdHMpIHtcbiAgICAgICAgaWYgKGxpc3RzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgbGlzdHNbaV0udG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRMb2NhbFN0b3JhZ2UobGlzdHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRMaXN0SXRlbTsiLCJpbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2UsIHNldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9tb2RlbHMvc3RvcmFnZVwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4uL21vZGVscy9saXN0XCI7XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGxpc3RzID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgbGV0IG5ld0xpc3QgPSBuZXcgTGlzdChuYW1lKTtcbiAgICBpZihsaXN0cykge1xuICAgICAgICBsaXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UobGlzdHMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGxpc3QgPSBbbmV3TGlzdF07XG4gICAgICAgIHNldExvY2FsU3RvcmFnZShsaXN0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUxpc3Q7IiwiY2xhc3MgTGlzdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdDsiLCJjb25zdCBnZXRMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0c1wiKSk7XG59XG5cbmNvbnN0IHNldExvY2FsU3RvcmFnZSA9IChsaXN0KSA9PiB7XG4gICAgbGV0IGxpc3RTdHIgPSBKU09OLnN0cmluZ2lmeShsaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RzXCIsIGxpc3RTdHIpO1xufVxuXG5leHBvcnQge2dldExvY2FsU3RvcmFnZSwgc2V0TG9jYWxTdG9yYWdlfTsiLCJjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbzsiLCJpbXBvcnQgY3JlYXRlTGlzdCBmcm9tIFwiLi4vY29udHJvbGxlci9jcmVhdGVMaXN0XCI7XG5pbXBvcnQgbG9hZExpc3RzIGZyb20gXCIuL2xvYWRMaXN0c1wiO1xuXG5jb25zdCBjcmVhdGVMaXN0RGlhbG9nID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmFtZS5wbGFjZWhvbGRlciA9IFwiVGl0bGUuLi5cIlxuICAgIG5hbWUucmVxdWlyZWQgPSB0cnVlO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChidG4pO1xuICAgIGJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBidG4udmFsdWUgPSBcIlN1Ym1pdFwiO1xuXG5cbiAgICBoMS5pbm5lclRleHQgPSBcIkNyZWF0ZSBMaXN0XCI7XG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGgxKTtcbiAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKG5hbWUudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY3JlYXRlTGlzdChuYW1lLnZhbHVlKTtcbiAgICAgICAgICAgIGxvYWRMaXN0cygpO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIHJldHVybiBkaWFsb2c7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUxpc3REaWFsb2c7IiwiaW1wb3J0IGFkZExpc3RJdGVtIGZyb20gXCIuLi9jb250cm9sbGVyL2FkZExpc3RJdGVtXCI7XG5pbXBvcnQgbG9hZExpc3RzIGZyb20gXCIuL2xvYWRMaXN0c1wiO1xuXG5jb25zdCBjcmVhdGVUb2RvRGlhbG9nID0gKGlkKSA9PiB7XG4gICAgbGV0IG9sZERpYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZS10b2RvLWRpYWxvZ1wiKTtcbiAgICBpZihvbGREaWFnICE9PSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob2xkRGlhZyk7XG4gICAgfVxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgcHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgcHJpby5pbm5lckhUTUwgPSBgXG4gICAgPG9wdGlvbiB2YWx1ZT1cIk5vbmVcIj5Ob25lPC9vcHRpb24+XG4gICAgPG9wdGlvbj5Mb3c8L29wdGlvbj5cbiAgICA8b3B0aW9uPk1lZGl1bTwvb3B0aW9uPlxuICAgIDxvcHRpb24+SGlnaDwvb3B0aW9uPmA7XG5cbiAgICBkaWFsb2cuaWQgPSBcImNyZWF0ZS10b2RvLWRpYWxvZ1wiO1xuICAgIFxuICAgIG5hbWUudHlwZSA9IFwidGV4dFwiO1xuICAgIG5hbWUucGxhY2Vob2xkZXIgPSBcIlRpdGxlLi4uXCJcbiAgICBuYW1lLm1heExlbmd0aCA9IDE1O1xuICAgIG5hbWUucmVxdWlyZWQgPSB0cnVlO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgXG4gICAgZGVzYy50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZGVzYy5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb24uLi5cIlxuICAgIGRlc2MubWF4TGVuZ3RoID0gMjU7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICBcbiAgICBkYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgICBkYXRlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIFxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcmlvLmlkID0gXCJwcmlvXCI7XG4gICAgbGFiZWwuZm9yID0gXCJwcmlvXCI7XG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTpcIlxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpbyk7XG5cbiAgICBidG4udHlwZSA9IFwic3VibWl0XCI7XG4gICAgYnRuLnZhbHVlID0gXCJTdWJtaXRcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bik7XG5cblxuICAgIGgxLmlubmVyVGV4dCA9IFwiQ3JlYXRlIFRvZG86XCI7XG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGgxKTtcbiAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKG5hbWUudmFsdWUubGVuZ3RoID4gMCAmJiBkYXRlLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBhZGRMaXN0SXRlbShpZCwgbmFtZS52YWx1ZSwgZGVzYy52YWx1ZSwgcHJpby52YWx1ZSwgZGF0ZS52YWx1ZSk7XG4gICAgICAgICAgICBsb2FkTGlzdHMoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICByZXR1cm4gZGlhbG9nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RvRGlhbG9nOyIsImltcG9ydCBsb2FkTGlzdHMgZnJvbSBcIi4vbG9hZExpc3RzXCI7XG5pbXBvcnQgbG9hZFNldHRpbmdzIGZyb20gXCIuL2xvYWRTZXR0aW5nc1wiO1xuaW1wb3J0IGNyZWF0ZUxpc3REaWFsb2cgZnJvbSBcIi4vY3JlYXRlTGlzdERpYWxvZ1wiO1xuXG5jb25zdCBsb2FkU2Nyb2xsID0gKHRvcEJhcikgPT4ge1xuXG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG5Db250YWluZXIuaWQgPSBcImJ0bi1jb250YWluZXJcIlxuXG4gICAgY29uc3QgbGVmdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGVmdEJ0bi5pZCA9IFwibGVmdC1idG5cIjtcbiAgICBsZWZ0QnRuLmlubmVyVGV4dCA9IFwiPFwiXG5cbiAgICBsZWZ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQuc2Nyb2xsKHtcbiAgICAgICAgICAgIGxlZnQ6IGNvbnRlbnQuc2Nyb2xsTGVmdCAtIDQzNSxcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmlnaHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJpZ2h0QnRuLmlkID0gXCJyaWdodC1idG5cIjtcbiAgICByaWdodEJ0bi5pbm5lclRleHQgPSBcIj5cIlxuXG4gICAgcmlnaHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGVudC5zY3JvbGwoe1xuICAgICAgICAgICAgbGVmdDogY29udGVudC5zY3JvbGxMZWZ0ICsgNDM1LFxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEJ0bik7XG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0QnRuKTtcbiAgICB0b3BCYXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBidG5Db250YWluZXI7XG59XG5cbmNvbnN0IGxvYWRCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlhbG9nID0gY3JlYXRlTGlzdERpYWxvZygpO1xuICAgIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9wQmFyLmlkID0gXCJ0b3AtYmFyXCI7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuaWQgPSBcIm1lbnVcIjtcbiAgICBcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEuaW5uZXJUZXh0ID0gXCJUb2RvIExpc3RcIjtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIFxuICAgIGNvbnN0IG5hdkxpbmtzID0gW1wiSG9tZVwiLCBcIkxpc3RzXCIsIFwiU2V0dGluZ3NcIl1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGxpbmsuaWQgPSBgbmF2JHtuYXZMaW5rc1tpXX1gO1xuICAgICAgICBsaW5rLmlubmVyVGV4dCA9IG5hdkxpbmtzW2ldO1xuXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChsaW5rKVxuICAgICAgICBuYXZMaW5rc1tpXSA9IGxpbms7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkTGlzdC5pZCA9IFwiYWRkLWxpc3RcIjtcbiAgICBhZGRMaXN0LmlubmVyVGV4dCA9IFwiK1wiO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGFkZExpc3QpO1xuXG4gICAgY29uc3Qgc2Nyb2xsID0gbG9hZFNjcm9sbCh0b3BCYXIpO1xuXG4gICAgdG9wQmFyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgdG9wQmFyLmFwcGVuZENoaWxkKHNjcm9sbCk7XG5cbiAgICBuYXZMaW5rc1sxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsb2FkTGlzdHMoKTtcbiAgICAgICAgc2Nyb2xsLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgfSk7XG5cbiAgICBuYXZMaW5rc1syXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsb2FkU2V0dGluZ3MoKTtcbiAgICAgICAgc2Nyb2xsLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgfSk7XG5cbiAgICBhZGRMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b3BCYXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQmFyOyIsImNvbnN0IGxvYWRMaXN0SXRlbXMgPSAobGlzdCkgPT4ge1xuICAgIGxldCBpZCA9IGxpc3QuaWQ7XG4gICAgY29uc3QgbGlzdERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsJHtpZH0gLmxpc3RDb250YWluZXJgKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QudG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICAgICAgbGV0IHRvZG8gPSBsaXN0LnRvZG9zW2ldO1xuICAgICAgICBcbiAgICAgICAgbGV0IHByaW9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcmlvRGl2LmNsYXNzTGlzdC5hZGQoXCJwcmlvXCIpO1xuICAgICAgICBpZih0b2RvLnByaW9yaXR5ID09PSBcIkhpZ2hcIikge1xuICAgICAgICAgICAgcHJpb0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09PSBcIk1lZGl1bVwiKXtcbiAgICAgICAgICAgIHByaW9EaXYuY2xhc3NMaXN0LmFkZChcIm1lZGl1bVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09PSBcIkxvd1wiKXtcbiAgICAgICAgICAgIHByaW9EaXYuY2xhc3NMaXN0LmFkZChcImxvd1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByaW9EaXYuY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG9kb1RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIHRvZG9Ub3AuY2xhc3NMaXN0LmFkZChcInRvZG8tdG9wXCIpO1xuICAgICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdG9wXCIpO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0b2RvVG9wKTtcbiAgICAgICAgdG9kb1RvcC5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgICB0b2RvVGl0bGUuYXBwZW5kQ2hpbGQocHJpb0Rpdik7XG5cbiAgICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBoMy5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xuICAgICAgICB0b2RvVGl0bGUuYXBwZW5kQ2hpbGQoaDMpXG5cbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcC5pbm5lclRleHQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgIHRvZG9Ub3AuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICAgICAgbGV0IHRvZG9IaWRkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvSGlkZGVuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NcIik7XG4gICAgICAgIHRvZG9IaWRkZW4uY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcblxuICAgICAgICB0b2RvSGlkZGVuLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHA+JHt0b2RvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPHA+UHJpb3JpdHk6ICR7dG9kby5wcmlvcml0eX08L3A+YDtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRvZG9IaWRkZW4pO1xuXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0hpZGRlbi5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzcGxheS1ub25lXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGlzdERPTS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZExpc3RJdGVtczsiLCJpbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2UsIHNldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9tb2RlbHMvc3RvcmFnZVwiO1xuaW1wb3J0IGxvYWRMaXN0SXRlbXMgZnJvbSBcIi4vbG9hZExpc3RJdGVtc1wiO1xuaW1wb3J0IGNyZWF0ZVRvZG9EaWFsb2cgZnJvbSBcIi4vY3JlYXRlVG9kb0RpYWxvZ1wiO1xuXG5jb25zdCBsb2FkTGlzdHMgPSAoKSA9PiB7XG4gICAgbGV0IGxpc3QgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICBpZiAobGlzdCA9PT0gbnVsbCkge1xuICAgICAgICBsaXN0ID0gW11cbiAgICB9XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnRlbnQuc2Nyb2xsKDAsMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyTGlzdCA9IGxpc3RbaV07XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImNvbHVtblwiKTtcbiAgICAgICAgY29sdW1uLmlkID0gXCJsXCIgKyBjdXJyTGlzdC5pZDtcbiAgICAgICAgbGV0IHRvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvcERpdi5jbGFzc0xpc3QuYWRkKFwidG9kby10b3BcIik7XG4gICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaDIuaW5uZXJUZXh0ID0gY3Vyckxpc3QubmFtZTtcbiAgICAgICAgdG9wRGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKHRvcERpdik7XG5cbiAgICAgICAgbGV0IGxpc3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGlzdHNEaXYuY2xhc3NMaXN0LmFkZChcImxpc3RDb250YWluZXJcIik7XG5cbiAgICAgICAgY29sdW1uLmFwcGVuZChsaXN0c0Rpdik7XG5cbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QgPSBcImFkZC1saXN0LWl0ZW1cIlxuICAgICAgICBidG4uaW5uZXJUZXh0ID0gXCIrXCI7XG5cbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGlhbG9nID0gY3JlYXRlVG9kb0RpYWxvZyhjdXJyTGlzdC5pZCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG4gICAgICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9wRGl2LmFwcGVuZChidG4pO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29sdW1uKTtcblxuICAgICAgICBsb2FkTGlzdEl0ZW1zKGN1cnJMaXN0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRMaXN0czsiLCJjb25zdCBsb2FkU2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCBzZXR0aW5nc1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNldHRpbmdzUGFnZS5pZCA9IFwic2V0dGluZ3MtcGFnZVwiO1xuXG4gICAgY29uc3QgZGVsZXRlTG9jYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUxvY2FsLmlkID0gXCJkZWxldGUtbG9jYWxcIjtcbiAgICBkZWxldGVMb2NhbC5pbm5lclRleHQgPSBcIkRlbGV0ZSBMb2NhbCBTdG9yYWdlXCI7XG5cbiAgICBkZWxldGVMb2NhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxpc3RzXCIpO1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIHNldHRpbmdzUGFnZS5hcHBlbmQoZGVsZXRlTG9jYWwpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2V0dGluZ3NQYWdlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFNldHRpbmdzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvYWRCYXIgZnJvbSAnLi92aWV3L2xvYWRCYXInO1xuaW1wb3J0IGxvYWRMaXN0cyBmcm9tICcuL3ZpZXcvbG9hZExpc3RzJztcblxubG9hZEJhcigpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbmxvYWRMaXN0cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==