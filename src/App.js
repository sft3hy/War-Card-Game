import React from 'react';
import './App.css';
import Cards from './Cards.js';
import Battle from './Battle.js';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayerCard: this.props.currentPlayerCard,
      currentComputerCard: this.props.currentComputerCard,
      computersCards: [],
      playersCards: []
    };
  }




  render() {
    return (
      <div>
        <Cards Cards={this.Cards} />
        <Battle Battle={this.Battle} />
      </div>
    )
  }
}
export default App;
