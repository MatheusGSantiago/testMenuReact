import React from 'react'
import CheckboxInput from './CheckboxInput'

export default props => (
    props.items.map(opt => {
        return <CheckboxInput 
                label={opt.Description}
                disabled={opt.disabled}/>
    })
)