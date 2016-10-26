import React, { Component, PropTypes } from 'react'
import Button from '../components/Button'
import { LIST_STATE } from '../constants/constants'

class EditTask extends Component {
    render() {
        let params = this.props;
        let text = '';
        let checked = false;
        let task = params.tasks[params.listState.taskId];
        let callback;
        let lang = this.context.lang;

        switch (params.listState.type) {
            case LIST_STATE.TASK_CREATE:
                callback = params.onTaskCreated;
                break;
            case LIST_STATE.TASK_EDIT:
                callback = (text) => {
                    params.onTaskEdited(params.listState.taskId, text);
                };
                text = task.text;
                checked = task.isImportant;
                break;
        }

        return (
            <div className="popup">
                <div className="popWrapper">
                    <textarea id="popup_txt" defaultValue={text} />
                    <div>
                        <input type="checkbox" defaultChecked={checked} />
                        <label>{lang['LBL_IS_IMPORTANT']}</label>
                    </div>

                    <Button label={params.listState.type === LIST_STATE.TASK_CREATE ? lang['LBL_ADD'] : lang['LBL_EDIT']}
                            onClick={(e) => {
                                let text = e.target.parentNode.getElementsByTagName('textarea')[0].value.trim();
                                let checked = e.target.parentNode.getElementsByTagName('input')[0].checked;

                                if (text !== '') {
                                    callback({
                                        text: text,
                                        isImportant: checked
                                    });
                                }
                            }}
                    />
                    <Button label={lang['LBL_CANCEL']} onClick={params.onCancel} />
                </div>

            </div>
        )
    }
}

EditTask.propTypes = {
    listState: PropTypes.object,
    onTaskCreated: PropTypes.func,
    onTaskEdited: PropTypes.func,
    onCancel: PropTypes.func,
    tasks: PropTypes.object
};

EditTask.contextTypes = {
    lang: PropTypes.object.isRequired
};

export default EditTask

