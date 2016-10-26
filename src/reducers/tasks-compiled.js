'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = tasks;
function tasks() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case 'DELETE_TASK':
            var newState = Object.assign({}, state);
            delete newState[action.id];

            //TODO Remove task from list

            return newState;
        default:
            return state;
    }
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(tasks, 'tasks', '/Users/a.goropeka/ToDoList/src/reducers/tasks.js');
}();

;

//# sourceMappingURL=tasks-compiled.js.map