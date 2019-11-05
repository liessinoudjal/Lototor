(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AppComponent"],{

/***/ "./assets/css/components/form.scss":
/*!*****************************************!*\
  !*** ./assets/css/components/form.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/Annees.jsx":
/*!*****************************************!*\
  !*** ./assets/js/components/Annees.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Annees = function Annees(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: props.handleAnnees,
    className: props.checked ? "checked" : ""
  }, props.annees);
};

/* harmony default export */ __webpack_exports__["default"] = (Annees);

/***/ }),

/***/ "./assets/js/components/App.jsx":
/*!**************************************!*\
  !*** ./assets/js/components/App.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormLottery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormLottery */ "./assets/js/components/FormLottery.jsx");
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");


 //utilie pour  ie



var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormLottery__WEBPACK_IMPORTED_MODULE_2__["default"], {
    root: document.getElementById('root').dataset.state
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('root'));
var modal = $("#modal-result");
var loader = document.querySelector("#modal-result .modal-body").innerHTML;
modal.on('hide.bs.modal', function () {
  document.querySelector("#modal-result .modal-body").innerHTML = loader;
  console.log("fermeture");
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/components/FormLottery.jsx":
/*!**********************************************!*\
  !*** ./assets/js/components/FormLottery.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _TypeNumeroContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./TypeNumeroContext */ "./assets/js/components/TypeNumeroContext.js");
/* harmony import */ var _Numero__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Numero */ "./assets/js/components/Numero.jsx");
/* harmony import */ var _Annees__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Annees */ "./assets/js/components/Annees.jsx");
/* harmony import */ var _functions_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./functions/_form */ "./assets/js/components/functions/_form.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_21__);

















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var routes = __webpack_require__(/*! ../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_21___default.a.setRoutingData(routes);

__webpack_require__(/*! ../../css/components/form.scss */ "./assets/css/components/form.scss");

var FormLottery =
/*#__PURE__*/
function (_Component) {
  _inherits(FormLottery, _Component);

  function FormLottery(props) {
    var _this;

    _classCallCheck(this, FormLottery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormLottery).call(this, props));
    _this.state = JSON.parse(_this.props.root);
    _this.state.error = false;
    _functions_form__WEBPACK_IMPORTED_MODULE_20__["default"].handleChange = _functions_form__WEBPACK_IMPORTED_MODULE_20__["default"].handleChange.bind(_assertThisInitialized(_this));
    _functions_form__WEBPACK_IMPORTED_MODULE_20__["default"].isBonNumero = _functions_form__WEBPACK_IMPORTED_MODULE_20__["default"].isBonNumero.bind(_assertThisInitialized(_this));
    _functions_form__WEBPACK_IMPORTED_MODULE_20__["default"].isBonEtoile = _functions_form__WEBPACK_IMPORTED_MODULE_20__["default"].isBonEtoile.bind(_assertThisInitialized(_this));
    _this.simuler = _this.simuler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FormLottery, [{
    key: "simuler",
    value: function simuler(e) {
      e.preventDefault();
      var error = false;
      var form = e.currentTarget;
      var nb_annees = form.querySelector(".ans span.checked").innerHTML;
      var numeros = [];
      var etoiles = [];
      form.querySelectorAll(".numeros.numero input").forEach(function (input, index) {
        if (input.value != "") {
          numeros.push(input.value);
        } else {
          error = true;
        }
      });
      form.querySelectorAll(".numeros.etoile input").forEach(function (input, index) {
        if (input.value != "") {
          etoiles.push(input.value);
        } else {
          error = true;
        }
      });

      if (error) {
        this.setState({
          error: error
        });
      } //pas d'erreur
      else if (!this.state.error) {
          //on affcihe la modal de résultat
          $("#modal-result").modal("show");
          var title = document.querySelector("#modal-result .modal-title span");
          var content = document.querySelector("#modal-result .modal-body");
          title.innerHTML = this.state.lotteryName;
          var myHeaders = new Headers({
            //'Content-Type': 'application/x-www-form-urlencoded',
            "X-Requested-With": "XMLHttpRequest"
          });

          var _form2 = new FormData();

          _form2.append("nb_annees", nb_annees);

          _form2.append("etoiles", etoiles);

          _form2.append("numeros", numeros);

          var myInit = {
            method: 'POST',
            headers: myHeaders,
            //  mode: 'cors',
            body: _form2
          };
          var myRequest = new Request(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_21___default.a.generate(this.state.lotteryName));
          fetch(myRequest, myInit).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
            content.innerHTML = data.content.content;
            console.log(data, content);
          });
        }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("form", {
        onSubmit: this.simuler,
        id: "form-lottery",
        autoComplete: "off"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("span", null, "Simulateur "), " ", this.state.lotteryName), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: this.state.error ? "alert alert-danger" : "alert alert-danger d-none",
        role: "alert"
      }, "Formulaire non conforme !"), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("h2", null, "Choisissez sur combien d'ann\xE9es vous voulez simuler"), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "d-flex flex-row bd-highlight mb-1 ans"
      }, this.state.anneesDeTirages.map(function (annees, index) {
        return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_Annees__WEBPACK_IMPORTED_MODULE_19__["default"], {
          handleAnnees: _functions_form__WEBPACK_IMPORTED_MODULE_20__["default"].handleAnnees,
          key: "annees-" + index,
          annees: annees,
          checked: index == 0 ? true : false
        });
      })), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "d-flex flex-column flex-md-row"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "mt-3 ml-3"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("h2", null, "Saisir ", this.state.nb_numero, " numeros entre ", this.state.min, " et ", this.state.maxNumero), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_TypeNumeroContext__WEBPACK_IMPORTED_MODULE_17__["TypeNumeroProvider"], {
        value: {
          typeNumero: 'numero'
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "row "
      }, this.state.grilleNumeros.map(function (value, index) {
        return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_Numero__WEBPACK_IMPORTED_MODULE_18__["default"], {
          key: "num-" + index,
          typeNumero: "numero",
          onChange: _functions_form__WEBPACK_IMPORTED_MODULE_20__["default"].handleChange,
          index: index,
          value: value,
          max: _this2.state.maxNumero,
          min: _this2.state.min
        });
      })))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "mt-3 ml-3"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("h2", null, "Saisir ", this.state.nb_etoile, " \xE9toiles entre ", this.state.min, " et ", this.state.maxEtoile), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_TypeNumeroContext__WEBPACK_IMPORTED_MODULE_17__["TypeNumeroProvider"], {
        value: {
          typeNumero: 'etoile'
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "d-flex flex-row bd-highlight mb-3"
      }, this.state.grilleEtoiles.map(function (value, index) {
        return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_Numero__WEBPACK_IMPORTED_MODULE_18__["default"], {
          key: "etoile-" + index,
          typeNumero: "etoile",
          onChange: _functions_form__WEBPACK_IMPORTED_MODULE_20__["default"].handleChange,
          index: index,
          value: value,
          max: _this2.state.maxEtoile,
          min: _this2.state.min
        });
      }))))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("button", {
        className: this.state.error == true ? 'btn btn-success btn-block disabled' : 'btn btn-success btn-block',
        type: "submit"
      }, " simuler !"))));
    }
  }]);

  return FormLottery;
}(react__WEBPACK_IMPORTED_MODULE_16__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FormLottery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/components/Numero.jsx":
/*!*****************************************!*\
  !*** ./assets/js/components/Numero.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TypeNumeroContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TypeNumeroContext */ "./assets/js/components/TypeNumeroContext.js");



var Numero = function Numero(props) {
  var typeNumeroContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_TypeNumeroContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "numeros " + typeNumeroContext.typeNumero
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: props.onChange,
    "data-index": props.index,
    "data-type-numero": typeNumeroContext.typeNumero,
    pattern: "\\d+",
    value: props.value,
    className: " ml-4",
    type: "text",
    step: "1",
    max: props.max,
    min: props.min,
    name: typeNumeroContext.typeNumero + "-" + props.index
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Numero);

/***/ }),

/***/ "./assets/js/components/TypeNumeroContext.js":
/*!***************************************************!*\
  !*** ./assets/js/components/TypeNumeroContext.js ***!
  \***************************************************/
/*! exports provided: TypeNumeroProvider, TypeNumeroConsumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeNumeroProvider", function() { return TypeNumeroProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeNumeroConsumer", function() { return TypeNumeroConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TypeNumeroContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var TypeNumeroProvider = TypeNumeroContext.Provider;
var TypeNumeroConsumer = TypeNumeroContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (TypeNumeroContext);

/***/ }),

/***/ "./assets/js/components/functions/_form.js":
/*!*************************************************!*\
  !*** ./assets/js/components/functions/_form.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _form = {
  isBonNumero: function isBonNumero(numero) {
    return numero != '' ? this.state.numeros.indexOf(parseInt(numero)) : 1;
  },
  isBonEtoile: function isBonEtoile(numero) {
    return numero != '' ? this.state.etoiles.indexOf(parseInt(numero)) : 1;
  },
  handleAnnees: function handleAnnees(e) {
    //on le modifie que si il n'a pas encore ete checké
    if (!e.currentTarget.classList.contains("checked")) {
      //on déchek l'element qui avait ete checké
      e.currentTarget.parentNode.querySelector("span.checked").classList.toggle("checked"); //puis on check l element cible

      e.currentTarget.classList.toggle("checked");
    }
  },
  handleChange: function handleChange(e) {
    e.preventDefault();
    this.setState({
      error: false
    });
    var target = e.currentTarget;
    var numIndex = target.dataset.index;
    var newValue = target.value;
    var typeNumero = target.dataset.typeNumero;

    if (typeNumero === "numero") {
      if (newValue.length <= 2) {
        $(target).popover("dispose");

        if (_form.isBonNumero(newValue) >= 0) {
          if (this.state.grilleNumeros.indexOf(newValue) < 0 || newValue == '' || this.state.grilleNumeros.indexOf(newValue) >= 0 && newValue.length === 1) {
            var grilleNumeros = _toConsumableArray(this.state.grilleNumeros);

            grilleNumeros[numIndex] = newValue; // update state

            this.setState({
              grilleNumeros: grilleNumeros
            });

            if (this.state.grilleNumeros.indexOf(newValue) >= 0 && newValue.length === 1) {
              this.setState({
                error: true
              });
              $(target).popover({
                animation: true,
                content: "Chiffre " + newValue + " déjà seléctionné.",
                placement: "bottom"
              }); //.show()

              $(target).popover("show");
            }
          } else {
            this.setState({
              error: true
            });
            $(target).popover({
              animation: true,
              content: "Chiffre " + newValue + " déjà seléctionné.",
              placement: "bottom"
            }); //.show()

            $(target).popover("show");
          }
        } else {
          this.setState({
            error: true
          });
          $(target).popover({
            animation: true,
            content: "Chiffre compris entre " + this.state.min + " et " + this.state.maxNumero,
            placement: "bottom"
          }); //.show()

          $(target).popover("show");
        }
      }
    } else if (typeNumero === "etoile") {
      if (newValue.length <= 2) {
        $(target).popover("dispose");

        if (_form.isBonEtoile(newValue) >= 0) {
          if (this.state.grilleEtoiles.indexOf(newValue) < 0 || newValue == '' || this.state.grilleEtoiles.indexOf(newValue) >= 0 && newValue.length === 1) {
            var grilleEtoiles = _toConsumableArray(this.state.grilleEtoiles);

            grilleEtoiles[numIndex] = newValue; // update state

            this.setState({
              grilleEtoiles: grilleEtoiles
            });

            if (this.state.grilleEtoiles.indexOf(newValue) >= 0 && newValue.length === 1) {
              this.setState({
                error: true
              });
              $(e.currentTarget).popover({
                animation: true,
                content: "Chiffre " + newValue + " déjà seléctionné.",
                placement: "bottom"
              }); //.show()

              $(e.currentTarget).popover("show");
            }
          } else {
            this.setState({
              error: true
            });
            $(e.currentTarget).popover({
              animation: true,
              content: "Chiffre " + newValue + " déjà seléctionné.",
              placement: "bottom"
            }); //.show()

            $(e.currentTarget).popover("show");
          }
        } else {
          this.setState({
            error: true
          });
          $(target).popover({
            animation: true,
            content: "Chiffre compris entre " + this.state.min + " et " + this.state.maxEtoile,
            placement: "bottom"
          }); //.show()

          $(target).popover("show");
        }
      }
    }
  },
  formIsNotEmpty: function formIsNotEmpty(form, numeros, etoiles) {
    form.querySelectorAll(".numeros.numero input").forEach(function (input, index) {
      if (input.value != "") {
        numeros.push(input.value);
      } else {
        return false;
      }
    });
    form.querySelectorAll(".numeros.etoile input").forEach(function (input, index) {
      if (input.value != "") {
        etoiles.push(input.value);
      } else {
        return false;
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (_form);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/js/fos_js_routes.json":
/*!**************************************!*\
  !*** ./public/js/fos_js_routes.json ***!
  \**************************************/
/*! exports provided: base_url, routes, prefix, host, port, scheme, locale, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"base_url\":\"\",\"routes\":{\"euromillion\":{\"tokens\":[[\"text\",\"/euromillion\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]}},\"prefix\":\"\",\"host\":\"localhost\",\"port\":\"\",\"scheme\":\"http\",\"locale\":[]}");

/***/ }),

