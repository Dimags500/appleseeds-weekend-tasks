import React from "react";
import "./player.css";

class Player extends React.Component {
  // state = { playerNUm : 0 ,currScore: 0 , holdScore : 0}

  render() {
    return (
      <div
        className="player"
        style={this.props.active ? { border: "4px black dotted" } : {}}
      >
        <h2>Player {this.props.playerId}</h2>
        <div> </div>
        <div> {this.props.currScore}</div>
        <div> holdScore </div>
        <div> {this.props.holdScore}</div>
      </div>
    );
  }
}

export default Player;
