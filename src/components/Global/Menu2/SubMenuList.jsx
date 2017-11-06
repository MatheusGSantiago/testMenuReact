import React from 'react'
import Collapsible from 'react-collapsible';
import { Collapse } from 'react-collapse';

import { NavLink, Link } from 'react-router-dom'
import './style.css'
import ListItem from 'material-ui/List/ListItem'
import MenuList from './MenuList'



export default class MenuItem extends React.Component {
  constructor() {
    super();

    // Initial state
    this.state = { open: false };

  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  
  render() {

    let childnodes = null;

    // the Node component calls itself if there are children
    if (this.props.children) {
      childnodes = this.props.children.map(function (childnode) {
        return (
          < MenuItem node={childnode} key={childnode.id} children={childnode.children}>
          </MenuItem>

        );
      });
    }

  
      


    

    // return our list element
    // display children if there are any
    return (

      // <ListItem  primaryTogglesNestedList={true} nestedList={[<MenuList items={this.props.node.children} />]}
      //                           key={this.props.node.id}
      //                         >

      //     <NavLink to={this.props.node.route}  key={this.props.node.id}> {this.props.node.name}
      //     </NavLink>

      //                </ListItem>

        <li key={this.props.node.id}>
          {/* {this.props.node.name}          */}
        <Link to={this.props.node.route}>{this.props.node.name} </Link>

          {childnodes ?
            <ul>
              {childnodes}
            </ul>
            : null}
        </li>
        




    );
  }
}