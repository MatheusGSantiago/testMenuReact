import React from 'react'

export default props => {
    <li className='treeview'>
        <a href><i></i> {props.label}
            <i/>
         </a>
         <ul className='treeview-menu'>
            {props.children}
         </ul>
      </li>
}