import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import { If } from '../../../utils/component'

class RadioInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, items, value, label, className, onChange, defaultSelected, 
            labelPosition, disabled } = this.props

        const radioButtons = items.map(item => {
            return (
                <RadioButton
                    key={item.Id}
                    value={item.Id}
                    label={item.Description} 
                    disabled={disabled}/>
            )
        })

        return (
                <RadioButtonGroup
                    id={id}
                    name={id}
                    onChange={onChange}
                    className={className}
                    valueSelected={value}
                    defaultSelected={defaultSelected}>
                    {radioButtons}
                </RadioButtonGroup>
        )
    }
}

RadioInput.defaultProps = {
    className: ''
}

RadioInput.propTypes = {
    disabled: PropTypes.bool
}

export default RadioInput