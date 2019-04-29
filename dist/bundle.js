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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/board/board.js":
/*!*******************************!*\
  !*** ./blocks/board/board.js ***!
  \*******************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony import */ var _sticker_sticker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sticker/sticker.js */ \"./blocks/sticker/sticker.js\");\n\nfunction Board(_ref) {\n  var _ref$caption = _ref.caption,\n      _caption = _ref$caption === void 0 ? '' : _ref$caption,\n      _ref$index = _ref.index,\n      _index = _ref$index === void 0 ? 0 : _ref$index;\n\n  //-------------------------------\n  var index = _index;\n  var elem;\n  var caption = _caption;\n  var stickers = []; //--------------------------------\n\n  function getHTMLElement() {\n    if (!elem) render();\n    return elem;\n  }\n\n  function render() {\n    var board = document.createElement('section');\n    board.classList.add('board');\n    board.addEventListener('click', removeSticker);\n    board.addEventListener('click', addStickerEvent);\n    var head = document.createElement('div');\n    head.classList.add('board__header');\n    head.innerHTML = caption;\n    var closeItem = document.createElement('div');\n    closeItem.classList.add('board__header-close');\n    closeItem.innerHTML = '&#xd7';\n    head.appendChild(closeItem);\n    var stickersLayout = document.createElement('div');\n    stickersLayout.classList.add('board__l-stickers');\n    var addItem = document.createElement('div');\n    addItem.classList.add('sticker__add-item');\n    addItem.innerHTML = \"\\n+\\n\";\n    addItem.setAttribute('data-tooltip', 'Add sticker');\n    stickersLayout.appendChild(addItem);\n    board.appendChild(head);\n    board.appendChild(stickersLayout);\n    elem = board;\n  }\n\n  function renderStickers() {\n    var stickersLayout = elem.querySelector('.board__l-stickers');\n    stickersLayout.innerHTML = \"\";\n    stickers.forEach(function (sticker) {\n      stickersLayout.appendChild(sticker);\n    });\n    var addItem = document.createElement('div');\n    addItem.classList.add('sticker__add-item');\n    addItem.innerHTML = \"\\n+\\n\";\n    addItem.setAttribute('data-tooltip', 'Add sticker');\n    stickersLayout.appendChild(addItem);\n  }\n\n  function addStickerEvent(e) {\n    if (!e.target.classList.contains('sticker__add-item')) return;\n    var sticker = new _sticker_sticker_js__WEBPACK_IMPORTED_MODULE_0__[\"Sticker\"]({\n      color: 'aqua',\n      author: 'Unknown User',\n      boardIndex: 1\n    });\n    stickers.push(sticker.getHTMLElement());\n    console.log(stickers);\n    renderStickers();\n  }\n\n  function addSticker(sticker) {\n    if (!elem) render();\n    stickers.push(sticker);\n    renderStickers();\n  }\n\n  function removeSticker(e) {\n    var closeElem = e.target;\n    if (!closeElem.classList.contains('sticker__menu-close')) return;\n    var sticker = closeElem.closest(\"div\");\n    if (!sticker) return new Error('sticker not found!');\n    stickers.splice(stickers.indexOf(sticker), 1);\n    renderStickers();\n  }\n\n  function deleteSticker(sticker) {\n    stickers.splice(stickers.indexOf(sticker), 1);\n    renderStickers();\n  } //-----------public-----------------\n\n\n  this.getHTMLElement = getHTMLElement;\n  this.addSticker = addSticker;\n  this.deleteSticker = deleteSticker;\n\n  this.getIndex = function () {\n    return index;\n  };\n}\n\n//# sourceURL=webpack:///./blocks/board/board.js?");

/***/ }),

/***/ "./blocks/board/boardsController.js":
/*!******************************************!*\
  !*** ./blocks/board/boardsController.js ***!
  \******************************************/
