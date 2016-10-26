import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { LANG } from '../constants/constants'
import * as actionCreators from '../actions'

class Language extends Component {
    render() {
        let callback = this.props.changeLang;
        return (
            <div className="selectBox">
                <select
                    defaultValue={this.props.lang}
                    onChange={(e) => callback(e.target.value)}
                >
                    <option value={LANG.RU}>Русский</option>
                    <option value={LANG.EN}>English</option>
                </select>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        lang: state.lang
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeLang: (lang) => {
            dispatch(actionCreators.changeLang(lang))
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Language);
