import React, { Component } from "react";

class Game extends Component {
  state = {
    score: 0,
  };

  render() {
    return (
      <div className="Game text-4xl">
        <h1>Your score is : {this.state.score}</h1>
      </div>
    );
  }
}

export default Game;
