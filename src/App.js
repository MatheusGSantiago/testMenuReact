import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Sidebar from './components/Global/Sidebar/Sidebar'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/Global/Footer/Footer'
import Header from './components/Global/Header/Header'
import TextInput from './components/Global/TextInput/TextInput'
import IconHome from './assets/images/icons/icon-pagina-inicial.png'
import IconRecompra from './assets/images/icons/icon-recompra.png'
import IconRemuneracao from './assets/images/icons/icon-remuneracao.png'
import IconCorrespondente from './assets/images/icons/icon-correspondente.png'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''}

    this.handleInput = this.handleInput.bind(this)

  }

  handleInput (e) {
    this.setState({...this.state, value: e.target.value})
  }

  render() {
    const routes = [
         {'id': 1, 'name': 'Página Inicial', 'route': '/home', 'url': '#/home', 'parentId': null,
          'icon': IconHome, 'children': []},
         {'id': 2, 'name': 'Remuneração', 'route': '', 'url': '', 'parentId': null, 'icon': IconRemuneracao,
            'children': [
              {'id': 4, 'name': 'Cadastros', 'route': '/cadastros', 'url': '#/cadastro', 
              'children': [
                {'id': 6, 'name': 'Regras de negócio', 'route': 'regras', 'url': '#/regras', 'children': []}
              ]},
              {'id': 5, 'name': 'Pagamentos', 'route': '/pagamentos', 'url': '#/pgtos', 'children': []},
              {'id': 6, 'name': 'Contratos', 'route': '/contratos', 'url': '#/pgtos', 'children': []}
            ]},
          {'id': 7, 'name': 'Kgiro', 'route': '/kgiro', 'url': '#/kgiro', 'parentId': null,
            'icon': IconRemuneracao, 'children': []},
            {'id': 8, 'name': 'Correspondente Bancário', 'route': '/correspondente', 'url': '#/correspondente', 'parentId': null,
            'icon': IconCorrespondente, 'children': []},
            {'id': 9, 'name': 'Recompra', 'route': '/recompra', 'url': '#/recompra', 'parentId': null,
            'icon': IconRecompra, 'children': []}
        ]
    return (

        <MuiThemeProvider>
          <HashRouter>
          <div className="App">
          
            <Header title='Sistema de Remuneração'/>
            <Sidebar items={routes} />
          <Switch>
              <Route path='/#'  />
        </Switch>
            <Footer />
          </div>
   </HashRouter>
        </MuiThemeProvider>
     
      
    );
  }
}

export default App;
