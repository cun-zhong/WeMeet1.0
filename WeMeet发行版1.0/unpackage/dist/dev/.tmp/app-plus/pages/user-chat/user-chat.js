(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user-chat/user-chat"],{

/***/ "../../../../../1项目实践/项目代码/WeMeet发行版1.0/pages/user-chat/user-chat.vue":
/*!****************************************************************!*\
  !*** D:/1项目实践/项目代码/WeMeet发行版1.0/pages/user-chat/user-chat.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_chat_vue_vue_type_template_id_471227d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-chat.vue?vue&type=template&id=471227d2& */ "../../../../../1项目实践/项目代码/WeMeet发行版1.0/pages/user-chat/user-chat.vue?vue&type=template&id=471227d2&");
/* harmony import */ var _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-chat.vue?vue&type=script&lang=js& */ "../../../../../1项目实践/项目代码/WeMeet发行版1.0/pages/user-chat/user-chat.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../1software/hbuilderx1.9.9/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_chat_vue_vue_type_template_id_471227d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_chat_vue_vue_type_template_id_471227d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "1项目实践/项目代码/WeMeet发行版1.0/pages/user-chat/user-chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../1项目实践/项目代码/WeMeet发行版1.0/pages/user-chat/user-chat.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** D:/1项目实践/项目代码/WeMeet发行版1.0/pages/user-chat/user-chat.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../1software/hbuilderx1.9.9/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../1software/hbuilderx1.9.9/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../1software/hbuilderx1.9.9/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../1software/hbuilderx1.9.9/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./user-chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../1项目实践/项目代码/WeMeet发行版1.0/pages/user-chat/user-chat.vue?vue&type=script&lang=js&");
/* harmony import */ var _1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../1项目实践/项目代码/WeMeet发行版1.0/pages/user-chat/user-chat.vue?vue&type=template&id=471227d2&":
/*!***********************************************************************************************!*\
  !*** D:/1项目实践/项目代码/WeMeet发行版1.0/pages/user-chat/user-chat.vue?vue&type=template&id=471227d2& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_chat_vue_vue_type_template_id_471227d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../1software/hbuilderx1.9.9/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../1software/hbuilderx1.9.9/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../1software/hbuilderx1.9.9/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../1software/hbuilderx1.9.9/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./user-chat.vue?vue&type=template&id=471227d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../1项目实践/项目代码/WeMeet发行版1.0/pages/user-chat/user-chat.vue?vue&type=template&id=471227d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_chat_vue_vue_type_template_id_471227d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_1software_hbuilderx1_9_9_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_chat_vue_vue_type_template_id_471227d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../1项目实践/项目代码/WeMeet发行版1.0/pages/user-chat/user-chat.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/1项目实践/项目代码/WeMeet发行版1.0/pages/user-chat/user-chat.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));























var _time = _interopRequireDefault(__webpack_require__(/*! ../../common/time.js */ "../../../../../1项目实践/项目代码/WeMeet发行版1.0/common/time.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var userChatBottom = function userChatBottom() {return __webpack_require__.e(/*! import() | components/user-chat/user-chat-bottom */ "components/user-chat/user-chat-bottom").then(__webpack_require__.bind(null, /*! ../../components/user-chat/user-chat-bottom.vue */ "../../../../../1项目实践/项目代码/WeMeet发行版1.0/components/user-chat/user-chat-bottom.vue"));};var userChatList = function userChatList() {return __webpack_require__.e(/*! import() | components/user-chat/user-chat-list */ "components/user-chat/user-chat-list").then(__webpack_require__.bind(null, /*! ../../components/user-chat/user-chat-list.vue */ "../../../../../1项目实践/项目代码/WeMeet发行版1.0/components/user-chat/user-chat-list.vue"));};var _default =

