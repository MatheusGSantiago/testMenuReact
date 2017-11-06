import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left'
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
import MenuList from '../Menu.1/MenuList'
import _ from 'lodash'
import List from 'material-ui/List'
import TextInput from '../TextInput/TextInput'



export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true, width: 250, searchText: '', items: this.props.items};
        this.handleToggle = this.handleToggle.bind(this)
        this.searchChange = this.searchChange.bind(this)
  }

  handleToggle = () => this.setState({...this.state, open: !this.state.open, 
    width: this.state.open ? 55 : 250});


  searchChange(e){
    let result = this.props.items;
    
    if(!_.isEmpty(e.target.value)) {
     result = _.reduce(this.props.items, function reducer(result, item) {

        if (item.name.toLowerCase().search(new RegExp(e.target.value.toLowerCase(), "i")) !== -1) {
            result.items =  _.concat(result.items, result.parent || item);
        }
        result.items = _.concat(
            result.items, 
           _.reduce(item.children, reducer, {parent: item, items: []}).items
        )
    
        return result;
    }, {items: []}).items
}

    this.setState({...this.state, searchText : e.target.value, items: result})
    
  }

 componentDidMount() {
    window.addEventListener('resize', this.handleToggle)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleToggle)
}

  render() {
      const styles = {
          appBar: {
              'width': '100%',
              'paddingLeft': 0,
          },
          drawer: {
            'transition': 'all 450ms cubic-bezier(0.23, 1, 0.32, 1)',
            'zIndex': 0,
             'top': '92px'            
          },
          hintStyle: {
              'fontSize': '14px',
              'fontFamily': "roboto-bold, sans-serif",
          },     
          menuTextAlign: {
            'textAlign': 'left'
          }   
      }

      

    return (
      <div className="menuTextAlign">
        <Drawer open={true} width={this.state.width} containerStyle={styles.drawer}>
          <AppBar onClick={this.handleToggle}
                 showMenuIconButton={false} 
                 style={styles.appBar}
                 iconElementRight={this.state.open ? 
                 <IconButton><NavigationChevronLeft /></IconButton> : 
                 <IconButton><NavigationChevronRight /></IconButton>}/> 

                 <TextInput type='text' 
                 value={this.state.searchText} 
                 onChange={this.searchChange}
                 hintText='Pesquise uma página'
                 hintStyle={styles.hintStyle}/>

                <MenuList options={this.state.items}  />
        
        </Drawer>
      </div>
    );
}
}
