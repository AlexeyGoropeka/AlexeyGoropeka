'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ListContainer = require('../components/ListContainer');

var _ListContainer2 = _interopRequireDefault(_ListContainer);

var _Language = require('./Language');

var _Language2 = _interopRequireDefault(_Language);

var _actions = require('../actions');

var actionCreators = _interopRequireWildcard(_actions);

var _reactRedux = require('react-redux');

var _lang = require('../lang/lang');

var _lang2 = _interopRequireDefault(_lang);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'header' },
                    _react2.default.createElement(_Button2.default, { label: this.getChildContext().lang['LBL_ADD_LIST'], onClick: this.props.onAddList }),
                    _react2.default.createElement(_Language2.default, null)
                ),
                _react2.default.createElement(_ListContainer2.default, { lists: this.props.lists })
            );
        }
    }, {
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                lang: (0, _lang2.default)(this.props.lang)
            };
        }
    }]);

    return App;
}(_react.Component);

App.propTypes = {
    lists: _react.PropTypes.object.isRequired,
    onAddList: _react.PropTypes.func
};

App.childContextTypes = {
    lang: _react.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        lists: state.lists,
        lang: state.lang
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        onAddList: function onAddList() {
            dispatch(actionCreators.addList());
        }
    };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(App, 'App', '/Users/a.goropeka/ToDoList/src/containers/App.js');

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/a.goropeka/ToDoList/src/containers/App.js');

    __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/a.goropeka/ToDoList/src/containers/App.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/a.goropeka/ToDoList/src/containers/App.js');
}();

;

//# sourceMappingURL=App-compiled.js.map