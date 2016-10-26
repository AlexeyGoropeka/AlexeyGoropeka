import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './containers/App'
import newId from './utils/newid'
import './css/main.css'
import { LIST_STATE, LANG } from './constants/constants'

let listId = newId();
let tasksIds = [newId(), newId(), newId()];
let tasks = {};
let lists = {};

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
        type: LIST_STATE.DEFAULT,
        taskId: null
    }
};

let initialState = {
    lists: lists,
    tasks: tasks,
    lang: LANG.EN
};

let store = createStore(rootReducer, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
