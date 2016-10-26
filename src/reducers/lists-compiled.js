'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = lists;

var _newid = require('../utils/newid');

var _newid2 = _interopRequireDefault(_newid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lists() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_LIST':
            var newList = {};
            var id = (0, _newid2.default)();

            newList[id] = { tasksIds: [] };

            return Object.assign({}, state, newList);
        case 'DELETE_LIST':
            var newState = Object.assign({}, state);
            delete newState[action.id];

            //TODO remove tasks

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

    __REACT_HOT_LOADER__.register(lists, 'lists', '/Users/a.goropeka/ToDoList/src/reducers/lists.js');
}();

;

//# sourceMappingURL=lists-compiled.js.map