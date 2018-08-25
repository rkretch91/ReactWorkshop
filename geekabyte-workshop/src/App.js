import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabbar from './movie-island/tabbar.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedType: "now_showing"}
    //By default, now showing is selected
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ryan's Awesome Movie Site</h1>
        </header>
        <p className="App-intro">Click below for some magic</p>
        <Tabbar/>
      </div>
    );
  }
}



export default App;
