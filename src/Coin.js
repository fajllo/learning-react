import React, { Component } from "react";

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <h1 className="text-5xl">{this.props.animal}</h1>
      </div>
    );
  }
}

export default Coin;
