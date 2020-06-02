(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Ticket.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Ticket.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
      users: {},
      roles: {},
      form: new Form({
        id: '',
        name: '',
        email: '',
        password: '',
        type: '',
        bio: '',
        photo: ''
      })
    };
  },
  methods: {
    newModal: function newModal() {
      this.editmode = false;
      this.form.reset();
      Fire.$emit('AfterModelShow');
      $('#addNew').modal('show');
    },
    loadUsers: function loadUsers() {
      var _this = this;

      axios.get("backend/user").then(function (_ref) {
        var data = _ref.data;
        return _this.users = data.data;
      });
    },
    loadRoles: function loadRoles() {
      var _this2 = this;

      axios.get("backend/role").then(function (_ref2) {
        var data = _ref2.data;
        return _this2.roles = data;
      });
    },
    createUser: function createUser() {
      var _this3 = this;

      this.$Progress.start();
      this.form.post('backend/user').then(function () {
        Fire.$emit('AfterCreate');
        $('#addNew').modal('hide');
        toast.fire('Success', 'User Created Successfully', 'success', 5000);

        _this3.$Progress.finish();
      })["catch"](function () {
        _this3.$Progress.fail();

        toast.fire('Failed', 'There was something wrong.', 'failed', 5000);
      });
    },
    deleteUser: function deleteUser(id) {
      var _this4 = this;

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
          _this4.form["delete"]('backend/user/' + id).then(function () {
            swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            Fire.$emit('AfterCreate');
          })["catch"](function () {
            swal.fire('Failed!', 'There was something wrong.', 'warning');
          });
        }
      });
    },
    editModal: function editModal(user) {
      this.editmode = true;
      this.form.reset();
      Fire.$emit('AfterModelShow');
      $('#addNew').modal('show');
      this.form.fill(user);
    },
    updateUser: function updateUser() {
      var _this5 = this;

      this.$Progress.start();
      this.form.put('backend/user/' + this.form.id).then(function () {
        Fire.$emit('AfterCreate');
        $('#addNew').modal('hide');
        swal.fire('Updated!', 'User Information Updated Successfully', 'success');

        _this5.$Progress.finish();
      })["catch"](function () {
        _this5.$Progress.fail();

        swal.fire('Failed!', 'There was something wrong.', 'warning');
      });
    }
  },
  created: function created() {
    var _this6 = this;

    this.loadUsers();
    this.loadRoles(); // setInterval(() => this.loadUsers() , 3000);
    // setInterval(() => this.loadRoles() , 3000);

    Fire.$on('AfterCreate', function () {
      _this6.loadUsers();
    });
    Fire.$on('AfterModelShow', function () {
      _this6.loadRoles();
    });
    console.log('Users Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Ticket.vue?vue&type=template&id=11e89992&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Ticket.vue?vue&type=template&id=11e89992& ***!
  \*********************************************************************************************************************************************************************************************************/
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
            _c("h3", { staticClass: "card-title" }, [_vm._v("Tickets")]),
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
                _vm._l(_vm.users, function(user) {
                  return _c(
                    "tr",
                    { key: user.id },
                    [
                      _c("td", [_vm._v(_vm._s(user.id))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm._f("titleText")(user.name)))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(user.email))]),
                      _vm._v(" "),
                      _vm._l(user.roles, function(role) {
                        return _c("td", { key: role.id }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm._f("titleText")(role.name)) +
                              "\n                                "
                          )
                        ])
                      }),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm._f("customDate")(user.created_at)))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                return _vm.editModal(user)
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
                                return _vm.deleteUser(user.id)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-trash red" })]
                        )
                      ])
                    ],
                    2
                  )
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
                [_vm._v("Update User")]
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
                    _vm.editmode ? _vm.updateUser() : _vm.createUser()
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
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.email,
                            expression: "form.email"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("email") },
                        attrs: {
                          type: "email",
                          name: "email",
                          placeholder: "Email Address"
                        },
                        domProps: { value: _vm.form.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "email", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "email" }
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
                            value: _vm.form.bio,
                            expression: "form.bio"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("bio") },
                        attrs: {
                          id: "bio",
                          name: "bio",
                          placeholder: "Short bio for user (Optional)"
                        },
                        domProps: { value: _vm.form.bio },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "bio", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "bio" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.type,
                              expression: "form.type"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("type") },
                          attrs: { name: "type", id: "type" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "type",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "", disabled: "" } }, [
                            _vm._v("Select User Role")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.roles, function(role) {
                            return _c(
                              "option",
                              { key: role.id, domProps: { value: role.id } },
                              [
                                _vm._v(
                                  " " +
                                    _vm._s(_vm._f("titleText")(role.name)) +
                                    " "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "type" }
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
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.password,
                            expression: "form.password"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("password")
                        },
                        attrs: {
                          type: "password",
                          name: "password",
                          id: "password",
                          placeholder: "Password"
                        },
                        domProps: { value: _vm.form.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "password", $event.target.value)
                          }
                        }
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
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Registered At")]),
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

/***/ "./resources/js/components/Ticket.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Ticket.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ticket_vue_vue_type_template_id_11e89992___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ticket.vue?vue&type=template&id=11e89992& */ "./resources/js/components/Ticket.vue?vue&type=template&id=11e89992&");
/* harmony import */ var _Ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ticket.vue?vue&type=script&lang=js& */ "./resources/js/components/Ticket.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Ticket_vue_vue_type_template_id_11e89992___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Ticket_vue_vue_type_template_id_11e89992___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Ticket.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Ticket.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Ticket.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Ticket.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Ticket.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Ticket.vue?vue&type=template&id=11e89992&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Ticket.vue?vue&type=template&id=11e89992& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_template_id_11e89992___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Ticket.vue?vue&type=template&id=11e89992& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Ticket.vue?vue&type=template&id=11e89992&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_template_id_11e89992___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_template_id_11e89992___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);