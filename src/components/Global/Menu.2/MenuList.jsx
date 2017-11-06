import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import IconHome from '../../../assets/images/icons/icon-pagina-inicial.png'
import './style.css'

export default class MenuList extends Component {
    render(){
        return(
            <ul className='nav'>
                <li className='first-level'>
                    <Link to='/home'>
                    <img src={IconHome} className="icon-menu" />     
                        Página inicial
                    </Link>
                </li>
            </ul>
        )
    }
}