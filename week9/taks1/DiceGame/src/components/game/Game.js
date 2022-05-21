import React from "react";
import Dice from "../dice/Dice";
import Player from "../player/Player";
import "./game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.setCurrDice.bind(this);
    this.state = {
      players: [
        { playerId: 1, currScore: 0, holdScore: 0, active: true },
        { playerId: 2, currScore: 0, holdScore: 0, active: false },
      ],
      currPlayer: 1,
      currDice: 0,
      gameEndCondition: 100,
      canPlay: false,
    };
  }

  diceNumbersCallback = (data) => {
    this.setCurrDice(data);
  };

  setCurrDice = (data) => {
    this.setState(() => {
      return { currDice: data[0] + data[1] };
    });

    this.setCurrScore();
  };

  setCurrScore = () => {
    let arr = [...this.state.players];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].playerId === this.state.currPlayer) {
        arr[i].currScore += this.state.currDice;
        this.winnerCheck([arr[i], this.state.currDice]);
      }
    }

    this.setState(() => {
      return { players: arr };
    });
  };

  holdCLlickHandler() {
    if (this.state.currDice === 0) {
      return;
    }

    this.setHoldScore();
    this.setCurrPlayer();

    this.setState(() => {
      return { currDice: 0 };
    });
  }

  setHoldScore() {
    let arr = [...this.state.players];
    for (let i = 0; i < arr.length; i++) {
      arr[i].active = true;
      if (arr[i].playerId === this.state.currPlayer) {
        arr[i].holdScore = arr[i].currScore;
        arr[i].active = false;
      }
    }
    this.setState(() => {
      return { players: arr };
    });
  }

  setCurrPlayer() {
    this.setState((prev) => {
      if (prev.currPlayer === 1) {
        return { currPlayer: 2 };
      }
      if (prev.currPlayer === 2) {
        return { currPlayer: 1 };
      }
    });
  }

  winnerCheck(data) {
    if (data[0].currScore + data[1] >= this.state.gameEndCondition) {
      alert("loose" + data[0].playerId);
      //   localStorage.setItem("player1", 1);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
    return true;
  }

  componentDidUpdate() {
    console.log("currPlayer " + this.state.currPlayer);
    console.log("currdice" + this.state.currDice);
  }

  render() {
    return (
      <div>
        <Dice callback={this.diceNumbersCallback} />
        <div className="palyers-board">
          <Player
            playerId="1"
            currScore={this.state.players[0].currScore}
            holdScore={this.state.players[0].holdScore}
            active={this.state.players[0].active}
          />
          <Player
            playerId="2"
            currScore={this.state.players[1].currScore}
            holdScore={this.state.players[1].holdScore}
            active={this.state.players[1].active}
          />
        </div>

        <div className=" section" id="hold-btn">
          <button
            onClick={() => {
              this.holdCLlickHandler();
            }}
          >
            Hold
          </button>
        </div>

        <div className=" section" id="condition-input">
          <input
            type="text"
            placeholder="Enter Number and Click On It "
            onClick={(e) => {
              if (e.target.value > 0) {
                this.setState(() => {
                  return { gameEndCondition: e.target.value };
                });
                e.target.disabled = "true";
              }
            }}
          />
        </div>
        <div className=" section" id="newGame-btn">
          <button
            // eslint-disable-next-line no-restricted-globals
            onClick={() => location.reload()}
          >
            New Game
          </button>
        </div>
      </div>
    );
  }
}

export default Game;
