'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TodoList = require('../containers/TodoList');

var _TodoList2 = _interopRequireDefault(_TodoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListContainer = function ListContainer(_ref) {
    var todoLists = _ref.todoLists;

    if (todoLists.length === 0) {
        return _react2.default.createElement(
            'div',
            { className: 'todoListContainer' },
            'You haven\'t tasks'
        );
    }

    return _react2.default.createElement(
        'div',
        { className: 'todoListContainer' },
        todoLists.map(function (list) {
            return _react2.default.createElement(_TodoList2.default, {
                tasks: list.tasks,
                key: list.id
            });
        })
    );
};

ListContainer.propTypes = {
    todoLists: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        id: _react.PropTypes.string.isRequired,
        tasks: _react.PropTypes.arrayOf(_react.PropTypes.object)
    })).isRequired
};

var _default = ListContainer;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ListContainer, 'ListContainer', '/Users/a.goropeka/ToDoList/src/components/ListsContainer.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/a.goropeka/ToDoList/src/components/ListsContainer.js');
}();

;

//# sourceMappingURL=ListsContainer-compiled.js.map
