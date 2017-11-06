import React from 'react'
import {List, ListItem, Divider, makeSelectable} from 'material-ui'
import './style.css'
import IconHome from '../../../assets/images/icons/icon-pagina-inicial.png'
import IconRecompra from '../../../assets/images/icons/icon-recompra.png'
import IconRemuneracao from '../../../assets/images/icons/icon-remuneracao.png'
import IconCorrespondente from '../../../assets/images/icons/icon-correspondente.png'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import PropTypes from 'prop-types';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends React.Component {
    static propTypes = {
      children: React.PropTypes.node.isRequired,
      defaultValue: React.PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

export default class MenuList extends React.Component {

    
    menuClick(e){
        // e.target.style = _.concat(e.target.style, 'border-left: 5px solid red')
        // console.log(e.target)
    }
    render() {
        const style = {
            level0: {
                'fontFamily': "roboto-bold, sans-serif",
                'textTransform': 'uppercase',
                'fontSize': '14px',
                'color': '#9C9C9C',
                'textDecoration': 'none',
                'borderLeft': 'none'
            },
            level1: {
                'fontFamily': "roboto-regular, sans-serif",
                'fontSize': '14px',
                'color': '#9C9C9C'
            }
        }
        return (
            <div className='menu'>
                <List>
                 <ListItem leftIcon={<div><img src={IconHome} className='icon-menu' /></div>} 
                 style={style.level0}>
                    <Link to='/home'>Página inicial</Link>
                </ListItem>
                <Divider />
                 <ListItem primaryTogglesNestedList={true}
                 onClick={this.menuClick.bind(this)} 
                 leftIcon={<div><img src={IconRemuneracao} className='icon-menu' /></div>} 
                 style={style.level0} 
                 nestedItems={[
                     <ListItem style={style.level1}
                     primaryTogglesNestedList={true}
                     nestedItems={[
                         <div>
                            <ListItem  style={style.level1}>
                            <Link to='/regras'> Regras de negócios</Link>
                            </ListItem>
                            <ListItem  style={style.level1}>
                                    <Link to='/param'>Parâmetros de remuneração</Link>
                            </ListItem>
                             </div>]}>Cadastros
                        </ListItem>
                 ]}>Remuneração
                 </ListItem>
                  <Divider />
                  <ListItem leftIcon={<div><img src={IconRemuneracao} className='icon-menu' /></div>} 
                 style={style.level0}>
                    <Link  to='/home'>Kgiro</Link>
                </ListItem>
                <Divider />
                <ListItem leftIcon={<div><img src={IconCorrespondente} className='icon-menu' /></div>} 
                 style={style.level0}>
                    <Link  to='/home'>Correspondente bancário</Link>
                </ListItem>
                <Divider />
                <ListItem leftIcon={<div><img src={IconRecompra} className='icon-menu' /></div>} 
                 style={style.level0}>
                    <Link to='/home'>Recompra</Link>
                </ListItem>
                <Divider />
                </ List>
                
            </div>
        )
    }
}