import React from "react";
import "./dice.css";

class Dice extends React.Component {
  state = {
    dice1: 1,
    dice2: 1,
  };

  componentDidMount() {
    this.generateRandomDice();
  }

  callbackToGame = () => {
    this.props.callback([this.state.dice1, this.state.dice2]);
  };
  randomNumber() {
    let min = Math.ceil(1);
    let max = Math.floor(6);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generateRandomDice() {
    let randDice1 = this.randomNumber();
    this.setState(() => {
      return { dice1: randDice1 };
    });

    let randDice2 = this.randomNumber();
    this.setState(() => {
      return { dice2: randDice2 };
    });
    console.log("dice component" + [randDice1, randDice2]);
  }

  onClickHandler = () => {
    // e.preventDefault();

    setTimeout(() => {
      this.generateRandomDice();
      this.callbackToGame();
    }, 500);
  };

  render() {
    return (
      <div>
        <div className="dice-section">
          <img
            alt="dice1"
            className="dice"
            src={require("./imges/dice-" + this.state.dice1 + ".png")}
          />
          <img
            alt="dice2"
            className="dice"
            src={require("./imges/dice-" + this.state.dice2 + ".png")}
          />
        </div>
        <div className="dice-btn">
          <button
            onClick={() => {
              this.onClickHandler();
            }}
          >
            Go Dice
          </button>
        </div>
      </div>
    );
  }
}

export default Dice;
