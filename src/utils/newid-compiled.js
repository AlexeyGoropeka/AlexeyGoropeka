'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var lastId = 0;

var _default = function _default() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'uid';

    lastId++;
    return '' + prefix + lastId;
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(lastId, 'lastId', '/Users/a.goropeka/ToDoList/src/utils/newid.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/a.goropeka/ToDoList/src/utils/newid.js');
}();

;

//# sourceMappingURL=newid-compiled.js.map