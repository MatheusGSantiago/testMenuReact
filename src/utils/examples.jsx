import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextInput from './components/Global/TextInput/TextInput'
import CheckboxGroup from './components/Global/Checkbox/CheckboxInput'
import  RadioInput  from './components/Global/Radio/RadioInput'
import { Cols } from './utils/component'

class App extends Component {
  render() {
    const checkList = [
      {'Id': 1, 'Description': 'checkbox 1'},
      {'Id': 2, 'Description': 'checkbox 2'}
    ]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MuiThemeProvider>
          <div className='container'>   
            <TextInput label="Input" value="input"/>
            <TextInput label="Input Disabled" disabled={true} value='input disabled'/>
            <Cols cols="12 3 4 6">
            <TextInput label="Input Area" multLine={true} value='input area'/>
            </Cols>
              <TextInput label="Input Hidden" hide value='input hidden'/>

              <br />
              <br />

              <RadioInput items={checkList} id='group1' disabled={true} />

        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
