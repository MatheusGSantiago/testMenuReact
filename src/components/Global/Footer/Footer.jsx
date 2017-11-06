import React from 'react'
import LogoFooter from '../../../assets/images/logo-santander-endosso.png'
import { Cols } from '../../../utils/component'
import './style.css'


export default () => (
<footer>
    <div className="container">
        <div className="row">
            <Cols cols='12 12 12 12'>
                <img src={LogoFooter} alt="Uma empresa Santander"/>
            </Cols>
        </div>
    </div>
</footer>
)