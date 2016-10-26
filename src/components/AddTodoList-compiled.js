'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _newid = require('../utils/newid');

var _newid2 = _interopRequireDefault(_newid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddTodoList = function AddTodoList(_ref) {
    var onAddTodoList = _ref.onAddTodoList;


    return _react2.default.createElement(
        'button',
        { onClick: function onClick() {
                onAddTodoList({
                    id: (0, _newid2.default)(),
                    tasks: []
                });
            } },
        'Add new to-do list'
    );
};

AddTodoList.propTypes = {
    onAddTodoList: _react.PropTypes.func
};

var _default = AddTodoList;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(AddTodoList, 'AddTodoList', '/Users/a.goropeka/ToDoList/src/components/AddTodoList.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/a.goropeka/ToDoList/src/components/AddTodoList.js');
}();

;

//# sourceMappingURL=AddTodoList-compiled.js.map