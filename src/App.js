import React from 'react';
import './App.css';
import Cards from './Cards.js';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentCard: ""
    };
  }

  render() {
    return (
      <Cards Cards={this.Cards} />
    )
  }
}
export default App;
