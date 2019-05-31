(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginCheck = loginCheck;

var _axios = __webpack_require__(66);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = 'http://localhost:5000/api';
function loginCheck(email, pwd) {
  var url = baseUrl + '/auth';

  return _axios2.default.post(url, {
    email: email,
    pwd: pwd
  });
}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Auth;
var initAuthStates = {
  loggedIn: false,
  errText: ''
};

function Auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initAuthStates;
  var action = arguments[1];

  switch (action.type) {
    case 'AUTH@START_LOGIN':
      return state;
    case 'AUTH@END_LOGIN':
      return {
        loggedIn: action.valid,
        errText: action.errText
      };
    default:
      return state;
  }
}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      console.log(this.props.loggedIn);
      return _react2.default.createElement(
        'div',
        null,
        this.props.loggedIn ? _react2.default.createElement(
          'h3',
          null,
          'Dashboard'
        ) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' })
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

Dashboard.propTypes = {
  loggedIn: _propTypes2.default.bool
};
exports.default = Dashboard;

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _auth = __webpack_require__(30);

function login(email, password) {
  return function (dispatch, state) {
    dispatch(startLogin());
    (0, _auth.loginCheck)(email, password).then(function (res) {
      dispatch(endLogin(res.data.valid, res.data.errText));
    }).catch(function (err) {
      console.log(err);
    });
  };
}

function startLogin() {
  return {
    type: 'AUTH@START_LOGIN'
  };
}

function endLogin(valid, errText) {
  return {
    type: 'AUTH@END_LOGIN',
    valid: valid,
    errText: errText
  };
}

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(41);

var _reactRouterDom = __webpack_require__(11);

var _auth = __webpack_require__(30);

var _reactRedux = __webpack_require__(24);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _authActions = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      email: '',
      password: '',
      emailValidation: true,
      emailInvalidText: '',
      passwordValidation: true,
      passwordInvalidText: ''
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return this.props.loggedIn ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' }) : _react2.default.createElement(
        'div',
        { className: 'login-form-wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'login-form' },
          _react2.default.createElement(
            'h3',
            null,
            'Login'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactstrap.Form,
            null,
            _react2.default.createElement(
              _reactstrap.FormText,
              { color: 'danger' },
              this.props.responseErrorText
            ),
            _react2.default.createElement(
              _reactstrap.FormGroup,
              { className: '' },
              _react2.default.createElement(
                _reactstrap.Label,
                { 'for': 'Email', className: '' },
                'Email'
              ),
              _react2.default.createElement(_reactstrap.Input, { invalid: !this.state.emailValidation, type: 'email', name: 'email', id: 'Email', placeholder: 'xxxx@xxx.com', onChange: this.handleInputChange }),
              _react2.default.createElement(
                _reactstrap.FormFeedback,
                null,
                this.state.emailInvalidText
              )
            ),
            _react2.default.createElement(
              _reactstrap.FormGroup,
              { className: '' },
              _react2.default.createElement(
                _reactstrap.Label,
                { 'for': 'Password', className: '' },
                'Password'
              ),
              _react2.default.createElement(_reactstrap.Input, { invalid: !this.state.passwordValidation, type: 'password', name: 'password', id: 'Password', placeholder: 'Password', onChange: this.handleInputChange }),
              _react2.default.createElement(
                _reactstrap.FormFeedback,
                null,
                this.state.passwordInvalidText
              )
            ),
            _react2.default.createElement(
              _reactstrap.FormGroup,
              { check: true },
              _react2.default.createElement(
                _reactstrap.Label,
                { check: true },
                _react2.default.createElement(_reactstrap.Input, { type: 'checkbox' }),
                ' ',
                'Remember it'
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactstrap.Button,
            { onClick: this.handleSubmit },
            'Submit'
          )
        )
      );
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      switch (e.target.id) {
        case 'Email':
          this.setState({
            email: e.target.value
          });
          break;
        case 'Password':
          this.setState({
            password: e.target.value
          });
          break;
        default:
          break;
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {

      // Email Validation
      if (this.state.email === '') {
        // email null check
        this.setState({
          emailValidation: false,
          emailInvalidText: 'Email form cannot be empty!'
        });
      } else {

        if (this.state.email.indexOf('@') === -1) {
          // @ check
          this.setState({
            emailValidation: false,
            emailInvalidText: 'Does not exist a "@" in your email!'
          });
        } else if (this.state.email.indexOf('@') === 0 || this.state.email.indexOf('@') === this.state.email.length - 1) {
          // format check
          this.setState({
            emailValidation: false,
            emailInvalidText: 'Incorrect email format! ( example: xxx@xxx.com )'
          });
        } else if (!this.state.emailValidation) {
          // resume valid
          this.setState({
            emailValidation: true
          });
        } else {

          // Password Validation
          if (this.state.password === '') {
            // password null check
            this.setState({
              passwordValidation: false,
              passwordInvalidText: 'Password form cannot be empty!'
            });
          } else {
            // Check the Authentication
            this.props.dispatch((0, _authActions.login)(this.state.email, this.state.password));
          } // Password Validation's else
        } // Email Validation's else
      } // Validation's else
    }
  }]);

  return Login;
}(_react2.default.Component);

Login.propTypes = {
  dispatch: _propTypes2.default.func,
  loggedIn: _propTypes2.default.bool,
  responseErrorText: _propTypes2.default.string
};
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    loggedIn: state.auth.loggedIn,
    responseErrorText: state.auth.errText
  };
})(Login);

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Login = __webpack_require__(71);

var _Login2 = _interopRequireDefault(_Login);

var _Dashboard = __webpack_require__(44);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _reactRouterDom = __webpack_require__(11);

var _reactRedux = __webpack_require__(24);

var _redux = __webpack_require__(15);

var _reduxThunk = __webpack_require__(43);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _authReducers = __webpack_require__(42);

var _authReducers2 = _interopRequireDefault(_authReducers);

var _createBrowserHistory = __webpack_require__(18);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var composeEnhancers = window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
      this.store = (0, _redux.createStore)((0, _redux.combineReducers)({
        auth: _authReducers2.default
      }), composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)));
      // window.addEventListener('resize', this.onWindowResize);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this.store },
        _react2.default.createElement(
          _reactRouterDom.BrowserRouter,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Login2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', render: function render() {
                return _react2.default.createElement(_Dashboard2.default, { loggedIn: _this2.store.getState().auth.loggedIn });
              } })
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, ".login-form-wrapper {\n  margin: 15% 20% 15% 20%;\n  background-color: #E0F7FA;\n}\n\n.login-form {\n  padding: 5% 5%\n}\n", ""]);

// exports


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(73);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(32)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(77);

__webpack_require__(74);

var _App = __webpack_require__(72);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  _reactDom2.default.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_App2.default, null)
  ), document.getElementById('root'));
};

/***/ })

},[[88,0]]]);