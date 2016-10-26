'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rootReducer;

var _newid = require('../utils/newid');

var _newid2 = _interopRequireDefault(_newid);

var _constants = require('../constants/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rootReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var lists = Object.assign({}, state.lists);
    var tasks = Object.assign({}, state.tasks);

    switch (action.type) {
        case _constants.ACTION.ADD_LIST:
            var id = (0, _newid2.default)();

            lists[id] = {
                tasksIds: [],
                state: {
                    type: _constants.LIST_STATE.DEFAULT,
                    taskId: null
                }
            };

            return Object.assign({}, state, { lists: lists });

        case _constants.ACTION.DELETE_LIST:
            lists[action.id].tasksIds.forEach(function (id) {
                delete tasks[id];
            });
            delete lists[action.id];

            return Object.assign({}, state, { lists: lists, tasks: tasks });

        case _constants.ACTION.ADD_TASK:
            var taskId = (0, _newid2.default)();

            tasks[taskId] = {
                listId: action.listId,
                text: action.task.text,
                isImportant: action.task.isImportant
            };
            lists[action.listId].tasksIds.push(taskId);

            return Object.assign({}, state, { lists: lists, tasks: tasks });

        case _constants.ACTION.EDIT_TASK:
            tasks[action.id] = {
                listId: tasks[action.id].listId,
                text: action.task.text,
                isImportant: action.task.isImportant
            };

            return Object.assign({}, state, { tasks: tasks });

        case _constants.ACTION.DELETE_TASK:
            var listTasks = lists[tasks[action.id].listId].tasksIds;
            var index = listTasks.indexOf(action.id);

            listTasks.splice(index, 1);
            delete tasks[action.id];

            return Object.assign({}, state, { lists: lists, tasks: tasks });

        case _constants.ACTION.SET_LIST_STATE:

            lists[action.listId] = {
                tasksIds: lists[action.listId].tasksIds,
                state: {
                    type: action.stateType,
                    taskId: action.taskId
                }
            };

            return Object.assign({}, state, { lists: lists });

        case _constants.ACTION.CHANGE_LANG:
            return Object.assign({}, state, { lang: action.lang });

        default:
            return state;
    }
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(rootReducer, 'rootReducer', '/Users/a.goropeka/ToDoList/src/reducers/index.js');
}();

;

//# sourceMappingURL=index-compiled.js.map