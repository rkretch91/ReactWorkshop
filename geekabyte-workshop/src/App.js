import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabbar from './movie-island/tabbar.js'
import List from './movie-island/list.js'
import Card from './movie-island/card.js'
import { nowShowingUrl, topRatedUrl } from './api/apiConfig'
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedType: "now_showing"}
    //By default, now showing is selected
  }

  componentDidMount = () => {
    this.fetchData(this.state.selectedType)
  }

  onTabSelected = (selectedType) => {
    this.fetchData(selectedType)
  }

  fetchData = (selectedType) => {
    switch(selectedType) {
      case "now_showing":
        axios.get(nowShowingUrl).then(response => {
          this.setState({
            nowShowing: response.data.results,
            selectedType
          })
        })
        break
      case "top_rated":
        axios.get(topRatedUrl).then(response => {
          this.setState({
            topRated: response.data.results,
            selectedType
          })
        })
        break
    }
  }

  render() {
    const { selectedType, nowShowing, topRated } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ryan's Awesome Movie Site</h1>
        </header>
        <p className="App-intro">Click below for some magic</p>
        <Tabbar selectedType={selectedType} onTabSelected={this.onTabSelected}/>
        {selectedType === "now_showing" && nowShowing && <List data={nowShowing}/>}
        {selectedType === "top_rated" && topRated && <List data={topRated}/>}
      </div>
    );
  }
}


export default App;
