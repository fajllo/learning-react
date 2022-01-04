import React, { Component } from "react";

class Die extends Component {
  render() {
    return <div className="Die text-8xl m-4">{this.props.number}</div>;
  }
}

export default Die;
