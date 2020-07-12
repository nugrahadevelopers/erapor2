(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetKelas.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetKelas.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_kelas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/kelas_service */ "./resources/js/services/kelas_service.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "kelas",
  data: function data() {
    return {
      kelass: [],
      kelasData: {
        id: "",
        tingkat: "",
        nama_kelas: "",
        kuota: ""
      },
      moreExists: false,
      nextPage: 0,
      editKelasData: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadKelass();
  },
  methods: {
    hideNewKelasModal: function hideNewKelasModal() {
      this.$refs.newKelasModal.hide();
    },
    showNewKelasModal: function showNewKelasModal() {
      this.$refs.newKelasModal.show();
    },
    loadKelass: function () {
      var _loadKelass = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_kelas_service__WEBPACK_IMPORTED_MODULE_1__["loadKelass"]();

              case 3:
                response = _context.sent;
                this.kelass = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: "Terjadi masalah silahkan refresh halaman ini!",
                  time: 5000
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function loadKelass() {
        return _loadKelass.apply(this, arguments);
      }

      return loadKelass;
    }(),
    createKelas: function () {
      var _createKelas = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append("tingkat", this.kelasData.tingkat);
                formData.append("nama_kelas", this.kelasData.nama_kelas);
                _context2.prev = 3;
                _context2.next = 6;
                return _services_kelas_service__WEBPACK_IMPORTED_MODULE_1__["createKelas"](formData);

              case 6:
                response = _context2.sent;
                this.kelass.unshift(response.data);
                this.hideNewKelasModal();
                this.flashMessage.success({
                  message: "Data Kelas Berhasil Ditambahkan",
                  time: 5000
                });
                this.kelasData = {
                  tingkat: "",
                  nama_kelas: "",
                  kuota: ""
                };
                _context2.next = 22;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](3);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 18 : 20;
                break;

              case 18:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 22);

              case 20:
                this.flashMessage.error({
                  message: "Terjadi masalah silahkan refresh halaman ini!",
                  time: 5000
                });
                return _context2.abrupt("break", 22);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 13]]);
      }));

      function createKelas() {
        return _createKelas.apply(this, arguments);
      }

      return createKelas;
    }(),
    deleteKelas: function () {
      var _deleteKelas = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(kelas) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (window.confirm("Anda Akan Menghapus ".concat(kelas.nama_kelas))) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.prev = 2;
                _context3.next = 5;
                return _services_kelas_service__WEBPACK_IMPORTED_MODULE_1__["deleteKelas"](kelas.id);

              case 5:
                this.kelass = this.kelass.filter(function (obj) {
                  return obj.id != kelas.id;
                });
                this.flashMessage.success({
                  message: "Data Kelas Berhasil Dihapus",
                  time: 5000
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                this.flashMessage.error({
                  message: _context3.t0.response.data.message,
                  time: 5000
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 9]]);
      }));

      function deleteKelas(_x) {
        return _deleteKelas.apply(this, arguments);
      }

      return deleteKelas;
    }(),
    hideEditKelasModal: function hideEditKelasModal() {
      this.$refs.editKelasModal.hide();
    },
    showEditKelasModal: function showEditKelasModal() {
      this.$refs.editKelasModal.show();
    },
    editKelas: function editKelas(kelas) {
      this.editKelasData = _objectSpread({}, kelas);
      this.showEditKelasModal();
    },
    updateKelas: function () {
      var _updateKelas = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                formData = new FormData();
                formData.append("tingkat", this.editKelasData.tingkat);
                formData.append("nama_kelas", this.editKelasData.nama_kelas);
                formData.append("_method", "put");
                _context4.next = 7;
                return _services_kelas_service__WEBPACK_IMPORTED_MODULE_1__["updateKelas"](this.editKelasData.id, formData);

              case 7:
                response = _context4.sent;
                this.kelass.map(function (kelas) {
                  if (kelas.id == response.data.id) {
                    for (var key in response.data) {
                      kelas[key] = response.data[key];
                    }
                  }
                });
                this.hideEditKelasModal();
                this.flashMessage.success({
                  message: "Data Kelas Berhasil Diubah",
                  time: 5000
                });
                _context4.next = 16;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.error({
                  message: _context4.t0.response.data.message,
                  time: 5000
                });

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 13]]);
      }));

      function updateKelas() {
        return _updateKelas.apply(this, arguments);
      }

      return updateKelas;
    }(),
    loadMore: function () {
      var _loadMore = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_kelas_service__WEBPACK_IMPORTED_MODULE_1__["loadMore"](this.nextPage);

              case 3:
                response = _context5.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this.kelass.push(data);
                });
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                this.flashMessage.error({
                  message: _context5.t0.response.data.message,
                  time: 5000
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function loadMore() {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetKelas.vue?vue&type=template&id=cf241c3e&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetKelas.vue?vue&type=template&id=cf241c3e& ***!
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
      _c("div", { staticClass: "card mb-4 mt-5" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("table", { staticClass: "table" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.kelass, function(kelas, index) {
                return _c("tr", { key: index }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(kelas.tingkat))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(kelas.nama_kelas))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(kelas.kuota) + "/32")]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          attrs: {
                            to: {
                              name: "tambahsiswa",
                              params: {
                                kelasid: kelas.id,
                                kelasnama: kelas.nama_kelas,
                                kelastingkat: kelas.tingkat
                              }
                            },
                            exact: ""
                          }
                        },
                        [
                          _c("span", { staticClass: "fa fa-plus" }),
                          _vm._v(
                            "\n                Tambah Siswa\n              "
                          )
                        ]
                      )
                    ],
                    1
                  )
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
                  _vm._v("\n          Lebih Banyak\n        ")
                ]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "newKelasModal",
          attrs: { "hide-footer": "", title: "Tambah Kelas" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createKelas($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "tingkat" } }, [
                    _vm._v("Tingkat")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.kelasData.tingkat,
                        expression: "kelasData.tingkat"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "tingkat",
                      placeholder: "Masukan Tingkat"
                    },
                    domProps: { value: _vm.kelasData.tingkat },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.kelasData, "tingkat", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.tingkat
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.tingkat[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "nama_kelas" } }, [
                    _vm._v("Nama Kelas")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.kelasData.nama_kelas,
                        expression: "kelasData.nama_kelas"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "nama_kelas",
                      placeholder: "Masukan Namak Kelas"
                    },
                    domProps: { value: _vm.kelasData.nama_kelas },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.kelasData,
                          "nama_kelas",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.nama_kelas
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.nama_kelas[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" },
                      on: { click: _vm.hideNewKelasModal }
                    },
                    [_vm._v("Batal")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v(" Simpan\n          ")
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editKelasModal",
          attrs: { "hide-footer": "", title: "Ubah Data Kelas" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateKelas($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "tingkat" } }, [
                    _vm._v("Tingkat")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editKelasData.tingkat,
                        expression: "editKelasData.tingkat"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "tingkat",
                      placeholder: "Masukan Tingkat"
                    },
                    domProps: { value: _vm.editKelasData.tingkat },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editKelasData,
                          "tingkat",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.tingkat
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.tingkat[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "nama_kelas" } }, [
                    _vm._v("Nama Kelas")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editKelasData.nama_kelas,
                        expression: "editKelasData.nama_kelas"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "nama_kelas",
                      placeholder: "Masukan Nama Kelas"
                    },
                    domProps: { value: _vm.editKelasData.nama_kelas },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editKelasData,
                          "nama_kelas",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.nama_kelas
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.nama_kelas[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" },
                      on: { click: _vm.hideEditKelasModal }
                    },
                    [_vm._v("Batal")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v(" Ubah\n          ")
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header d-flex" }, [
      _c("i", { staticClass: "fas fa-chart-area mr-1" }),
      _vm._v("\n      Data Kelas\n    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("#")]),
        _vm._v(" "),
        _c("td", [_vm._v("Tingkat")]),
        _vm._v(" "),
        _c("td", [_vm._v("Nama")]),
        _vm._v(" "),
        _c("td", [_vm._v("Kuota")]),
        _vm._v(" "),
        _c("td", [_vm._v("AKSI")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/http_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/http_service.js ***!
  \***********************************************/
/*! exports provided: http, httpFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFile", function() { return httpFile; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function http() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL
  });
}
function httpFile() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

/***/ }),

/***/ "./resources/js/services/kelas_service.js":
/*!************************************************!*\
  !*** ./resources/js/services/kelas_service.js ***!
  \************************************************/
/*! exports provided: createKelas, loadKelass, loadKelassAll, deleteKelas, updateKelas, updateKuota, hapusKuota, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKelas", function() { return createKelas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadKelass", function() { return loadKelass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadKelassAll", function() { return loadKelassAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteKelas", function() { return deleteKelas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateKelas", function() { return updateKelas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateKuota", function() { return updateKuota; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hapusKuota", function() { return hapusKuota; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _http_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service.js */ "./resources/js/services/http_service.js");

function createKelas(data) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/kela', data);
}
function loadKelass() {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/kela');
}
function loadKelassAll() {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/kelaall');
}
function deleteKelas(id) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/kela/".concat(id));
}
function updateKelas(id, data) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("/kela/".concat(id), data);
}
function updateKuota(id) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().put("/updatekuota/".concat(id));
}
function hapusKuota(id) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().put("/hapuskuota/".concat(id));
}
function loadMore(nextPage) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/kela?page=".concat(nextPage));
}

/***/ }),

/***/ "./resources/js/views/SetKelas.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/SetKelas.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SetKelas_vue_vue_type_template_id_cf241c3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetKelas.vue?vue&type=template&id=cf241c3e& */ "./resources/js/views/SetKelas.vue?vue&type=template&id=cf241c3e&");
/* harmony import */ var _SetKelas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetKelas.vue?vue&type=script&lang=js& */ "./resources/js/views/SetKelas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SetKelas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SetKelas_vue_vue_type_template_id_cf241c3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SetKelas_vue_vue_type_template_id_cf241c3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SetKelas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/SetKelas.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/SetKelas.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetKelas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SetKelas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetKelas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetKelas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SetKelas.vue?vue&type=template&id=cf241c3e&":
/*!************************************************************************!*\
  !*** ./resources/js/views/SetKelas.vue?vue&type=template&id=cf241c3e& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetKelas_vue_vue_type_template_id_cf241c3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SetKelas.vue?vue&type=template&id=cf241c3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetKelas.vue?vue&type=template&id=cf241c3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetKelas_vue_vue_type_template_id_cf241c3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetKelas_vue_vue_type_template_id_cf241c3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);