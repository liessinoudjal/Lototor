(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.css */ "./assets/css/app.css"); // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");

__webpack_require__(/*! ./cookies.js */ "./assets/js/cookies.js");

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ }),

/***/ "./assets/js/cookies.js":
/*!******************************!*\
  !*** ./assets/js/cookies.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

//require('../css/rgbd.scss');
//document.cookie = "RGBD-accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
console.log(readCookie("doSomethingOnlyOnce")); //si les RGBD n'ont pas été accepté on affichge le message d'alert et on set l'event sur le boutton d'acceptation

if (readCookie("RGBD-accepted") == null) {
  document.querySelector('.rgbd').classList.remove("d-none");
  document.querySelector('.rgbd  button').addEventListener("click", function (event) {
    event.preventDefault();
    document.cookie = "RGBD-accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    document.querySelector('.rgbd').classList.add("d-none");
  });
}

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";

  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

/***/ })

},[["./assets/js/app.js","runtime","vendors~AppComponent~app~bootstrap","vendors~AppComponent~app","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29va2llcy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsImNvbnNvbGUiLCJsb2ciLCJyZWFkQ29va2llIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb29raWUiLCJhZGQiLCJjcmVhdGVDb29raWUiLCJuYW1lIiwidmFsdWUiLCJkYXlzIiwiZGF0ZSIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImV4cGlyZXMiLCJ0b0dNVFN0cmluZyIsIm5hbWVFUSIsImNhIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFPQTtBQUVBQSxtQkFBTyxDQUFDLDRDQUFELENBQVAsQyxDQUVBOzs7QUFDQyxJQUFNQyxDQUFDLEdBQUdELG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBRURBLG1CQUFPLENBQUMsbUhBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1R0FBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDRDQUFELENBQVA7O0FBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1EQUFaLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBRCxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBVSxDQUFDLHFCQUFELENBQXRCLEUsQ0FFQTs7QUFDQSxJQUFHQSxVQUFVLENBQUMsZUFBRCxDQUFWLElBQStCLElBQWxDLEVBQXVDO0FBQ3JDQyxVQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0NDLFNBQWhDLENBQTBDQyxNQUExQyxDQUFpRCxRQUFqRDtBQUNBSCxVQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NHLGdCQUF4QyxDQUF5RCxPQUF6RCxFQUFrRSxVQUFDQyxLQUFELEVBQVU7QUFDM0VBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBTixZQUFRLENBQUNPLE1BQVQsR0FBa0IsMkRBQWxCO0FBQ0FQLFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixFQUFnQ0MsU0FBaEMsQ0FBMENNLEdBQTFDLENBQThDLFFBQTlDO0FBQ0MsR0FKRjtBQUtEOztBQUlELFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTJCQyxLQUEzQixFQUFpQ0MsSUFBakMsRUFBdUM7QUFDdEMsTUFBSUEsSUFBSixFQUFVO0FBQ1QsUUFBSUMsSUFBSSxHQUFHLElBQUlDLElBQUosRUFBWDtBQUNBRCxRQUFJLENBQUNFLE9BQUwsQ0FBYUYsSUFBSSxDQUFDRyxPQUFMLEtBQWdCSixJQUFJLEdBQUMsRUFBTCxHQUFRLEVBQVIsR0FBVyxFQUFYLEdBQWMsSUFBM0M7QUFDQSxRQUFJSyxPQUFPLEdBQUcsZUFBYUosSUFBSSxDQUFDSyxXQUFMLEVBQTNCO0FBQ0EsR0FKRCxNQUtLLElBQUlELE9BQU8sR0FBRyxFQUFkOztBQUNMakIsVUFBUSxDQUFDTyxNQUFULEdBQWtCRyxJQUFJLEdBQUMsR0FBTCxHQUFTQyxLQUFULEdBQWVNLE9BQWYsR0FBdUIsVUFBekM7QUFDQTs7QUFFRCxTQUFTbEIsVUFBVCxDQUFvQlcsSUFBcEIsRUFBMEI7QUFDekIsTUFBSVMsTUFBTSxHQUFHVCxJQUFJLEdBQUcsR0FBcEI7QUFDQSxNQUFJVSxFQUFFLEdBQUdwQixRQUFRLENBQUNPLE1BQVQsQ0FBZ0JjLEtBQWhCLENBQXNCLEdBQXRCLENBQVQ7O0FBQ0EsT0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUdGLEVBQUUsQ0FBQ0csTUFBbkIsRUFBMEJELENBQUMsRUFBM0IsRUFBK0I7QUFDOUIsUUFBSUUsQ0FBQyxHQUFHSixFQUFFLENBQUNFLENBQUQsQ0FBVjs7QUFDQSxXQUFPRSxDQUFDLENBQUNDLE1BQUYsQ0FBUyxDQUFULEtBQWEsR0FBcEI7QUFBeUJELE9BQUMsR0FBR0EsQ0FBQyxDQUFDRSxTQUFGLENBQVksQ0FBWixFQUFjRixDQUFDLENBQUNELE1BQWhCLENBQUo7QUFBekI7O0FBQ0EsUUFBSUMsQ0FBQyxDQUFDRyxPQUFGLENBQVVSLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEIsT0FBT0ssQ0FBQyxDQUFDRSxTQUFGLENBQVlQLE1BQU0sQ0FBQ0ksTUFBbkIsRUFBMEJDLENBQUMsQ0FBQ0QsTUFBNUIsQ0FBUDtBQUM1Qjs7QUFDRCxTQUFPLElBQVA7QUFDQSxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcblxyXG5yZXF1aXJlKCcuLi9jc3MvYXBwLmNzcycpO1xyXG5cclxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxyXG4gY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJyk7XHJcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcycpO1xyXG5yZXF1aXJlKCcuL2Nvb2tpZXMuanMnKTtcclxuY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIGFzc2V0cy9qcy9hcHAuanMnKTtcclxuXHJcbiBcclxuIiwiLy9yZXF1aXJlKCcuLi9jc3MvcmdiZC5zY3NzJyk7XHJcbi8vZG9jdW1lbnQuY29va2llID0gXCJSR0JELWFjY2VwdGVkPXRydWU7IGV4cGlyZXM9RnJpLCAzMSBEZWMgOTk5OSAyMzo1OTo1OSBHTVRcIjtcclxuY29uc29sZS5sb2cocmVhZENvb2tpZShcImRvU29tZXRoaW5nT25seU9uY2VcIikpXHJcblxyXG4vL3NpIGxlcyBSR0JEIG4nb250IHBhcyDDqXTDqSBhY2NlcHTDqSBvbiBhZmZpY2hnZSBsZSBtZXNzYWdlIGQnYWxlcnQgZXQgb24gc2V0IGwnZXZlbnQgc3VyIGxlIGJvdXR0b24gZCdhY2NlcHRhdGlvblxyXG5pZihyZWFkQ29va2llKFwiUkdCRC1hY2NlcHRlZFwiKSA9PSBudWxsKXtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZ2JkJykuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZ2JkICBidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PntcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZG9jdW1lbnQuY29va2llID0gXCJSR0JELWFjY2VwdGVkPXRydWU7IGV4cGlyZXM9RnJpLCAzMSBEZWMgOTk5OSAyMzo1OTo1OSBHTVRcIjtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJnYmQnKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXHJcblx0XHRcdH0pXHRcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb29raWUobmFtZSx2YWx1ZSxkYXlzKSB7XHJcblx0aWYgKGRheXMpIHtcclxuXHRcdHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSsoZGF5cyoyNCo2MCo2MCoxMDAwKSk7XHJcblx0XHR2YXIgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiK2RhdGUudG9HTVRTdHJpbmcoKTtcclxuXHR9XHJcblx0ZWxzZSB2YXIgZXhwaXJlcyA9IFwiXCI7XHJcblx0ZG9jdW1lbnQuY29va2llID0gbmFtZStcIj1cIit2YWx1ZStleHBpcmVzK1wiOyBwYXRoPS9cIjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZENvb2tpZShuYW1lKSB7XHJcblx0dmFyIG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcclxuXHR2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuXHRmb3IodmFyIGk9MDtpIDwgY2EubGVuZ3RoO2krKykge1xyXG5cdFx0dmFyIGMgPSBjYVtpXTtcclxuXHRcdHdoaWxlIChjLmNoYXJBdCgwKT09JyAnKSBjID0gYy5zdWJzdHJpbmcoMSxjLmxlbmd0aCk7XHJcblx0XHRpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT0gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsYy5sZW5ndGgpO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=