'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _constants = require('../constants/constants');

var _actions = require('../actions');

var actionCreators = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Language = function (_Component) {
    _inherits(Language, _Component);

    function Language() {
        _classCallCheck(this, Language);

        return _possibleConstructorReturn(this, (Language.__proto__ || Object.getPrototypeOf(Language)).apply(this, arguments));
    }

    _createClass(Language, [{
        key: 'render',
        value: function render() {
            var callback = this.props.changeLang;
            return _react2.default.createElement(
                'div',
                { className: 'selectBox' },
                _react2.default.createElement(
                    'select',
                    {
                        defaultValue: this.props.lang,
                        onChange: function onChange(e) {
                            return callback(e.target.value);
                        }
                    },
                    _react2.default.createElement(
                        'option',
                        { value: _constants.LANG.RU },
                        '\u0420\u0443\u0441\u0441\u043A\u0438\u0439'
                    ),
                    _react2.default.createElement(
                        'option',
                        { value: _constants.LANG.EN },
                        'English'
                    )
                )
            );
        }
    }]);

    return Language;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        lang: state.lang
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        changeLang: function changeLang(lang) {
            dispatch(actionCreators.changeLang(lang));
        }
    };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Language);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Language, 'Language', '/Users/a.goropeka/ToDoList/src/containers/Language.js');

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/a.goropeka/ToDoList/src/containers/Language.js');

    __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/a.goropeka/ToDoList/src/containers/Language.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/a.goropeka/ToDoList/src/containers/Language.js');
}();

;

//# sourceMappingURL=Language-compiled.js.map