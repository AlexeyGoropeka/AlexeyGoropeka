'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Task = require('../components/Task');

var _Task2 = _interopRequireDefault(_Task);

var _actions = require('../actions');

var actionCreators = _interopRequireWildcard(_actions);

var _reactRedux = require('react-redux');

var _Button = require('../components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _EditTask = require('../components/EditTask');

var _EditTask2 = _interopRequireDefault(_EditTask);

var _constants = require('../constants/constants');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoList = function (_Component) {
    _inherits(TodoList, _Component);

    function TodoList() {
        _classCallCheck(this, TodoList);

        return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
    }

    _createClass(TodoList, [{
        key: 'render',
        value: function render() {
            var params = this.props;
            var list = params.list;
            var lang = this.context.lang;

            var deleteListBtn = _react2.default.createElement(
                'li',
                { className: 'topListButton' },
                _react2.default.createElement(_Button2.default, { label: lang['LBL_DELETE_LIST'], onClick: function onClick() {
                        params.onDeleteList(params.id);
                    } })
            );

            var addTaskBtn = _react2.default.createElement(
                'li',
                { className: 'bottomListButton' },
                _react2.default.createElement(_Button2.default, { label: lang['LBL_ADD_NEW_TASK'], onClick: function onClick() {
                        return params.onCreateTask(params.id);
                    } })
            );

            if (list.state.type !== _constants.LIST_STATE.DEFAULT) {
                return _react2.default.createElement(
                    'div',
                    { className: 'todoList' },
                    _react2.default.createElement(_EditTask2.default, {
                        listState: list.state,
                        onTaskCreated: function onTaskCreated(text) {
                            params.onTaskCreated(params.id, text);
                        },
                        onTaskEdited: function onTaskEdited(taskId, text) {
                            return params.onTaskEdited(params.id, taskId, text);
                        },
                        onCancel: function onCancel() {
                            return params.onCancel(params.id);
                        },
                        tasks: params.tasks
                    })
                );
            } else if (list.tasksIds.length === 0) {
                return _react2.default.createElement(
                    'div',
                    { className: 'todoList' },
                    _react2.default.createElement(
                        'ul',
                        null,
                        deleteListBtn,
                        _react2.default.createElement(
                            'span',
                            { className: 'noLists' },
                            lang['LBL_NO_TASKS']
                        ),
                        addTaskBtn
                    )
                );
            }

            var tasks = [];
            var reactTasks = [];

            list.tasksIds.forEach(function (id) {
                var task = params.tasks[id];
                task.id = id;
                tasks.push(task);
            });

            tasks.sort(function (a, b) {
                if (a.isImportant === b.isImportant) {
                    return 0;
                }

                if (a.isImportant && !b.isImportant) {
                    return -1;
                }

                if (!a.isImportant && b.isImportant) {
                    return 1;
                }
            });

            tasks.forEach(function (task) {
                reactTasks.push(_react2.default.createElement(_Task2.default, {
                    text: task.text,
                    onDeleteTask: function onDeleteTask() {
                        params.onDeleteTask(task.id);
                    },
                    onEditTask: function onEditTask(taskId) {
                        return params.onEditTask(params.id, taskId);
                    },
                    id: task.id,
                    className: task.isImportant ? 'isImportant' : '',
                    key: task.id
                }));
            });

            return _react2.default.createElement(
                'div',
                { className: 'todoList' },
                _react2.default.createElement(
                    'ul',
                    null,
                    deleteListBtn,
                    reactTasks,
                    addTaskBtn
                )
            );
        }
    }]);

    return TodoList;
}(_react.Component);

TodoList.propTypes = {
    tasks: _react.PropTypes.object,
    list: _react.PropTypes.object,
    id: _react.PropTypes.string.isRequired,
    onCreateTask: _react.PropTypes.func,
    onTaskCreated: _react.PropTypes.func,
    onEditTask: _react.PropTypes.func,
    onTaskEdited: _react.PropTypes.func,
    onCancel: _react.PropTypes.func
};

TodoList.contextTypes = {
    lang: _react.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        tasks: state.tasks,
        list: ownProps.list,
        id: ownProps.id
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        onDeleteList: function onDeleteList(id) {
            dispatch(actionCreators.deleteList(id));
        },
        onDeleteTask: function onDeleteTask(listId, taskId) {
            dispatch(actionCreators.deleteTask(listId, taskId));
        },
        onCreateTask: function onCreateTask(listId) {
            dispatch(actionCreators.setListState(listId, _constants.LIST_STATE.TASK_CREATE));
        },
        onTaskCreated: function onTaskCreated(listId, taskObj) {
            dispatch(actionCreators.setListState(listId, _constants.LIST_STATE.DEFAULT));
            dispatch(actionCreators.addTask(listId, taskObj));
        },
        onEditTask: function onEditTask(listId, taskId) {
            dispatch(actionCreators.setListState(listId, _constants.LIST_STATE.TASK_EDIT, taskId));
        },
        onTaskEdited: function onTaskEdited(listId, taskId, taskObj) {
            dispatch(actionCreators.setListState(listId, _constants.LIST_STATE.DEFAULT));
            dispatch(actionCreators.editTask(taskId, taskObj));
        },
        onCancel: function onCancel(listId) {
            dispatch(actionCreators.setListState(listId, _constants.LIST_STATE.DEFAULT));
        }
    };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TodoList);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(TodoList, 'TodoList', '/Users/a.goropeka/ToDoList/src/containers/TodoList.js');

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/a.goropeka/ToDoList/src/containers/TodoList.js');

    __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/a.goropeka/ToDoList/src/containers/TodoList.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/a.goropeka/ToDoList/src/containers/TodoList.js');
}();

;

//# sourceMappingURL=TodoList-compiled.js.map