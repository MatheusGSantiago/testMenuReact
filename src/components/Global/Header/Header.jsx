import React, {Component} from 'react'
import LogoOleRed from '../../../assets/images/logo-ole-red.png'
import './style.css'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className='navbar navbar-default'>
                <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <img src={LogoOleRed} />
                </a>
                <span className='subtitle'>{this.props.title}</span>
                </div>
                <div>
                    
                </div>
            </nav>
        )
    }
}

export default Header