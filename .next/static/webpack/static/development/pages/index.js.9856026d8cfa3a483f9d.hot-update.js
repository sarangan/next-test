webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_PostLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PostLink */ "./components/PostLink.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_8__);










var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-394687240"
  }, "Hello NextJs"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-394687240" + " " + "markdown"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_8___default.a, {
    source: "\n                This is our blog post.\n                Yes. We can have a [link](/link).\n                And we can have a title as well.\n\n                ### This is a title\n\n                And here's the content.\n     "
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    title: "About page",
    className: "jsx-394687240"
  }, "link to about page")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    className: "jsx-394687240"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-394687240"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_PostLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "hello-nextjs",
    title: "Hello NextJs"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_PostLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "learn-nextjs",
    title: "Learn NextJs"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_PostLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "deploy-apps-with-nextjs",
    title: "Deploy apps with NextJs"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    className: "jsx-394687240"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-394687240"
  }, props.shows.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: item.id,
      className: "jsx-394687240"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/post?title=".concat(item.name, "&id=").concat(item.id),
      as: "/p/".concat(item.id, "/title/").concat(item.name)
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-394687240"
    }, item.name)));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "394687240"
  }, "h1.jsx-394687240,a.jsx-394687240{font-family:'Arial';}ul.jsx-394687240{padding:0;}li.jsx-394687240{list-style:none;margin:5px 0;}a.jsx-394687240{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-394687240:hover{opacity :0.6;}.markdown.jsx-394687240{font-family:'Arial';}.markdown.jsx-394687240 a.jsx-394687240{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown.jsx-394687240 a.jsx-394687240:hover{opacity:0.6;}.markdown.jsx-394687240 h3.jsx-394687240{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJhL1JlYWN0SnMvbmV4dGpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEb0IsQUFJaUMsQUFJVixBQUlNLEFBS0ssQUFNMUIsQUFHcUIsQUFJQyxBQUtULEFBSUgsU0FDQyxDQS9CVixFQTJCRixDQWJFLEdBVmlCLEdBNEJRLENBcEN6QixBQXNCQSxTQWJBLGVBNEJGLE1BeEJpQixBQWFKLFdBWlgsQUFhRiIsImZpbGUiOiIvVXNlcnMvc2FyYS9SZWFjdEpzL25leHRqcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0XCI7XG5pbXBvcnQgUG9zdExpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdExpbmtcIjtcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5cblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+KFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxwPkhlbGxvIE5leHRKczwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93blwiPlxuICAgICAgICA8TWFya2Rvd25cbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICAgICAgVGhpcyBpcyBvdXIgYmxvZyBwb3N0LlxuICAgICAgICAgICAgICAgIFllcy4gV2UgY2FuIGhhdmUgYSBbbGlua10oL2xpbmspLlxuICAgICAgICAgICAgICAgIEFuZCB3ZSBjYW4gaGF2ZSBhIHRpdGxlIGFzIHdlbGwuXG5cbiAgICAgICAgICAgICAgICAjIyMgVGhpcyBpcyBhIHRpdGxlXG5cbiAgICAgICAgICAgICAgICBBbmQgaGVyZSdzIHRoZSBjb250ZW50LlxuICAgICBgfVxuICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgPGEgdGl0bGU9XCJBYm91dCBwYWdlXCI+bGluayB0byBhYm91dCBwYWdlPC9hPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiaGVsbG8tbmV4dGpzXCIgdGl0bGU9XCJIZWxsbyBOZXh0SnNcIi8+XG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJsZWFybi1uZXh0anNcIiB0aXRsZT1cIkxlYXJuIE5leHRKc1wiIC8+XG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJkZXBsb3ktYXBwcy13aXRoLW5leHRqc1wiIHRpdGxlPVwiRGVwbG95IGFwcHMgd2l0aCBOZXh0SnNcIi8+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPGJyLz5cblxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvcHMuc2hvd3MubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdD90aXRsZT0ke2l0ZW0ubmFtZX0maWQ9JHtpdGVtLmlkfWB9IGFzPXtgL3AvJHtpdGVtLmlkfS90aXRsZS8ke2l0ZW0ubmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57aXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEsXG4gICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgIH1cblxuICAgICAgICB1bHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVye1xuICAgICAgICAgICAgb3BhY2l0eSA6IDAuNlxuICAgICAgICB9XG5cbiAgICAgICAgLm1hcmtkb3duIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgIH1cblxuICAgICAgLm1hcmtkb3duIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuXG4gICAgICAubWFya2Rvd24gYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cblxuICAgICAgLm1hcmtkb3duIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cblxuICAgIDwvTGF5b3V0PlxuKVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0ICByZXMuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coYHNob3cgZGF0YSBsZW5naHQgJHtkYXRhLmxlbmd0aH1gKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNob3dzIDogZGF0YS5tYXAoIGRhdGEgPT4gZGF0YS5zaG93KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=/Users/sara/ReactJs/nextjs/pages/index.js */"));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("show data lenght ".concat(data.length));
          return _context.abrupt("return", {
            shows: data.map(function (data) {
              return data.show;
            })
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.9856026d8cfa3a483f9d.hot-update.js.map