import React, { Component } from "react";

class Ball extends Component {
  render() {
    console.log(this.props.num);
    return (
      <div className="Ball text-8xl bg-emerald-400 m-2 p-4 rounded-full">
        {this.props.num}
      </div>
    );
  }
}

export default Ball;
