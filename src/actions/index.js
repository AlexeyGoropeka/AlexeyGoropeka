import { ACTION } from '../constants/constants'

export const addList = () => {
    return {
        type: ACTION.ADD_LIST
    }
};

export const deleteList = (id) => {
    return {
        type: ACTION.DELETE_LIST,
        id
    }
};

export const deleteTask = (id) => {
    return {
        type: ACTION.DELETE_TASK,
        id
    }
};

export const setListState = (listId, stateType, taskId) => {
    return {
        type: ACTION.SET_LIST_STATE,
        listId,
        stateType,
        taskId
    }
};

export const addTask = (listId, task) => {
    return {
        type: ACTION.ADD_TASK,
        listId,
        task
    }
};

export const editTask = (id, task) => {
    return {
        type: ACTION.EDIT_TASK,
        id,
        task
    }
};

export const changeLang = (lang) => {
    return {
        type: ACTION.CHANGE_LANG,
        lang
    }
};

