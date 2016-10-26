'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _TodoList = require('../containers/TodoList');

var _TodoList2 = _interopRequireDefault(_TodoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToDoListContainer = function ToDoListContainer(_ref) {
    var lists = _ref.lists;


    if (lists.length === 0) {
        return _react2.default.createElement(
            'div',
            { className: 'todoListContainer' },
            'You haven\'t tasks'
        );
    }
    console.log(lists);
    return _react2.default.createElement(
        'div',
        { className: 'todoListContainer' },
        lists.map(function (list) {
            return _react2.default.createElement(_TodoList2.default, { tasks: list.tasks, key: list.id });
        })
    );
};
//import ListsContainer from '../components/ListContainer'


ToDoListContainer.propTypes = {
    lists: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        id: _react.PropTypes.string.isRequired,
        tasks: _react.PropTypes.arrayOf(_react.PropTypes.object)
    }).isRequired).isRequired
};

var _default = ToDoListContainer;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ToDoListContainer, 'ToDoListContainer', '/Users/a.goropeka/ToDoList/src/components/ToDoListContainer.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/a.goropeka/ToDoList/src/components/ToDoListContainer.js');
}();

;

//# sourceMappingURL=ToDoListContainer-compiled.js.map
