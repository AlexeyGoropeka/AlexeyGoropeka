import React, {Component, PropTypes } from 'react'
import Task from '../components/Task'
import * as actionCreators from '../actions'
import { connect } from 'react-redux'
import Button from '../components/Button'
import EditTask from '../components/EditTask'
import { LIST_STATE } from '../constants/constants'


class TodoList extends Component {

    render() {
        let params = this.props;
        let list = params.list;
        let lang = this.context.lang;

        let deleteListBtn = (
            <li className="topListButton">
                <Button label={lang['LBL_DELETE_LIST']} onClick={() => { params.onDeleteList(params.id) }} />
            </li>
        );

        let addTaskBtn = (
            <li className="bottomListButton">
                <Button label={lang['LBL_ADD_NEW_TASK']} onClick={() => params.onCreateTask(params.id)} />
            </li>
        );

        if (list.state.type !== LIST_STATE.DEFAULT) {
            return (
                <div className="todoList">
                    <EditTask
                        listState={list.state}
                        onTaskCreated={(text) => { params.onTaskCreated(params.id, text) }}
                        onTaskEdited={(taskId, text) => params.onTaskEdited(params.id, taskId, text)}
                        onCancel={() => params.onCancel(params.id)}
                        tasks={params.tasks}
                    />
                </div>
            )
        } else if (list.tasksIds.length === 0) {
            return (
                <div className="todoList">
                    <ul>
                        {deleteListBtn}
                        <span className="noLists">{lang['LBL_NO_TASKS']}</span>
                        {addTaskBtn}
                    </ul>
                </div>
            )
        }

        let tasks = [];
        let reactTasks = [];

        list.tasksIds.forEach(id => {
            let task = params.tasks[id];
            task.id = id;
            tasks.push(task);
        });

        tasks.sort((a, b) => {
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

        tasks.forEach(task => {
            reactTasks.push(
                <Task
                    text={task.text}
                    onDeleteTask={() => {params.onDeleteTask(task.id)}}
                    onEditTask={(taskId) => params.onEditTask(params.id, taskId)}
                    id={task.id}
                    className={task.isImportant ? 'isImportant' : ''}
                    key={task.id}
                />
            );
        });

        return (
            <div className="todoList">
                <ul>
                    {deleteListBtn}
                    {reactTasks}
                    {addTaskBtn}
                </ul>
            </div>
        )
    }
}

TodoList.propTypes = {
    tasks: PropTypes.object,
    list: PropTypes.object,
    id: PropTypes.string.isRequired,
    onCreateTask: PropTypes.func,
    onTaskCreated: PropTypes.func,
    onEditTask: PropTypes.func,
    onTaskEdited: PropTypes.func,
    onCancel: PropTypes.func
};

TodoList.contextTypes = {
    lang: PropTypes.object.isRequired
};

let mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.tasks,
        list: ownProps.list,
        id: ownProps.id
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onDeleteList: (id) => {
            dispatch(actionCreators.deleteList(id))
        },
        onDeleteTask: (listId, taskId) => {
            dispatch(actionCreators.deleteTask(listId, taskId))
        },
        onCreateTask: (listId) => {
            dispatch(actionCreators.setListState(listId, LIST_STATE.TASK_CREATE));
        },
        onTaskCreated: (listId, taskObj) => {
            dispatch(actionCreators.setListState(listId, LIST_STATE.DEFAULT));
            dispatch(actionCreators.addTask(listId, taskObj));
        },
        onEditTask: (listId, taskId) => {
            dispatch(actionCreators.setListState(listId, LIST_STATE.TASK_EDIT, taskId));
        },
        onTaskEdited: (listId, taskId, taskObj) => {
            dispatch(actionCreators.setListState(listId, LIST_STATE.DEFAULT));
            dispatch(actionCreators.editTask(taskId, taskObj));
        },
        onCancel: (listId) => {
            dispatch(actionCreators.setListState(listId, LIST_STATE.DEFAULT));
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
