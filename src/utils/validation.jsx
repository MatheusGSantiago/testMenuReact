import React from 'react'
import lodash from 'lodash'

function If (props) {
    console.log(props)
    if(props.hidden)
        return props.children

    return false   
}

function Required(props) {
    if(props.required && (_.isEmpty(props.value) || _.isNull(props.value)))
        return "Campo obrigatório."
}
