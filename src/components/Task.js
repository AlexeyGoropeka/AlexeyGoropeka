import React, { Component, PropTypes } from 'react'
import Button from '../components/Button'

class Task extends Component {
    render() {
        let className = `task ${this.props.className}`;
        let lang = this.context.lang;

        return (
            <li className={className}>
                {this.props.text}

                <div className="taskBtns">
                    <Button label={lang['LBL_EDIT']} onClick={() => this.props.onEditTask(this.props.id)}/>
                    <Button label={lang['LBL_DELETE']} onClick={this.props.onDeleteTask}/>
                </div>
            </li>
        )
    }
}

Task.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string,
    onDeleteTask: PropTypes.func,
    onEditTask: PropTypes.func,
    className: PropTypes.string
};

Task.contextTypes = {
    lang: PropTypes.object.isRequired
};

export default Task
