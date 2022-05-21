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
      arr[i].active = true;
      if (arr[i].playerId === this.state.currPlayer) {
        arr[i].holdScore += arr[i].currScore;
        arr[i].active = false;
      }
    }
    this.setState(() => {
      return { players: arr };
    });
    this.setCurrPlayer();
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

  componentDidUpdate() {
    console.log("currPlayer " + this.state.currPlayer);
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

        <div className="hold-btn-section">
          <button
            onClick={() => {
              this.holdCLlickHandler();
            }}
          >
            Hold
          </button>
        </div>
      </div>
    );
  }
}

export default Game;
