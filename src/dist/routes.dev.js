"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _Home = _interopRequireDefault(require("./components/Home"));

var _Menu = _interopRequireDefault(require("./components/Menu"));

var _Admin = _interopRequireDefault(require("./components/Admin"));

var _About = _interopRequireDefault(require("./components/about/About"));

var _Login = _interopRequireDefault(require("./components/Login"));

var _Register = _interopRequireDefault(require("./components/Register"));

var _Contact = _interopRequireDefault(require("./components/about/Contact"));

var _Delivery = _interopRequireDefault(require("./components/about/Delivery"));

var _History = _interopRequireDefault(require("./components/about/History"));

var _Guide = _interopRequireDefault(require("./components/about/Guide"));

var _Phone = _interopRequireDefault(require("./components/about/contact/Phone"));

var _PersonName = _interopRequireDefault(require("./components/about/contact/PersonName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 二级路由
// 三级路由
var routes = [{
  path: '/',
  name: "homeLink",
  components: {
    "default": _Home["default"],
    'Guide': _Guide["default"],
    'delivery': _Delivery["default"],
    'history': _History["default"]
  }
}, {
  path: '/menu',
  name: 'menuLink',
  component: _Menu["default"]
}, {
  path: '/admin',
  name: 'adminLink',
  component: _Admin["default"]
}, {
  path: '/about',
  name: 'aboutLink',
  component: _About["default"],
  redirect: '/about/contact',
  children: [{
    path: '/about/contact',
    name: "contactLink",
    redirect: '/personname',
    component: _Contact["default"],
    children: [{
      path: '/phone',
      name: "phoneNumber",
      component: _Phone["default"]
    }, {
      path: '/personname',
      name: "personName",
      component: _PersonName["default"]
    }]
  }, {
    path: '/history',
    name: "historyLink",
    component: _History["default"]
  }, {
    path: '/delivery',
    name: "deliveryLink",
    component: _Delivery["default"]
  }, {
    path: '/Guide',
    name: "GuideLink",
    component: _Guide["default"]
  }]
}, {
  path: '/login',
  name: 'loginLink',
  component: _Login["default"]
}, {
  path: '/register',
  name: 'registerLink',
  component: _Register["default"]
}, {
  path: '*',
  redirect: '/'
}];
exports.routes = routes;