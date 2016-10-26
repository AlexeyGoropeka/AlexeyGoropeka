'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _Task = require('../components/Task');

var _Task2 = _interopRequireDefault(_Task);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import TodoList from '../components/TodoList'

var TodoList = function TodoList(_ref) {
    var tasks = _ref.tasks;
    return _react2.default.createElement(
        'ol',
        { className: 'todoList' },
        tasks.map(function (task) {
            return _react2.default.createElement(_Task2.default, {
                text: task.text,
                key: task.id
            });
        })
    );
};

TodoList.propTypes = {
    tasks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        id: _react.PropTypes.string.isRequired,
        text: _react.PropTypes.string.isRequired
    }).isRequired).isRequired
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        tasks: state.todoLists.find(function (list) {
            return list.id === ownProps.id;
        }).tasks
    };
};

var ConnectedToDoList = (0, _reactRedux.connect)(mapStateToProps)(TodoList);

var _default = ConnectedToDoList;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(TodoList, 'TodoList', '/Users/a.goropeka/ToDoList/src/containers/ConnectedToDoList.js');

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/a.goropeka/ToDoList/src/containers/ConnectedToDoList.js');

    __REACT_HOT_LOADER__.register(ConnectedToDoList, 'ConnectedToDoList', '/Users/a.goropeka/ToDoList/src/containers/ConnectedToDoList.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/a.goropeka/ToDoList/src/containers/ConnectedToDoList.js');
}();

;

//# sourceMappingURL=ConnectedToDoList-compiled.js.map