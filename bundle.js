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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/palette/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/palette/css/style.css":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/palette/css/style.css ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/palette/css/style.css":
/*!***********************************!*\
  !*** ./src/palette/css/style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./style.css */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/palette/css/style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/palette/js/main.js":
/*!********************************!*\
  !*** ./src/palette/js/main.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../css/style.css */ "./src/palette/css/style.css");

var flags = {
  fillBucket: false,
  chooseColor: false,
  pencil: true,
  transform: false
}; /* eslint-disable no-loop-func */
/* eslint-disable no-undef */


var sizePicture = { size: 512 };

var KEY_TOOLS_MAP = {
  KeyB: {
    id: 'paint_bucket'
  },
  KeyP: {
    id: 'pencil'
  },
  KeyC: {
    id: 'choose_color'
  }
};

var canvas = document.getElementById('canvas');
canvas.width = sizePicture.size;
canvas.height = sizePicture.size;
var context = canvas.getContext('2d');
var currentColor = '#008000';
var colorTemp = '#008000';
var previvousColor = '';
var picData = new Image();
picData.crossOrigin = 'anonymous';

document.getElementById('buttom_click').addEventListener('click', function () {
  var city = document.getElementById('txt_in').value;
  var url = 'https://cors-anywhere.herokuapp.com/https://api.unsplash.com/photos/random?query=' + city + '&client_id=5f2288f31636f57621fb805baab3ad8e1069f7ba6d83dfb70c37edde41a0bf19';
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    var ctx = canvas.getContext('2d');
    if (canvas.getContext) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      picData.src = data.urls.small;
      picData.onload = function () {
        if (picData.width < picData.height) {
          ctx.drawImage(picData, (sizePicture.size - picData.width * sizePicture.size / picData.height) / 2, 0, picData.width * sizePicture.size / picData.height, sizePicture.size);
        }
        if (picData.width > picData.height) {
          ctx.drawImage(picData, 0, (sizePicture.size - picData.height * sizePicture.size / picData.width) / 2, sizePicture.size, picData.height * sizePicture.size / picData.width);
        }
      };
    }
  });
});

document.getElementById('buttom_white_black').addEventListener('click', function () {
  var pic = new Image();
  pic.crossOrigin = 'anonymous';
  var ctx = canvas.getContext('2d');
  pic.src = picData.src;
  pic.onload = function () {
    drawGray();
  };
});

function saveCanvasState() {
  localStorage.setItem('canvasState', this.canvas.toDataURL());
}

function drawGray() {
  var ctx = canvas.getContext('2d');
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;


  var grayscale = function grayscale() {
    for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg;
      data[i + 1] = avg;
      data[i + 2] = avg;
    }
    ctx.putImageData(imageData, 0, 0);
  };
  grayscale();
}

canvas.onmouseup = function (event) {
  if (flags.pencil === true) {
    canvas.onclick = function (event) {
      var x = Math.floor(event.offsetX / 4);
      var y = Math.floor(event.offsetY / 4);
      context.fillStyle = currentColor;
      context.fillRect(x * 4, y * 4, 4, 4);
      context.fill();
    };
  }
  if (flags.fillBucket === true) {
    canvas.onclick = function () {
      context.fillStyle = currentColor;
      context.fillRect(0, 0, 512, 512);
    };
  }
};

function changeColor(element) {
  if (element === 'color_bleu') {
    currentColor = '#41B6F7';
    document.querySelector('#input_color').style.background = currentColor;
    document.querySelector('#input_color').value = currentColor;
    previvousColor = colorTemp;
    document.querySelector('#color_pref').style.background = previvousColor;
    colorTemp = currentColor;
  } else if (element === 'color_red') {
    currentColor = '#F74141';

    document.querySelector('#input_color').style.background = currentColor;
    document.querySelector('#input_color').value = currentColor;
    previvousColor = colorTemp;
    document.querySelector('#color_pref').style.background = previvousColor;
    colorTemp = currentColor;
  }
}