{
  components: {
    userChatBottom: userChatBottom,
    userChatList: userChatList },

  data: function data() {
    return {
      scrollTop: 0,
      style: {
        contentH: 0,
        itemH: 0 },

      list: [],
      loadtext: "点击加载更多" };

  },
  onLoad: function onLoad(e) {
    var userinfo = JSON.parse(e.userinfo);
    // 用户不存在
    if (!userinfo.userid) {
      uni.showToast({ title: '该用户不存在', icon: "none" });
      return uni.navigateBack({ delta: 1 });
    }
    // 初始化聊天对象
    this.$chat.CurrentToUser = {
      userid: userinfo.userid,
      username: userinfo.username,
      userpic: userinfo.userpic };

    // 修改标题
    uni.setNavigationBarTitle({ title: userinfo.username });
  },
  onUnload: function onUnload() {
    // 初始化聊天对象
    this.$chat.CurrentToUser = {
      userid: 0,
      username: "",
      userpic: "" };

  },
  onReady: function onReady() {
    this.__init();
  },
  methods: {
    // 初始化参数
    __init: function __init() {var _this = this;
      // 获取窗口信息
      try {
        var res = uni.getSystemInfoSync();
        this.style.contentH = res.windowHeight - uni.upx2px(120);
      } catch (e) {}
      // 获取聊天历史记录
      this.getdata();
      // 至于底部
      this.pageToBottom(true);
      // 开启监听
      uni.$on('UserChat', function (data) {
        _this.list.push(_this.$chat.__format(data, {
          type: "chatdetail",
          isme: false,
          olddata: _this.list }));

        _this.pageToBottom();
      });
    },
    pageToBottom: function pageToBottom() {var _this2 = this;var isfirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;var isscrollToBottom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var q = uni.createSelectorQuery().in(this);
      var itemH = q.selectAll('.chat-item');
      this.$nextTick(function () {
        itemH.fields({
          size: true },
        function (data) {
          if (data) {
            if (isfirst) {
              _this2.style.itemH = 0;
              for (var i = 0; i < data.length; i++) {
                _this2.style.itemH += data[i].height;
              }
            } else {
              _this2.style.itemH += data.length > 0 ? data[data.length - 1].height : data[0].height;
            }
            if (isscrollToBottom) {
              _this2.scrollTop = _this2.style.itemH > _this2.style.contentH ? _this2.style.itemH : 0;
            }
          }
        }).exec();
      });
    },
    // 获取聊天数据（只获取10条）
    getdata: function getdata() {var isall = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      try {
        var key = 'chatdetail_' + this.User.userinfo.id + '_' + this.$chat.CurrentToUser.userid;
        var list = uni.getStorageSync(key);
        list = list ? JSON.parse(list) : [];
        // 首次加载十条
        if (!isall && list.length > 10) {
          return this.list = list.splice(0, 10);
        }
        // 加载剩下的数据
        this.list = list;
        this.loadtext = '';
      } catch (e) {
        uni.showToast({ title: '加载失败~', icon: 'none' });
      }
    },
    submit: function () {var _submit = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(data) {var result, _ref, _ref2, err, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                data) {_context.next = 2;break;}return _context.abrupt("return",
                uni.showToast({ title: '请输入你要发送的消息~', icon: 'none' }));case 2:

                result = this.$chat.send({ type: 'text', data: data });_context.next = 5;return (
                  this.$http.post('/chat/send', result, {
                    token: true,
                    checkToken: true,
                    checkAuth: true }));case 5:_ref = _context.sent;_ref2 = _slicedToArray(_ref, 2);err = _ref2[0];res = _ref2[1];if (

                this.$http.errorCheck(err, res)) {_context.next = 11;break;}return _context.abrupt("return",
                uni.showToast({
                  title: '发送失败', icon: "none" }));case 11:


                this.list.push(this.$chat.__format(result, {
                  type: "chatdetail", // 转化类型
                  olddata: this.list,
                  isme: true }));

                this.pageToBottom();case 13:case "end":return _context.stop();}}}, _callee, this);}));function submit(_x) {return _submit.apply(this, arguments);}return submit;}(),

    // 加载更多
    loadmore: function loadmore() {
      if (this.loadtext !== "点击加载更多") return;
      // 修改状态
      this.loadtext = "加载中...";
      this.getdata(true);
      this.pageToBottom(true, false);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../1项目实践/项目代码/WeMeet发行版1.0/pages/user-chat/user-chat.vue?vue&type=template&id=471227d2&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/1项目实践/项目代码/WeMeet发行版1.0/pages/user-chat/user-chat.vue?vue&type=template&id=471227d2& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../../1项目实践/项目代码/WeMeet发行版1.0/main.js?{\"page\":\"pages%2Fuser-chat%2Fuser-chat\"}","common/runtime","common/vendor"]]]);