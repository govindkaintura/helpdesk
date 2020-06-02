(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      editmode: false,
      products: {},
      form: new Form({
        id: '',
        name: '',
        desc: '',
        image: ''
      })
    };
  },
  methods: {
    newModal: function newModal() {
      this.editmode = false;
      this.form.reset();
      $('#addNew').modal('show');
    },
    loadProducts: function loadProducts() {
      var _this = this;

      axios.get("backend/product").then(function (_ref) {
        var data = _ref.data;
        return _this.products = data.data;
      });
    },
    onFileChange: function onFileChange(e) {
      this.form.image = e.target.files[0];
    },
    createProduct: function createProduct(e) {
      var _this2 = this;

      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var formData = new FormData();
      this.formData.append('name', this.form.name);
      this.formData.append('desc', this.form.desc);
      this.formData.append('image', this.form.image);
      this.$Progress.start();
      axios.post('/backend/product', this.formData, config).then(function () {
        Fire.$emit('AfterCreate');
        $('#addNew').modal('hide');
        toast.fire('Success', 'Product Created Successfully', 'success', 5000);

        _this2.$Progress.finish();
      })["catch"](function () {
        toast.fire('Failed', 'There was something wrong.', 'failed', 5000);

        _this2.$Progress.fail();
      });
    },
    deleteProduct: function deleteProduct(id) {
      var _this3 = this;

      swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        //send result to server
        if (result.value) {
          _this3.form["delete"]('backend/product/' + id).then(function () {
            swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            Fire.$emit('AfterCreate');
          })["catch"](function () {
            swal.fire('Failed!', 'There was something wrong.', 'warning');
          });
        }
      });
    },
    editModal: function editModal(product) {
      this.editmode = true;
      this.form.reset();
      $('#addNew').modal('show');
      this.form.fill(product);
    },
    updateProduct: function updateProduct() {
      var _this4 = this;

      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var formData = new FormData();
      this.formData.append('name', this.form.name);
      this.formData.append('desc', this.form.desc);
      this.formData.append('image', this.form.image);
      this.$Progress.start();
      axios.post('/backend/product', this.formData, config).then(function () {
        Fire.$emit('AfterCreate');
        $('#addNew').modal('hide');
        swal.fire('Updated!', 'Product Data Updated Successfully', 'success');

        _this4.$Progress.finish();
      })["catch"](function () {
        _this4.$Progress.fail();

        swal.fire('Failed!', 'There was something wrong.', 'warning');
      });
    }
  },
  created: function created() {
    var _this5 = this;

    this.loadProducts();
    Fire.$on('AfterCreate', function () {
      _this5.loadProducts();
    });
    console.log('Products Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product.vue?vue&type=template&id=1b2b3ef4&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product.vue?vue&type=template&id=1b2b3ef4& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _c("h3", { staticClass: "card-title" }, [_vm._v("Products")]),
            _vm._v(" "),
            _c("div", { staticClass: "card-tools" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  on: {
                    click: function($event) {
                      return _vm.newModal()
                    }
                  }
                },
                [
                  _vm._v("Add New "),
                  _c("i", { staticClass: "fas fa-user-plus fa-fw" })
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body table-responsive p-0" }, [
            _c("table", { staticClass: "table table-hover" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.products, function(product) {
                  return _c("tr", { key: product.id }, [
                    _c("td", [_vm._v(_vm._s(product.id))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("titleText")(product.name)))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              return _vm.editModal(product)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-edit blue" })]
                      ),
                      _vm._v(
                        "\n                                    /\n                                    "
                      ),
                      _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              return _vm.deleteProduct(product.id)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-trash red" })]
                      )
                    ])
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "addNew",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "addNewLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-dialog-centered" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h5",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.editmode,
                      expression: "!editmode"
                    }
                  ],
                  staticClass: "modal-title",
                  attrs: { id: "addNewLabel" }
                },
                [_vm._v("Add New")]
              ),
              _vm._v(" "),
              _c(
                "h5",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.editmode,
                      expression: "editmode"
                    }
                  ],
                  staticClass: "modal-title",
                  attrs: { id: "addNewLabel" }
                },
                [_vm._v("Update Product")]
              ),
              _vm._v(" "),
              _vm._m(1)
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    _vm.editmode ? _vm.updateProduct() : _vm.createProduct()
                  }
                }
              },
              [
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("name") },
                        attrs: {
                          type: "text",
                          name: "name",
                          placeholder: "Name"
                        },
                        domProps: { value: _vm.form.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "name" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.desc,
                            expression: "form.desc"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("desc") },
                        attrs: { name: "desc", placeholder: "Description" },
                        domProps: { value: _vm.form.desc },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "desc", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "desc" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("input", {
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("name") },
                        attrs: { type: "file", name: "image" },
                        on: { change: _vm.onFileChange }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "name" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.editmode,
                          expression: "editmode"
                        }
                      ],
                      staticClass: "btn btn-success",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Update")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.editmode,
                          expression: "!editmode"
                        }
                      ],
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Create")]
                  )
                ])
              ]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Modify")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/product.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/product.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_vue_vue_type_template_id_1b2b3ef4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.vue?vue&type=template&id=1b2b3ef4& */ "./resources/js/components/product.vue?vue&type=template&id=1b2b3ef4&");
/* harmony import */ var _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.vue?vue&type=script&lang=js& */ "./resources/js/components/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_vue_vue_type_template_id_1b2b3ef4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_vue_vue_type_template_id_1b2b3ef4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/product.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product.vue?vue&type=template&id=1b2b3ef4&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/product.vue?vue&type=template&id=1b2b3ef4& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_1b2b3ef4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=template&id=1b2b3ef4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product.vue?vue&type=template&id=1b2b3ef4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_1b2b3ef4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_1b2b3ef4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);