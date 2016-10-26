'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changeLang = exports.editTask = exports.addTask = exports.setListState = exports.deleteTask = exports.deleteList = exports.addList = undefined;

var _constants = require('../constants/constants');

var addList = exports.addList = function addList() {
    return {
        type: _constants.ACTION.ADD_LIST
    };
};

var deleteList = exports.deleteList = function deleteList(id) {
    return {
        type: _constants.ACTION.DELETE_LIST,
        id: id
    };
};

var deleteTask = exports.deleteTask = function deleteTask(id) {
    return {
        type: _constants.ACTION.DELETE_TASK,
        id: id
    };
};

var setListState = exports.setListState = function setListState(listId, stateType, taskId) {
    return {
        type: _constants.ACTION.SET_LIST_STATE,
        listId: listId,
        stateType: stateType,
        taskId: taskId
    };
};

var addTask = exports.addTask = function addTask(listId, task) {
    return {
        type: _constants.ACTION.ADD_TASK,
        listId: listId,
        task: task
    };
};

var editTask = exports.editTask = function editTask(id, task) {
    return {
        type: _constants.ACTION.EDIT_TASK,
        id: id,
        task: task
    };
};

var changeLang = exports.changeLang = function changeLang(lang) {
    return {
        type: _constants.ACTION.CHANGE_LANG,
        lang: lang
    };
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(addList, 'addList', '/Users/a.goropeka/ToDoList/src/actions/index.js');

    __REACT_HOT_LOADER__.register(deleteList, 'deleteList', '/Users/a.goropeka/ToDoList/src/actions/index.js');

    __REACT_HOT_LOADER__.register(deleteTask, 'deleteTask', '/Users/a.goropeka/ToDoList/src/actions/index.js');

    __REACT_HOT_LOADER__.register(setListState, 'setListState', '/Users/a.goropeka/ToDoList/src/actions/index.js');

    __REACT_HOT_LOADER__.register(addTask, 'addTask', '/Users/a.goropeka/ToDoList/src/actions/index.js');

    __REACT_HOT_LOADER__.register(editTask, 'editTask', '/Users/a.goropeka/ToDoList/src/actions/index.js');

    __REACT_HOT_LOADER__.register(changeLang, 'changeLang', '/Users/a.goropeka/ToDoList/src/actions/index.js');
}();

;

//# sourceMappingURL=index-compiled.js.map