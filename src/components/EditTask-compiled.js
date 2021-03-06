'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _constants = require('../constants/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditTask = function (_Component) {
    _inherits(EditTask, _Component);

    function EditTask() {
        _classCallCheck(this, EditTask);

        return _possibleConstructorReturn(this, (EditTask.__proto__ || Object.getPrototypeOf(EditTask)).apply(this, arguments));
    }

    _createClass(EditTask, [{
        key: 'render',
        value: function render() {
            var params = this.props;
            var text = '';
            var checked = false;
            var task = params.tasks[params.listState.taskId];
            var callback = void 0;
            var lang = this.context.lang;

            switch (params.listState.type) {
                case _constants.LIST_STATE.TASK_CREATE:
                    callback = params.onTaskCreated;
                    break;
                case _constants.LIST_STATE.TASK_EDIT:
                    callback = function callback(text) {
                        params.onTaskEdited(params.listState.taskId, text);
                    };
                    text = task.text;
                    checked = task.isImportant;
                    break;
            }

            return _react2.default.createElement(
                'div',
                { className: 'popup' },
                _react2.default.createElement(
                    'div',
                    { className: 'popWrapper' },
                    _react2.default.createElement('textarea', { id: 'popup_txt', defaultValue: text }),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('input', { type: 'checkbox', defaultChecked: checked }),
                        _react2.default.createElement(
                            'label',
                            null,
                            lang['LBL_IS_IMPORTANT']
                        )
                    ),
                    _react2.default.createElement(_Button2.default, { label: params.listState.type === _constants.LIST_STATE.TASK_CREATE ? lang['LBL_ADD'] : lang['LBL_EDIT'],
                        onClick: function onClick(e) {
                            var text = e.target.parentNode.getElementsByTagName('textarea')[0].value.trim();
                            var checked = e.target.parentNode.getElementsByTagName('input')[0].checked;

                            if (text !== '') {
                                callback({
                                    text: text,
                                    isImportant: checked
                                });
                            }
                        }
                    }),
                    _react2.default.createElement(_Button2.default, { label: lang['LBL_CANCEL'], onClick: params.onCancel })
                )
            );
        }
    }]);

    return EditTask;
}(_react.Component);

EditTask.propTypes = {
    listState: _react.PropTypes.object,
    onTaskCreated: _react.PropTypes.func,
    onTaskEdited: _react.PropTypes.func,
    onCancel: _react.PropTypes.func,
    tasks: _react.PropTypes.object
};

EditTask.contextTypes = {
    lang: _react.PropTypes.object.isRequired
};

var _default = EditTask;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(EditTask, 'EditTask', '/Users/a.goropeka/ToDoList/src/components/EditTask.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/a.goropeka/ToDoList/src/components/EditTask.js');
}();

;

//# sourceMappingURL=EditTask-compiled.js.map