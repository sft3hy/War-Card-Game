import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPlayerCard: this.props.currentPlayerCard,
            currentComputerCard: this.props.currentComputerCard,
            computersCards: [],
            playersCards: []
        };
    }

    fight(currentComputerCard, currentPlayerCard) {
        if (currentComputerCard > currentPlayerCard) {
            this.state.computersCards.push(currentPlayerCard);
            this.state.playersCards.remove(currentPlayerCard);
        } else if (currentPlayerCard > currentComputerCard) {
            this.state.playersCards.push(currentComputerCard);
            this.state.computersCards.remove(currentComputerCard);
        } else if (currentPlayerCard === currentComputerCard) {

        }
    }

    render() {
        return (
            null
        );
    }
}


export default Battle;