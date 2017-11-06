import React from 'react'
import MenuItem from './MenuItem'
import MenuTree from './MenuTree'

export default class Menu extends React.Component{
    render () {
        const renderMenu = this.props.items.map((i,k) => {
            return  <MenuItem path={i.path} name={i.name}>                    
            </MenuItem>
        })
        return (
            <ul>
                {renderMenu}               
            </ul>
        )
    }


}