/***/ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js":
/*!************************************************************************************!*\
  !*** ./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.freeze */ "./node_modules/core-js/modules/es.object.freeze.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  var n = t();
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n.Routing),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  var t = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var o in n) {
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
    }

    return e;
  },
      n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  },
      o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      i = function () {
    function i(t, n) {
      e(this, i), this.context_ = t || {
        base_url: "",
        prefix: "",
        host: "",
        port: "",
        scheme: "",
        locale: ""
      }, this.setRoutes(n || {});
    }

    return o(i, [{
      key: "setRoutingData",
      value: function value(e) {
        this.setBaseUrl(e.base_url), this.setRoutes(e.routes), "prefix" in e && this.setPrefix(e.prefix), "port" in e && this.setPort(e.port), "locale" in e && this.setLocale(e.locale), this.setHost(e.host), this.setScheme(e.scheme);
      }
    }, {
      key: "setRoutes",
      value: function value(e) {
        this.routes_ = Object.freeze(e);
      }
    }, {
      key: "getRoutes",
      value: function value() {
        return this.routes_;
      }
    }, {
      key: "setBaseUrl",
      value: function value(e) {
        this.context_.base_url = e;
      }
    }, {
      key: "getBaseUrl",
      value: function value() {
        return this.context_.base_url;
      }
    }, {
      key: "setPrefix",
      value: function value(e) {
        this.context_.prefix = e;
      }
    }, {
      key: "setScheme",
      value: function value(e) {
        this.context_.scheme = e;
      }
    }, {
      key: "getScheme",
      value: function value() {
        return this.context_.scheme;
      }
    }, {
      key: "setHost",
      value: function value(e) {
        this.context_.host = e;
      }
    }, {
      key: "getHost",
      value: function value() {
        return this.context_.host;
      }
    }, {
      key: "setPort",
      value: function value(e) {
        this.context_.port = e;
      }
    }, {
      key: "getPort",
      value: function value() {
        return this.context_.port;
      }
    }, {
      key: "setLocale",
      value: function value(e) {
        this.context_.locale = e;
      }
    }, {
      key: "getLocale",
      value: function value() {
        return this.context_.locale;
      }
    }, {
      key: "buildQueryParams",
      value: function value(e, t, o) {
        var i = this,
            r = void 0,
            s = new RegExp(/\[\]$/);
        if (t instanceof Array) t.forEach(function (t, r) {
          s.test(e) ? o(e, t) : i.buildQueryParams(e + "[" + ("object" === ("undefined" == typeof t ? "undefined" : n(t)) ? r : "") + "]", t, o);
        });else if ("object" === ("undefined" == typeof t ? "undefined" : n(t))) for (r in t) {
          this.buildQueryParams(e + "[" + r + "]", t[r], o);
        } else o(e, t);
      }
    }, {
      key: "getRoute",
      value: function value(e) {
        var t = this.context_.prefix + e,
            n = e + "." + this.context_.locale,
            o = this.context_.prefix + e + "." + this.context_.locale,
            i = [t, n, o, e];

        for (var r in i) {
          if (i[r] in this.routes_) return this.routes_[i[r]];
        }

        throw new Error('The route "' + e + '" does not exist.');
      }
    }, {
      key: "generate",
      value: function value(e, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = this.getRoute(e),
            r = n || {},
            s = t({}, r),
            u = "",
            c = !0,
            a = "",
            f = "undefined" == typeof this.getPort() || null === this.getPort() ? "" : this.getPort();

        if (i.tokens.forEach(function (t) {
          if ("text" === t[0]) return u = t[1] + u, void (c = !1);
          {
            if ("variable" !== t[0]) throw new Error('The token type "' + t[0] + '" is not supported.');
            var n = i.defaults && t[3] in i.defaults;

            if (!1 === c || !n || t[3] in r && r[t[3]] != i.defaults[t[3]]) {
              var o = void 0;
              if (t[3] in r) o = r[t[3]], delete s[t[3]];else {
                if (!n) {
                  if (c) return;
                  throw new Error('The route "' + e + '" requires the parameter "' + t[3] + '".');
                }

                o = i.defaults[t[3]];
              }
              var a = !0 === o || !1 === o || "" === o;

              if (!a || !c) {
                var f = encodeURIComponent(o).replace(/%2F/g, "/");
                "null" === f && null === o && (f = ""), u = t[1] + f + u;
              }

              c = !1;
            } else n && t[3] in s && delete s[t[3]];
          }
        }), "" === u && (u = "/"), i.hosttokens.forEach(function (e) {
          var t = void 0;
          return "text" === e[0] ? void (a = e[1] + a) : void ("variable" === e[0] && (e[3] in r ? (t = r[e[3]], delete s[e[3]]) : i.defaults && e[3] in i.defaults && (t = i.defaults[e[3]]), a = e[1] + t + a));
        }), u = this.context_.base_url + u, i.requirements && "_scheme" in i.requirements && this.getScheme() != i.requirements._scheme ? u = i.requirements._scheme + "://" + (a || this.getHost()) + u : "undefined" != typeof i.schemes && "undefined" != typeof i.schemes[0] && this.getScheme() !== i.schemes[0] ? u = i.schemes[0] + "://" + (a || this.getHost()) + u : a && this.getHost() !== a + ("" === f ? "" : ":" + f) ? u = this.getScheme() + "://" + a + ("" === f ? "" : ":" + f) + u : o === !0 && (u = this.getScheme() + "://" + this.getHost() + u), Object.keys(s).length > 0) {
          var l = void 0,
              h = [],
              y = function y(e, t) {
            t = "function" == typeof t ? t() : t, t = null === t ? "" : t, h.push(encodeURIComponent(e) + "=" + encodeURIComponent(t));
          };

          for (l in s) {
            this.buildQueryParams(l, s[l], y);
          }

          u = u + "?" + h.join("&").replace(/%20/g, "+");
        }

        return u;
      }
    }], [{
      key: "getInstance",
      value: function value() {
        return r;
      }
    }, {
      key: "setData",
      value: function value(e) {
        var t = i.getInstance();
        t.setRoutingData(e);
      }
    }]), i;
  }();

  i.Route, i.Context;
  var r = new i();
  return {
    Router: i,
    Routing: r
  };
});

