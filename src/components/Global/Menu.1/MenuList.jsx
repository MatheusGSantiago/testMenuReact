import React, { Component } from 'react'
import {Menu, Submenu, Subsubmenu} from './MenuItem'
import './style.css'
import Collapsible from 'react-collapse'
import {Collapse} from 'react-collapse'
// import {Collapse} from 'react-bootstrap/lib/Collapse'

export default class MenuList extends Component {
    constructor(props) {
        super(props)
        
        this.state = {}
    }

    chooseMenuComponent(depthLevel, option) {
        switch (depthLevel) {
            case 0:
                return <Menu option={option} />

            case 1:
                return <Submenu option={option} /> 

            case 2:
                return <Subsubmenu option={option} />

            default:
                return <Menu option={option} />
        }
    }

    chooseStyleComponent(depthLevel, hasOptions) {
        switch (depthLevel) {
            case 0:
                return 'first-level' 

            case 1:
                return 'second-level'

            case 2:
                return 'third-level'

            default:
                return 'third-level'
        }
    }

    renderSubMenu(options, depthLevel = 0) {

        const menuOptions = options.map(option => {

            const display = this.chooseMenuComponent(depthLevel, option)

            const hasOptions = (option.children && option.children.length > 0)

            let subMenu

            // only render selected submenu and only if nested options exist
            if (hasOptions) {
                const newDepthLevel = depthLevel + 1
                subMenu = this.renderSubMenu(option.children, newDepthLevel)
            }

            return (
                <li key={option.id} 
                    className={this.chooseStyleComponent(depthLevel, hasOptions)  }>
                        {display}
                        {subMenu}                  
                </li>               
            )
        })

        return (
                <ul className='nav'>
                    {menuOptions}
                </ul>        
        )
    }

    render() {
        return (
            <div>
                {this.renderSubMenu(this.props.options)}
            </div>
        )
    }
}