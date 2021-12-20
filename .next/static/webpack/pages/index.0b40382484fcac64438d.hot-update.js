/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tomas/Desktop/web-dev-labs/designing-react-components-course-code/02-designing-better-components/clip-05-building-functional-components/pages/index.js\",\n    _this = undefined;\n\n\n\nfunction Session(_ref) {\n  var title = _ref.title,\n      room = _ref.room;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n    className: \"session w-100\",\n    children: [title, \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n      children: [\"Room: \", room]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 15\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Session;\n\nvar IndexPage = function IndexPage() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container speakers-list\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"row\",\n      children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function (speaker) {\n        var id = speaker.id,\n            bio = speaker.bio,\n            first = speaker.first,\n            last = speaker.last,\n            favorite = speaker.favorite,\n            twitterHandle = speaker.twitterHandle,\n            company = speaker.company,\n            sessions = speaker.sessions;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"speaker-img d-flex flex-row justify-content-center align-itmes-center h-300\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              className: \"contain-fit\",\n              src: \"/images/speaker-\".concat(id, \".jpg\"),\n              width: \"300\",\n              alt: \"\".concat(first, \" \").concat(last)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"speaker-info\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"d-flex justify-content-between mb-3\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-truncate w-200\",\n                children: [first, \" \", last]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [bio, \" \", company, \" \", twitterHandle, \" \", favorite]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sessionBox card h-250\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n              title: sessions[0].title,\n              room: sessions[0].room.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 15\n          }, this)]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwiSW5kZXhQYWdlIiwiZGF0YSIsInNwZWFrZXIiLCJpZCIsImJpbyIsImZpcnN0IiwibGFzdCIsImZhdm9yaXRlIiwidHdpdHRlckhhbmRsZSIsImNvbXBhbnkiLCJzZXNzaW9ucyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxPQUFULE9BQWtDO0FBQUEsTUFBZkMsS0FBZSxRQUFmQSxLQUFlO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2hDLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUEsZUFDR0QsS0FESCxvQkFDVTtBQUFBLDJCQUFlQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBTlFGLE87O0FBUVQsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUl0QixzQkFDRTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSxnQkFDR0Msa0RBQUEsQ0FBUyxVQUFVQyxPQUFWLEVBQW1CO0FBQUEsWUFDcEJDLEVBRG9CLEdBRXpCRCxPQUZ5QixDQUNwQkMsRUFEb0I7QUFBQSxZQUNoQkMsR0FEZ0IsR0FFekJGLE9BRnlCLENBQ2hCRSxHQURnQjtBQUFBLFlBQ1hDLEtBRFcsR0FFekJILE9BRnlCLENBQ1hHLEtBRFc7QUFBQSxZQUNKQyxJQURJLEdBRXpCSixPQUZ5QixDQUNKSSxJQURJO0FBQUEsWUFDRUMsUUFERixHQUV6QkwsT0FGeUIsQ0FDRUssUUFERjtBQUFBLFlBQ1lDLGFBRFosR0FFekJOLE9BRnlCLENBQ1lNLGFBRFo7QUFBQSxZQUMyQkMsT0FEM0IsR0FFekJQLE9BRnlCLENBQzJCTyxPQUQzQjtBQUFBLFlBQ29DQyxRQURwQyxHQUV6QlIsT0FGeUIsQ0FDb0NRLFFBRHBDO0FBSTNCLDRCQUNFO0FBRUUsbUJBQVMsRUFBQywyREFGWjtBQUFBLGtDQUlFO0FBQUsscUJBQVMsRUFBQyw2RUFBZjtBQUFBLG1DQUNFO0FBQ0UsdUJBQVMsRUFBQyxhQURaO0FBRUUsaUJBQUcsNEJBQXFCUCxFQUFyQixTQUZMO0FBR0UsbUJBQUssRUFBQyxLQUhSO0FBSUUsaUJBQUcsWUFBS0UsS0FBTCxjQUFjQyxJQUFkO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFZRTtBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxxQ0FBZjtBQUFBLHFDQUNFO0FBQUkseUJBQVMsRUFBQyxxQkFBZDtBQUFBLDJCQUNHRCxLQURILE9BQ1dDLElBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQU1FO0FBQUEscUNBQ0U7QUFBQSwyQkFBSUYsR0FBSixPQUFVSyxPQUFWLE9BQW9CRCxhQUFwQixPQUFvQ0QsUUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkYsZUFzQkU7QUFBSyxxQkFBUyxFQUFDLHVCQUFmO0FBQUEsbUNBQ0UsOERBQUMsT0FBRDtBQUFTLG1CQUFLLEVBQUVHLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWVosS0FBNUI7QUFBbUMsa0JBQUksRUFBRVksUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZWCxJQUFaLENBQWlCWTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF0QkY7QUFBQSxXQUNPUixFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUE2QkQsT0FqQ0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMENELENBOUNEOztNQUFNSCxTO0FBZ0ROLCtEQUFlQSxTQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uL1NwZWFrZXJEYXRhXCI7XG5cbmZ1bmN0aW9uIFNlc3Npb24oeyB0aXRsZSwgcm9vbSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxuICAgICAge3RpdGxlfSA8c3Ryb25nPlJvb206IHtyb29tfTwvc3Ryb25nPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuXG4gIFxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICB7ZGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcbiAgICAgICAgICBjb25zdCB7aWQsIGJpbywgZmlyc3QsIGxhc3QsIGZhdm9yaXRlLCB0d2l0dGVySGFuZGxlLCBjb21wYW55LCBzZXNzaW9ucywgfSBcbiAgICAgICAgICA9IHNwZWFrZXI7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdG1lcy1jZW50ZXIgaC0zMDBcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXG4gICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgICAgICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwPntiaW99IHtjb21wYW55fSB7dHdpdHRlckhhbmRsZX0ge2Zhdm9yaXRlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XG4gICAgICAgICAgICAgICAgPFNlc3Npb24gdGl0bGU9e3Nlc3Npb25zWzBdLnRpdGxlfSByb29tPXtzZXNzaW9uc1swXS5yb29tLm5hbWV9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuXG4gICAgICAgIH0pfVxuXG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});