(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddSiswa.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AddSiswa.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_siswa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/siswa_service */ "./resources/js/services/siswa_service.js");
/* harmony import */ var _services_setkel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/setkel_service */ "./resources/js/services/setkel_service.js");
/* harmony import */ var _services_kelas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/kelas_service */ "./resources/js/services/kelas_service.js");


var _props$name$name$data;

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



/* harmony default export */ __webpack_exports__["default"] = (_props$name$name$data = {
  props: ["kelasid", "kelasnama", "kelastingkat"],
  name: "kelkel"
}, _defineProperty(_props$name$name$data, "name", "siswa"), _defineProperty(_props$name$name$data, "data", function data() {
  return {
    siswas: [],
    kelkels: [],
    kelkelData: {
      kela_id: 0,
      siswa_id: 0
    },
    siswaData: {
      nis: "",
      nisn: "",
      nama: "",
      jenis_kelamin: "Pria",
      tempat_lahir: "",
      tgl_lahir: "",
      agama: "",
      alamat: "",
      no_telp: "",
      sekolah_asal: "",
      alamat_sekolah_asal: "",
      diterima_dikelas: "",
      diterima_tgl: "",
      no_ijazah: "",
      thn_ijazah: "",
      no_skhun: "",
      thn_skhun: "",
      nama_ayah: "",
      nama_ibu: "",
      almt_ortu: "",
      tlp_ortu: "",
      pekerjaan_ayah: "",
      pekerjaan_ibu: "",
      nama_wali: "",
      almt_wali: "",
      tlp_wali: "",
      pekerjaan_wali: ""
    },
    moreExists: false,
    nextPage: 0,
    editSiswaData: {},
    errors: {}
  };
}), _defineProperty(_props$name$name$data, "mounted", function mounted() {
  this.loadSiswas();
  this.loadKelkel();
}), _defineProperty(_props$name$name$data, "methods", {
  loadKelkel: function () {
    var _loadKelkel = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _services_setkel_service__WEBPACK_IMPORTED_MODULE_2__["showKelkel"](this.kelasid);

            case 3:
              response = _context.sent;
              this.kelkels = response.data;
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              this.flashMessage.error({
                message: _context.t0.response.data.message,
                time: 5000
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 7]]);
    }));

    function loadKelkel() {
      return _loadKelkel.apply(this, arguments);
    }

    return loadKelkel;
  }(),
  deleteKelkel: function () {
    var _deleteKelkel = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(kelkel) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (window.confirm("Anda Akan Menghapus ".concat(kelkel.siswa.nama))) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.prev = 2;
              _context2.next = 5;
              return _services_setkel_service__WEBPACK_IMPORTED_MODULE_2__["deleteKelkel"](kelkel.id);

            case 5:
              this.hapusKuota(this.kelasid);
              this.editSiswaData = _objectSpread({}, kelkel.siswa);
              this.updateSiswa(kelkel.siswa.id);
              this.kelkels = this.kelkels.filter(function (obj) {
                return obj.id != kelkel.id;
              });
              this.flashMessage.success({
                message: "Data Kelompok Kelas Berhasil Dihapus",
                time: 5000
              });
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](2);
              this.flashMessage.error({
                message: _context2.t0.response.data.message,
                time: 5000
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[2, 12]]);
    }));

    function deleteKelkel(_x) {
      return _deleteKelkel.apply(this, arguments);
    }

    return deleteKelkel;
  }(),
  createKelkel: function () {
    var _createKelkel = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(siswa) {
      var formData, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              formData = new FormData();
              formData.append("kela_id", this.kelasid);
              formData.append("siswa_id", siswa.id);
              _context3.prev = 3;
              _context3.next = 6;
              return _services_setkel_service__WEBPACK_IMPORTED_MODULE_2__["createKelkel"](formData);

            case 6:
              response = _context3.sent;
              this.updateKuota(this.kelasid);
              this.editSiswaData = _objectSpread({}, siswa);
              this.updateSiswa2(siswa.id);
              this.loadKelkel();
              this.flashMessage.success({
                message: "Data Kela Berhasil Diubah 0",
                time: 5000
              });
              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](3);
              this.flashMessage.error({
                message: _context3.t0.response.data.message,
                time: 5000
              });

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[3, 14]]);
    }));

    function createKelkel(_x2) {
      return _createKelkel.apply(this, arguments);
    }

    return createKelkel;
  }(),
  updateKuota: function () {
    var _updateKuota = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _services_kelas_service__WEBPACK_IMPORTED_MODULE_3__["updateKuota"](id);

            case 3:
              response = _context4.sent;
              _context4.next = 9;
              break;

            case 6:
              _context4.prev = 6;
              _context4.t0 = _context4["catch"](0);
              this.flashMessage.error({
                message: _context4.t0.response.data.message,
                time: 5000
              });

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 6]]);
    }));

    function updateKuota(_x3) {
      return _updateKuota.apply(this, arguments);
    }

    return updateKuota;
  }(),
  hapusKuota: function () {
    var _hapusKuota = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _services_kelas_service__WEBPACK_IMPORTED_MODULE_3__["hapusKuota"](id);

            case 3:
              response = _context5.sent;
              _context5.next = 9;
              break;

            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);
              this.flashMessage.error({
                message: _context5.t0.response.data.message,
                time: 5000
              });

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[0, 6]]);
    }));

    function hapusKuota(_x4) {
      return _hapusKuota.apply(this, arguments);
    }

    return hapusKuota;
  }(),
  updateSiswa2: function () {
    var _updateSiswa = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(id) {
      var formData, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              formData = new FormData();
              formData.append("nis", this.editSiswaData.nis);
              formData.append("nisn", this.editSiswaData.nisn);
              formData.append("nama", this.editSiswaData.nama);
              formData.append("jenis_kelamin", this.editSiswaData.jenis_kelamin);
              formData.append("tempat_lahir", this.editSiswaData.tempat_lahir);
              formData.append("tgl_lahir", this.editSiswaData.tgl_lahir);
              formData.append("agama", this.editSiswaData.agama);
              formData.append("alamat", this.editSiswaData.alamat);
              formData.append("no_telp", this.editSiswaData.no_telp);
              formData.append("sekolah_asal", this.editSiswaData.sekolah_asal);
              formData.append("alamat_sekolah_asal", this.editSiswaData.alamat_sekolah_asal);
              formData.append("diterima_dikelas", this.editSiswaData.diterima_dikelas);
              formData.append("diterima_tgl", this.editSiswaData.diterima_tgl);
              formData.append("no_ijazah", this.editSiswaData.no_ijazah);
              formData.append("thn_ijazah", this.editSiswaData.thn_ijazah);
              formData.append("no_skhun", this.editSiswaData.no_skhun);
              formData.append("thn_skhun", this.editSiswaData.thn_skhun);
              formData.append("nama_ayah", this.editSiswaData.nama_ayah);
              formData.append("nama_ibu", this.editSiswaData.nama_ibu);
              formData.append("almt_ortu", this.editSiswaData.almt_ortu);
              formData.append("tlp_ortu", this.editSiswaData.tlp_ortu);
              formData.append("pekerjaan_ayah", this.editSiswaData.pekerjaan_ayah);
              formData.append("pekerjaan_ibu", this.editSiswaData.pekerjaan_ibu);
              formData.append("nama_wali", this.editSiswaData.nama_wali);
              formData.append("almt_wali", this.editSiswaData.almt_wali);
              formData.append("tlp_wali", this.editSiswaData.tlp_wali);
              formData.append("pekerjaan_wali", this.editSiswaData.pekerjaan_wali);
              formData.append("kela_id", this.kelasid);
              formData.append("_method", "put");
              _context6.prev = 30;
              _context6.next = 33;
              return _services_siswa_service__WEBPACK_IMPORTED_MODULE_1__["updateSiswa"](id, formData);

            case 33:
              response = _context6.sent;
              this.loadSiswas();
              this.siswas.map(function (siswa) {
                if (siswa.id == response.data.id) {
                  for (var key in response.data) {
                    siswa[key] = response.data[key];
                  }
                }
              });
              this.flashMessage.success({
                message: "Data Kela Berhasil Diubah 0",
                time: 5000
              });
              _context6.next = 42;
              break;

            case 39:
              _context6.prev = 39;
              _context6.t0 = _context6["catch"](30);
              this.flashMessage.error({
                message: _context6.t0.response.data.message,
                time: 5000
              });

            case 42:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this, [[30, 39]]);
    }));

    function updateSiswa2(_x5) {
      return _updateSiswa.apply(this, arguments);
    }

    return updateSiswa2;
  }(),
  updateSiswa: function () {
    var _updateSiswa2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
      var formData, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              formData = new FormData();
              formData.append("nis", this.editSiswaData.nis);
              formData.append("nisn", this.editSiswaData.nisn);
              formData.append("nama", this.editSiswaData.nama);
              formData.append("jenis_kelamin", this.editSiswaData.jenis_kelamin);
              formData.append("tempat_lahir", this.editSiswaData.tempat_lahir);
              formData.append("tgl_lahir", this.editSiswaData.tgl_lahir);
              formData.append("agama", this.editSiswaData.agama);
              formData.append("alamat", this.editSiswaData.alamat);
              formData.append("no_telp", this.editSiswaData.no_telp);
              formData.append("sekolah_asal", this.editSiswaData.sekolah_asal);
              formData.append("alamat_sekolah_asal", this.editSiswaData.alamat_sekolah_asal);
              formData.append("diterima_dikelas", this.editSiswaData.diterima_dikelas);
              formData.append("diterima_tgl", this.editSiswaData.diterima_tgl);
              formData.append("no_ijazah", this.editSiswaData.no_ijazah);
              formData.append("thn_ijazah", this.editSiswaData.thn_ijazah);
              formData.append("no_skhun", this.editSiswaData.no_skhun);
              formData.append("thn_skhun", this.editSiswaData.thn_skhun);
              formData.append("nama_ayah", this.editSiswaData.nama_ayah);
              formData.append("nama_ibu", this.editSiswaData.nama_ibu);
              formData.append("almt_ortu", this.editSiswaData.almt_ortu);
              formData.append("tlp_ortu", this.editSiswaData.tlp_ortu);
              formData.append("pekerjaan_ayah", this.editSiswaData.pekerjaan_ayah);
              formData.append("pekerjaan_ibu", this.editSiswaData.pekerjaan_ibu);
              formData.append("nama_wali", this.editSiswaData.nama_wali);
              formData.append("almt_wali", this.editSiswaData.almt_wali);
              formData.append("tlp_wali", this.editSiswaData.tlp_wali);
              formData.append("pekerjaan_wali", this.editSiswaData.pekerjaan_wali);
              formData.append("kela_id", 0);
              formData.append("_method", "put");
              _context7.prev = 30;
              _context7.next = 33;
              return _services_siswa_service__WEBPACK_IMPORTED_MODULE_1__["updateSiswa"](id, formData);

            case 33:
              response = _context7.sent;
              this.loadSiswas();
              this.siswas.map(function (siswa) {
                if (siswa.id == response.data.id) {
                  for (var key in response.data) {
                    siswa[key] = response.data[key];
                  }
                }
              });
              this.flashMessage.success({
                message: "Data Kela Berhasil Diubah 0",
                time: 5000
              });
              _context7.next = 42;
              break;

            case 39:
              _context7.prev = 39;
              _context7.t0 = _context7["catch"](30);
              this.flashMessage.error({
                message: _context7.t0.response.data.message,
                time: 5000
              });

            case 42:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this, [[30, 39]]);
    }));

    function updateSiswa(_x6) {
      return _updateSiswa2.apply(this, arguments);
    }

    return updateSiswa;
  }(),
  loadSiswas: function () {
    var _loadSiswas = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return _services_siswa_service__WEBPACK_IMPORTED_MODULE_1__["ambilSiswasByKela"](this.kelastingkat);

            case 3:
              response = _context8.sent;
              this.siswas = response.data;
              _context8.next = 10;
              break;

            case 7:
              _context8.prev = 7;
              _context8.t0 = _context8["catch"](0);
              this.flashMessage.error({
                message: "Terjadi masalah silahkan refresh halaman ini!",
                time: 5000
              });

            case 10:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this, [[0, 7]]);
    }));

    function loadSiswas() {
      return _loadSiswas.apply(this, arguments);
    }

    return loadSiswas;
  }(),
  loadMore: function () {
    var _loadMore = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
      var _this = this;

      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return _services_siswa_service__WEBPACK_IMPORTED_MODULE_1__["loadMore"](this.nextPage);

            case 3:
              response = _context9.sent;

              if (response.data.current_page < response.data.last_page) {
                this.moreExists = true;
                this.nextPage = response.data.current_page + 1;
              } else {
                this.moreExists = false;
              }

              response.data.data.forEach(function (data) {
                _this.siswas.push(data);
              });
              _context9.next = 11;
              break;

            case 8:
              _context9.prev = 8;
              _context9.t0 = _context9["catch"](0);
              this.flashMessage.error({
                message: _context9.t0.response.data.message,
                time: 5000
              });

            case 11:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this, [[0, 8]]);
    }));

    function loadMore() {
      return _loadMore.apply(this, arguments);
    }

    return loadMore;
  }()
}), _props$name$name$data);

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
/*! exports provided: createKelas, loadKelass, deleteKelas, updateKelas, updateKuota, hapusKuota, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKelas", function() { return createKelas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadKelass", function() { return loadKelass; });
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

/***/ "./resources/js/services/setkel_service.js":
/*!*************************************************!*\
  !*** ./resources/js/services/setkel_service.js ***!
  \*************************************************/
