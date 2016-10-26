import newId from '../utils/newid'
import { ACTION, LIST_STATE } from '../constants/constants'

export default function rootReducer(state = {}, action) {
    let lists = Object.assign({}, state.lists);
    let tasks = Object.assign({}, state.tasks);

    switch (action.type) {
        case ACTION.ADD_LIST:
            let id = newId();

            lists[id] = {
                tasksIds: [],
                state: {
                    type: LIST_STATE.DEFAULT,
                    taskId: null
                }
            };

            return Object.assign({}, state, {lists: lists});

        case ACTION.DELETE_LIST:
            lists[action.id].tasksIds.forEach((id) => {
                delete tasks[id];
            });
            delete lists[action.id];

            return Object.assign({}, state, {lists: lists, tasks: tasks});

        case ACTION.ADD_TASK:
            let taskId = newId();

            tasks[taskId] = {
                listId: action.listId,
                text: action.task.text,
                isImportant: action.task.isImportant
            };
            lists[action.listId].tasksIds.push(taskId);

            return Object.assign({}, state, {lists: lists, tasks: tasks});

        case ACTION.EDIT_TASK:
            tasks[action.id] = {
                listId: tasks[action.id].listId,
                text: action.task.text,
                isImportant: action.task.isImportant
            };

            return Object.assign({}, state, {tasks: tasks});

        case ACTION.DELETE_TASK:
            let listTasks = lists[tasks[action.id].listId].tasksIds;
            let index = listTasks.indexOf(action.id);

            listTasks.splice(index, 1);
            delete tasks[action.id];

            return Object.assign({}, state, {lists: lists, tasks: tasks});

        case ACTION.SET_LIST_STATE:

            lists[action.listId] = {
                tasksIds: lists[action.listId].tasksIds,
                state: {
                    type: action.stateType,
                    taskId: action.taskId
                }
            };

            return Object.assign({}, state, {lists: lists});

        case ACTION.CHANGE_LANG:
            return Object.assign({}, state, {lang: action.lang});

        default:
            return state
    }
}
