webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_JuanOtavalo_Desktop_platziCursos_nextjsCurso_retoCurso_podcast_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_JuanOtavalo_Desktop_platziCursos_nextjsCurso_retoCurso_podcast_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_JuanOtavalo_Desktop_platziCursos_nextjsCurso_retoCurso_podcast_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_JuanOtavalo_Desktop_platziCursos_nextjsCurso_retoCurso_podcast_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ \"./node_modules/next/dist/next-server/lib/utils.js\");\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/Users/JuanOtavalo/Desktop/platziCursos/nextjsCurso/retoCurso/podcast/pages/index.js\",\n    _this = undefined;\n\n\n\n // function Page({stars}){\n//     return <div>Next starts: {stars}</div>\n// }\n// Page.getInitialProps = async (ctx) =>{\n//     const res = await fetch('https://api.audioboom.com/channels/recommended')\n//     const res = \n// }\n\nvar App = function App(props) {\n  var listPodcasts = props.channels;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-792446731\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-792446731\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"jsx-792446731\",\n        children: \"Podcast\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n        className: \"jsx-792446731\",\n        children: \"Tus podcasts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-792446731\",\n        children: listPodcasts.map(function (item) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-792446731\" + \" \" + \"container_podcast\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-792446731\" + \" \" + \"orverlapImg\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n                src: item.urls.logo_image.original,\n                alt: \"img podcast\",\n                className: \"jsx-792446731\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 27,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n                className: \"jsx-792446731\",\n                children: item.recommendation.position\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-792446731\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n                className: \"jsx-792446731\",\n                children: item.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 29\n            }, _this)]\n          }, item.id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 32\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"310401273\",\n      children: \"h1.jsx-792446731{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:#8AC73A;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}h2.jsx-792446731{color:#818181;padding-left:10px;}h3.jsx-792446731{color:#E9E9E9;}.container_podcast.jsx-792446731{display:grid;grid-gap:15px;padding-bottom:15px;padding-left:20px;grid-template-columns:repeat(2,1fr);border-radious:55px;}.orverlapImg.jsx-792446731{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);}.overlapImg.jsx-792446731 img.jsx-792446731{grid-area:1/1/4/4;grid-column:3/4;}.orverlapImg.jsx-792446731 h4.jsx-792446731{grid-area:1/1/4/4;grid-row:2/4;}.container_podcast.jsx-792446731 img.jsx-792446731{width:100%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KdWFuT3RhdmFsby9EZXNrdG9wL3BsYXR6aUN1cnNvcy9uZXh0anNDdXJzby9yZXRvQ3Vyc28vcG9kY2FzdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2EsQUFHa0MsQUFPQyxBQUtBLEFBSUQsQUFTQSxBQU1LLEFBTUEsQUFNUCxXQUNmLEVBM0JrQixBQVN1QixDQWxCbkIsQUFLdEIsSUFvQm9CLEFBS0gsU0FwQk8sSUFxQnhCLENBOUJBLEVBeUJBLGFBZnNCLEVBUWdCLGdCQVBHLFNBbkJ2QixRQTJCbEIsTUExQjJCLGFBbUJILG9CQUN4QixrRUFuQnVCLDZGQUN2QiIsImZpbGUiOiIvVXNlcnMvSnVhbk90YXZhbG8vRGVza3RvcC9wbGF0emlDdXJzb3MvbmV4dGpzQ3Vyc28vcmV0b0N1cnNvL3BvZGNhc3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkR2V0SW5pdGlhbFByb3BzIH0gZnJvbSAnbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG4vLyBmdW5jdGlvbiBQYWdlKHtzdGFyc30pe1xuLy8gICAgIHJldHVybiA8ZGl2Pk5leHQgc3RhcnRzOiB7c3RhcnN9PC9kaXY+XG4vLyB9XG5cbi8vIFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT57XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvcmVjb21tZW5kZWQnKVxuLy8gICAgIGNvbnN0IHJlcyA9IFxuLy8gfVxuXG5cblxuY29uc3QgQXBwID0gKHByb3BzKT0+e1xuICAgIGNvbnN0IGxpc3RQb2RjYXN0cyA9IHByb3BzLmNoYW5uZWxzXG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5Qb2RjYXN0PC9oMT5cbiAgICAgICAgICAgIDxoMj5UdXMgcG9kY2FzdHM8L2gyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RQb2RjYXN0cy5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJfcG9kY2FzdFwiIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcnZlcmxhcEltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9IGFsdD1cImltZyBwb2RjYXN0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2l0ZW0ucmVjb21tZW5kYXRpb24ucG9zaXRpb259PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhBQzczQTtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgxODE4MTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0U5RTlFOTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyX3BvZGNhc3R7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaW91czogNTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLm9ydmVybGFwSW1ne1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5vdmVybGFwSW1nIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiAxLzEvNC80O1xuXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzLzQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm9ydmVybGFwSW1nIGg0e1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IDEvMS80LzQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtcm93OiAyLzQ7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyX3BvZGNhc3QgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMzQ3NUM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxufVxuXG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT57XG4gICAgY29uc3QgZ2V0RGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzL3JlY29tbWVuZGVkJylcbiAgICBjb25zdCB7Ym9keTogY2hhbm5lbHN9ID0gYXdhaXQgZ2V0RGF0YS5qc29uKCkgXG4gICAgcmV0dXJuIHtjaGFubmVsc31cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ== */\\n/*@ sourceURL=/Users/JuanOtavalo/Desktop/platziCursos/nextjsCurso/retoCurso/podcast/pages/index.js */\"\n    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"4102354107\",\n      children: \"body{background:#23475C;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KdWFuT3RhdmFsby9EZXNrdG9wL3BsYXR6aUN1cnNvcy9uZXh0anNDdXJzby9yZXRvQ3Vyc28vcG9kY2FzdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RmlCLEFBRzRDLG1CQUN2QiIsImZpbGUiOiIvVXNlcnMvSnVhbk90YXZhbG8vRGVza3RvcC9wbGF0emlDdXJzb3MvbmV4dGpzQ3Vyc28vcmV0b0N1cnNvL3BvZGNhc3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkR2V0SW5pdGlhbFByb3BzIH0gZnJvbSAnbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG4vLyBmdW5jdGlvbiBQYWdlKHtzdGFyc30pe1xuLy8gICAgIHJldHVybiA8ZGl2Pk5leHQgc3RhcnRzOiB7c3RhcnN9PC9kaXY+XG4vLyB9XG5cbi8vIFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT57XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvcmVjb21tZW5kZWQnKVxuLy8gICAgIGNvbnN0IHJlcyA9IFxuLy8gfVxuXG5cblxuY29uc3QgQXBwID0gKHByb3BzKT0+e1xuICAgIGNvbnN0IGxpc3RQb2RjYXN0cyA9IHByb3BzLmNoYW5uZWxzXG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5Qb2RjYXN0PC9oMT5cbiAgICAgICAgICAgIDxoMj5UdXMgcG9kY2FzdHM8L2gyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RQb2RjYXN0cy5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJfcG9kY2FzdFwiIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcnZlcmxhcEltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9IGFsdD1cImltZyBwb2RjYXN0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2l0ZW0ucmVjb21tZW5kYXRpb24ucG9zaXRpb259PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhBQzczQTtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgxODE4MTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0U5RTlFOTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyX3BvZGNhc3R7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaW91czogNTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLm9ydmVybGFwSW1ne1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5vdmVybGFwSW1nIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiAxLzEvNC80O1xuXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzLzQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm9ydmVybGFwSW1nIGg0e1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IDEvMS80LzQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtcm93OiAyLzQ7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyX3BvZGNhc3QgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMzQ3NUM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxufVxuXG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT57XG4gICAgY29uc3QgZ2V0RGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzL3JlY29tbWVuZGVkJylcbiAgICBjb25zdCB7Ym9keTogY2hhbm5lbHN9ID0gYXdhaXQgZ2V0RGF0YS5qc29uKCkgXG4gICAgcmV0dXJuIHtjaGFubmVsc31cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ== */\\n/*@ sourceURL=/Users/JuanOtavalo/Desktop/platziCursos/nextjsCurso/retoCurso/podcast/pages/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 12\n  }, _this);\n};\n\n_c = App;\nApp.getInitialProps = /*#__PURE__*/Object(_Users_JuanOtavalo_Desktop_platziCursos_nextjsCurso_retoCurso_podcast_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_JuanOtavalo_Desktop_platziCursos_nextjsCurso_retoCurso_podcast_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var getData, _yield$getData$json, channels;\n\n  return _Users_JuanOtavalo_Desktop_platziCursos_nextjsCurso_retoCurso_podcast_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return fetch('https://api.audioboom.com/channels/recommended');\n\n        case 2:\n          getData = _context.sent;\n          _context.next = 5;\n          return getData.json();\n\n        case 5:\n          _yield$getData$json = _context.sent;\n          channels = _yield$getData$json.body;\n          return _context.abrupt(\"return\", {\n            channels: channels\n          });\n\n        case 8:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsImxpc3RQb2RjYXN0cyIsImNoYW5uZWxzIiwibWFwIiwiaXRlbSIsInVybHMiLCJsb2dvX2ltYWdlIiwib3JpZ2luYWwiLCJyZWNvbW1lbmRhdGlvbiIsInBvc2l0aW9uIiwidGl0bGUiLCJpZCIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwiZ2V0RGF0YSIsImpzb24iLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFTO0FBQ2pCLE1BQU1DLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxRQUEzQjtBQUVBLHNCQUFPO0FBQUE7QUFBQSw0QkFDSDtBQUFBO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBQTtBQUFBLGtCQUVRRCxZQUFZLENBQUNFLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFRO0FBQ3JCLDhCQUFPO0FBQUEsK0NBQWUsbUJBQWY7QUFBQSxvQ0FDSDtBQUFBLGlEQUFlLGFBQWY7QUFBQSxzQ0FDSTtBQUFLLG1CQUFHLEVBQUVBLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxVQUFWLENBQXFCQyxRQUEvQjtBQUF5QyxtQkFBRyxFQUFDLGFBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBQTtBQUFBLDBCQUFLSCxJQUFJLENBQUNJLGNBQUwsQ0FBb0JDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURHLGVBTUg7QUFBQTtBQUFBLHFDQUNJO0FBQUE7QUFBQSwwQkFBS0wsSUFBSSxDQUFDTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5HO0FBQUEsYUFBd0NOLElBQUksQ0FBQ08sRUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQVdILFNBWkQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFtRkgsQ0F0RkQ7O0tBQU1aLEc7QUF3Rk5BLEdBQUcsQ0FBQ2EsZUFBSixxV0FBc0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0lDLEtBQUssQ0FBQyxnREFBRCxDQURUOztBQUFBO0FBQ1pDLGlCQURZO0FBQUE7QUFBQSxpQkFFYUEsT0FBTyxDQUFDQyxJQUFSLEVBRmI7O0FBQUE7QUFBQTtBQUVMYixrQkFGSyx1QkFFWGMsSUFGVztBQUFBLDJDQUdYO0FBQUNkLG9CQUFRLEVBQVJBO0FBQUQsV0FIVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF0QjtBQU1lSCxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZEdldEluaXRpYWxQcm9wcyB9IGZyb20gJ25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuLy8gZnVuY3Rpb24gUGFnZSh7c3RhcnN9KXtcbi8vICAgICByZXR1cm4gPGRpdj5OZXh0IHN0YXJ0czoge3N0YXJzfTwvZGl2PlxuLy8gfVxuXG4vLyBQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+e1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzL3JlY29tbWVuZGVkJylcbi8vICAgICBjb25zdCByZXMgPSBcbi8vIH1cblxuXG5cbmNvbnN0IEFwcCA9IChwcm9wcyk9PntcbiAgICBjb25zdCBsaXN0UG9kY2FzdHMgPSBwcm9wcy5jaGFubmVsc1xuXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+UG9kY2FzdDwvaDE+XG4gICAgICAgICAgICA8aDI+VHVzIHBvZGNhc3RzPC9oMj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsaXN0UG9kY2FzdHMubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyX3BvZGNhc3RcIiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3J2ZXJsYXBJbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0udXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9XCJpbWcgcG9kY2FzdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntpdGVtLnJlY29tbWVuZGF0aW9uLnBvc2l0aW9ufTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4QUM3M0E7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MTgxODE7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNFOUU5RTk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lcl9wb2RjYXN0e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGlvdXM6IDU1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5vcnZlcmxhcEltZ3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAub3ZlcmxhcEltZyBpbWd7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogMS8xLzQvNDtcblxuICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMy80O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5vcnZlcmxhcEltZyBoNHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiAxLzEvNC80O1xuICAgICAgICAgICAgICAgICAgICBncmlkLXJvdzogMi80O1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lcl9wb2RjYXN0IGltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIGJvZHl7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjM0NzVDO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbn1cblxuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+e1xuICAgIGNvbnN0IGdldERhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy9yZWNvbW1lbmRlZCcpXG4gICAgY29uc3Qge2JvZHk6IGNoYW5uZWxzfSA9IGF3YWl0IGdldERhdGEuanNvbigpIFxuICAgIHJldHVybiB7Y2hhbm5lbHN9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})