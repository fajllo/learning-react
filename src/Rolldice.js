import Die from "./Die";
import React, { Component } from "react";

class Rolldice extends Component {
  state = {
    die1: "2️⃣",
    die2: "4️⃣",
    rolling: false,
  };
  rollDice = e => {
    const rand1 = Math.floor(Math.random() * 6);
    const rand2 = Math.floor(Math.random() * 6);
    this.setState({
      die1: this.props.numbers[rand1],
      die2: this.props.numbers[rand2],
      rolling: true,
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };
  render() {
    return (
      <div className="Rolldice flex  flex-col">
        <div className="flex ">
          <Die number={this.state.die1} />
          <Die number={this.state.die2} />
        </div>
        <button
          onClick={this.rollDice}
          className="border-2 border-black rounded-lg text-white bg-slate-700 p-2 text-2xl hover:bg-slate-900 "
          disabled={this.state.rolling}
        >
          {this.state.rolling ? "Rolling..." : "Role Dice"}
        </button>
      </div>
    );
  }
}

Rolldice.defaultProps = {
  numbers: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣"],
};

export default Rolldice;
