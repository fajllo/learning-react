import React, { Component } from "react";
import Ball from "./Ball";

class Lottery extends Component {
  state = {
    nums: Array.from({ length: this.props.numBals }),
  };
  generate() {
    this.setState(st => ({
      nums: st.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1),
    }));
  }
  handleClick = () => {
    this.generate();
  };
  render() {
    return (
      <div className="Lottery flex flex-col items-center border-black border m-2 rounded-3xl">
        <h1 className="text-6xl text-green-400 m-2">{this.props.title}</h1>
        <div className="flex">
          {this.state.nums.map(num => (
            <Ball num={num} />
          ))}
        </div>
        <button
          onClick={this.handleClick}
          className="text-6xl text-yellow-400 m-2 border-black border-2 p-4 bg-black rounded-xl mt-2 hover:bg-gray-600"
        >
          Generate{" "}
        </button>
      </div>
    );
  }
}
Lottery.defaultProps = {
  title: "Lotery",
  numBals: 6,
  maxNum: 40,
};

export default Lottery;