/*! exports provided: BoardsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoardsController\", function() { return BoardsController; });\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ \"./blocks/board/board.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nfunction BoardsController() {\n  var elem;\n  var boards = new Map();\n\n  function getHTMLElement() {\n    if (!elem) renderBoards();\n    return elem;\n  }\n\n  function renderBoards() {\n    var layout = document.createElement('div');\n    layout.classList.add('l-board');\n    layout.addEventListener('click', moveStickerForvard);\n    layout.addEventListener('click', moveStickerBack);\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = boards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var _step$value = _slicedToArray(_step.value, 2),\n            dom = _step$value[0],\n            obj = _step$value[1];\n\n        layout.appendChild(dom);\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    elem = layout;\n  }\n\n  function moveStickerForvard(e) {\n    if (!e.target.classList.contains('sticker__menu-next')) return;\n    var currentBoard = boards.get(e.target.closest('section'));\n    if (currentBoard.getIndex() + 1 >= boards.size) return;\n    var sticker = e.target.closest('div');\n    currentBoard.deleteSticker(sticker);\n    var i = 0;\n    var nextBoard;\n    var _iteratorNormalCompletion2 = true;\n    var _didIteratorError2 = false;\n    var _iteratorError2 = undefined;\n\n    try {\n      for (var _iterator2 = boards[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n        var _step2$value = _slicedToArray(_step2.value, 2),\n            dom = _step2$value[0],\n            obj = _step2$value[1];\n\n        if (i === currentBoard.getIndex() + 2) break;\n        nextBoard = obj;\n        i++;\n      }\n    } catch (err) {\n      _didIteratorError2 = true;\n      _iteratorError2 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n          _iterator2[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError2) {\n          throw _iteratorError2;\n        }\n      }\n    }\n\n    nextBoard.addSticker(sticker);\n    renderBoards(); // Create the event\n\n    var event = new CustomEvent(\"renderDesktop\"); // Dispatch/Trigger/Fire the event\n\n    document.querySelector('body').dispatchEvent(event);\n  }\n\n  function moveStickerBack(e) {\n    if (!e.target.classList.contains('sticker__menu-prev')) return;\n    var currentBoard = boards.get(e.target.closest('section'));\n    if (currentBoard.getIndex() - 1 < 0) return;\n    var sticker = e.target.closest('div');\n    currentBoard.deleteSticker(sticker);\n    var i = 0;\n    var prevBoard;\n    var _iteratorNormalCompletion3 = true;\n    var _didIteratorError3 = false;\n    var _iteratorError3 = undefined;\n\n    try {\n      for (var _iterator3 = boards[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n        var _step3$value = _slicedToArray(_step3.value, 2),\n            dom = _step3$value[0],\n            obj = _step3$value[1];\n\n        prevBoard = obj;\n        i++;\n        if (i === currentBoard.getIndex()) break;\n      }\n    } catch (err) {\n      _didIteratorError3 = true;\n      _iteratorError3 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n          _iterator3[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError3) {\n          throw _iteratorError3;\n        }\n      }\n    }\n\n    prevBoard.addSticker(sticker);\n    renderBoards(); // Create the event\n\n    var event = new CustomEvent(\"renderDesktop\"); // Dispatch/Trigger/Fire the event\n\n    document.querySelector('body').dispatchEvent(event);\n  }\n\n  function addBoard(board) {\n    boards.set(board.getHTMLElement(), board);\n    renderBoards();\n  }\n\n  function removeBoard(board) {\n    boards[\"delete\"](board);\n    renderBoards();\n  }\n\n  function getSize() {\n    return boards.size;\n  }\n\n  this.getHTMLElement = getHTMLElement;\n  this.addBoard = addBoard;\n  this.removeBoard = removeBoard;\n  this.getSize = getSize;\n}\n\n//# sourceURL=webpack:///./blocks/board/boardsController.js?");

/***/ }),

