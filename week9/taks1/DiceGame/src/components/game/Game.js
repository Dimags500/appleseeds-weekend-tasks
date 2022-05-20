import React from "react";
import Dice from "../dice/Dice";
import Player from "../player/Player";
import "./game.css";

class Game extends React.Component {
  state = {
    players: [],
    currPlayer: 0,
    currDice: 0,
  };

  initPlayers() {
    let arr = [
      { currScore: 0, holdScore: 0 },
      { currScore: 0, holdScore: 0 },
    ];
    this.setState(() => {
      return { players: arr };
    });
  }

  componentDidMount() {
    this.initPlayers();
  }

  diceNumbersCallback(data) {
    console.log("game component " + data);
  }

  render() {
    return (
      <div>
        <Dice callback={this.diceNumbersCallback} />
        <Player />
        <Player />
      </div>
    );
  }
}

export default Game;
