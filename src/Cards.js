import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const Cards = (props) => {
    const { } = props;

    //array of all the cards in a deck
    const Cards = [
        "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD", "AD",
        "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AS",
        "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH", "AH",
        "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AC"
    ];

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    const shuffledCards = shuffle(Cards);
    //tried to do this in a while loop but took too long
    const playersCards = [
        shuffledCards[0], shuffledCards[2], shuffledCards[4], shuffledCards[6],
        shuffledCards[8], shuffledCards[10], shuffledCards[12], shuffledCards[14],
        shuffledCards[16], shuffledCards[18], shuffledCards[20], shuffledCards[22],
        shuffledCards[24], shuffledCards[26], shuffledCards[28], shuffledCards[30],
        shuffledCards[32], shuffledCards[34], shuffledCards[36], shuffledCards[38],
        shuffledCards[40], shuffledCards[42], shuffledCards[44], shuffledCards[46],
        shuffledCards[48], shuffledCards[50]
    ];

    const computersCards = [
        shuffledCards[1], shuffledCards[3], shuffledCards[5], shuffledCards[7],
        shuffledCards[9], shuffledCards[11], shuffledCards[13], shuffledCards[15],
        shuffledCards[17], shuffledCards[19], shuffledCards[21], shuffledCards[23],
        shuffledCards[25], shuffledCards[27], shuffledCards[29], shuffledCards[31],
        shuffledCards[33], shuffledCards[35], shuffledCards[37], shuffledCards[39],
        shuffledCards[41], shuffledCards[43], shuffledCards[45], shuffledCards[47],
        shuffledCards[49], shuffledCards[51]
    ];


    var i = 0;
    const flipCard = () => {
        if (i < 26) {
            var playerCard = playersCards[i];
            i += 1;
        } else {
            return "Out of Cards! Time to shuffle";
        }
        console.log(playerCard);
    }

    return (
        <div>
            <Button onClick={flipCard}>Flip Card </Button>
            <Card>
                <Card.Body>
                    <Card.Title>Your Card</Card.Title>
                    <Card.Text>
                        {playersCards[i]}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Computer's Card</Card.Title>
                    <Card.Text>
                        {computersCards[i]}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards;