/***/ "./blocks/header/__menu/header__menu.js":
/*!**********************************************!*\
  !*** ./blocks/header/__menu/header__menu.js ***!
  \**********************************************/
/*! exports provided: Header__menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header__menu\", function() { return Header__menu; });\nfunction Header__menu(_ref) {\n  var _ref$username = _ref.username,\n      _username = _ref$username === void 0 ? 'Unknown User' : _ref$username;\n\n  var elem;\n  var username = _username;\n\n  function getHTMLElement() {\n    if (!elem) render();\n    return elem;\n  }\n\n  function render() {\n    var ul = document.createElement('ul');\n    ul.classList.add('header__menu');\n    ul.innerHTML = '<li class=\"header__menu-item header_item_active\"><i class=\"fas fa-user\"></i>User</li>' + '<li class=\"header__menu-item\"><i class=\"fas fa-project-diagram\"></i>Projects</li>' + '<li class=\"header__menu-item\"><i class=\"fas fa-th-large\"></i>Boards</li>' + '<li class=\"header__menu-item\"><i class=\"fas fa-chart-line\"></i>Reports</li>';\n    elem = ul;\n  }\n\n  this.getHTMLElement = getHTMLElement;\n}\n\n//# sourceURL=webpack:///./blocks/header/__menu/header__menu.js?");

/***/ }),

/***/ "./blocks/header/header.js":
/*!*********************************!*\
  !*** ./blocks/header/header.js ***!
  \*********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var _menu_header_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__menu/header__menu.js */ \"./blocks/header/__menu/header__menu.js\");\n\nfunction Header() {\n  var elem;\n  var contextMenu;\n  var mainMenu;\n\n  function getHTMLElement() {\n    if (!elem) render();\n    return elem;\n  }\n\n  function render() {\n    var header = document.createElement('header');\n    header.classList.add('header');\n    header.addEventListener('click', selectTab);\n    var menu = new _menu_header_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"Header__menu\"]({}).getHTMLElement();\n    header.appendChild(menu);\n    elem = header;\n  }\n\n  function renderContext() {\n    var menus = elem.querySelectorAll('.header__menu');\n\n    if (menus.length >= 2) {\n      elem.removeChild(menus[1]);\n    }\n\n    elem.appendChild(contextMenu);\n  } //--------------------------------context------------------------------------\n\n\n  function getBoardsContext() {\n    var ul = document.createElement('ul');\n    ul.classList.add('header__menu');\n    ul.innerHTML = '<li class=\"header__context-item\"><i class=\"fas fa-plus\"></i>Add Board</li> ';\n    return ul;\n  }\n\n  function getProjectsContext() {\n    var ul = document.createElement('ul');\n    ul.classList.add('header__menu');\n    ul.innerHTML = '<li class=\"header__context-item\"><i class=\"fas fa-plus\"></i>TEST</li> ';\n    return ul;\n  }\n\n  function getReportContext() {\n    var ul = document.createElement('ul');\n    ul.classList.add('header__menu');\n    ul.innerHTML = '<li class=\"header__context-item\"><i class=\"fas fa-plus\"></i>TEST</li> ';\n    return ul;\n  } //--------------------------------context------------------------------------\n\n\n  function deselectTabs() {\n    var tabs = elem.querySelectorAll('li');\n    tabs.forEach(function (li) {\n      return li.classList.remove('header_item_active');\n    });\n  } //---------------------------------------------------------------------------\n\n\n  function choseTab(tab) {\n    deselectTabs();\n    tab.classList.add('header_item_active');\n\n    if (tab.innerText === 'Projects') {\n      contextMenu = getProjectsContext();\n    }\n\n    if (tab.innerText === 'Boards') {\n      contextMenu = getBoardsContext();\n    }\n\n    if (tab.innerText === 'Reports') {\n      contextMenu = getReportContext();\n    }\n\n    renderContext();\n  }\n\n  function selectTab(e) {\n    var tab = e.target;\n\n    if (tab.innerText === 'Projects' || tab.innerText === 'Boards' || tab.innerText === 'Reports') {\n      choseTab(tab);\n    }\n  } //------------------------------------------------------------\n\n\n  this.getHTMLElement = getHTMLElement;\n}\n\n//# sourceURL=webpack:///./blocks/header/header.js?");

