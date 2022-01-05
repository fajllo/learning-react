import React, { Component } from "react";
import Coin from "./Coin";

class Flipper extends Component {
  state = {
    animal: "",
    cats: 0,
    dogs: 0,
  };
  flip() {
    let newDogs = this.state.dogs;
    let newCats = this.state.cats;
    let animal = Math.floor(Math.random() * 2) ? "🐈" : "🦮";
    if (animal === "🐈") {
      newCats = this.state.cats + 1;
    } else {
      newDogs = this.state.dogs + 1;
    }
    this.setState(st => ({
      animal: animal,
      cats: newCats,
      dogs: newDogs,
    }));
  }
  handleClick = () => {
    this.flip();
  };
  render() {
    return (
      <div className="Flipper flex flex-col items-center border-black border m-2 rounded-3xl">
        <h1 className="text-6xl text-green-400 m-2">{this.props.title}</h1>
        <div className="flex">
          <Coin animal={this.state.animal} />
        </div>
        <button
          onClick={this.handleClick}
          className="text-2xl text-yellow-400 m-2 border-black border-2 px-8 py-2xl  rounded-xl mt-2 hover:bg-gray-600"
        >
          Flip the pet!
        </button>
        <p className="text-2xl">
          flips: {this.state.cats + this.state.dogs}, 🐈:{this.state.cats} , 🦮:{" "}
          {this.state.dogs}
        </p>
      </div>
    );
  }
}
Flipper.defaultProps = {
  title: "animal flipper ",
};

export default Flipper;
