import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {TextField} from 'material-ui'
import {If, Validate} from '../../../utils/component'

class TextInput extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        const styles = {
            errorStyle: {
                'color': 'red'
            }
        }
        const {
            id,
            className,
            value,
            type,
            defaultValue,
            disabled,
            label,
            minLength,
            maxLength,
            hintText,
            name,
            hide,
            multLine,
            rows,
            rowsMax, 
            onChange,
            hintStyle
        } = this.props
        return (
            <div>
      
                    <TextField id={id}
                        className={className}
                        value={value}
                        defaultValue={defaultValue}
                        disabled={disabled}
                        floatingLabelFixed={true}
                        floatingLabelText={label}
                        hintText={hintText}
                        fullWidth={true}
                        name={name}
                        type={type}
                        onChange={onChange}
                        multiLine={multLine}
                        rows={rows}
                        rowsMax={rowsMax}
                        errorStyle={styles.errorStyle}
                        hintStyle={hintStyle} />
            </div>
        )
    }
}

TextInput.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    hintText: PropTypes.string,
    name: PropTypes.string,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    label: PropTypes.string

}

TextInput.defaultProps = {
    multLine: false,
    type: 'text',
    className: '',
    rows: this.multLine ? 3 : 1
}

export default TextInput