/***/ }),

/***/ "./blocks/imports.scss":
/*!*****************************!*\
  !*** ./blocks/imports.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/imports.scss?");

/***/ }),

/***/ "./blocks/modal/modal.js":
/*!*******************************!*\
  !*** ./blocks/modal/modal.js ***!
  \*******************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\nfunction Modal() {\n  var elem;\n  var response = \"\";\n\n  function getHTMLElement() {\n    if (!elem) render();\n    return elem;\n  }\n\n  function render() {}\n\n  function forTabTitle() {\n    var modal = document.createElement('div');\n    modal.classList.add('modal__background');\n    modal.addEventListener('click', removeModal);\n    var wnd = document.createElement('div');\n    wnd.classList.add('modal__window');\n    setTimeout(function () {\n      wnd.style.marginTop = '150px';\n      wnd.style.width = '400px';\n    }, 0);\n    var header = document.createElement('div');\n    header.classList.add('modal__window-header');\n    header.innerHTML = \"Enter tab name\";\n    var body = document.createElement('div');\n    body.classList.add('modal__window-body');\n    var input = document.createElement('input');\n    input.classList.add('modal__input');\n    body.appendChild(input);\n    var footer = document.createElement('div');\n    footer.classList.add('modal__window-footer');\n    var btn1 = document.createElement('input');\n    btn1.classList.add('modal__button');\n    btn1.setAttribute('type', 'button');\n    btn1.setAttribute('value', 'Cancel');\n\n    btn1.onclick = function () {\n      var body = document.querySelector('body');\n      body.removeChild(document.querySelector('.modal__background'));\n    };\n\n    var btn2 = document.createElement('input');\n    btn2.classList.add('modal__button');\n    btn2.setAttribute('type', 'button');\n    btn2.setAttribute('value', 'Ok');\n\n    btn2.onclick = function () {\n      response = document.querySelector('.modal__input').value;\n      var body = document.querySelector('body');\n      body.removeChild(document.querySelector('.modal__background'));\n    };\n\n    footer.appendChild(btn1);\n    footer.appendChild(btn2);\n    wnd.appendChild(header);\n    wnd.appendChild(body);\n    wnd.appendChild(footer);\n    modal.appendChild(wnd);\n    return modal;\n  }\n\n  function removeModal(e) {\n    if (!e.target.classList.contains('modal__background')) return;\n    var body = document.querySelector('body');\n    body.removeChild(e.target);\n  }\n\n  function getResponse() {\n    return response;\n  } //public\n  //this.getHTMLElement = getHTMLElement;\n\n\n  this.getResponse = getResponse;\n  this.forTabTitle = forTabTitle;\n}\n\n//# sourceURL=webpack:///./blocks/modal/modal.js?");

/***/ }),

/***/ "./blocks/sticker/__color-picker/sticker__color-picker.js":
/*!****************************************************************!*\
  !*** ./blocks/sticker/__color-picker/sticker__color-picker.js ***!
  \****************************************************************/
/*! exports provided: Sticker__color_picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sticker__color_picker\", function() { return Sticker__color_picker; });\nfunction Sticker__color_picker() {\n  var elem;\n\n  function getColorPicker() {\n    if (!elem) {\n      render();\n    }\n\n    return elem;\n  }\n\n  function render() {\n    var cp = document.createElement('ul');\n    cp.classList.add('sticker__color-picker');\n    cp.innerHTML = '<li data-color=\"orange\" class=\"sticker__menu-color sticker_color_orange\">' + '<li data-color=\"aqua\" class=\"sticker__menu-color sticker_color_aqua\">' + '<li data-color=\"violet\" class=\"sticker__menu-color sticker_color_violet\">' + '<li data-color=\"yellow\" class=\"sticker__menu-color sticker_color_yellow\">';\n    elem = cp;\n  }\n\n  function toggleVision() {\n    if (!elem) render();\n    elem.classList.toggle('is-open');\n  }\n\n  this.getColorPicker = getColorPicker;\n  this.toggleVision = toggleVision;\n}\n\n//# sourceURL=webpack:///./blocks/sticker/__color-picker/sticker__color-picker.js?");

/***/ }),

