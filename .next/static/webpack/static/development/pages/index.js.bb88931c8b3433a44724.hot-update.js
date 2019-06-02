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
    source: "\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\nAnd here's the content.\n     "
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
  }, "h1.jsx-394687240,a.jsx-394687240{font-family:'Arial';}ul.jsx-394687240{padding:0;}li.jsx-394687240{list-style:none;margin:5px 0;}a.jsx-394687240{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-394687240:hover{opacity :0.6;}.markdown.jsx-394687240{font-family:'Arial';}.markdown.jsx-394687240 a.jsx-394687240{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown.jsx-394687240 a.jsx-394687240:hover{opacity:0.6;}.markdown.jsx-394687240 h3.jsx-394687240{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJhL1JlYWN0SnMvbmV4dGpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEb0IsQUFJaUMsQUFJVixBQUlNLEFBS0ssQUFNMUIsQUFHcUIsQUFJQyxBQUtULEFBSUgsU0FDQyxDQS9CVixFQTJCRixDQWJFLEdBVmlCLEdBNEJRLENBcEN6QixBQXNCQSxTQWJBLGVBNEJGLE1BeEJpQixBQWFKLFdBWlgsQUFhRiIsImZpbGUiOiIvVXNlcnMvc2FyYS9SZWFjdEpzL25leHRqcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0XCI7XG5pbXBvcnQgUG9zdExpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdExpbmtcIjtcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5cblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+KFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxwPkhlbGxvIE5leHRKczwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93blwiPlxuICAgICAgICA8TWFya2Rvd25cbiAgICAgICAgc291cmNlPXtgXG5UaGlzIGlzIG91ciBibG9nIHBvc3QuXG5ZZXMuIFdlIGNhbiBoYXZlIGEgW2xpbmtdKC9saW5rKS5cbkFuZCB3ZSBjYW4gaGF2ZSBhIHRpdGxlIGFzIHdlbGwuXG5cbiMjIyBUaGlzIGlzIGEgdGl0bGVcblxuQW5kIGhlcmUncyB0aGUgY29udGVudC5cbiAgICAgYH1cbiAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgIDxhIHRpdGxlPVwiQWJvdXQgcGFnZVwiPmxpbmsgdG8gYWJvdXQgcGFnZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxici8+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxQb3N0TGluayBpZD1cImhlbGxvLW5leHRqc1wiIHRpdGxlPVwiSGVsbG8gTmV4dEpzXCIvPlxuICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwibGVhcm4tbmV4dGpzXCIgdGl0bGU9XCJMZWFybiBOZXh0SnNcIiAvPlxuICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiZGVwbG95LWFwcHMtd2l0aC1uZXh0anNcIiB0aXRsZT1cIkRlcGxveSBhcHBzIHdpdGggTmV4dEpzXCIvPlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxici8+XG5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLnNob3dzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtpdGVtLm5hbWV9JmlkPSR7aXRlbS5pZH1gfSBhcz17YC9wLyR7aXRlbS5pZH0vdGl0bGUvJHtpdGVtLm5hbWV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0ubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxLFxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgdWx7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlcntcbiAgICAgICAgICAgIG9wYWNpdHkgOiAwLjZcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXJrZG93biB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICB9XG5cbiAgICAgIC5tYXJrZG93biBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIH1cblxuICAgICAgLm1hcmtkb3duIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG5cbiAgICAgIC5tYXJrZG93biBoMyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8L0xheW91dD5cbilcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCAgcmVzLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGBzaG93IGRhdGEgbGVuZ2h0ICR7ZGF0YS5sZW5ndGh9YCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaG93cyA6IGRhdGEubWFwKCBkYXRhID0+IGRhdGEuc2hvdylcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=/Users/sara/ReactJs/nextjs/pages/index.js */"));
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
//# sourceMappingURL=index.js.bb88931c8b3433a44724.hot-update.js.map