var toolsAll = document.getElementsByClassName('tool-item');
for (var j = 0; j < toolsAll.length; j++) {
  toolsAll[j].addEventListener('click', function (event) {
    document.querySelectorAll('.tool-item').forEach(function (element) {
      element.style.cssText = "none";
    });
    switch (event.target.id) {
      case 'paint_bucket':
        flags.fillBucket = true;
        flags.pencil = false;
        flags.chooseColor = false;
        flags.transform = false;
        document.querySelector('.paint_bucket').style.cssText = 'color:red;font-weight: bold';
        changeColor(event.target.id);
        break;
      case 'choose_color':
        flags.fillBucket = false;
        flags.pencil = false;
        flags.chooseColor = true;
        flags.transform = false;
        document.querySelector('.choose_color').style.cssText = 'color:red;font-weight: bold';
        changeColor(event.target.id);
        break;
      case 'transform':
        flags.fillBucket = false;
        flags.pencil = false;
        flags.chooseColor = false;
        flags.transform = true;
        document.querySelector('.transform').style.cssText = 'color:red;font-weight: bold';
        changeColor(event.target.id);
        break;
      case 'pencil':
        flags.fillBucket = false;
        flags.pencil = true;
        flags.chooseColor = false;
        flags.transform = false;
        document.querySelector('.pencil').style.cssText = 'color:red;font-weight: bold';
        changeColor(event.target.id);
        break;
    }
  });
}

var sizeTool = document.getElementsByClassName('checkbox_visible');
for (var _j = 0; _j < sizeTool.length; _j += 1) {
  sizeTool[_j].addEventListener('click', function (event) {
    document.querySelectorAll('.checkbox_visible').forEach(function (element) {
      var elCheck = element;
      elCheck.style.background = 'none';
    });
    switch (event.target.value) {
      case '1':
        sizePicture.size = 128;
        sizeImage();
        break;
      case '2':
        sizePicture.size = 256;
        sizeImage();
        break;
      case '3':
        sizePicture.size = 512;
        sizeImage();
        break;
      default:
    }
  });
}

function sizeImage() {
  canvas.width = sizePicture.size;
  canvas.height = sizePicture.size;
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (canvas.getContext) {
    if (picData.width < picData.height) {
      ctx.drawImage(picData, (sizePicture.size - picData.width * sizePicture.size / picData.height) / 2, 0, picData.width * sizePicture.size / picData.height, sizePicture.size);
    }
    if (picData.width > picData.height) {
      ctx.drawImage(picData, 0, (sizePicture.size - picData.height * sizePicture.size / picData.width) / 2, sizePicture.size, picData.height * sizePicture.size / picData.width);
    }
  };
}

function setCurrentColor() {
  currentColor = previvousColor;
}

var toolsColors = document.getElementsByClassName('color-item');
for (var i = 0; i < toolsColors.length; i += 1) {
  toolsColors[i].addEventListener('click', function (event) {
    document.querySelectorAll('.color-item').forEach(function (element) {
      element.style.cssText = "none";
    });
    switch (event.target.id) {

      case 'input_color':
        document.querySelector('.color_backgr-input').style.cssText = 'color:red;font-weight: bold';
        break;

      case 'color-pref_text':
        currentColor = previvousColor;
        document.querySelector('.color_backgr-prev').style.cssText = 'color:red;font-weight: bold';
        break;

      case 'color-red_text':
        document.querySelector('.color_backgr-red').style.cssText = 'color:red;font-weight: bold';
        changeColor('color_red');
        break;
      case 'color-bleu_text':
        document.querySelector('.color_backgr-bleu').style.cssText = 'color:red;font-weight: bold';
        changeColor('color_bleu');

        break;
    }
  });
}

var colorInput = document.querySelector('#input_color');
colorInput.addEventListener('change', function () {
  currentColor = colorInput.value;
  document.querySelector('#input_color').style.background = currentColor;
  previvousColor = colorTemp;
  document.querySelector('#color_pref').style.background = previvousColor;
  colorTemp = currentColor;
});

document.addEventListener('keydown', function (event) {
  if (KEY_TOOLS_MAP[event.code]) {
    document.getElementById(KEY_TOOLS_MAP[event.code]).click();
  }
});

/***/ })

/******/ });