/***/ "./blocks/sticker/__input/sticker__input.js":
/*!**************************************************!*\
  !*** ./blocks/sticker/__input/sticker__input.js ***!
  \**************************************************/
/*! exports provided: Sticker__input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sticker__input\", function() { return Sticker__input; });\nfunction Sticker__input(_ref) {\n  var _ref$color = _ref.color,\n      p_color = _ref$color === void 0 ? 'aqua' : _ref$color,\n      _ref$text = _ref.text,\n      p_text = _ref$text === void 0 ? '' : _ref$text,\n      _ref$maxlength = _ref.maxlength,\n      p_maxlength = _ref$maxlength === void 0 ? 95 : _ref$maxlength;\n  var elem;\n  var color = 'sticker_color_' + p_color;\n  var text = p_text;\n  var maxlength = p_maxlength;\n\n  function getElement() {\n    if (!elem) render();\n    return elem;\n  }\n\n  function render() {\n    var textarea = document.createElement('textarea');\n    textarea.classList.add('sticker__input');\n    textarea.classList.add(color);\n    textarea.setAttribute('maxlength', maxlength);\n    textarea.innerText = text;\n    elem = textarea;\n  }\n\n  this.getElement = getElement;\n}\n\n//# sourceURL=webpack:///./blocks/sticker/__input/sticker__input.js?");

/***/ }),

/***/ "./blocks/sticker/__menu/sticker__menu.js":
/*!************************************************!*\
  !*** ./blocks/sticker/__menu/sticker__menu.js ***!
  \************************************************/
/*! exports provided: Sticker__menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sticker__menu\", function() { return Sticker__menu; });\n/* harmony import */ var _color_picker_sticker_color_picker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__color-picker/sticker__color-picker.js */ \"./blocks/sticker/__color-picker/sticker__color-picker.js\");\n\nfunction Sticker__menu(_ref) {\n  var _ref$color = _ref.color,\n      p_color = _ref$color === void 0 ? 'aqua' : _ref$color;\n  var elem;\n  var colorPicker;\n  var color = 'sticker_color_' + p_color;\n\n  function getMenu() {\n    if (!elem) render();\n    return elem;\n  }\n\n  var render = function render() {\n    var menu = document.createElement('ul');\n    menu.classList.add('sticker__menu');\n    menu.onclick = renderColorPicker;\n    var close = document.createElement('li');\n    close.classList.add('sticker__menu-close');\n    close.innerText = 'Ⓧ';\n    var next = document.createElement('li');\n    next.classList.add('sticker__menu-next');\n    next.innerText = '>>';\n    var prev = document.createElement('li');\n    prev.classList.add('sticker__menu-prev');\n    prev.innerText = '<<';\n    var menuColor = document.createElement('li');\n    menuColor.classList.add('sticker__menu-color');\n    menuColor.classList.add(color);\n    menu.appendChild(close);\n    menu.appendChild(next);\n    menu.appendChild(prev);\n    menu.appendChild(menuColor);\n    elem = menu;\n  };\n\n  function renderColorPicker(e) {\n    var menu = e.target;\n    if (!menu || !menu.classList.contains('sticker__menu-color')) return;\n\n    if (!colorPicker) {\n      colorPicker = new _color_picker_sticker_color_picker_js__WEBPACK_IMPORTED_MODULE_0__[\"Sticker__color_picker\"]();\n      var menuColor = elem.querySelector('.sticker__menu-color');\n      if (!menuColor) throw new Error();\n      menuColor.appendChild(colorPicker.getColorPicker());\n    }\n\n    if (menu.hasAttribute('data-color')) {\n      setColorForColorMenu(menu.classList.item(1));\n    }\n\n    colorPicker.toggleVision();\n  }\n\n  function setColorForColorMenu(p_color) {\n    var col = elem.querySelector('.sticker__menu-color');\n    if (!col) return new Error('Item li menu-color not selected!');\n    col.classList.remove(col.classList.item(1));\n    col.classList.add(p_color);\n  }\n\n  this.getMenu = getMenu; //this.setColorPicker = setColorPicker;\n}\n\n//# sourceURL=webpack:///./blocks/sticker/__menu/sticker__menu.js?");

