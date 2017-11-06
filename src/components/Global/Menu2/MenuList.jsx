import React, { Component } from 'react'
import './style.css'
import SearchBar from 'material-ui-search-bar'
import _ from 'lodash'
import MenuItem from './SubMenuList'
import ListItem from 'material-ui/List/ListItem'
import { NavLink } from 'react-router-dom'
import {Collapse} from 'react-collapse';






export default class MenuList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        }

        this.searchChange = this.searchChange.bind(this)
    }

   
    searchChange(e) {
           
    }

    render() {
        const {items} = this.props


        const styles = {
            span: {
                'float': 'left'
            }, 
            container: {
                'height': '50px',
                'padding': '16px 72px 16px 55px'

            },
            listItem: {
               'font-size': '14px',
                'border-bottom': '0.5px solid #F0F0F0'
            },
            nestedList: {
                'border': 'none'
            }
        }
       
        let nodes = items.map(function(item) {
      return (
        
            <MenuItem node={item} key={item.id} children={item.children}/>
      );
   }); 
    
    
        // const renderList = items.map((i,k) => {
        //     if(i.children.length > 0) {
        //        return <ListItem innerDivStyle={styles.container} 
        //                         primaryTogglesNestedList={true}
        //                         nestedItems={[< MenuList items={i.children} 
        //                         key={i.id}
        //                         autoGenerateNestedIndicator={true} />]}
        //                         style={styles.listItem}
        //                         nestedListStyle={styles.nestedList}
        //                       >
        //                     {i.name}
        //               </ListItem>
        //     }
        //    else{ 
        //        return <ListItem innerDivStyle={styles.container} 
        //                         name={i.name} 
        //                         style={styles.listItem} > 
        //                 <NavLink to={i.route}>{i.name}</NavLink>
        //             </ListItem>
        //    }
        // }
         
        // )

        // const renderList  = items.map((i,k) => {
            
        //     if(i.children.length > 0) {
        //         return <li>
        //             <NavLink  to={i.route} path={i.url}>
        //                     <ul>
        //                         <MenuList items={i.children} />
        //                     </ul>
        //          </NavLink >
        //          </li>
        //     }
        //     else {
        //         return <li><NavLink to={i.route} path={i.url}>{i.name}</NavLink></li>
        //     }
            
        // })

        return (           
            <ul className='first-level'>
                {nodes}
            </ul>

             //<div>{renderList}</div>
           
        )
       
    }
}
