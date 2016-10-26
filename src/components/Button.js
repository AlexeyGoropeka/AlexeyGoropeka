import React, { Component, PropTypes } from 'react'

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
               {this.props.label}
            </button>
        )
    }
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button