/***/ }),

/***/ "./blocks/sticker/sticker.js":
/*!***********************************!*\
  !*** ./blocks/sticker/sticker.js ***!
  \***********************************/
/*! exports provided: Sticker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sticker\", function() { return Sticker; });\n/* harmony import */ var _menu_sticker_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__menu/sticker__menu.js */ \"./blocks/sticker/__menu/sticker__menu.js\");\n/* harmony import */ var _input_sticker_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./__input/sticker__input.js */ \"./blocks/sticker/__input/sticker__input.js\");\n\n\n\nfunction Sticker(_ref) {\n  var _ref$text = _ref.text,\n      p_text = _ref$text === void 0 ? '' : _ref$text,\n      _ref$author = _ref.author,\n      p_author = _ref$author === void 0 ? '' : _ref$author,\n      _ref$color = _ref.color,\n      p_color = _ref$color === void 0 ? 'aqua' : _ref$color,\n      _ref$boardIndex = _ref.boardIndex,\n      p_boardIndex = _ref$boardIndex === void 0 ? 0 : _ref$boardIndex;\n  var elem;\n  var textarea;\n  var text = p_text || '';\n  var author = p_author;\n  var color = 'sticker_color_' + p_color;\n  var boardIndex = p_boardIndex;\n\n  function getHTMLElement() {\n    if (!elem) render();\n    return elem;\n  }\n\n  function render() {\n    var sticker = document.createElement('div');\n    sticker.classList.add('sticker');\n    sticker.classList.add(color);\n    sticker.addEventListener('click', changeColor);\n    sticker.addEventListener('click', changeIndex);\n    var record = document.createElement('div');\n    record.classList.add('sticker__record');\n    textarea = getTextarea();\n    record.appendChild(textarea);\n    var menu = new _menu_sticker_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"Sticker__menu\"]({\n      color: color.split('_')[2]\n    }).getMenu();\n    var authorElem = document.createElement('div');\n    authorElem.classList.add('sticker__author');\n    authorElem.innerText = author;\n    sticker.appendChild(record);\n    sticker.appendChild(menu);\n    sticker.appendChild(authorElem);\n    elem = sticker;\n  }\n\n  function changeColor(e) {\n    var cp = e.target;\n    if (!cp || !cp.classList.contains('sticker__menu-color')) return;\n    if (!cp.hasAttribute('data-color')) return;\n    setColor(cp.classList.item(1));\n  }\n\n  function setColor(colorName) {\n    if (!elem) return;\n\n    if (elem.classList.length >= 2) {\n      elem.classList.remove(elem.classList.item(1));\n      elem.classList.add(colorName);\n    }\n\n    var txtArea = getTextarea();\n\n    if (txtArea.classList.length >= 2) {\n      txtArea.classList.remove(txtArea.classList.item(1));\n      txtArea.classList.add(colorName);\n    }\n  }\n\n  function changeIndex(e) {\n    var item = e.target;\n\n    if (item.classList.contains('sticker__menu-next')) {\n      if (boardIndex === getBoardsCount()) return;\n      boardIndex++;\n    }\n\n    if (item.classList.contains('sticker__menu-prev')) {\n      if (boardIndex === 0) return;\n      boardIndex--;\n    }\n  }\n\n  function getTextarea() {\n    if (!textarea) textarea = new _input_sticker_input_js__WEBPACK_IMPORTED_MODULE_1__[\"Sticker__input\"]({\n      color: color.split('_')[2],\n      text: text\n    }).getElement();\n    return textarea;\n  }\n\n  function getBoardsCount() {\n    var boards = document.querySelectorAll('.board');\n    return boards.length;\n  } //public\n\n\n  this.setColor = setColor;\n\n  this.setText = function setText(text) {\n    if (!elem) return;\n    elem.querySelector('.sticker__record').innerText = text;\n  };\n\n  this.getHTMLElement = getHTMLElement;\n}\n\n\n\n//# sourceURL=webpack:///./blocks/sticker/sticker.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/page.js */ \"./src/page.js\");\n/* harmony import */ var _blocks_sticker_sticker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/sticker/sticker.js */ \"./blocks/sticker/sticker.js\");\n/* harmony import */ var _blocks_board_board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/board/board.js */ \"./blocks/board/board.js\");\n/* harmony import */ var _blocks_imports_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/imports.scss */ \"./blocks/imports.scss\");\n/* harmony import */ var _blocks_imports_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_imports_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar page = new _src_page_js__WEBPACK_IMPORTED_MODULE_0__[\"Page\"]();\npage.render();\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./src/desktopControllers.js":
/*!***********************************!*\
  !*** ./src/desktopControllers.js ***!
  \***********************************/
