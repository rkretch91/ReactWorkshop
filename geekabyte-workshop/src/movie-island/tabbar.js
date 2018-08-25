import React, { Component } from 'react';

class Tabbar extends Component {
  constructor(props) {
    super(props)
    // this.onTabChange = this.onTabChange.bind(this)
    this.state = { selectedType: this.props.selectedType
    }
    //By default, now showing is selected
  }

  onTabChange = (event) => {
    const selectedType = event.target.getAttribute("data-type")
    this.setState({
      selectedType
    })

    if (this.props.onTabSelected) {
      this.props.onTabSelected(selectedType)
    }
  }

  render() {
    const { selectedType } = this.state,
        isNowShowingSelected = selectedType === "now_showing",
        isTopRatedSelected = selectedType === "top_rated"

    return (
      <div>
        <span data-type="now_showing" onClick={this.onTabChange}
        className= {`tab ${isNowShowingSelected ? 'selected' : ''}`}>Now Showing</span>
        <span data-type="top_rated" onClick={this.onTabChange}
        className={`tab ${isTopRatedSelected? 'selected' : ''}`}>Top Rated</span>
      </div>
    );
  }
}

export default Tabbar