/*! exports provided: createKelkel, showKelkel, loadKelkel, deleteKelkel, updateKelkel, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKelkel", function() { return createKelkel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showKelkel", function() { return showKelkel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadKelkel", function() { return loadKelkel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteKelkel", function() { return deleteKelkel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateKelkel", function() { return updateKelkel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _http_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service.js */ "./resources/js/services/http_service.js");

function createKelkel(data) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/kelkel', data);
}
function showKelkel(id) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/kelkel/".concat(id));
}
function loadKelkel() {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/kelkel');
}
function deleteKelkel(id) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/kelkel/".concat(id));
}
function updateKelkel(id, data) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("/kelkel/".concat(id), data);
}
function loadMore(nextPage) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/kelkel?page=".concat(nextPage));
}

/***/ }),

/***/ "./resources/js/services/siswa_service.js":
/*!************************************************!*\
  !*** ./resources/js/services/siswa_service.js ***!
  \************************************************/
/*! exports provided: createSiswa, loadSiswas, ambilSiswasByKela, deleteSiswa, updateSiswa, upKelaId, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSiswa", function() { return createSiswa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSiswas", function() { return loadSiswas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ambilSiswasByKela", function() { return ambilSiswasByKela; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSiswa", function() { return deleteSiswa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSiswa", function() { return updateSiswa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upKelaId", function() { return upKelaId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _http_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service.js */ "./resources/js/services/http_service.js");

function createSiswa(data) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/siswa', data);
}
function loadSiswas() {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/siswa');
}
function ambilSiswasByKela(kelas) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/getsiswakela/".concat(kelas));
}
function deleteSiswa(id) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/siswa/".concat(id));
}
function updateSiswa(id, data) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("/siswa/".concat(id), data);
}
function upKelaId(id, data) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("/upkelaid/".concat(id), data);
}
function loadMore(nextPage) {
  return Object(_http_service_js__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/siswa?page=".concat(nextPage));
}

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