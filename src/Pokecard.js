import React, { Component } from "react";

class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    return (
      <div className="Pokecard h-80 w-1/4 border border-black p-2 flex flex-col items-center text-2xl rounded-md bg-slate-100 my-2">
        <h1>{name}</h1>
        <h1>{type}</h1>
        <h1>{exp}</h1>
        <h1>{id}</h1>
      </div>
    );
  }
}

export default Pokecard;
