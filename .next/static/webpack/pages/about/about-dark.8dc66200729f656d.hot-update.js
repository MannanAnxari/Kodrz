"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about/about-dark",{

/***/ "./src/components/About-header/index.jsx":
/*!***********************************************!*\
  !*** ./src/components/About-header/index.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navbar */ \"./src/components/Navbar/index.jsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar AboutHeader = function() {\n    _s();\n    var fixedHeader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var MainContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), pageLoaded = ref[0], setPageLoaded = ref[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        setPageLoaded(true);\n        if (pageLoaded) {\n            addParlx();\n        }\n    }, [\n        pageLoaded\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var navbar = navbarRef.current;\n        window.addEventListener(\"scroll\", function() {\n            if (window.pageYOffset > 300) {\n                navbar.classList.add(\"nav-scroll\");\n            } else {\n                navbar.classList.remove(\"nav-scroll\");\n            }\n        });\n        if (fixedHeader.current) {\n            var slidHeight = fixedHeader.current.offsetHeight;\n        }\n        if (MainContent.current) {\n            MainContent.current.style.marginTop = slidHeight + \"px\";\n        }\n    }, [\n        fixedHeader,\n        MainContent,\n        navbarRef\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            ref: fixedHeader,\n            className: \"works-header fixed-slider hfixd valign\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row justify-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-lg-9 col-md-11 static\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"capt text-center mt-50\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"parlx\",\n                                    children: \"Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\EliteBlue\\\\Downloads\\\\avoreact-10\\\\avoreact-10\\\\Main_files\\\\avo\\\\src\\\\components\\\\About-header\\\\index.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bactxt custom-font valign\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"full-width\",\n                                        children: \"Works\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\EliteBlue\\\\Downloads\\\\avoreact-10\\\\avoreact-10\\\\Main_files\\\\avo\\\\src\\\\components\\\\About-header\\\\index.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\EliteBlue\\\\Downloads\\\\avoreact-10\\\\avoreact-10\\\\Main_files\\\\avo\\\\src\\\\components\\\\About-header\\\\index.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\EliteBlue\\\\Downloads\\\\avoreact-10\\\\avoreact-10\\\\Main_files\\\\avo\\\\src\\\\components\\\\About-header\\\\index.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\EliteBlue\\\\Downloads\\\\avoreact-10\\\\avoreact-10\\\\Main_files\\\\avo\\\\src\\\\components\\\\About-header\\\\index.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\EliteBlue\\\\Downloads\\\\avoreact-10\\\\avoreact-10\\\\Main_files\\\\avo\\\\src\\\\components\\\\About-header\\\\index.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\EliteBlue\\\\Downloads\\\\avoreact-10\\\\avoreact-10\\\\Main_files\\\\avo\\\\src\\\\components\\\\About-header\\\\index.jsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\EliteBlue\\\\Downloads\\\\avoreact-10\\\\avoreact-10\\\\Main_files\\\\avo\\\\src\\\\components\\\\About-header\\\\index.jsx\",\n            lineNumber: 35,\n            columnNumber: 6\n        }, _this)\n    }, void 0, false);\n};\n_s(AboutHeader, \"pfiOzXaAvaiSMLO+8hLANXjkoZ8=\");\n_c = AboutHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutHeader);\nvar _c;\n$RefreshReg$(_c, \"AboutHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BYm91dC1oZWFkZXIvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUEwQjtBQUNtQjtBQUU3QyxJQUFNRSxXQUFXLEdBQUcsV0FBTTs7SUFDeEIsSUFBTUMsV0FBVyxHQUFHSCxtREFBWSxDQUFDLElBQUksQ0FBQztJQUN0QyxJQUFNSyxXQUFXLEdBQUdMLG1EQUFZLENBQUMsSUFBSSxDQUFDO0lBQ3RDLElBQU1NLFNBQVMsR0FBR04sbURBQVksQ0FBQyxJQUFJLENBQUM7SUFDcEMsSUFBTU8sT0FBTyxHQUFHUCxtREFBWSxDQUFDLElBQUksQ0FBQztJQUVsQyxJQUFvQ0EsR0FBcUIsb0ZBQXJCQSxxREFBYyxDQUFDLEtBQUssQ0FBQyxNQUFsRFMsVUFBVSxHQUFtQlQsR0FBcUIsR0FBeEMsRUFBRVUsYUFBYSxHQUFJVixHQUFxQixHQUF6QjtJQUNoQ0Esc0RBQWUsQ0FBQyxXQUFNO1FBQ3BCVSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsSUFBSUQsVUFBVSxFQUFFO1lBQ2RHLFFBQVEsRUFBRSxDQUFDO1FBQ2IsQ0FBQztJQUNILENBQUMsRUFBRTtRQUFDSCxVQUFVO0tBQUMsQ0FBQyxDQUFDO0lBQ2pCVCxzREFBZSxDQUFDLFdBQU07UUFDcEIsSUFBSWEsTUFBTSxHQUFHUCxTQUFTLENBQUNRLE9BQU87UUFDOUJDLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFdBQU07WUFDdEMsSUFBSUQsTUFBTSxDQUFDRSxXQUFXLEdBQUcsR0FBRyxFQUFFO2dCQUM1QkosTUFBTSxDQUFDSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNyQyxPQUFPO2dCQUNMTixNQUFNLENBQUNLLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUlqQixXQUFXLENBQUNXLE9BQU8sRUFBRTtZQUN2QixJQUFJTyxVQUFVLEdBQUdsQixXQUFXLENBQUNXLE9BQU8sQ0FBQ1EsWUFBWTtRQUNuRCxDQUFDO1FBQ0QsSUFBSWpCLFdBQVcsQ0FBQ1MsT0FBTyxFQUFFO1lBQ3ZCVCxXQUFXLENBQUNTLE9BQU8sQ0FBQ1MsS0FBSyxDQUFDQyxTQUFTLEdBQUdILFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDMUQsQ0FBQztJQUNILENBQUMsRUFBRTtRQUFDbEIsV0FBVztRQUFFRSxXQUFXO1FBQUVDLFNBQVM7S0FBQyxDQUFDLENBQUM7SUFDMUMscUJBQ0U7a0JBQ0MsNEVBQUNtQixRQUFNO1lBQ0pDLEdBQUcsRUFBRXZCLFdBQVc7WUFDaEJ3QixTQUFTLEVBQUMsd0NBQXdDO3NCQUVsRCw0RUFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLFdBQVc7MEJBQ3hCLDRFQUFDQyxLQUFHO29CQUFDRCxTQUFTLEVBQUMsNEJBQTRCOzhCQUN6Qyw0RUFBQ0MsS0FBRzt3QkFBQ0QsU0FBUyxFQUFDLDJCQUEyQjtrQ0FDeEMsNEVBQUNDLEtBQUc7NEJBQUNELFNBQVMsRUFBQyx3QkFBd0I7OzhDQUNyQyw4REFBQ0UsSUFBRTtvQ0FBQ0YsU0FBUyxFQUFDLE9BQU87OENBQUMsa0lBSXRCOzs7Ozt5Q0FBSzs4Q0FDTCw4REFBQ0MsS0FBRztvQ0FBQ0QsU0FBUyxFQUFDLDJCQUEyQjs4Q0FDeEMsNEVBQUNHLE1BQUk7d0NBQUNILFNBQVMsRUFBQyxZQUFZO2tEQUFDLE9BQUs7Ozs7OzZDQUFPOzs7Ozt5Q0FDckM7Ozs7OztpQ0FDRjs7Ozs7NkJBQ0Y7Ozs7O3lCQUNGOzs7OztxQkFDRjs7Ozs7aUJBQ0M7cUJBdUJSLENBRUQ7QUFDTixDQUFDO0dBN0VLekIsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBK0VqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fib3V0LWhlYWRlci9pbmRleC5qc3g/ZDUwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcblxyXG5jb25zdCBBYm91dEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBmaXhlZEhlYWRlciA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBNYWluQ29udGVudCA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBuYXZiYXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbG9nb1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgW3BhZ2VMb2FkZWQsIHNldFBhZ2VMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQYWdlTG9hZGVkKHRydWUpO1xyXG4gICAgaWYgKHBhZ2VMb2FkZWQpIHtcclxuICAgICAgYWRkUGFybHgoKTtcclxuICAgIH1cclxuICB9LCBbcGFnZUxvYWRlZF0pO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgbmF2YmFyID0gbmF2YmFyUmVmLmN1cnJlbnQ7IFxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoZml4ZWRIZWFkZXIuY3VycmVudCkge1xyXG4gICAgICB2YXIgc2xpZEhlaWdodCA9IGZpeGVkSGVhZGVyLmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgaWYgKE1haW5Db250ZW50LmN1cnJlbnQpIHtcclxuICAgICAgTWFpbkNvbnRlbnQuY3VycmVudC5zdHlsZS5tYXJnaW5Ub3AgPSBzbGlkSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgfVxyXG4gIH0sIFtmaXhlZEhlYWRlciwgTWFpbkNvbnRlbnQsIG5hdmJhclJlZl0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgIDxoZWFkZXJcclxuICAgICAgICByZWY9e2ZpeGVkSGVhZGVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIndvcmtzLWhlYWRlciBmaXhlZC1zbGlkZXIgaGZpeGQgdmFsaWduXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTkgY29sLW1kLTExIHN0YXRpY1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdCB0ZXh0LWNlbnRlciBtdC01MFwiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInBhcmx4XCI+XHJcbiAgICAgICAgICAgICAgICAgIENyZWF0aXZpdHkgaW52b2x2ZXMgYnJlYWtpbmcgb3V0IG9mIGV4cGVjdGVkICZhbXA7IHJlcGVhdGFibGVcclxuICAgICAgICAgICAgICAgICAgcGF0dGVybnMgaW4gb3JkZXIgdG8gbG9vayBhdCB0aGluZ3MgaW4gZGlmZmVyZW50IHdheSB0aGFuIGV2ZXJcclxuICAgICAgICAgICAgICAgICAgYmVmb3JlLlxyXG4gICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjdHh0IGN1c3RvbS1mb250IHZhbGlnblwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCI+V29ya3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgey8qIDxoZWFkZXJcclxuICAgICAgY2xhc3NOYW1lPVwicGFnZXMtaGVhZGVyIGJnLWltZyB2YWxpZ24gcGFyYWxsYXhpZVwiXHJcbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2ltZy9zbGlkLzEuanBnKVwiIH19XHJcbiAgICAgIGRhdGEtb3ZlcmxheS1kYXJrPVwiNVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMT5BYm91dCBVczwvaDE+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXRoXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Lzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjMFwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICBBYm91dCBVc1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPiAqL31cclxuICAgIDwvPlxyXG4gIFxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0SGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJOYXZiYXIiLCJBYm91dEhlYWRlciIsImZpeGVkSGVhZGVyIiwidXNlUmVmIiwiTWFpbkNvbnRlbnQiLCJuYXZiYXJSZWYiLCJsb2dvUmVmIiwidXNlU3RhdGUiLCJwYWdlTG9hZGVkIiwic2V0UGFnZUxvYWRlZCIsInVzZUVmZmVjdCIsImFkZFBhcmx4IiwibmF2YmFyIiwiY3VycmVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNsaWRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsIm1hcmdpblRvcCIsImhlYWRlciIsInJlZiIsImNsYXNzTmFtZSIsImRpdiIsImg0Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/About-header/index.jsx\n"));

/***/ })

});