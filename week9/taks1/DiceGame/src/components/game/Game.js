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
        { playerId: 1, currScore: 0, holdScore: 0 },
        { playerId: 2, currScore: 0, holdScore: 0 },
      ],
      currPlayer: 1,
      currDice: 0,
      update: false,
    };
  }

  initPlayers() {
    let arr = [
      { playerId: 1, currScore: 0, holdScore: 0 },
      { playerId: 2, currScore: 0, holdScore: 0 },
    ];
    this.setState(() => {
      return { players: arr };
    });
  }

  componentDidMount() {
    // this.initPlayers();
  }

  diceNumbersCallback = (data) => {
    console.log("---------");

    setTimeout(() => {
      this.setCurrDice(data);
    }, 200);
  };

  updateToggle(bool) {
    this.setState((prev) => {
      return { update: bool };
    });
  }

  setCurrDice = (data) => {
    this.setState(() => {
      return { currDice: data[0] + data[1] };
    });

    this.setCurrPlayerScore();
  };

  setCurrPlayerScore = () => {
    setTimeout(() => {
      let arr = [...this.state.players];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].playerId === this.state.currPlayer) {
          arr[i].currScore += this.state.currDice;
        }
      }

      console.log(arr);

      this.setState(() => {
        return { players: arr };
      });
    }, 200);

    // this.setState({ players: update });
  };

  holdCLlickHandler() {
    console.log("---");

    let arr = [...this.state.players];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].playerId === this.state.currPlayer) {
        arr[i].holdScore += arr[i].currScore;
        arr[i].currScore = 0;
      }
    }

    console.log(arr);

    this.setState(() => {
      return { players: arr };
    });
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
          />
          <Player
            playerId="2"
            currScore={this.state.players[1].currScore}
            holdScore={this.state.players[1].holdScore}
          />
        </div>

        <div>
          <button
            onClick={() => {
              this.holdCLlickHandler();
            }}
          >
            Hold
          </button>
          <p>{this.state.currDice}</p>
        </div>
      </div>
    );
  }
}

export default Game;
