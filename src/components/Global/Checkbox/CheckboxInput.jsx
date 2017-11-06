import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'material-ui/Checkbox'
import {If} from '../../../utils/component'

class CheckboxInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            id,
            label,
            checked,
            onCheck,
            disabled,
            labelPosition,
            defaultChecked,
            valueLink,
            className
        } = this.props
        return (
            <div>
            <Checkbox 
                id={id}
                label={label}
                disabled={disabled}
                labelPosition={labelPosition}
                onCheck={onCheck}/>
                </div>
        )
    }
}

CheckboxInput.defaultProps = {
    className: ''
}

CheckboxInput.propTypes = {
    disabled: PropTypes.bool
}

export default CheckboxInput