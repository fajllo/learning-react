import React, { Component } from "react";

class Game extends Component {
  state = {
    score: 0,
  };
  handleClick = e => {
    let score = this.state.score + 1;
    this.setState({ score });
  };
  render() {
    return (
      <div className="Game text-4xl">
        <h1>Your score is : {this.state.score}</h1>
        {this.state.score === 7 ? (
          <h2> you win</h2>
        ) : (
          <button onClick={this.handleClick}>Click me</button>
        )}
      </div>
    );
  }
}

export default Game;
