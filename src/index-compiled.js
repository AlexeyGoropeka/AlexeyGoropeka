'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _newid = require('./utils/newid');

var _newid2 = _interopRequireDefault(_newid);

require('./css/main.css');

var _constants = require('./constants/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listId = (0, _newid2.default)();
var tasksIds = [(0, _newid2.default)(), (0, _newid2.default)(), (0, _newid2.default)()];
var tasks = {};
var lists = {};

tasks[tasksIds[0]] = {
    listId: listId,
    text: 'Изучить Redux + React',
    isImportant: false
};
tasks[tasksIds[1]] = {
    listId: listId,
    text: 'Написать ToDoList app',
    isImportant: false
};
tasks[tasksIds[2]] = {
    listId: listId,
    text: 'Выложить на github',
    isImportant: false
};

lists[listId] = {
    tasksIds: tasksIds,
    state: {
        type: _constants.LIST_STATE.DEFAULT,
        taskId: null
    }
};

var initialState = {
    lists: lists,
    tasks: tasks,
    lang: _constants.LANG.EN
};

var store = (0, _redux.createStore)(_reducers2.default, initialState);

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_App2.default, null)
), document.getElementById('root'));
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(listId, 'listId', '/Users/a.goropeka/ToDoList/src/index.js');

    __REACT_HOT_LOADER__.register(tasksIds, 'tasksIds', '/Users/a.goropeka/ToDoList/src/index.js');

    __REACT_HOT_LOADER__.register(tasks, 'tasks', '/Users/a.goropeka/ToDoList/src/index.js');

    __REACT_HOT_LOADER__.register(lists, 'lists', '/Users/a.goropeka/ToDoList/src/index.js');

    __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/a.goropeka/ToDoList/src/index.js');

    __REACT_HOT_LOADER__.register(store, 'store', '/Users/a.goropeka/ToDoList/src/index.js');
}();

;

//# sourceMappingURL=index-compiled.js.map