import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <div className=" Todo flex gap-2 w-full justify-around">
        <li className="py-2 m-2"> {this.props.task}</li>
        <div>
          {" "}
          <button className="text-white bg-black py-2 px-4 m-2 rounded-lg">
            edit
          </button>
          <button className="text-white bg-red-600 p-2 m-2 rounded-lg">
            delete
          </button>
        </div>
      </div>
    );
  }
}
