import React, { Component, PropTypes } from 'react'
import TodoList from '../containers/TodoList'

class ListsContainer extends Component {
    render() {
        let keys = Object.keys(this.props.lists);

        if (keys.length === 0) {
            return (<div className='todoListContainer'><span className="noLists">{this.context.lang['LBL_NO_LISTS']}</span></div>);
        }

        let todoLists = [];

        keys.forEach(id => {
            todoLists.push(<TodoList id={id} list={this.props.lists[id]} key={id} />)
        });

        return (
            <div className='todoListContainer'>
                {todoLists}
            </div>
        )
    }
}

ListsContainer.propTypes = {
    lists: PropTypes.object.isRequired,
};

ListsContainer.contextTypes = {
    lang: PropTypes.object.isRequired
};

export default ListsContainer
