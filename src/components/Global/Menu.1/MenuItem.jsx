import React from 'react'
import Collapsible from 'react-collapse'
import {Link} from 'react-router-dom'
import './style.css'



class Menu extends React.Component {
    render() {
        return (        
                <Link activeClassName='active' to={this.props.option.route}>
                 <img src={this.props.option.icon} className='icon-menu' />
                    {this.props.option.name}
                </Link>           
        )
    }
}


class Submenu extends React.Component {
    render() {
        return (             
            <Link to={this.props.option.route}>
                {this.props.option.name}
            </Link>   
        )
    }
}


class Subsubmenu extends React.Component {
    render() {
        return (
            <Link to={this.props.option.route}>
                {this.props.option.name}
            </Link>
        )
    }
}

export {Menu, Submenu, Subsubmenu}