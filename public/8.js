(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddSiswa.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AddSiswa.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: c:\\xampp\\htdocs\\erapor2\\resources\\js\\views\\AddSiswa.vue: Identifier 'response' has already been declared (178:14)\n\n\u001b[0m \u001b[90m 176 | \u001b[39m      \u001b[36mtry\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 177 | \u001b[39m        \u001b[36mconst\u001b[39m response \u001b[33m=\u001b[39m await kelkelService\u001b[33m.\u001b[39mcreateKelkel(formData)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 178 | \u001b[39m        \u001b[36mconst\u001b[39m response \u001b[33m=\u001b[39m await kelasService\u001b[33m.\u001b[39mupdateKuota(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mkelasid)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 179 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39meditSiswaData \u001b[33m=\u001b[39m { \u001b[33m...\u001b[39msiswa }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 180 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mupdateSiswa2(siswa\u001b[33m.\u001b[39mid)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 181 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mloadKelkel()\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:757:17)\n    at Parser.raiseWithData (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:750:17)\n    at Parser.raise (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:744:17)\n    at ScopeHandler.checkRedeclarationInScope (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:4803:12)\n    at ScopeHandler.declareName (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:4769:12)\n    at Parser.checkLVal (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:9288:22)\n    at Parser.parseVarId (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11884:10)\n    at Parser.parseVar (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11859:12)\n    at Parser.parseVarStatement (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11671:10)\n    at Parser.parseStatementContent (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11270:21)\n    at Parser.parseStatement (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11203:17)\n    at Parser.parseBlockOrModuleBlockBody (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11778:25)\n    at Parser.parseBlockBody (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11764:10)\n    at Parser.parseBlock (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11748:10)\n    at Parser.parseTryStatement (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11636:23)\n    at Parser.parseStatementContent (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11260:21)\n    at Parser.parseStatement (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11203:17)\n    at Parser.parseBlockOrModuleBlockBody (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11778:25)\n    at Parser.parseBlockBody (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11764:10)\n    at Parser.parseBlock (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11748:10)\n    at Parser.parseFunctionBody (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:10751:24)\n    at Parser.parseFunctionBodyAndFinish (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:10734:10)\n    at c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11918:12\n    at Parser.withTopicForbiddingContext (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11078:14)\n    at Parser.parseFunction (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:11917:10)\n    at Parser.parseExprAtom (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:9969:25)\n    at Parser.parseExprSubscripts (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:9688:23)\n    at Parser.parseMaybeUnary (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:9668:21)\n    at Parser.parseExprOps (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:9538:23)\n    at Parser.parseMaybeConditional (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:9511:23)\n    at Parser.parseMaybeAssign (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:9466:21)\n    at Parser.parseObjectProperty (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:10629:101)\n    at Parser.parseObjPropValue (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:10654:101)\n    at Parser.parseObjectMember (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:10578:10)\n    at Parser.parseObj (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:10487:25)\n    at Parser.parseExprAtom (c:\\xampp\\htdocs\\erapor2\\node_modules\\@babel\\parser\\lib\\index.js:10087:28)");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddSiswa.vue?vue&type=template&id=0cf54d65&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AddSiswa.vue?vue&type=template&id=0cf54d65& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c(
        "b-card",
        { staticClass: "mt-4", attrs: { "no-body": "" } },
        [
          _c(
            "b-tabs",
            { attrs: { pills: "", card: "" } },
            [
              _c(
                "b-tab",
                { attrs: { title: "Daftar Siswa", active: "" } },
                [
                  _vm._v(
                    "\n        Daftar Siswa Kelas " +
                      _vm._s(_vm.kelasnama) +
                      "\n        "
                  ),
                  _c("b-card-text", [
                    _c("table", { staticClass: "table" }, [
                      _c("thead", [
                        _c("tr", [
                          _c("td", [_vm._v("#")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("NIS")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("NAMA")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.kelkels, function(kelkel, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [_vm._v(_vm._s(index + 1))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(kelkel.siswa.nis))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(kelkel.siswa.nama))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger btn-sm",
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteKelkel(kelkel)
                                    }
                                  }
                                },
                                [_c("span", { staticClass: "fa fa-trash" })]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.moreExists,
                            expression: "moreExists"
                          }
                        ],
                        staticClass: "text-center"
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: { type: "button" },
                            on: { click: _vm.loadMore }
                          },
                          [
                            _c("span", { staticClass: "fa fa-arrow-down" }),
                            _vm._v("\n              Lebih Banyak\n            ")
                          ]
                        )
                      ]
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                { attrs: { title: "Tambah Siswa" } },
                [
                  _c("b-card-text", [
                    _c("table", { staticClass: "table" }, [
                      _c("thead", [
                        _c("tr", [
                          _c("td", [_vm._v("#")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("NIS")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("NISN")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("NAMA")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("AKSI")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.siswas, function(siswa, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [_vm._v(_vm._s(index + 1))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(siswa.nis))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(siswa.nisn))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(siswa.nama))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary btn-sm",
                                  on: {
                                    click: function($event) {
                                      return _vm.createKelkel(siswa)
                                    }
                                  }
                                },
                                [_c("span", { staticClass: "fa fa-plus" })]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.moreExists,
                            expression: "moreExists"
                          }
                        ],
                        staticClass: "text-center"
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: { type: "button" },
                            on: { click: _vm.loadMore }
                          },
                          [
                            _c("span", { staticClass: "fa fa-arrow-down" }),
                            _vm._v("\n              Lebih Banyak\n            ")
                          ]
                        )
                      ]
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/AddSiswa.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/AddSiswa.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddSiswa_vue_vue_type_template_id_0cf54d65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddSiswa.vue?vue&type=template&id=0cf54d65& */ "./resources/js/views/AddSiswa.vue?vue&type=template&id=0cf54d65&");
/* harmony import */ var _AddSiswa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddSiswa.vue?vue&type=script&lang=js& */ "./resources/js/views/AddSiswa.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddSiswa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddSiswa_vue_vue_type_template_id_0cf54d65___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddSiswa_vue_vue_type_template_id_0cf54d65___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AddSiswa.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/AddSiswa.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/AddSiswa.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSiswa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddSiswa.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddSiswa.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSiswa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/AddSiswa.vue?vue&type=template&id=0cf54d65&":
/*!************************************************************************!*\
  !*** ./resources/js/views/AddSiswa.vue?vue&type=template&id=0cf54d65& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSiswa_vue_vue_type_template_id_0cf54d65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddSiswa.vue?vue&type=template&id=0cf54d65& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddSiswa.vue?vue&type=template&id=0cf54d65&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSiswa_vue_vue_type_template_id_0cf54d65___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSiswa_vue_vue_type_template_id_0cf54d65___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);