/***/ })

},[["./assets/js/components/App.jsx","runtime","vendors~AppComponent~app~bootstrap","vendors~AppComponent~app","vendors~AppComponent"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvZm9ybS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FubmVlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Gb3JtTG90dGVyeS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTnVtZXJvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UeXBlTnVtZXJvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9mdW5jdGlvbnMvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMiXSwibmFtZXMiOlsiQW5uZWVzIiwicHJvcHMiLCJoYW5kbGVBbm5lZXMiLCJjaGVja2VkIiwiYW5uZWVzIiwiQXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRhdGFzZXQiLCJzdGF0ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwibW9kYWwiLCIkIiwibG9hZGVyIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIm9uIiwiY29uc29sZSIsImxvZyIsInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJGb3JtTG90dGVyeSIsIkpTT04iLCJwYXJzZSIsInJvb3QiLCJlcnJvciIsIl9mb3JtIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImlzQm9uTnVtZXJvIiwiaXNCb25FdG9pbGUiLCJzaW11bGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImN1cnJlbnRUYXJnZXQiLCJuYl9hbm5lZXMiLCJudW1lcm9zIiwiZXRvaWxlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaW5wdXQiLCJpbmRleCIsInZhbHVlIiwicHVzaCIsInNldFN0YXRlIiwidGl0bGUiLCJjb250ZW50IiwibG90dGVyeU5hbWUiLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJteUluaXQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIm15UmVxdWVzdCIsIlJlcXVlc3QiLCJnZW5lcmF0ZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJhbm5lZXNEZVRpcmFnZXMiLCJtYXAiLCJuYl9udW1lcm8iLCJtaW4iLCJtYXhOdW1lcm8iLCJ0eXBlTnVtZXJvIiwiZ3JpbGxlTnVtZXJvcyIsIm5iX2V0b2lsZSIsIm1heEV0b2lsZSIsImdyaWxsZUV0b2lsZXMiLCJDb21wb25lbnQiLCJOdW1lcm8iLCJ0eXBlTnVtZXJvQ29udGV4dCIsInVzZUNvbnRleHQiLCJUeXBlTnVtZXJvQ29udGV4dCIsIm9uQ2hhbmdlIiwibWF4IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiVHlwZU51bWVyb1Byb3ZpZGVyIiwiUHJvdmlkZXIiLCJUeXBlTnVtZXJvQ29uc3VtZXIiLCJDb25zdW1lciIsIm51bWVybyIsImluZGV4T2YiLCJwYXJzZUludCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsInRvZ2dsZSIsInRhcmdldCIsIm51bUluZGV4IiwibmV3VmFsdWUiLCJsZW5ndGgiLCJwb3BvdmVyIiwiYW5pbWF0aW9uIiwicGxhY2VtZW50IiwiZm9ybUlzTm90RW1wdHkiLCJ0IiwibiIsImRlZmluZSIsIlR5cGVFcnJvciIsIk9iamVjdCIsImFzc2lnbiIsImFyZ3VtZW50cyIsIm8iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJpIiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJwb3J0Iiwic2NoZW1lIiwibG9jYWxlIiwic2V0Um91dGVzIiwic2V0QmFzZVVybCIsInNldFByZWZpeCIsInNldFBvcnQiLCJzZXRMb2NhbGUiLCJzZXRIb3N0Iiwic2V0U2NoZW1lIiwicm91dGVzXyIsImZyZWV6ZSIsInIiLCJzIiwiUmVnRXhwIiwiQXJyYXkiLCJ0ZXN0IiwiYnVpbGRRdWVyeVBhcmFtcyIsIkVycm9yIiwiZ2V0Um91dGUiLCJ1IiwiYyIsImEiLCJmIiwiZ2V0UG9ydCIsInRva2VucyIsImRlZmF1bHRzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsImhvc3R0b2tlbnMiLCJyZXF1aXJlbWVudHMiLCJnZXRTY2hlbWUiLCJfc2NoZW1lIiwiZ2V0SG9zdCIsInNjaGVtZXMiLCJrZXlzIiwibCIsImgiLCJ5Iiwiam9pbiIsImdldEluc3RhbmNlIiwiUm91dGUiLCJDb250ZXh0IiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFVO0FBRXpCLFNBRUc7QUFBTyxXQUFPLEVBQUVBLEtBQUssQ0FBQ0MsWUFBdEI7QUFBb0MsYUFBUyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sR0FBYyxTQUFkLEdBQXlCO0FBQXhFLEtBQTZFRixLQUFLLENBQUNHLE1BQW5GLENBRkg7QUFRQyxDQVZEOztBQVllSixxRUFBZixFOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxJQUFNSyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBSWQsU0FBUSx3RUFFSSwyREFBQyxvREFBRDtBQUFhLFFBQUksRUFBRUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxPQUFoQyxDQUF3Q0M7QUFBM0QsSUFGSixDQUFSO0FBS0gsQ0FURDs7QUFZZUosa0VBQWY7QUFFQUssZ0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQiwyREFBQyxHQUFELE9BQWhCLEVBQXdCTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBeEI7QUFFQSxJQUFNSyxLQUFLLEdBQUdDLENBQUMsQ0FBQyxlQUFELENBQWY7QUFDQyxJQUFNQyxNQUFNLEdBQUdSLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QiwyQkFBdkIsRUFBb0RDLFNBQW5FO0FBQ0NKLEtBQUssQ0FBQ0ssRUFBTixDQUFTLGVBQVQsRUFBMEIsWUFBWTtBQUNyQ1gsVUFBUSxDQUFDUyxhQUFULENBQXVCLDJCQUF2QixFQUFvREMsU0FBcEQsR0FBZ0VGLE1BQWhFO0FBQ0FJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDRCxDQUhBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJGO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQyxNQUFNLEdBQUdDLG1CQUFPLENBQUMsNkVBQUQsQ0FBdEI7O0FBQ0FDLG1IQUFPLENBQUNDLGNBQVIsQ0FBdUJILE1BQXZCOztBQUVBQyxtQkFBTyxDQUFDLHlFQUFELENBQVA7O0lBRU1HLFc7Ozs7O0FBSUwsdUJBQVl2QixLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLHFGQUFNQSxLQUFOO0FBQ0EsVUFBS1EsS0FBTCxHQUFhZ0IsSUFBSSxDQUFDQyxLQUFMLENBQVcsTUFBS3pCLEtBQUwsQ0FBVzBCLElBQXRCLENBQWI7QUFDQSxVQUFLbEIsS0FBTCxDQUFXbUIsS0FBWCxHQUFtQixLQUFuQjtBQUNBQyw0REFBSyxDQUFDQyxZQUFOLEdBQXFCRCx3REFBSyxDQUFDQyxZQUFOLENBQW1CQyxJQUFuQiwrQkFBckI7QUFDQUYsNERBQUssQ0FBQ0csV0FBTixHQUFvQkgsd0RBQUssQ0FBQ0csV0FBTixDQUFrQkQsSUFBbEIsK0JBQXBCO0FBQ0FGLDREQUFLLENBQUNJLFdBQU4sR0FBb0JKLHdEQUFLLENBQUNJLFdBQU4sQ0FBa0JGLElBQWxCLCtCQUFwQjtBQUNBLFVBQUtHLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFILElBQWIsK0JBQWY7QUFQa0I7QUFZbkI7Ozs7NEJBS1FJLEMsRUFBRTtBQUNUQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFJUixLQUFLLEdBQUcsS0FBWjtBQUNBLFVBQUlTLElBQUksR0FBR0YsQ0FBQyxDQUFDRyxhQUFiO0FBQ0EsVUFBSUMsU0FBUyxHQUFHRixJQUFJLENBQUN0QixhQUFMLENBQW1CLG1CQUFuQixFQUF3Q0MsU0FBeEQ7QUFDQSxVQUFJd0IsT0FBTyxHQUFHLEVBQWQ7QUFDQSxVQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUNBSixVQUFJLENBQUNLLGdCQUFMLENBQXNCLHVCQUF0QixFQUErQ0MsT0FBL0MsQ0FBdUQsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWdCO0FBQ3RFLFlBQUdELEtBQUssQ0FBQ0UsS0FBTixJQUFlLEVBQWxCLEVBQXFCO0FBQ3BCTixpQkFBTyxDQUFDTyxJQUFSLENBQWNILEtBQUssQ0FBQ0UsS0FBcEI7QUFDQSxTQUZELE1BRUs7QUFDSmxCLGVBQUssR0FBRyxJQUFSO0FBQ0E7QUFDRCxPQU5EO0FBT0FTLFVBQUksQ0FBQ0ssZ0JBQUwsQ0FBc0IsdUJBQXRCLEVBQStDQyxPQUEvQyxDQUF1RCxVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBZ0I7QUFDdEUsWUFBR0QsS0FBSyxDQUFDRSxLQUFOLElBQWUsRUFBbEIsRUFBcUI7QUFDcEJMLGlCQUFPLENBQUNNLElBQVIsQ0FBY0gsS0FBSyxDQUFDRSxLQUFwQjtBQUNBLFNBRkQsTUFFSztBQUNKbEIsZUFBSyxHQUFHLElBQVI7QUFDQTtBQUNELE9BTkQ7O0FBUUEsVUFBR0EsS0FBSCxFQUFTO0FBQ1IsYUFBS29CLFFBQUwsQ0FBYztBQUFDcEIsZUFBSyxFQUFDQTtBQUFQLFNBQWQ7QUFDQSxPQUZELENBRUM7QUFGRCxXQUdLLElBQUcsQ0FBQyxLQUFLbkIsS0FBTCxDQUFXbUIsS0FBZixFQUFxQjtBQUN4QjtBQUVEZixXQUFDLENBQUMsZUFBRCxDQUFELENBQW1CRCxLQUFuQixDQUF5QixNQUF6QjtBQUNBLGNBQUlxQyxLQUFLLEdBQUczQyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsaUNBQXZCLENBQVo7QUFDQSxjQUFJbUMsT0FBTyxHQUFHNUMsUUFBUSxDQUFDUyxhQUFULENBQXVCLDJCQUF2QixDQUFkO0FBQ0FrQyxlQUFLLENBQUNqQyxTQUFOLEdBQWtCLEtBQUtQLEtBQUwsQ0FBVzBDLFdBQTdCO0FBQ0UsY0FBSUMsU0FBUyxHQUFHLElBQUlDLE9BQUosQ0FBWTtBQUMxQjtBQUNBLGdDQUFxQjtBQUZLLFdBQVosQ0FBaEI7O0FBSUEsY0FBSWhCLE1BQUksR0FBRyxJQUFJaUIsUUFBSixFQUFYOztBQUNBakIsZ0JBQUksQ0FBQ2tCLE1BQUwsQ0FBWSxXQUFaLEVBQXdCaEIsU0FBeEI7O0FBQ0FGLGdCQUFJLENBQUNrQixNQUFMLENBQVksU0FBWixFQUFzQmQsT0FBdEI7O0FBQ0ZKLGdCQUFJLENBQUNrQixNQUFMLENBQVksU0FBWixFQUFzQmYsT0FBdEI7O0FBQ0EsY0FBSWdCLE1BQU0sR0FBRztBQUFFQyxrQkFBTSxFQUFFLE1BQVY7QUFDRUMsbUJBQU8sRUFBRU4sU0FEWDtBQUVBO0FBQ0VPLGdCQUFJLEVBQUd0QjtBQUhULFdBQWI7QUFNQSxjQUFJdUIsU0FBUyxHQUFHLElBQUlDLE9BQUosQ0FBWXZDLG1IQUFPLENBQUN3QyxRQUFSLENBQWlCLEtBQUtyRCxLQUFMLENBQVcwQyxXQUE1QixDQUFaLENBQWhCO0FBRUFZLGVBQUssQ0FBQ0gsU0FBRCxFQUFXSixNQUFYLENBQUwsQ0FDQ1EsSUFERCxDQUNNLFVBQVNDLFFBQVQsRUFBbUI7QUFDdkIsbUJBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsV0FIRCxFQUlDRixJQUpELENBSU0sVUFBU0csSUFBVCxFQUFlO0FBQ3BCakQsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZZ0QsSUFBWjtBQUNBakIsbUJBQU8sQ0FBQ2xDLFNBQVIsR0FBb0JtRCxJQUFJLENBQUNqQixPQUFMLENBQWFBLE9BQWpDO0FBRUNoQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlnRCxJQUFaLEVBQWtCakIsT0FBbEI7QUFDRCxXQVREO0FBVUQ7QUFHQzs7OzZCQUVLO0FBQUE7O0FBRVIsYUFDSyx5RUFDSTtBQUFNLGdCQUFRLEVBQUUsS0FBS2hCLE9BQXJCO0FBQThCLFVBQUUsRUFBQyxjQUFqQztBQUFpRCxvQkFBWSxFQUFDO0FBQTlELFNBQ0Usd0VBQUksd0ZBQUosT0FBOEIsS0FBS3pCLEtBQUwsQ0FBVzBDLFdBQXpDLENBREYsRUFFRTtBQUFLLGlCQUFTLEVBQUcsS0FBSzFDLEtBQUwsQ0FBV21CLEtBQVosR0FBbUIsb0JBQW5CLEdBQXdDLDJCQUF4RDtBQUFxRixZQUFJLEVBQUM7QUFBMUYscUNBRkYsRUFNRSxpSUFORixFQU9JO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0QsS0FBS25CLEtBQUwsQ0FBVzJELGVBQVgsQ0FBMkJDLEdBQTNCLENBQStCLFVBQUVqRSxNQUFGLEVBQVV5QyxLQUFWO0FBQUEsZUFDckMsNERBQUMsZ0RBQUQ7QUFBUSxzQkFBWSxFQUFFaEIsd0RBQUssQ0FBQzNCLFlBQTVCO0FBQTBDLGFBQUcsRUFBRSxZQUFVMkMsS0FBekQ7QUFBZ0UsZ0JBQU0sRUFBRXpDLE1BQXhFO0FBQWdGLGlCQUFPLEVBQUd5QyxLQUFLLElBQUcsQ0FBVCxHQUFZLElBQVosR0FBaUI7QUFBMUcsVUFEcUM7QUFBQSxPQUEvQixDQURDLENBUEosRUFhTDtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNRO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0UsbUZBQVksS0FBS3BDLEtBQUwsQ0FBVzZELFNBQXZCLHFCQUFpRCxLQUFLN0QsS0FBTCxDQUFXOEQsR0FBNUQsVUFBcUUsS0FBSzlELEtBQUwsQ0FBVytELFNBQWhGLENBREYsRUFFRSw0REFBQyxzRUFBRDtBQUFvQixhQUFLLEVBQUc7QUFBQ0Msb0JBQVUsRUFBQztBQUFaO0FBQTVCLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSxLQUFLaEUsS0FBTCxDQUFXaUUsYUFBWCxDQUF5QkwsR0FBekIsQ0FBNkIsVUFBQ3ZCLEtBQUQsRUFBUUQsS0FBUjtBQUFBLGVBQzVCLDREQUFDLGdEQUFEO0FBQVEsYUFBRyxFQUFFLFNBQU9BLEtBQXBCO0FBQTRCLG9CQUFVLEVBQUMsUUFBdkM7QUFBZ0Qsa0JBQVEsRUFBR2hCLHdEQUFLLENBQUNDLFlBQWpFO0FBQStFLGVBQUssRUFBRWUsS0FBdEY7QUFBOEYsZUFBSyxFQUFFQyxLQUFyRztBQUE0RyxhQUFHLEVBQUUsTUFBSSxDQUFDckMsS0FBTCxDQUFXK0QsU0FBNUg7QUFBdUksYUFBRyxFQUFJLE1BQUksQ0FBQy9ELEtBQUwsQ0FBVzhEO0FBQXpKLFVBRDRCO0FBQUEsT0FBN0IsQ0FESixDQURGLENBRkYsQ0FEUixFQVdVO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0MsbUZBQVksS0FBSzlELEtBQUwsQ0FBV2tFLFNBQXZCLHdCQUFpRCxLQUFLbEUsS0FBTCxDQUFXOEQsR0FBNUQsVUFBcUUsS0FBSzlELEtBQUwsQ0FBV21FLFNBQWhGLENBREQsRUFFQyw0REFBQyxzRUFBRDtBQUFvQixhQUFLLEVBQUc7QUFBQ0gsb0JBQVUsRUFBQztBQUFaO0FBQTVCLFNBQ0E7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRyxLQUFLaEUsS0FBTCxDQUFXb0UsYUFBWCxDQUF5QlIsR0FBekIsQ0FBNkIsVUFBQ3ZCLEtBQUQsRUFBUUQsS0FBUjtBQUFBLGVBQzVCLDREQUFDLGdEQUFEO0FBQVEsYUFBRyxFQUFFLFlBQVVBLEtBQXZCO0FBQThCLG9CQUFVLEVBQUMsUUFBekM7QUFBa0Qsa0JBQVEsRUFBR2hCLHdEQUFLLENBQUNDLFlBQW5FO0FBQWlGLGVBQUssRUFBRWUsS0FBeEY7QUFBZ0csZUFBSyxFQUFFQyxLQUF2RztBQUE4RyxhQUFHLEVBQUUsTUFBSSxDQUFDckMsS0FBTCxDQUFXbUUsU0FBOUg7QUFBeUksYUFBRyxFQUFJLE1BQUksQ0FBQ25FLEtBQUwsQ0FBVzhEO0FBQTNKLFVBRDRCO0FBQUEsT0FBN0IsQ0FESCxDQURBLENBRkQsQ0FYVixDQWJLLEVBbUNDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0M7QUFBUSxpQkFBUyxFQUFHLEtBQUs5RCxLQUFMLENBQVdtQixLQUFYLElBQW9CLElBQXBCLEdBQTBCLG9DQUExQixHQUFnRSwyQkFBcEY7QUFBaUgsWUFBSSxFQUFDO0FBQXRILHNCQURELENBbkNELENBREosQ0FETDtBQTJDRTs7OztFQWpJd0JrRCxnRDs7QUFvSVh0RCwwRUFBZixFOzs7Ozs7Ozs7Ozs7O0FDakpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFHQSxJQUFNdUQsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQzlFLEtBQUQsRUFBUztBQUN4QixNQUFNK0UsaUJBQWlCLEdBQUdDLHdEQUFVLENBQUNDLDBEQUFELENBQXBDO0FBQ0UsU0FBTztBQUFNLGFBQVMsRUFBRSxhQUFZRixpQkFBaUIsQ0FBQ1A7QUFBL0MsS0FDSjtBQUFPLFlBQVEsRUFBR3hFLEtBQUssQ0FBQ2tGLFFBQXhCO0FBQ0Msa0JBQVlsRixLQUFLLENBQUM0QyxLQURuQjtBQUVDLHdCQUFtQm1DLGlCQUFpQixDQUFDUCxVQUZ0QztBQUdDLFdBQU8sRUFBQyxNQUhUO0FBSUMsU0FBSyxFQUFFeEUsS0FBSyxDQUFDNkMsS0FKZDtBQUtDLGFBQVMsRUFBRSxPQUxaO0FBTUMsUUFBSSxFQUFFLE1BTlA7QUFPQyxRQUFJLEVBQUMsR0FQTjtBQVFDLE9BQUcsRUFBRTdDLEtBQUssQ0FBQ21GLEdBUlo7QUFTRSxPQUFHLEVBQUluRixLQUFLLENBQUNzRSxHQVRmO0FBVUUsUUFBSSxFQUFJUyxpQkFBaUIsQ0FBQ1AsVUFBbEIsR0FBOEIsR0FBOUIsR0FBbUN4RSxLQUFLLENBQUM0QztBQVZuRCxJQURJLENBQVA7QUFhRCxDQWZEOztBQWlCZWtDLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNRyxpQkFBaUIsR0FBR0csNENBQUssQ0FBQ0MsYUFBTixDQUFvQixFQUFwQixDQUExQjtBQUdPLElBQU1DLGtCQUFrQixHQUFHTCxpQkFBaUIsQ0FBQ00sUUFBN0M7QUFDQSxJQUFNQyxrQkFBa0IsR0FBR1AsaUJBQWlCLENBQUNRLFFBQTdDO0FBQ1FSLGdGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxJQUFNckQsS0FBSyxHQUFFO0FBQ1pHLGFBQVcsRUFBRyxxQkFBUzJELE1BQVQsRUFBZ0I7QUFDN0IsV0FBT0EsTUFBTSxJQUFJLEVBQVYsR0FBZSxLQUFLbEYsS0FBTCxDQUFXK0IsT0FBWCxDQUFtQm9ELE9BQW5CLENBQTJCQyxRQUFRLENBQUNGLE1BQUQsQ0FBbkMsQ0FBZixHQUE4RCxDQUFyRTtBQUNBLEdBSFc7QUFJWjFELGFBQVcsRUFBRyxxQkFBUzBELE1BQVQsRUFBZ0I7QUFDekIsV0FBT0EsTUFBTSxJQUFJLEVBQVYsR0FBZSxLQUFLbEYsS0FBTCxDQUFXZ0MsT0FBWCxDQUFtQm1ELE9BQW5CLENBQTJCQyxRQUFRLENBQUNGLE1BQUQsQ0FBbkMsQ0FBZixHQUE4RCxDQUFyRTtBQUNGLEdBTlM7QUFPVnpGLGNBQVksRUFBRyxzQkFBU2lDLENBQVQsRUFBVztBQUN6QjtBQUNBLFFBQUcsQ0FBQ0EsQ0FBQyxDQUFDRyxhQUFGLENBQWdCd0QsU0FBaEIsQ0FBMEJDLFFBQTFCLENBQW1DLFNBQW5DLENBQUosRUFBa0Q7QUFDakQ7QUFDQTVELE9BQUMsQ0FBQ0csYUFBRixDQUFnQjBELFVBQWhCLENBQTJCakYsYUFBM0IsQ0FBeUMsY0FBekMsRUFBeUQrRSxTQUF6RCxDQUFtRUcsTUFBbkUsQ0FBMEUsU0FBMUUsRUFGaUQsQ0FHakQ7O0FBQ0E5RCxPQUFDLENBQUNHLGFBQUYsQ0FBZ0J3RCxTQUFoQixDQUEwQkcsTUFBMUIsQ0FBaUMsU0FBakM7QUFDQTtBQUVILEdBaEJXO0FBaUJYbkUsY0FqQlcsd0JBaUJFSyxDQWpCRixFQWlCSTtBQUNaQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxTQUFLWSxRQUFMLENBQWM7QUFBQ3BCLFdBQUssRUFBRTtBQUFSLEtBQWQ7QUFDQSxRQUFJc0UsTUFBTSxHQUFHL0QsQ0FBQyxDQUFDRyxhQUFmO0FBQ0EsUUFBSTZELFFBQVEsR0FBSUQsTUFBTSxDQUFDMUYsT0FBUCxDQUFlcUMsS0FBL0I7QUFDQSxRQUFJdUQsUUFBUSxHQUFJRixNQUFNLENBQUNwRCxLQUF2QjtBQUNBLFFBQUkyQixVQUFVLEdBQUl5QixNQUFNLENBQUMxRixPQUFQLENBQWVpRSxVQUFqQzs7QUFDQSxRQUFHQSxVQUFVLEtBQUssUUFBbEIsRUFBMkI7QUFDdkIsVUFBRzJCLFFBQVEsQ0FBQ0MsTUFBVCxJQUFtQixDQUF0QixFQUF5QjtBQUNyQnhGLFNBQUMsQ0FBRXFGLE1BQUYsQ0FBRCxDQUFXSSxPQUFYLENBQW1CLFNBQW5COztBQUNBLFlBQUl6RSxLQUFLLENBQUNHLFdBQU4sQ0FBa0JvRSxRQUFsQixLQUE4QixDQUFsQyxFQUFxQztBQUNqQyxjQUFHLEtBQUszRixLQUFMLENBQVdpRSxhQUFYLENBQXlCa0IsT0FBekIsQ0FBaUNRLFFBQWpDLElBQTZDLENBQTdDLElBQWtEQSxRQUFRLElBQUksRUFBOUQsSUFBcUUsS0FBSzNGLEtBQUwsQ0FBV2lFLGFBQVgsQ0FBeUJrQixPQUF6QixDQUFpQ1EsUUFBakMsS0FBOEMsQ0FBOUMsSUFBbURBLFFBQVEsQ0FBQ0MsTUFBVCxLQUFtQixDQUE5SSxFQUFrSjtBQUVoSixnQkFBTzNCLGFBQWEsc0JBQVEsS0FBS2pFLEtBQUwsQ0FBV2lFLGFBQW5CLENBQXBCOztBQUNBQSx5QkFBYSxDQUFDeUIsUUFBRCxDQUFiLEdBQTBCQyxRQUExQixDQUhnSixDQUloSjs7QUFDQSxpQkFBS3BELFFBQUwsQ0FBYztBQUNWMEIsMkJBQWEsRUFBYkE7QUFEVSxhQUFkOztBQUlBLGdCQUFHLEtBQUtqRSxLQUFMLENBQVdpRSxhQUFYLENBQXlCa0IsT0FBekIsQ0FBaUNRLFFBQWpDLEtBQThDLENBQTlDLElBQW1EQSxRQUFRLENBQUNDLE1BQVQsS0FBbUIsQ0FBekUsRUFBMkU7QUFDaEYsbUJBQUtyRCxRQUFMLENBQWM7QUFBQ3BCLHFCQUFLLEVBQUU7QUFBUixlQUFkO0FBQ1FmLGVBQUMsQ0FBRXFGLE1BQUYsQ0FBRCxDQUFXSSxPQUFYLENBQW1CO0FBQ2hCQyx5QkFBUyxFQUFFLElBREs7QUFFaEJyRCx1QkFBTyxFQUFFLGFBQVlrRCxRQUFaLEdBQXNCLG9CQUZmO0FBR2hCSSx5QkFBUyxFQUFFO0FBSEssZUFBbkIsRUFGd0UsQ0FNckU7O0FBQ0ozRixlQUFDLENBQUVxRixNQUFGLENBQUQsQ0FBV0ksT0FBWCxDQUFtQixNQUFuQjtBQUNEO0FBR0YsV0FwQkQsTUFvQks7QUFDSixpQkFBS3RELFFBQUwsQ0FBYztBQUFDcEIsbUJBQUssRUFBRTtBQUFSLGFBQWQ7QUFDRWYsYUFBQyxDQUFFcUYsTUFBRixDQUFELENBQVdJLE9BQVgsQ0FBbUI7QUFDZEMsdUJBQVMsRUFBRSxJQURHO0FBRWRyRCxxQkFBTyxFQUFFLGFBQVlrRCxRQUFaLEdBQXNCLG9CQUZqQjtBQUdkSSx1QkFBUyxFQUFFO0FBSEcsYUFBbkIsRUFGRSxDQU1HOztBQUNKM0YsYUFBQyxDQUFFcUYsTUFBRixDQUFELENBQVdJLE9BQVgsQ0FBbUIsTUFBbkI7QUFDSDtBQUNKLFNBOUJELE1BOEJLO0FBQ0osZUFBS3RELFFBQUwsQ0FBYztBQUFDcEIsaUJBQUssRUFBRTtBQUFSLFdBQWQ7QUFDRWYsV0FBQyxDQUFDcUYsTUFBRCxDQUFELENBQVVJLE9BQVYsQ0FBa0I7QUFDVEMscUJBQVMsRUFBRSxJQURGO0FBRVRyRCxtQkFBTyxFQUFFLDJCQUEwQixLQUFLekMsS0FBTCxDQUFXOEQsR0FBckMsR0FBMEMsTUFBMUMsR0FBa0QsS0FBSzlELEtBQUwsQ0FBVytELFNBRjdEO0FBR1RnQyxxQkFBUyxFQUFFO0FBSEYsV0FBbEIsRUFGRSxDQU1POztBQUNSM0YsV0FBQyxDQUFFcUYsTUFBRixDQUFELENBQVdJLE9BQVgsQ0FBbUIsTUFBbkI7QUFDSDtBQUNKO0FBQ0osS0EzQ0QsTUEyQ00sSUFBSTdCLFVBQVUsS0FBSyxRQUFuQixFQUE0QjtBQUMvQixVQUFHMkIsUUFBUSxDQUFDQyxNQUFULElBQW1CLENBQXRCLEVBQXlCO0FBQ3RCeEYsU0FBQyxDQUFFcUYsTUFBRixDQUFELENBQVdJLE9BQVgsQ0FBbUIsU0FBbkI7O0FBQ0EsWUFBSXpFLEtBQUssQ0FBQ0ksV0FBTixDQUFrQm1FLFFBQWxCLEtBQThCLENBQWxDLEVBQXFDO0FBQ25DLGNBQUcsS0FBSzNGLEtBQUwsQ0FBV29FLGFBQVgsQ0FBeUJlLE9BQXpCLENBQWlDUSxRQUFqQyxJQUE2QyxDQUE3QyxJQUFrREEsUUFBUSxJQUFJLEVBQTlELElBQXFFLEtBQUszRixLQUFMLENBQVdvRSxhQUFYLENBQXlCZSxPQUF6QixDQUFpQ1EsUUFBakMsS0FBOEMsQ0FBOUMsSUFBbURBLFFBQVEsQ0FBQ0MsTUFBVCxLQUFtQixDQUE5SSxFQUFrSjtBQUVoSixnQkFBT3hCLGFBQWEsc0JBQVEsS0FBS3BFLEtBQUwsQ0FBV29FLGFBQW5CLENBQXBCOztBQUNBQSx5QkFBYSxDQUFDc0IsUUFBRCxDQUFiLEdBQTBCQyxRQUExQixDQUhnSixDQUloSjs7QUFDQSxpQkFBS3BELFFBQUwsQ0FBYztBQUNWNkIsMkJBQWEsRUFBYkE7QUFEVSxhQUFkOztBQUlBLGdCQUFHLEtBQUtwRSxLQUFMLENBQVdvRSxhQUFYLENBQXlCZSxPQUF6QixDQUFpQ1EsUUFBakMsS0FBOEMsQ0FBOUMsSUFBbURBLFFBQVEsQ0FBQ0MsTUFBVCxLQUFtQixDQUF6RSxFQUEyRTtBQUNoRixtQkFBS3JELFFBQUwsQ0FBYztBQUFDcEIscUJBQUssRUFBRTtBQUFSLGVBQWQ7QUFDUWYsZUFBQyxDQUFFc0IsQ0FBQyxDQUFDRyxhQUFKLENBQUQsQ0FBb0JnRSxPQUFwQixDQUE0QjtBQUN6QkMseUJBQVMsRUFBRSxJQURjO0FBRXpCckQsdUJBQU8sRUFBRSxhQUFZa0QsUUFBWixHQUFzQixvQkFGTjtBQUd6QkkseUJBQVMsRUFBRTtBQUhjLGVBQTVCLEVBRndFLENBTXJFOztBQUNKM0YsZUFBQyxDQUFFc0IsQ0FBQyxDQUFDRyxhQUFKLENBQUQsQ0FBb0JnRSxPQUFwQixDQUE0QixNQUE1QjtBQUNEO0FBRUYsV0FuQkQsTUFtQks7QUFDSixpQkFBS3RELFFBQUwsQ0FBYztBQUFDcEIsbUJBQUssRUFBRTtBQUFSLGFBQWQ7QUFDRWYsYUFBQyxDQUFFc0IsQ0FBQyxDQUFDRyxhQUFKLENBQUQsQ0FBb0JnRSxPQUFwQixDQUE0QjtBQUN2QkMsdUJBQVMsRUFBRSxJQURZO0FBRXZCckQscUJBQU8sRUFBRSxhQUFZa0QsUUFBWixHQUFzQixvQkFGUjtBQUd2QkksdUJBQVMsRUFBRTtBQUhZLGFBQTVCLEVBRkUsQ0FNRzs7QUFDSjNGLGFBQUMsQ0FBRXNCLENBQUMsQ0FBQ0csYUFBSixDQUFELENBQW9CZ0UsT0FBcEIsQ0FBNEIsTUFBNUI7QUFDSDtBQUVGLFNBOUJELE1BOEJLO0FBQ0osZUFBS3RELFFBQUwsQ0FBYztBQUFDcEIsaUJBQUssRUFBRTtBQUFSLFdBQWQ7QUFDQWYsV0FBQyxDQUFFcUYsTUFBRixDQUFELENBQVdJLE9BQVgsQ0FBbUI7QUFDVkMscUJBQVMsRUFBRSxJQUREO0FBRVZyRCxtQkFBTyxFQUFFLDJCQUEwQixLQUFLekMsS0FBTCxDQUFXOEQsR0FBckMsR0FBMEMsTUFBMUMsR0FBa0QsS0FBSzlELEtBQUwsQ0FBV21FLFNBRjVEO0FBR1Y0QixxQkFBUyxFQUFFO0FBSEQsV0FBbkIsRUFGSSxDQU1LOztBQUNSM0YsV0FBQyxDQUFFcUYsTUFBRixDQUFELENBQVdJLE9BQVgsQ0FBbUIsTUFBbkI7QUFDRDtBQUNGO0FBQ0o7QUFDRixHQS9HUztBQWdIVkcsZ0JBaEhVLDBCQWdIS3BFLElBaEhMLEVBZ0hXRyxPQWhIWCxFQWdIb0JDLE9BaEhwQixFQWdINEI7QUFDckNKLFFBQUksQ0FBQ0ssZ0JBQUwsQ0FBc0IsdUJBQXRCLEVBQStDQyxPQUEvQyxDQUF1RCxVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBZ0I7QUFDdkUsVUFBR0QsS0FBSyxDQUFDRSxLQUFOLElBQWUsRUFBbEIsRUFBcUI7QUFDcEJOLGVBQU8sQ0FBQ08sSUFBUixDQUFjSCxLQUFLLENBQUNFLEtBQXBCO0FBQ0EsT0FGRCxNQUVLO0FBQ0gsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxLQU5BO0FBT0RULFFBQUksQ0FBQ0ssZ0JBQUwsQ0FBc0IsdUJBQXRCLEVBQStDQyxPQUEvQyxDQUF1RCxVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBZ0I7QUFDdEUsVUFBR0QsS0FBSyxDQUFDRSxLQUFOLElBQWUsRUFBbEIsRUFBcUI7QUFDcEJMLGVBQU8sQ0FBQ00sSUFBUixDQUFjSCxLQUFLLENBQUNFLEtBQXBCO0FBQ0EsT0FGRCxNQUVLO0FBQ0osZUFBTyxLQUFQO0FBQ0E7QUFDRCxLQU5EO0FBT0M7QUEvSFMsQ0FBYjtBQW1JZWpCLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSUEsQ0FBQyxVQUFTTSxDQUFULEVBQVd1RSxDQUFYLEVBQWE7QUFBQyxNQUFJQyxDQUFDLEdBQUNELENBQUMsRUFBUDtBQUFVLFVBQXNDRSxpQ0FBTyxFQUFELG9DQUFJRCxDQUFDLENBQUNyRixPQUFOO0FBQUE7QUFBQTtBQUFBLG9HQUE1QyxHQUEyRCxTQUEzRDtBQUEwSyxDQUFsTSxDQUFtTSxJQUFuTSxFQUF3TSxZQUFVO0FBQUM7O0FBQWEsV0FBU2EsQ0FBVCxDQUFXQSxDQUFYLEVBQWF1RSxDQUFiLEVBQWU7QUFBQyxRQUFHLEVBQUV2RSxDQUFDLFlBQVl1RSxDQUFmLENBQUgsRUFBcUIsTUFBTSxJQUFJRyxTQUFKLENBQWMsbUNBQWQsQ0FBTjtBQUF5RDs7QUFBQSxNQUFJSCxDQUFDLEdBQUNJLE1BQU0sQ0FBQ0MsTUFBUCxJQUFlLFVBQVM1RSxDQUFULEVBQVc7QUFBQyxTQUFJLElBQUl1RSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNNLFNBQVMsQ0FBQ1gsTUFBeEIsRUFBK0JLLENBQUMsRUFBaEMsRUFBbUM7QUFBQyxVQUFJQyxDQUFDLEdBQUNLLFNBQVMsQ0FBQ04sQ0FBRCxDQUFmOztBQUFtQixXQUFJLElBQUlPLENBQVIsSUFBYU4sQ0FBYjtBQUFlRyxjQUFNLENBQUNJLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1QsQ0FBckMsRUFBdUNNLENBQXZDLE1BQTRDOUUsQ0FBQyxDQUFDOEUsQ0FBRCxDQUFELEdBQUtOLENBQUMsQ0FBQ00sQ0FBRCxDQUFsRDtBQUFmO0FBQXNFOztBQUFBLFdBQU85RSxDQUFQO0FBQVMsR0FBdks7QUFBQSxNQUF3S3dFLENBQUMsR0FBQyxjQUFZLE9BQU9VLE1BQW5CLElBQTJCLG9CQUFpQkEsTUFBTSxDQUFDQyxRQUF4QixDQUEzQixHQUE0RCxVQUFTbkYsQ0FBVCxFQUFXO0FBQUMsbUJBQWNBLENBQWQ7QUFBZ0IsR0FBeEYsR0FBeUYsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsV0FBT0EsQ0FBQyxJQUFFLGNBQVksT0FBT2tGLE1BQXRCLElBQThCbEYsQ0FBQyxDQUFDb0YsV0FBRixLQUFnQkYsTUFBOUMsSUFBc0RsRixDQUFDLEtBQUdrRixNQUFNLENBQUNILFNBQWpFLEdBQTJFLFFBQTNFLFdBQTJGL0UsQ0FBM0YsQ0FBUDtBQUFvRyxHQUFuWDtBQUFBLE1BQW9YOEUsQ0FBQyxHQUFDLFlBQVU7QUFBQyxhQUFTOUUsQ0FBVCxDQUFXQSxDQUFYLEVBQWF1RSxDQUFiLEVBQWU7QUFBQyxXQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ0QsQ0FBQyxDQUFDTCxNQUFoQixFQUF1Qk0sQ0FBQyxFQUF4QixFQUEyQjtBQUFDLFlBQUlNLENBQUMsR0FBQ1AsQ0FBQyxDQUFDQyxDQUFELENBQVA7QUFBV00sU0FBQyxDQUFDTyxVQUFGLEdBQWFQLENBQUMsQ0FBQ08sVUFBRixJQUFjLENBQUMsQ0FBNUIsRUFBOEJQLENBQUMsQ0FBQ1EsWUFBRixHQUFlLENBQUMsQ0FBOUMsRUFBZ0QsV0FBVVIsQ0FBVixLQUFjQSxDQUFDLENBQUNTLFFBQUYsR0FBVyxDQUFDLENBQTFCLENBQWhELEVBQTZFWixNQUFNLENBQUNhLGNBQVAsQ0FBc0J4RixDQUF0QixFQUF3QjhFLENBQUMsQ0FBQ1csR0FBMUIsRUFBOEJYLENBQTlCLENBQTdFO0FBQThHO0FBQUM7O0FBQUEsV0FBTyxVQUFTUCxDQUFULEVBQVdDLENBQVgsRUFBYU0sQ0FBYixFQUFlO0FBQUMsYUFBT04sQ0FBQyxJQUFFeEUsQ0FBQyxDQUFDdUUsQ0FBQyxDQUFDUSxTQUFILEVBQWFQLENBQWIsQ0FBSixFQUFvQk0sQ0FBQyxJQUFFOUUsQ0FBQyxDQUFDdUUsQ0FBRCxFQUFHTyxDQUFILENBQXhCLEVBQThCUCxDQUFyQztBQUF1QyxLQUE5RDtBQUErRCxHQUFoUCxFQUF0WDtBQUFBLE1BQXltQm1CLENBQUMsR0FBQyxZQUFVO0FBQUMsYUFBU0EsQ0FBVCxDQUFXbkIsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQ3hFLE9BQUMsQ0FBQyxJQUFELEVBQU0wRixDQUFOLENBQUQsRUFBVSxLQUFLQyxRQUFMLEdBQWNwQixDQUFDLElBQUU7QUFBQ3FCLGdCQUFRLEVBQUMsRUFBVjtBQUFhQyxjQUFNLEVBQUMsRUFBcEI7QUFBdUJDLFlBQUksRUFBQyxFQUE1QjtBQUErQkMsWUFBSSxFQUFDLEVBQXBDO0FBQXVDQyxjQUFNLEVBQUMsRUFBOUM7QUFBaURDLGNBQU0sRUFBQztBQUF4RCxPQUEzQixFQUF1RixLQUFLQyxTQUFMLENBQWUxQixDQUFDLElBQUUsRUFBbEIsQ0FBdkY7QUFBNkc7O0FBQUEsV0FBT00sQ0FBQyxDQUFDWSxDQUFELEVBQUcsQ0FBQztBQUFDRCxTQUFHLEVBQUMsZ0JBQUw7QUFBc0I5RSxXQUFLLEVBQUMsZUFBU1gsQ0FBVCxFQUFXO0FBQUMsYUFBS21HLFVBQUwsQ0FBZ0JuRyxDQUFDLENBQUM0RixRQUFsQixHQUE0QixLQUFLTSxTQUFMLENBQWVsRyxDQUFDLENBQUNmLE1BQWpCLENBQTVCLEVBQXFELFlBQVdlLENBQVgsSUFBYyxLQUFLb0csU0FBTCxDQUFlcEcsQ0FBQyxDQUFDNkYsTUFBakIsQ0FBbkUsRUFBNEYsVUFBUzdGLENBQVQsSUFBWSxLQUFLcUcsT0FBTCxDQUFhckcsQ0FBQyxDQUFDK0YsSUFBZixDQUF4RyxFQUE2SCxZQUFXL0YsQ0FBWCxJQUFjLEtBQUtzRyxTQUFMLENBQWV0RyxDQUFDLENBQUNpRyxNQUFqQixDQUEzSSxFQUFvSyxLQUFLTSxPQUFMLENBQWF2RyxDQUFDLENBQUM4RixJQUFmLENBQXBLLEVBQXlMLEtBQUtVLFNBQUwsQ0FBZXhHLENBQUMsQ0FBQ2dHLE1BQWpCLENBQXpMO0FBQWtOO0FBQTFQLEtBQUQsRUFBNlA7QUFBQ1AsU0FBRyxFQUFDLFdBQUw7QUFBaUI5RSxXQUFLLEVBQUMsZUFBU1gsQ0FBVCxFQUFXO0FBQUMsYUFBS3lHLE9BQUwsR0FBYTlCLE1BQU0sQ0FBQytCLE1BQVAsQ0FBYzFHLENBQWQsQ0FBYjtBQUE4QjtBQUFqRSxLQUE3UCxFQUFnVTtBQUFDeUYsU0FBRyxFQUFDLFdBQUw7QUFBaUI5RSxXQUFLLEVBQUMsaUJBQVU7QUFBQyxlQUFPLEtBQUs4RixPQUFaO0FBQW9CO0FBQXRELEtBQWhVLEVBQXdYO0FBQUNoQixTQUFHLEVBQUMsWUFBTDtBQUFrQjlFLFdBQUssRUFBQyxlQUFTWCxDQUFULEVBQVc7QUFBQyxhQUFLMkYsUUFBTCxDQUFjQyxRQUFkLEdBQXVCNUYsQ0FBdkI7QUFBeUI7QUFBN0QsS0FBeFgsRUFBdWI7QUFBQ3lGLFNBQUcsRUFBQyxZQUFMO0FBQWtCOUUsV0FBSyxFQUFDLGlCQUFVO0FBQUMsZUFBTyxLQUFLZ0YsUUFBTCxDQUFjQyxRQUFyQjtBQUE4QjtBQUFqRSxLQUF2YixFQUEwZjtBQUFDSCxTQUFHLEVBQUMsV0FBTDtBQUFpQjlFLFdBQUssRUFBQyxlQUFTWCxDQUFULEVBQVc7QUFBQyxhQUFLMkYsUUFBTCxDQUFjRSxNQUFkLEdBQXFCN0YsQ0FBckI7QUFBdUI7QUFBMUQsS0FBMWYsRUFBc2pCO0FBQUN5RixTQUFHLEVBQUMsV0FBTDtBQUFpQjlFLFdBQUssRUFBQyxlQUFTWCxDQUFULEVBQVc7QUFBQyxhQUFLMkYsUUFBTCxDQUFjSyxNQUFkLEdBQXFCaEcsQ0FBckI7QUFBdUI7QUFBMUQsS0FBdGpCLEVBQWtuQjtBQUFDeUYsU0FBRyxFQUFDLFdBQUw7QUFBaUI5RSxXQUFLLEVBQUMsaUJBQVU7QUFBQyxlQUFPLEtBQUtnRixRQUFMLENBQWNLLE1BQXJCO0FBQTRCO0FBQTlELEtBQWxuQixFQUFrckI7QUFBQ1AsU0FBRyxFQUFDLFNBQUw7QUFBZTlFLFdBQUssRUFBQyxlQUFTWCxDQUFULEVBQVc7QUFBQyxhQUFLMkYsUUFBTCxDQUFjRyxJQUFkLEdBQW1COUYsQ0FBbkI7QUFBcUI7QUFBdEQsS0FBbHJCLEVBQTB1QjtBQUFDeUYsU0FBRyxFQUFDLFNBQUw7QUFBZTlFLFdBQUssRUFBQyxpQkFBVTtBQUFDLGVBQU8sS0FBS2dGLFFBQUwsQ0FBY0csSUFBckI7QUFBMEI7QUFBMUQsS0FBMXVCLEVBQXN5QjtBQUFDTCxTQUFHLEVBQUMsU0FBTDtBQUFlOUUsV0FBSyxFQUFDLGVBQVNYLENBQVQsRUFBVztBQUFDLGFBQUsyRixRQUFMLENBQWNJLElBQWQsR0FBbUIvRixDQUFuQjtBQUFxQjtBQUF0RCxLQUF0eUIsRUFBODFCO0FBQUN5RixTQUFHLEVBQUMsU0FBTDtBQUFlOUUsV0FBSyxFQUFDLGlCQUFVO0FBQUMsZUFBTyxLQUFLZ0YsUUFBTCxDQUFjSSxJQUFyQjtBQUEwQjtBQUExRCxLQUE5MUIsRUFBMDVCO0FBQUNOLFNBQUcsRUFBQyxXQUFMO0FBQWlCOUUsV0FBSyxFQUFDLGVBQVNYLENBQVQsRUFBVztBQUFDLGFBQUsyRixRQUFMLENBQWNNLE1BQWQsR0FBcUJqRyxDQUFyQjtBQUF1QjtBQUExRCxLQUExNUIsRUFBczlCO0FBQUN5RixTQUFHLEVBQUMsV0FBTDtBQUFpQjlFLFdBQUssRUFBQyxpQkFBVTtBQUFDLGVBQU8sS0FBS2dGLFFBQUwsQ0FBY00sTUFBckI7QUFBNEI7QUFBOUQsS0FBdDlCLEVBQXNoQztBQUFDUixTQUFHLEVBQUMsa0JBQUw7QUFBd0I5RSxXQUFLLEVBQUMsZUFBU1gsQ0FBVCxFQUFXdUUsQ0FBWCxFQUFhTyxDQUFiLEVBQWU7QUFBQyxZQUFJWSxDQUFDLEdBQUMsSUFBTjtBQUFBLFlBQVdpQixDQUFDLEdBQUMsS0FBSyxDQUFsQjtBQUFBLFlBQW9CQyxDQUFDLEdBQUMsSUFBSUMsTUFBSixDQUFXLE9BQVgsQ0FBdEI7QUFBMEMsWUFBR3RDLENBQUMsWUFBWXVDLEtBQWhCLEVBQXNCdkMsQ0FBQyxDQUFDL0QsT0FBRixDQUFVLFVBQVMrRCxDQUFULEVBQVdvQyxDQUFYLEVBQWE7QUFBQ0MsV0FBQyxDQUFDRyxJQUFGLENBQU8vRyxDQUFQLElBQVU4RSxDQUFDLENBQUM5RSxDQUFELEVBQUd1RSxDQUFILENBQVgsR0FBaUJtQixDQUFDLENBQUNzQixnQkFBRixDQUFtQmhILENBQUMsR0FBQyxHQUFGLElBQU8sY0FBWSxlQUFhLE9BQU91RSxDQUFwQixHQUFzQixXQUF0QixHQUFrQ0MsQ0FBQyxDQUFDRCxDQUFELENBQS9DLElBQW9Eb0MsQ0FBcEQsR0FBc0QsRUFBN0QsSUFBaUUsR0FBcEYsRUFBd0ZwQyxDQUF4RixFQUEwRk8sQ0FBMUYsQ0FBakI7QUFBOEcsU0FBdEksRUFBdEIsS0FBbUssSUFBRyxjQUFZLGVBQWEsT0FBT1AsQ0FBcEIsR0FBc0IsV0FBdEIsR0FBa0NDLENBQUMsQ0FBQ0QsQ0FBRCxDQUEvQyxDQUFILEVBQXVELEtBQUlvQyxDQUFKLElBQVNwQyxDQUFUO0FBQVcsZUFBS3lDLGdCQUFMLENBQXNCaEgsQ0FBQyxHQUFDLEdBQUYsR0FBTTJHLENBQU4sR0FBUSxHQUE5QixFQUFrQ3BDLENBQUMsQ0FBQ29DLENBQUQsQ0FBbkMsRUFBdUM3QixDQUF2QztBQUFYLFNBQXZELE1BQWlIQSxDQUFDLENBQUM5RSxDQUFELEVBQUd1RSxDQUFILENBQUQ7QUFBTztBQUFuWCxLQUF0aEMsRUFBMjRDO0FBQUNrQixTQUFHLEVBQUMsVUFBTDtBQUFnQjlFLFdBQUssRUFBQyxlQUFTWCxDQUFULEVBQVc7QUFBQyxZQUFJdUUsQ0FBQyxHQUFDLEtBQUtvQixRQUFMLENBQWNFLE1BQWQsR0FBcUI3RixDQUEzQjtBQUFBLFlBQTZCd0UsQ0FBQyxHQUFDeEUsQ0FBQyxHQUFDLEdBQUYsR0FBTSxLQUFLMkYsUUFBTCxDQUFjTSxNQUFuRDtBQUFBLFlBQTBEbkIsQ0FBQyxHQUFDLEtBQUthLFFBQUwsQ0FBY0UsTUFBZCxHQUFxQjdGLENBQXJCLEdBQXVCLEdBQXZCLEdBQTJCLEtBQUsyRixRQUFMLENBQWNNLE1BQXJHO0FBQUEsWUFBNEdQLENBQUMsR0FBQyxDQUFDbkIsQ0FBRCxFQUFHQyxDQUFILEVBQUtNLENBQUwsRUFBTzlFLENBQVAsQ0FBOUc7O0FBQXdILGFBQUksSUFBSTJHLENBQVIsSUFBYWpCLENBQWI7QUFBZSxjQUFHQSxDQUFDLENBQUNpQixDQUFELENBQUQsSUFBTyxLQUFLRixPQUFmLEVBQXVCLE9BQU8sS0FBS0EsT0FBTCxDQUFhZixDQUFDLENBQUNpQixDQUFELENBQWQsQ0FBUDtBQUF0Qzs7QUFBZ0UsY0FBTSxJQUFJTSxLQUFKLENBQVUsZ0JBQWNqSCxDQUFkLEdBQWdCLG1CQUExQixDQUFOO0FBQXFEO0FBQS9RLEtBQTM0QyxFQUE0cEQ7QUFBQ3lGLFNBQUcsRUFBQyxVQUFMO0FBQWdCOUUsV0FBSyxFQUFDLGVBQVNYLENBQVQsRUFBV3dFLENBQVgsRUFBYTtBQUFDLFlBQUlNLENBQUMsR0FBQ0QsU0FBUyxDQUFDWCxNQUFWLEdBQWlCLENBQWpCLElBQW9CLEtBQUssQ0FBTCxLQUFTVyxTQUFTLENBQUMsQ0FBRCxDQUF0QyxJQUEyQ0EsU0FBUyxDQUFDLENBQUQsQ0FBMUQ7QUFBQSxZQUE4RGEsQ0FBQyxHQUFDLEtBQUt3QixRQUFMLENBQWNsSCxDQUFkLENBQWhFO0FBQUEsWUFBaUYyRyxDQUFDLEdBQUNuQyxDQUFDLElBQUUsRUFBdEY7QUFBQSxZQUF5Rm9DLENBQUMsR0FBQ3JDLENBQUMsQ0FBQyxFQUFELEVBQUlvQyxDQUFKLENBQTVGO0FBQUEsWUFBbUdRLENBQUMsR0FBQyxFQUFyRztBQUFBLFlBQXdHQyxDQUFDLEdBQUMsQ0FBQyxDQUEzRztBQUFBLFlBQTZHQyxDQUFDLEdBQUMsRUFBL0c7QUFBQSxZQUFrSEMsQ0FBQyxHQUFDLGVBQWEsT0FBTyxLQUFLQyxPQUFMLEVBQXBCLElBQW9DLFNBQU8sS0FBS0EsT0FBTCxFQUEzQyxHQUEwRCxFQUExRCxHQUE2RCxLQUFLQSxPQUFMLEVBQWpMOztBQUFnTSxZQUFHN0IsQ0FBQyxDQUFDOEIsTUFBRixDQUFTaEgsT0FBVCxDQUFpQixVQUFTK0QsQ0FBVCxFQUFXO0FBQUMsY0FBRyxXQUFTQSxDQUFDLENBQUMsQ0FBRCxDQUFiLEVBQWlCLE9BQU80QyxDQUFDLEdBQUM1QyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUs0QyxDQUFQLEVBQVMsTUFBS0MsQ0FBQyxHQUFDLENBQUMsQ0FBUixDQUFoQjtBQUEyQjtBQUFDLGdCQUFHLGVBQWE3QyxDQUFDLENBQUMsQ0FBRCxDQUFqQixFQUFxQixNQUFNLElBQUkwQyxLQUFKLENBQVUscUJBQW1CMUMsQ0FBQyxDQUFDLENBQUQsQ0FBcEIsR0FBd0IscUJBQWxDLENBQU47QUFBK0QsZ0JBQUlDLENBQUMsR0FBQ2tCLENBQUMsQ0FBQytCLFFBQUYsSUFBWWxELENBQUMsQ0FBQyxDQUFELENBQUQsSUFBT21CLENBQUMsQ0FBQytCLFFBQTNCOztBQUFvQyxnQkFBRyxDQUFDLENBQUQsS0FBS0wsQ0FBTCxJQUFRLENBQUM1QyxDQUFULElBQVlELENBQUMsQ0FBQyxDQUFELENBQUQsSUFBT29DLENBQVAsSUFBVUEsQ0FBQyxDQUFDcEMsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFELElBQVNtQixDQUFDLENBQUMrQixRQUFGLENBQVdsRCxDQUFDLENBQUMsQ0FBRCxDQUFaLENBQWxDLEVBQW1EO0FBQUMsa0JBQUlPLENBQUMsR0FBQyxLQUFLLENBQVg7QUFBYSxrQkFBR1AsQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFPb0MsQ0FBVixFQUFZN0IsQ0FBQyxHQUFDNkIsQ0FBQyxDQUFDcEMsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFILEVBQVUsT0FBT3FDLENBQUMsQ0FBQ3JDLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBbEIsQ0FBWixLQUF5QztBQUFDLG9CQUFHLENBQUNDLENBQUosRUFBTTtBQUFDLHNCQUFHNEMsQ0FBSCxFQUFLO0FBQU8sd0JBQU0sSUFBSUgsS0FBSixDQUFVLGdCQUFjakgsQ0FBZCxHQUFnQiw0QkFBaEIsR0FBNkN1RSxDQUFDLENBQUMsQ0FBRCxDQUE5QyxHQUFrRCxJQUE1RCxDQUFOO0FBQXdFOztBQUFBTyxpQkFBQyxHQUFDWSxDQUFDLENBQUMrQixRQUFGLENBQVdsRCxDQUFDLENBQUMsQ0FBRCxDQUFaLENBQUY7QUFBbUI7QUFBQSxrQkFBSThDLENBQUMsR0FBQyxDQUFDLENBQUQsS0FBS3ZDLENBQUwsSUFBUSxDQUFDLENBQUQsS0FBS0EsQ0FBYixJQUFnQixPQUFLQSxDQUEzQjs7QUFBNkIsa0JBQUcsQ0FBQ3VDLENBQUQsSUFBSSxDQUFDRCxDQUFSLEVBQVU7QUFBQyxvQkFBSUUsQ0FBQyxHQUFDSSxrQkFBa0IsQ0FBQzVDLENBQUQsQ0FBbEIsQ0FBc0I2QyxPQUF0QixDQUE4QixNQUE5QixFQUFxQyxHQUFyQyxDQUFOO0FBQWdELDJCQUFTTCxDQUFULElBQVksU0FBT3hDLENBQW5CLEtBQXVCd0MsQ0FBQyxHQUFDLEVBQXpCLEdBQTZCSCxDQUFDLEdBQUM1QyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUsrQyxDQUFMLEdBQU9ILENBQXRDO0FBQXdDOztBQUFBQyxlQUFDLEdBQUMsQ0FBQyxDQUFIO0FBQUssYUFBOVYsTUFBbVc1QyxDQUFDLElBQUVELENBQUMsQ0FBQyxDQUFELENBQUQsSUFBT3FDLENBQVYsSUFBYSxPQUFPQSxDQUFDLENBQUNyQyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQXJCO0FBQTRCO0FBQUMsU0FBbGtCLEdBQW9rQixPQUFLNEMsQ0FBTCxLQUFTQSxDQUFDLEdBQUMsR0FBWCxDQUFwa0IsRUFBb2xCekIsQ0FBQyxDQUFDa0MsVUFBRixDQUFhcEgsT0FBYixDQUFxQixVQUFTUixDQUFULEVBQVc7QUFBQyxjQUFJdUUsQ0FBQyxHQUFDLEtBQUssQ0FBWDtBQUFhLGlCQUFNLFdBQVN2RSxDQUFDLENBQUMsQ0FBRCxDQUFWLEdBQWMsTUFBS3FILENBQUMsR0FBQ3JILENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS3FILENBQVosQ0FBZCxHQUE2QixNQUFLLGVBQWFySCxDQUFDLENBQUMsQ0FBRCxDQUFkLEtBQW9CQSxDQUFDLENBQUMsQ0FBRCxDQUFELElBQU8yRyxDQUFQLElBQVVwQyxDQUFDLEdBQUNvQyxDQUFDLENBQUMzRyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQUgsRUFBVSxPQUFPNEcsQ0FBQyxDQUFDNUcsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUE1QixJQUFvQzBGLENBQUMsQ0FBQytCLFFBQUYsSUFBWXpILENBQUMsQ0FBQyxDQUFELENBQUQsSUFBTzBGLENBQUMsQ0FBQytCLFFBQXJCLEtBQWdDbEQsQ0FBQyxHQUFDbUIsQ0FBQyxDQUFDK0IsUUFBRixDQUFXekgsQ0FBQyxDQUFDLENBQUQsQ0FBWixDQUFsQyxDQUFwQyxFQUF3RnFILENBQUMsR0FBQ3JILENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS3VFLENBQUwsR0FBTzhDLENBQXJILENBQUwsQ0FBbkM7QUFBaUssU0FBL00sQ0FBcGxCLEVBQXF5QkYsQ0FBQyxHQUFDLEtBQUt4QixRQUFMLENBQWNDLFFBQWQsR0FBdUJ1QixDQUE5ekIsRUFBZzBCekIsQ0FBQyxDQUFDbUMsWUFBRixJQUFnQixhQUFZbkMsQ0FBQyxDQUFDbUMsWUFBOUIsSUFBNEMsS0FBS0MsU0FBTCxNQUFrQnBDLENBQUMsQ0FBQ21DLFlBQUYsQ0FBZUUsT0FBN0UsR0FBcUZaLENBQUMsR0FBQ3pCLENBQUMsQ0FBQ21DLFlBQUYsQ0FBZUUsT0FBZixHQUF1QixLQUF2QixJQUE4QlYsQ0FBQyxJQUFFLEtBQUtXLE9BQUwsRUFBakMsSUFBaURiLENBQXhJLEdBQTBJLGVBQWEsT0FBT3pCLENBQUMsQ0FBQ3VDLE9BQXRCLElBQStCLGVBQWEsT0FBT3ZDLENBQUMsQ0FBQ3VDLE9BQUYsQ0FBVSxDQUFWLENBQW5ELElBQWlFLEtBQUtILFNBQUwsT0FBbUJwQyxDQUFDLENBQUN1QyxPQUFGLENBQVUsQ0FBVixDQUFwRixHQUFpR2QsQ0FBQyxHQUFDekIsQ0FBQyxDQUFDdUMsT0FBRixDQUFVLENBQVYsSUFBYSxLQUFiLElBQW9CWixDQUFDLElBQUUsS0FBS1csT0FBTCxFQUF2QixJQUF1Q2IsQ0FBMUksR0FBNElFLENBQUMsSUFBRSxLQUFLVyxPQUFMLE9BQWlCWCxDQUFDLElBQUUsT0FBS0MsQ0FBTCxHQUFPLEVBQVAsR0FBVSxNQUFJQSxDQUFoQixDQUFyQixHQUF3Q0gsQ0FBQyxHQUFDLEtBQUtXLFNBQUwsS0FBaUIsS0FBakIsR0FBdUJULENBQXZCLElBQTBCLE9BQUtDLENBQUwsR0FBTyxFQUFQLEdBQVUsTUFBSUEsQ0FBeEMsSUFBMkNILENBQXJGLEdBQXVGckMsQ0FBQyxLQUFHLENBQUMsQ0FBTCxLQUFTcUMsQ0FBQyxHQUFDLEtBQUtXLFNBQUwsS0FBaUIsS0FBakIsR0FBdUIsS0FBS0UsT0FBTCxFQUF2QixHQUFzQ2IsQ0FBakQsQ0FBN3FDLEVBQWl1Q3hDLE1BQU0sQ0FBQ3VELElBQVAsQ0FBWXRCLENBQVosRUFBZTFDLE1BQWYsR0FBc0IsQ0FBMXZDLEVBQTR2QztBQUFDLGNBQUlpRSxDQUFDLEdBQUMsS0FBSyxDQUFYO0FBQUEsY0FBYUMsQ0FBQyxHQUFDLEVBQWY7QUFBQSxjQUFrQkMsQ0FBQyxHQUFDLFNBQUZBLENBQUUsQ0FBU3JJLENBQVQsRUFBV3VFLENBQVgsRUFBYTtBQUFDQSxhQUFDLEdBQUMsY0FBWSxPQUFPQSxDQUFuQixHQUFxQkEsQ0FBQyxFQUF0QixHQUF5QkEsQ0FBM0IsRUFBNkJBLENBQUMsR0FBQyxTQUFPQSxDQUFQLEdBQVMsRUFBVCxHQUFZQSxDQUEzQyxFQUE2QzZELENBQUMsQ0FBQ3hILElBQUYsQ0FBTzhHLGtCQUFrQixDQUFDMUgsQ0FBRCxDQUFsQixHQUFzQixHQUF0QixHQUEwQjBILGtCQUFrQixDQUFDbkQsQ0FBRCxDQUFuRCxDQUE3QztBQUFxRyxXQUF2STs7QUFBd0ksZUFBSTRELENBQUosSUFBU3ZCLENBQVQ7QUFBVyxpQkFBS0ksZ0JBQUwsQ0FBc0JtQixDQUF0QixFQUF3QnZCLENBQUMsQ0FBQ3VCLENBQUQsQ0FBekIsRUFBNkJFLENBQTdCO0FBQVg7O0FBQTJDbEIsV0FBQyxHQUFDQSxDQUFDLEdBQUMsR0FBRixHQUFNaUIsQ0FBQyxDQUFDRSxJQUFGLENBQU8sR0FBUCxFQUFZWCxPQUFaLENBQW9CLE1BQXBCLEVBQTJCLEdBQTNCLENBQVI7QUFBd0M7O0FBQUEsZUFBT1IsQ0FBUDtBQUFTO0FBQXJzRCxLQUE1cEQsQ0FBSCxFQUF1MkcsQ0FBQztBQUFDMUIsU0FBRyxFQUFDLGFBQUw7QUFBbUI5RSxXQUFLLEVBQUMsaUJBQVU7QUFBQyxlQUFPZ0csQ0FBUDtBQUFTO0FBQTdDLEtBQUQsRUFBZ0Q7QUFBQ2xCLFNBQUcsRUFBQyxTQUFMO0FBQWU5RSxXQUFLLEVBQUMsZUFBU1gsQ0FBVCxFQUFXO0FBQUMsWUFBSXVFLENBQUMsR0FBQ21CLENBQUMsQ0FBQzZDLFdBQUYsRUFBTjtBQUFzQmhFLFNBQUMsQ0FBQ25GLGNBQUYsQ0FBaUJZLENBQWpCO0FBQW9CO0FBQTNFLEtBQWhELENBQXYyRyxDQUFELEVBQXUrRzBGLENBQTkrRztBQUFnL0csR0FBeG5ILEVBQTNtQjs7QUFBc3VJQSxHQUFDLENBQUM4QyxLQUFGLEVBQVE5QyxDQUFDLENBQUMrQyxPQUFWO0FBQWtCLE1BQUk5QixDQUFDLEdBQUMsSUFBSWpCLENBQUosRUFBTjtBQUFZLFNBQU07QUFBQ2dELFVBQU0sRUFBQ2hELENBQVI7QUFBVXZHLFdBQU8sRUFBQ3dIO0FBQWxCLEdBQU47QUFBMkIsQ0FBN2xKLENBQUQsQyIsImZpbGUiOiJBcHBDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBBbm5lZXMgPSAocHJvcHMpID0+e1xyXG5cclxucmV0dXJuIChcclxuXHJcblx0XHQgPHNwYW4gIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUFubmVlc30gY2xhc3NOYW1lPXtwcm9wcy5jaGVja2VkP1wiY2hlY2tlZFwiOiBcIlwifT57cHJvcHMuYW5uZWVzfTwvc3Bhbj5cclxuXHJcblx0KVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbm5lZXMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEZvcm1Mb3R0ZXJ5IGZyb20gJy4vRm9ybUxvdHRlcnknXHJcbi8vdXRpbGllIHBvdXIgIGllXHJcbmltcG9ydCB7ZmV0Y2ggYXMgZmV0Y2hQb2xpZnl9ICBmcm9tICd3aGF0d2ctZmV0Y2gnXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gIDxkaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxGb3JtTG90dGVyeSByb290PXtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLmRhdGFzZXQuc3RhdGV9Lz4gXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsgXHJcblxyXG5jb25zdCBtb2RhbCA9ICQoXCIjbW9kYWwtcmVzdWx0XCIpO1xyXG4gY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbC1yZXN1bHQgLm1vZGFsLWJvZHlcIikuaW5uZXJIVE1MO1xyXG4gXHRtb2RhbC5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcclxuXHQgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtcmVzdWx0IC5tb2RhbC1ib2R5XCIpLmlubmVySFRNTCA9IGxvYWRlclxyXG5cdCAgY29uc29sZS5sb2coXCJmZXJtZXR1cmVcIik7XHJcblx0fSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFR5cGVOdW1lcm9Db250ZXh0LCB7VHlwZU51bWVyb1Byb3ZpZGVyfSBmcm9tICcuL1R5cGVOdW1lcm9Db250ZXh0J1xyXG5cclxuaW1wb3J0IE51bWVybyBmcm9tICcuL051bWVybydcclxuaW1wb3J0IEFubmVlcyBmcm9tICcuL0FubmVlcydcclxuaW1wb3J0IF9mb3JtIGZyb20gJy4vZnVuY3Rpb25zL19mb3JtJ1xyXG5cclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbnJlcXVpcmUoJy4uLy4uL2Nzcy9jb21wb25lbnRzL2Zvcm0uc2NzcycpXHJcblxyXG5jbGFzcyBGb3JtTG90dGVyeSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG5cclxuXHJcbiBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gIHN1cGVyKHByb3BzKTtcclxuICB0aGlzLnN0YXRlID0gSlNPTi5wYXJzZSh0aGlzLnByb3BzLnJvb3QpO1xyXG4gIHRoaXMuc3RhdGUuZXJyb3IgPSBmYWxzZTsgXHJcbiAgX2Zvcm0uaGFuZGxlQ2hhbmdlID0gX2Zvcm0uaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgX2Zvcm0uaXNCb25OdW1lcm8gPSBfZm9ybS5pc0Jvbk51bWVyby5iaW5kKHRoaXMpO1xyXG4gIF9mb3JtLmlzQm9uRXRvaWxlID0gX2Zvcm0uaXNCb25FdG9pbGUuYmluZCh0aGlzKTtcclxuICB0aGlzLnNpbXVsZXIgPSB0aGlzLnNpbXVsZXIuYmluZCh0aGlzKTtcclxuXHJcbiAgXHJcblxyXG4gXHJcbn1cclxuXHQgXHJcblxyXG5cclxuIFxyXG4gc2ltdWxlcihlKXtcclxuIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gXHRsZXQgZXJyb3IgPSBmYWxzZTtcclxuIFx0bGV0IGZvcm0gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiBcdGxldCBuYl9hbm5lZXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuYW5zIHNwYW4uY2hlY2tlZFwiKS5pbm5lckhUTUw7XHJcbiBcdGxldCBudW1lcm9zID0gW107IFxyXG4gXHRsZXQgZXRvaWxlcyA9IFtdO1xyXG4gXHRmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubnVtZXJvcy5udW1lcm8gaW5wdXRcIikuZm9yRWFjaCgoaW5wdXQsIGluZGV4KT0+e1xyXG4gXHRcdGlmKGlucHV0LnZhbHVlICE9IFwiXCIpe1xyXG4gXHRcdFx0bnVtZXJvcy5wdXNoKCBpbnB1dC52YWx1ZSlcclxuIFx0XHR9ZWxzZXtcclxuIFx0XHRcdGVycm9yID0gdHJ1ZTtcclxuIFx0XHR9XHJcbiBcdH0pXHJcbiBcdGZvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5udW1lcm9zLmV0b2lsZSBpbnB1dFwiKS5mb3JFYWNoKChpbnB1dCwgaW5kZXgpPT57XHJcbiBcdFx0aWYoaW5wdXQudmFsdWUgIT0gXCJcIil7XHJcbiBcdFx0XHRldG9pbGVzLnB1c2goIGlucHV0LnZhbHVlKVxyXG4gXHRcdH1lbHNle1xyXG4gXHRcdFx0ZXJyb3IgPSB0cnVlO1xyXG4gXHRcdH1cclxuIFx0fSkgIFxyXG5cclxuIFx0aWYoZXJyb3Ipe1xyXG4gXHRcdHRoaXMuc2V0U3RhdGUoe2Vycm9yOmVycm9yfSlcclxuIFx0fS8vcGFzIGQnZXJyZXVyXHJcbiBcdGVsc2UgaWYoIXRoaXMuc3RhdGUuZXJyb3Ipe1xyXG4gXHRcdFx0Ly9vbiBhZmZjaWhlIGxhIG1vZGFsIGRlIHLDqXN1bHRhdFxyXG5cclxuXHRcdFx0JChcIiNtb2RhbC1yZXN1bHRcIikubW9kYWwoXCJzaG93XCIpXHJcblx0XHRcdGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtcmVzdWx0IC5tb2RhbC10aXRsZSBzcGFuXCIpXHJcblx0XHRcdGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbC1yZXN1bHQgLm1vZGFsLWJvZHlcIilcclxuXHRcdFx0dGl0bGUuaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5sb3R0ZXJ5TmFtZVxyXG4gXHRcdCBcdGxldCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcblx0XHRcdCAgICAvLydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuXHRcdFx0ICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiIDogXCJYTUxIdHRwUmVxdWVzdFwiXHJcblx0XHRcdH0pO1xyXG4gXHRcdCBcdGxldCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiBcdFx0IFx0Zm9ybS5hcHBlbmQoXCJuYl9hbm5lZXNcIixuYl9hbm5lZXMpXHJcbiBcdFx0IFx0Zm9ybS5hcHBlbmQoXCJldG9pbGVzXCIsZXRvaWxlcylcclxuXHRcdFx0Zm9ybS5hcHBlbmQoXCJudW1lcm9zXCIsbnVtZXJvcylcclxuXHRcdFx0bGV0IG15SW5pdCA9IHsgbWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdCAgICAgICAgICAgICAgIGhlYWRlcnM6IG15SGVhZGVycyxcclxuXHRcdFx0ICAgICAgICAgICAgIC8vICBtb2RlOiAnY29ycycsXHJcblx0XHRcdCAgICAgICAgICAgICAgIGJvZHk6ICBmb3JtXHJcblx0XHRcdCAgICAgICAgICAgfTtcclxuXHJcblx0XHRcdGxldCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdChSb3V0aW5nLmdlbmVyYXRlKHRoaXMuc3RhdGUubG90dGVyeU5hbWUpKTtcclxuXHJcblx0XHRcdGZldGNoKG15UmVxdWVzdCxteUluaXQpXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdCAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gZGF0YS5jb250ZW50LmNvbnRlbnRcclxuXHRcdFx0XHRcclxuXHRcdFx0ICBjb25zb2xlLmxvZyhkYXRhLCBjb250ZW50KVxyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHQgfVxyXG5cclxucmVuZGVyKCl7XHJcblxyXG5yZXR1cm5cdCggXHJcblx0ICAgIDxkaXY+XHJcblx0ICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zaW11bGVyfSBpZD1cImZvcm0tbG90dGVyeVwiICBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuXHQgICAgICAgICAgPGgxPjxzcGFuPlNpbXVsYXRldXIgPC9zcGFuPiB7dGhpcy5zdGF0ZS5sb3R0ZXJ5TmFtZX08L2gxPlxyXG5cdCAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KHRoaXMuc3RhdGUuZXJyb3IpP1wiYWxlcnQgYWxlcnQtZGFuZ2VyXCI6XCJhbGVydCBhbGVydC1kYW5nZXIgZC1ub25lXCJ9IHJvbGU9XCJhbGVydFwiPlxyXG5cdFx0XHRcdFx0XHQgRm9ybXVsYWlyZSBub24gY29uZm9ybWUgIVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgIFxyXG5cdCAgICAgICAgICA8aDI+Q2hvaXNpc3NleiBzdXIgY29tYmllbiBkJ2FubsOpZXMgdm91cyB2b3VsZXogc2ltdWxlcjwvaDI+XHJcblx0ICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGJkLWhpZ2hsaWdodCBtYi0xIGFuc1wiPlxyXG5cdFx0XHQgICAgICAgIHt0aGlzLnN0YXRlLmFubmVlc0RlVGlyYWdlcy5tYXAoKFx0YW5uZWVzLCBpbmRleCkgPT5cclxuXHRcdFx0XHRcdFx0PEFubmVlcyBoYW5kbGVBbm5lZXM9e19mb3JtLmhhbmRsZUFubmVlc30ga2V5PXtcImFubmVlcy1cIitpbmRleH0gYW5uZWVzPXthbm5lZXN9IGNoZWNrZWQ9eyhpbmRleCA9PTApP3RydWU6ZmFsc2V9Lz5cclxuXHRcdFx0ICAgICAgICApfVxyXG5cdFx0XHRcclxuXHRcdFx0XHQ8L2Rpdj4gIFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XHJcblx0XHQgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwibXQtMyBtbC0zXCI+XHJcblx0XHQgICAgICAgICBcdFx0IDxoMj5TYWlzaXIge3RoaXMuc3RhdGUubmJfbnVtZXJvfSBudW1lcm9zIGVudHJlIHt0aGlzLnN0YXRlLm1pbn0gZXQge3RoaXMuc3RhdGUubWF4TnVtZXJvfTwvaDI+XHJcblx0XHRcdFx0ICAgICAgICAgIDxUeXBlTnVtZXJvUHJvdmlkZXIgdmFsdWU9IHt7dHlwZU51bWVybzonbnVtZXJvJ319PlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmdyaWxsZU51bWVyb3MubWFwKCh2YWx1ZSwgaW5kZXgpID0+IFxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgPE51bWVybyBrZXk9e1wibnVtLVwiK2luZGV4fSAgdHlwZU51bWVybz1cIm51bWVyb1wiIG9uQ2hhbmdlPXsgX2Zvcm0uaGFuZGxlQ2hhbmdlfSBpbmRleD17aW5kZXh9ICB2YWx1ZT17dmFsdWV9IG1heD17dGhpcy5zdGF0ZS5tYXhOdW1lcm99IG1pbiA9IHt0aGlzLnN0YXRlLm1pbn0vPiAgXHJcblx0XHRcdFx0ICAgICAgICAgICAgICApfVxyXG5cdFx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICA8L1R5cGVOdW1lcm9Qcm92aWRlcj5cclxuXHRcdCAgICAgICAgIFx0PC9kaXY+XHJcblx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgbWwtM1wiPlxyXG5cdFx0ICAgICAgICAgICAgXHQ8aDI+U2Fpc2lyIHt0aGlzLnN0YXRlLm5iX2V0b2lsZX0gw6l0b2lsZXMgZW50cmUge3RoaXMuc3RhdGUubWlufSBldCB7dGhpcy5zdGF0ZS5tYXhFdG9pbGV9PC9oMj5cclxuXHRcdFx0ICAgICAgICAgICAgPFR5cGVOdW1lcm9Qcm92aWRlciB2YWx1ZT0ge3t0eXBlTnVtZXJvOidldG9pbGUnfX0+XHJcblx0XHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGJkLWhpZ2hsaWdodCBtYi0zXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZ3JpbGxlRXRvaWxlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxOdW1lcm8ga2V5PXtcImV0b2lsZS1cIitpbmRleH0gdHlwZU51bWVybz1cImV0b2lsZVwiIG9uQ2hhbmdlPXsgX2Zvcm0uaGFuZGxlQ2hhbmdlfSBpbmRleD17aW5kZXh9ICB2YWx1ZT17dmFsdWV9IG1heD17dGhpcy5zdGF0ZS5tYXhFdG9pbGV9IG1pbiA9IHt0aGlzLnN0YXRlLm1pbn0vPiAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgKX1cclxuXHRcdFx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgIDwvVHlwZU51bWVyb1Byb3ZpZGVyPlxyXG5cdFx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQgICAgICAgIDwvZGl2PlxyXG5cdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdCAgICAgICAgXHQ8YnV0dG9uIGNsYXNzTmFtZT17IHRoaXMuc3RhdGUuZXJyb3IgPT0gdHJ1ZT8gJ2J0biBidG4tc3VjY2VzcyBidG4tYmxvY2sgZGlzYWJsZWQnOiAnYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9jayd9IHR5cGU9XCJzdWJtaXRcIiA+IHNpbXVsZXIgITwvYnV0dG9uPlxyXG5cdFx0ICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgIDwvZm9ybT5cclxuXHQgICAgPC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtTG90dGVyeTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFR5cGVOdW1lcm9Db250ZXh0IGZyb20gJy4vVHlwZU51bWVyb0NvbnRleHQnXHJcblxyXG5cclxuY29uc3QgTnVtZXJvID0gKHByb3BzKT0+e1xyXG5jb25zdCB0eXBlTnVtZXJvQ29udGV4dCA9IHVzZUNvbnRleHQoVHlwZU51bWVyb0NvbnRleHQpIFxyXG5cdFx0cmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17XCJudW1lcm9zIFwiKyB0eXBlTnVtZXJvQ29udGV4dC50eXBlTnVtZXJvfT5cclxuXHRcdFx0XHRcdDxpbnB1dCBvbkNoYW5nZT17IHByb3BzLm9uQ2hhbmdlfSBcclxuXHRcdFx0XHRcdFx0ZGF0YS1pbmRleD17cHJvcHMuaW5kZXh9IFxyXG5cdFx0XHRcdFx0XHRkYXRhLXR5cGUtbnVtZXJvID17dHlwZU51bWVyb0NvbnRleHQudHlwZU51bWVyb30gXHJcblx0XHRcdFx0XHRcdHBhdHRlcm49XCJcXGQrXCIgXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtwcm9wcy52YWx1ZX0gXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9XCIgbWwtNFwiIFxyXG5cdFx0XHRcdFx0XHR0eXBlID1cInRleHRcIiBcclxuXHRcdFx0XHRcdFx0c3RlcD1cIjFcIiBcclxuXHRcdFx0XHRcdFx0bWF4PXtwcm9wcy5tYXh9XHJcblx0XHRcdFx0XHRcdCBtaW4gPSB7cHJvcHMubWlufSBcclxuXHRcdFx0XHRcdFx0IG5hbWU9IHsgdHlwZU51bWVyb0NvbnRleHQudHlwZU51bWVybyArXCItXCIrIHByb3BzLmluZGV4IH0vPiAgIFxyXG5cdFx0XHRcdDwvc3Bhbj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnVtZXJvOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBUeXBlTnVtZXJvQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoeyBcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgVHlwZU51bWVyb1Byb3ZpZGVyID0gVHlwZU51bWVyb0NvbnRleHQuUHJvdmlkZXI7XHJcbmV4cG9ydCBjb25zdCBUeXBlTnVtZXJvQ29uc3VtZXIgPSBUeXBlTnVtZXJvQ29udGV4dC5Db25zdW1lcjtcclxuZXhwb3J0IGRlZmF1bHQgVHlwZU51bWVyb0NvbnRleHQ7XHJcbiIsImNvbnN0IF9mb3JtPSB7XHJcblx0aXNCb25OdW1lcm8gOiBmdW5jdGlvbihudW1lcm8pe1xyXG5cdFx0cmV0dXJuIG51bWVybyAhPSAnJyA/IHRoaXMuc3RhdGUubnVtZXJvcy5pbmRleE9mKHBhcnNlSW50KG51bWVybyApKSA6MVxyXG5cdH0sXHJcblx0aXNCb25FdG9pbGUgOiBmdW5jdGlvbihudW1lcm8pe1xyXG4gICAgIFx0cmV0dXJuIG51bWVybyAhPSAnJyA/IHRoaXMuc3RhdGUuZXRvaWxlcy5pbmRleE9mKHBhcnNlSW50KG51bWVybyApKSA6MVxyXG4gIFx0fSxcclxuICBcdGhhbmRsZUFubmVlcyA6IGZ1bmN0aW9uKGUpe1xyXG5cdCAgXHQvL29uIGxlIG1vZGlmaWUgcXVlIHNpIGlsIG4nYSBwYXMgZW5jb3JlIGV0ZSBjaGVja8OpXHJcblx0ICBcdGlmKCFlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tlZFwiKSl7XHJcblx0ICBcdFx0Ly9vbiBkw6ljaGVrIGwnZWxlbWVudCBxdWkgYXZhaXQgZXRlIGNoZWNrw6lcclxuXHQgIFx0XHRlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwic3Bhbi5jaGVja2VkXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJjaGVja2VkXCIpXHJcblx0ICBcdFx0Ly9wdWlzIG9uIGNoZWNrIGwgZWxlbWVudCBjaWJsZVxyXG5cdCAgXHRcdGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiY2hlY2tlZFwiKVxyXG5cdCAgXHR9XHJcblx0ICBcdFxyXG5cdH0sXHJcblx0IGhhbmRsZUNoYW5nZShlKXtcclxuXHQgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogZmFsc2V9KVxyXG5cdCAgICBsZXQgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG5cdCAgICBsZXQgbnVtSW5kZXggPSAgdGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcblx0ICAgIGxldCBuZXdWYWx1ZSA9ICB0YXJnZXQudmFsdWU7XHJcblx0ICAgIGxldCB0eXBlTnVtZXJvID0gIHRhcmdldC5kYXRhc2V0LnR5cGVOdW1lcm87XHJcblx0ICAgIGlmKHR5cGVOdW1lcm8gPT09IFwibnVtZXJvXCIpe1xyXG5cdCAgICAgICAgaWYobmV3VmFsdWUubGVuZ3RoIDw9IDIgKXtcclxuXHQgICAgICAgICAgICAkKCB0YXJnZXQpLnBvcG92ZXIoXCJkaXNwb3NlXCIpXHJcblx0ICAgICAgICAgICAgaWYgKF9mb3JtLmlzQm9uTnVtZXJvKG5ld1ZhbHVlKSA+PTAgKXtcclxuXHQgICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5ncmlsbGVOdW1lcm9zLmluZGV4T2YobmV3VmFsdWUpIDwgMCB8fCBuZXdWYWx1ZSA9PSAnJyB8fCAodGhpcy5zdGF0ZS5ncmlsbGVOdW1lcm9zLmluZGV4T2YobmV3VmFsdWUpID49IDAgJiYgbmV3VmFsdWUubGVuZ3RoID09PTEpICl7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgIGNvbnN0ICBncmlsbGVOdW1lcm9zICA9IFsuLi50aGlzLnN0YXRlLmdyaWxsZU51bWVyb3NdOyAgXHJcblx0ICAgICAgICAgICAgICAgICAgZ3JpbGxlTnVtZXJvc1tudW1JbmRleF0gPSBuZXdWYWx1ZTtcclxuXHQgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgc3RhdGVcclxuXHQgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgZ3JpbGxlTnVtZXJvcyxcclxuXHQgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5ncmlsbGVOdW1lcm9zLmluZGV4T2YobmV3VmFsdWUpID49IDAgJiYgbmV3VmFsdWUubGVuZ3RoID09PTEpe1xyXG5cdCAgICAgICAgICBcdFx0XHR0aGlzLnNldFN0YXRlKHtlcnJvcjogdHJ1ZX0pO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICQoIHRhcmdldCkucG9wb3Zlcih7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0cnVlLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiQ2hpZmZyZSBcIisgbmV3VmFsdWUrIFwiIGTDqWrDoCBzZWzDqWN0aW9ubsOpLlwiLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogXCJib3R0b21cIlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICB9KS8vLnNob3coKVxyXG5cdCAgICAgICAgICAgICAgICAgICAgJCggdGFyZ2V0KS5wb3BvdmVyKFwic2hvd1wiKVxyXG5cdCAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cdCAgICAgICAgICAgICAgICB9ZWxzZXtcclxuXHQgICAgICAgICAgICAgICAgXHR0aGlzLnNldFN0YXRlKHtlcnJvcjogdHJ1ZX0pO1xyXG5cdCAgICAgICAgICAgICAgICAgICAkKCB0YXJnZXQpLnBvcG92ZXIoe1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIkNoaWZmcmUgXCIrIG5ld1ZhbHVlKyBcIiBkw6lqw6Agc2Vsw6ljdGlvbm7DqS5cIixcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFwiYm90dG9tXCJcclxuXHQgICAgICAgICAgICAgICAgICAgICAgfSkvLy5zaG93KClcclxuXHQgICAgICAgICAgICAgICAgICAgICQoIHRhcmdldCkucG9wb3ZlcihcInNob3dcIilcclxuXHQgICAgICAgICAgICAgICAgfSAgIFxyXG5cdCAgICAgICAgICAgIH1lbHNle1xyXG5cdCAgICAgICAgICAgIFx0dGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IHRydWV9KTtcclxuXHQgICAgICAgICAgICAgICAkKHRhcmdldCkucG9wb3Zlcih7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0cnVlLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiQ2hpZmZyZSBjb21wcmlzIGVudHJlIFwiKyB0aGlzLnN0YXRlLm1pbiArXCIgZXQgXCIrIHRoaXMuc3RhdGUubWF4TnVtZXJvLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogXCJib3R0b21cIlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICB9KS8vLnNob3coKVxyXG5cdCAgICAgICAgICAgICAgICAkKCB0YXJnZXQpLnBvcG92ZXIoXCJzaG93XCIpXHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9ZWxzZSBpZiAodHlwZU51bWVybyA9PT0gXCJldG9pbGVcIil7XHJcblx0ICAgICAgIGlmKG5ld1ZhbHVlLmxlbmd0aCA8PSAyICl7XHJcblx0ICAgICAgICAgICQoIHRhcmdldCkucG9wb3ZlcihcImRpc3Bvc2VcIilcclxuXHQgICAgICAgICAgaWYgKF9mb3JtLmlzQm9uRXRvaWxlKG5ld1ZhbHVlKSA+PTAgKXtcclxuXHQgICAgICAgICAgICBpZih0aGlzLnN0YXRlLmdyaWxsZUV0b2lsZXMuaW5kZXhPZihuZXdWYWx1ZSkgPCAwIHx8IG5ld1ZhbHVlID09ICcnIHx8ICh0aGlzLnN0YXRlLmdyaWxsZUV0b2lsZXMuaW5kZXhPZihuZXdWYWx1ZSkgPj0gMCAmJiBuZXdWYWx1ZS5sZW5ndGggPT09MSkgKXtcclxuXHJcblx0ICAgICAgICAgICAgICBjb25zdCAgZ3JpbGxlRXRvaWxlcyAgPSBbLi4udGhpcy5zdGF0ZS5ncmlsbGVFdG9pbGVzXTsgIFxyXG5cdCAgICAgICAgICAgICAgZ3JpbGxlRXRvaWxlc1tudW1JbmRleF0gPSBuZXdWYWx1ZTtcclxuXHQgICAgICAgICAgICAgIC8vIHVwZGF0ZSBzdGF0ZVxyXG5cdCAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcblx0ICAgICAgICAgICAgICAgICAgZ3JpbGxlRXRvaWxlcyxcclxuXHQgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHQgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuZ3JpbGxlRXRvaWxlcy5pbmRleE9mKG5ld1ZhbHVlKSA+PSAwICYmIG5ld1ZhbHVlLmxlbmd0aCA9PT0xKXtcclxuXHQgICAgICBcdFx0XHR0aGlzLnNldFN0YXRlKHtlcnJvcjogdHJ1ZX0pO1xyXG5cdCAgICAgICAgICAgICAgICAgJCggZS5jdXJyZW50VGFyZ2V0KS5wb3BvdmVyKHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcclxuXHQgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiQ2hpZmZyZSBcIisgbmV3VmFsdWUrIFwiIGTDqWrDoCBzZWzDqWN0aW9ubsOpLlwiLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiBcImJvdHRvbVwiXHJcblx0ICAgICAgICAgICAgICAgICAgfSkvLy5zaG93KClcclxuXHQgICAgICAgICAgICAgICAgJCggZS5jdXJyZW50VGFyZ2V0KS5wb3BvdmVyKFwic2hvd1wiKVxyXG5cdCAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICB9ZWxzZXtcclxuXHQgICAgICAgICAgICBcdHRoaXMuc2V0U3RhdGUoe2Vycm9yOiB0cnVlfSk7XHJcblx0ICAgICAgICAgICAgICAgJCggZS5jdXJyZW50VGFyZ2V0KS5wb3BvdmVyKHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcclxuXHQgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiQ2hpZmZyZSBcIisgbmV3VmFsdWUrIFwiIGTDqWrDoCBzZWzDqWN0aW9ubsOpLlwiLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiBcImJvdHRvbVwiXHJcblx0ICAgICAgICAgICAgICAgICAgfSkvLy5zaG93KClcclxuXHQgICAgICAgICAgICAgICAgJCggZS5jdXJyZW50VGFyZ2V0KS5wb3BvdmVyKFwic2hvd1wiKVxyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICBcclxuXHQgICAgICAgICAgfWVsc2V7XHJcblx0ICAgICAgICAgIFx0dGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IHRydWV9KTtcclxuXHQgICAgICAgICAgICQoIHRhcmdldCkucG9wb3Zlcih7XHJcblx0ICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHRydWUsXHJcblx0ICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIkNoaWZmcmUgY29tcHJpcyBlbnRyZSBcIisgdGhpcy5zdGF0ZS5taW4gK1wiIGV0IFwiKyB0aGlzLnN0YXRlLm1heEV0b2lsZSxcclxuXHQgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogXCJib3R0b21cIlxyXG5cdCAgICAgICAgICAgICAgICAgIH0pLy8uc2hvdygpXHJcblx0ICAgICAgICAgICAgJCggdGFyZ2V0KS5wb3BvdmVyKFwic2hvd1wiKVxyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHQgIH0sXHJcblx0ICBmb3JtSXNOb3RFbXB0eShmb3JtLCBudW1lcm9zLCBldG9pbGVzKXtcclxuXHQgIFx0Zm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLm51bWVyb3MubnVtZXJvIGlucHV0XCIpLmZvckVhY2goKGlucHV0LCBpbmRleCk9PntcclxuXHQgXHRcdGlmKGlucHV0LnZhbHVlICE9IFwiXCIpe1xyXG5cdCBcdFx0XHRudW1lcm9zLnB1c2goIGlucHV0LnZhbHVlKVxyXG5cdCBcdFx0fWVsc2V7XHJcblx0IFx0XHRcdCByZXR1cm4gZmFsc2U7XHJcblx0IFx0XHR9XHJcblx0IFx0fSlcclxuXHQgXHRmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubnVtZXJvcy5ldG9pbGUgaW5wdXRcIikuZm9yRWFjaCgoaW5wdXQsIGluZGV4KT0+e1xyXG5cdCBcdFx0aWYoaW5wdXQudmFsdWUgIT0gXCJcIil7XHJcblx0IFx0XHRcdGV0b2lsZXMucHVzaCggaW5wdXQudmFsdWUpXHJcblx0IFx0XHR9ZWxzZXtcclxuXHQgXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdCBcdFx0fVxyXG5cdCBcdH0pICBcclxuXHQgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9mb3JtOyIsIiFmdW5jdGlvbihlLHQpe3ZhciBuPXQoKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLG4uUm91dGluZyk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bi5Sb3V0aW5nOihlLlJvdXRpbmc9bi5Sb3V0aW5nLGUuZm9zPXtSb3V0ZXI6bi5Sb3V0ZXJ9KX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfXZhciB0PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKGVbb109bltvXSl9cmV0dXJuIGV9LG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbih0LG4sbyl7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksbyYmZSh0LG8pLHR9fSgpLGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKHQsbil7ZSh0aGlzLGkpLHRoaXMuY29udGV4dF89dHx8e2Jhc2VfdXJsOlwiXCIscHJlZml4OlwiXCIsaG9zdDpcIlwiLHBvcnQ6XCJcIixzY2hlbWU6XCJcIixsb2NhbGU6XCJcIn0sdGhpcy5zZXRSb3V0ZXMobnx8e30pfXJldHVybiBvKGksW3trZXk6XCJzZXRSb3V0aW5nRGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuc2V0QmFzZVVybChlLmJhc2VfdXJsKSx0aGlzLnNldFJvdXRlcyhlLnJvdXRlcyksXCJwcmVmaXhcImluIGUmJnRoaXMuc2V0UHJlZml4KGUucHJlZml4KSxcInBvcnRcImluIGUmJnRoaXMuc2V0UG9ydChlLnBvcnQpLFwibG9jYWxlXCJpbiBlJiZ0aGlzLnNldExvY2FsZShlLmxvY2FsZSksdGhpcy5zZXRIb3N0KGUuaG9zdCksdGhpcy5zZXRTY2hlbWUoZS5zY2hlbWUpfX0se2tleTpcInNldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMucm91dGVzXz1PYmplY3QuZnJlZXplKGUpfX0se2tleTpcImdldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucm91dGVzX319LHtrZXk6XCJzZXRCYXNlVXJsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5iYXNlX3VybD1lfX0se2tleTpcImdldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmJhc2VfdXJsfX0se2tleTpcInNldFByZWZpeFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucHJlZml4PWV9fSx7a2V5Olwic2V0U2NoZW1lXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5zY2hlbWU9ZX19LHtrZXk6XCJnZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnNjaGVtZX19LHtrZXk6XCJzZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5ob3N0PWV9fSx7a2V5OlwiZ2V0SG9zdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uaG9zdH19LHtrZXk6XCJzZXRQb3J0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wb3J0PWV9fSx7a2V5OlwiZ2V0UG9ydFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8ucG9ydH19LHtrZXk6XCJzZXRMb2NhbGVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmxvY2FsZT1lfX0se2tleTpcImdldExvY2FsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8ubG9jYWxlfX0se2tleTpcImJ1aWxkUXVlcnlQYXJhbXNcIix2YWx1ZTpmdW5jdGlvbihlLHQsbyl7dmFyIGk9dGhpcyxyPXZvaWQgMCxzPW5ldyBSZWdFeHAoL1xcW1xcXSQvKTtpZih0IGluc3RhbmNlb2YgQXJyYXkpdC5mb3JFYWNoKGZ1bmN0aW9uKHQscil7cy50ZXN0KGUpP28oZSx0KTppLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIisoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpP3I6XCJcIikrXCJdXCIsdCxvKX0pO2Vsc2UgaWYoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpKWZvcihyIGluIHQpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIrcitcIl1cIix0W3JdLG8pO2Vsc2UgbyhlLHQpfX0se2tleTpcImdldFJvdXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5jb250ZXh0Xy5wcmVmaXgrZSxuPWUrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUsbz10aGlzLmNvbnRleHRfLnByZWZpeCtlK1wiLlwiK3RoaXMuY29udGV4dF8ubG9jYWxlLGk9W3QsbixvLGVdO2Zvcih2YXIgciBpbiBpKWlmKGlbcl1pbiB0aGlzLnJvdXRlc18pcmV0dXJuIHRoaXMucm91dGVzX1tpW3JdXTt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgZG9lcyBub3QgZXhpc3QuJyl9fSx7a2V5OlwiZ2VuZXJhdGVcIix2YWx1ZTpmdW5jdGlvbihlLG4pe3ZhciBvPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl0saT10aGlzLmdldFJvdXRlKGUpLHI9bnx8e30scz10KHt9LHIpLHU9XCJcIixjPSEwLGE9XCJcIixmPVwidW5kZWZpbmVkXCI9PXR5cGVvZiB0aGlzLmdldFBvcnQoKXx8bnVsbD09PXRoaXMuZ2V0UG9ydCgpP1wiXCI6dGhpcy5nZXRQb3J0KCk7aWYoaS50b2tlbnMuZm9yRWFjaChmdW5jdGlvbih0KXtpZihcInRleHRcIj09PXRbMF0pcmV0dXJuIHU9dFsxXSt1LHZvaWQoYz0hMSk7e2lmKFwidmFyaWFibGVcIiE9PXRbMF0pdGhyb3cgbmV3IEVycm9yKCdUaGUgdG9rZW4gdHlwZSBcIicrdFswXSsnXCIgaXMgbm90IHN1cHBvcnRlZC4nKTt2YXIgbj1pLmRlZmF1bHRzJiZ0WzNdaW4gaS5kZWZhdWx0cztpZighMT09PWN8fCFufHx0WzNdaW4gciYmclt0WzNdXSE9aS5kZWZhdWx0c1t0WzNdXSl7dmFyIG89dm9pZCAwO2lmKHRbM11pbiByKW89clt0WzNdXSxkZWxldGUgc1t0WzNdXTtlbHNle2lmKCFuKXtpZihjKXJldHVybjt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgcmVxdWlyZXMgdGhlIHBhcmFtZXRlciBcIicrdFszXSsnXCIuJyl9bz1pLmRlZmF1bHRzW3RbM11dfXZhciBhPSEwPT09b3x8ITE9PT1vfHxcIlwiPT09bztpZighYXx8IWMpe3ZhciBmPWVuY29kZVVSSUNvbXBvbmVudChvKS5yZXBsYWNlKC8lMkYvZyxcIi9cIik7XCJudWxsXCI9PT1mJiZudWxsPT09byYmKGY9XCJcIiksdT10WzFdK2YrdX1jPSExfWVsc2UgbiYmdFszXWluIHMmJmRlbGV0ZSBzW3RbM11dfX0pLFwiXCI9PT11JiYodT1cIi9cIiksaS5ob3N0dG9rZW5zLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9dm9pZCAwO3JldHVyblwidGV4dFwiPT09ZVswXT92b2lkKGE9ZVsxXSthKTp2b2lkKFwidmFyaWFibGVcIj09PWVbMF0mJihlWzNdaW4gcj8odD1yW2VbM11dLGRlbGV0ZSBzW2VbM11dKTppLmRlZmF1bHRzJiZlWzNdaW4gaS5kZWZhdWx0cyYmKHQ9aS5kZWZhdWx0c1tlWzNdXSksYT1lWzFdK3QrYSkpfSksdT10aGlzLmNvbnRleHRfLmJhc2VfdXJsK3UsaS5yZXF1aXJlbWVudHMmJlwiX3NjaGVtZVwiaW4gaS5yZXF1aXJlbWVudHMmJnRoaXMuZ2V0U2NoZW1lKCkhPWkucmVxdWlyZW1lbnRzLl9zY2hlbWU/dT1pLnJlcXVpcmVtZW50cy5fc2NoZW1lK1wiOi8vXCIrKGF8fHRoaXMuZ2V0SG9zdCgpKSt1OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXNbMF0mJnRoaXMuZ2V0U2NoZW1lKCkhPT1pLnNjaGVtZXNbMF0/dT1pLnNjaGVtZXNbMF0rXCI6Ly9cIisoYXx8dGhpcy5nZXRIb3N0KCkpK3U6YSYmdGhpcy5nZXRIb3N0KCkhPT1hKyhcIlwiPT09Zj9cIlwiOlwiOlwiK2YpP3U9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK2ErKFwiXCI9PT1mP1wiXCI6XCI6XCIrZikrdTpvPT09ITAmJih1PXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIit0aGlzLmdldEhvc3QoKSt1KSxPYmplY3Qua2V5cyhzKS5sZW5ndGg+MCl7dmFyIGw9dm9pZCAwLGg9W10seT1mdW5jdGlvbihlLHQpe3Q9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KCk6dCx0PW51bGw9PT10P1wiXCI6dCxoLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0KSl9O2ZvcihsIGluIHMpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGwsc1tsXSx5KTt1PXUrXCI/XCIraC5qb2luKFwiJlwiKS5yZXBsYWNlKC8lMjAvZyxcIitcIil9cmV0dXJuIHV9fV0sW3trZXk6XCJnZXRJbnN0YW5jZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHJ9fSx7a2V5Olwic2V0RGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWkuZ2V0SW5zdGFuY2UoKTt0LnNldFJvdXRpbmdEYXRhKGUpfX1dKSxpfSgpO2kuUm91dGUsaS5Db250ZXh0O3ZhciByPW5ldyBpO3JldHVybntSb3V0ZXI6aSxSb3V0aW5nOnJ9fSk7Il0sInNvdXJjZVJvb3QiOiIifQ==