/*! exports provided: desktopControllers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desktopControllers\", function() { return desktopControllers; });\n/* harmony import */ var _blocks_board_boardsController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/board/boardsController.js */ \"./blocks/board/boardsController.js\");\n/* harmony import */ var _projectsController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsController.js */ \"./src/projectsController.js\");\n/* harmony import */ var _userController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userController.js */ \"./src/userController.js\");\n/* harmony import */ var _reportsController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportsController.js */ \"./src/reportsController.js\");\n\n\n\n\nvar desktopControllers = {\n  BoardsController: {\n    getController: function getController() {\n      return new _blocks_board_boardsController_js__WEBPACK_IMPORTED_MODULE_0__[\"BoardsController\"]();\n    }\n  },\n  ProjectsController: {\n    getController: function getController() {\n      return new _projectsController_js__WEBPACK_IMPORTED_MODULE_1__[\"ProjectsController\"]();\n    }\n  },\n  ReportsController: {\n    getController: function getController() {\n      return new _reportsController_js__WEBPACK_IMPORTED_MODULE_3__[\"ReportsController\"]();\n    }\n  },\n  UserController: {\n    getController: function getController() {\n      return new _userController_js__WEBPACK_IMPORTED_MODULE_2__[\"UserController\"]();\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/desktopControllers.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Page\", function() { return Page; });\n/* harmony import */ var _blocks_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/header/header.js */ \"./blocks/header/header.js\");\n/* harmony import */ var _blocks_board_board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/board/board.js */ \"./blocks/board/board.js\");\n/* harmony import */ var _blocks_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks/modal/modal.js */ \"./blocks/modal/modal.js\");\n/* harmony import */ var _desktopControllers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktopControllers.js */ \"./src/desktopControllers.js\");\n\n\n\n\nfunction Page() {\n  var body = document.querySelector('body');\n  body.addEventListener('renderDesktop', renderDesktop);\n  var desktopController;\n  var desktopLayout;\n  var modal = new _blocks_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"]();\n\n  function render() {\n    var header = new _blocks_header_header_js__WEBPACK_IMPORTED_MODULE_0__[\"Header\"]().getHTMLElement();\n    header.addEventListener('click', tabClick);\n    header.addEventListener('click', contextTabAdd);\n    var boardsLayout = desktopLayout = document.createElement('div');\n    boardsLayout.classList.add('desktop');\n    boardsLayout.addEventListener('click', removeBoard);\n    body.appendChild(header);\n    body.appendChild(boardsLayout);\n  }\n\n  function renderDesktop() {\n    var desktopContainer = body.querySelector('desktop');\n    desktopLayout.innerHTML = \"\";\n    desktopLayout.appendChild(desktopController.getHTMLElement());\n  }\n\n  function tabClick(e) {\n    var tab = e.target;\n    if (!tab.classList.contains('header__menu-item')) return;\n    var controllerName = tab.innerText + 'Controller';\n    desktopController = _desktopControllers_js__WEBPACK_IMPORTED_MODULE_3__[\"desktopControllers\"][controllerName].getController();\n    renderDesktop();\n  } //-------------------------- context menu events --------------------------\n\n\n  function contextTabAdd(e) {\n    var tab = e.target;\n    if (!tab.classList.contains('header__context-item')) return;\n    if (tab.innerText !== 'Add Board') return;\n    body.appendChild(modal.forTabTitle());\n    body.addEventListener('click', addTab);\n  }\n\n  function addTab(e) {\n    var btn = e.target;\n    if (!btn.classList.contains('modal__button')) return;\n    if (btn.value !== 'Ok') return;\n    var caption = modal.getResponse();\n    desktopController.addBoard(new _blocks_board_board_js__WEBPACK_IMPORTED_MODULE_1__[\"Board\"]({\n      caption: caption,\n      index: desktopController.getSize()\n    }));\n    renderDesktop();\n    body.removeEventListener('click', addTab);\n  }\n\n  function removeBoard(e) {\n    if (!e.target.classList.contains('board__header-close')) return;\n    var board = e.target.closest('section');\n    desktopController.removeBoard(board);\n    renderDesktop();\n  } //-------------------------- context menu events --------------------------\n  //public\n\n\n  this.render = render;\n}\n\n//# sourceURL=webpack:///./src/page.js?");

/***/ }),

