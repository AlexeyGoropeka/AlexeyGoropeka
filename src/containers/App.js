import React, { Component, PropTypes } from 'react'
import Button from '../components/Button'
import ListContainer from '../components/ListContainer'
import Language from './Language'
import * as actionCreators from '../actions'
import { connect } from 'react-redux'
import Lang from '../lang/lang'

class App extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <Button label={this.getChildContext().lang['LBL_ADD_LIST']} onClick={this.props.onAddList} />
                    <Language />
                </div>
                <ListContainer lists={this.props.lists} />
            </div>
        )
    }

    getChildContext() {
        return {
            lang: Lang(this.props.lang)
        }
    };

}

App.propTypes = {
    lists: PropTypes.object.isRequired,
    onAddList: PropTypes.func
};

App.childContextTypes = {
    lang: PropTypes.object.isRequired
};

let mapStateToProps = (state) => {
    return {
        lists: state.lists,
        lang: state.lang
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onAddList: () => {
            dispatch(actionCreators.addList())
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