/***/ "./src/projectsController.js":
/*!***********************************!*\
  !*** ./src/projectsController.js ***!
  \***********************************/
/*! exports provided: ProjectsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectsController\", function() { return ProjectsController; });\nfunction ProjectsController() {\n  var elem;\n\n  function getHTMLElement() {\n    alert('TAB In progress');\n    if (!elem) render();\n    return elem;\n  }\n\n  function render() {\n    var div = document.createElement('div');\n    elem = div;\n  } //public\n\n\n  this.getHTMLElement = getHTMLElement;\n}\n\n//# sourceURL=webpack:///./src/projectsController.js?");

/***/ }),

/***/ "./src/reportsController.js":
/*!**********************************!*\
  !*** ./src/reportsController.js ***!
  \**********************************/
/*! exports provided: ReportsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ReportsController\", function() { return ReportsController; });\nfunction ReportsController() {\n  var elem;\n\n  function getHTMLElement() {\n    alert('TAB In progress');\n    if (!elem) render();\n    return elem;\n  }\n\n  function render() {\n    var div = document.createElement('div');\n    elem = div;\n  } //public\n\n\n  this.getHTMLElement = getHTMLElement;\n}\n\n//# sourceURL=webpack:///./src/reportsController.js?");

/***/ }),

/***/ "./src/userController.js":
/*!*******************************!*\
  !*** ./src/userController.js ***!
  \*******************************/
/*! exports provided: UserController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserController\", function() { return UserController; });\nfunction UserController() {\n  var elem;\n\n  function getHTMLElement() {\n    alert('TAB In progress');\n    if (!elem) render();\n    return elem;\n  }\n\n  function render() {\n    var div = document.createElement('div');\n    elem = div;\n  } //public\n\n\n  this.getHTMLElement = getHTMLElement;\n}\n\n//# sourceURL=webpack:///./src/userController.js?");

/***/ })

/******/ });