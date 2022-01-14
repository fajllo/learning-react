import React, { Component } from "react";

export default class Todo extends Component {
  state = { editing: false, task: this.props.task, completed: false };
  handleRemove = evt => {
    this.props.remove(this.props.id);
  };
  handleUpdate = evt => {
    evt.preventDefault();
    this.props.update(this.props.id, this.state.task);
    this.toggleForm();
  };

  toggleForm = () => {
    this.setState({ editing: !this.state.editing });
  };
  toggleComplete = () => {
    this.setState({ completed: !this.state.completed });
  };
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  render() {
    let result;
    if (!this.state.editing) {
      result = (
        <div className="flex justify-between">
          {" "}
          <li
            onClick={this.toggleComplete}
            className={
              this.state.completed
                ? "py-2 m-2 line-through text-gray-400 "
                : "py-2 m-2 "
            }
          >
            {" "}
            {this.props.task}
          </li>
          <div>
            {" "}
            <button
              className="text-white bg-black py-2 px-4 m-2 rounded-lg"
              onClick={this.toggleForm}
            >
              edit
            </button>
            <button
              className="text-white bg-red-600 p-2 m-2 rounded-lg"
              onClick={this.handleRemove}
            >
              delete
            </button>
          </div>
        </div>
      );
    } else {
      result = (
        <div className="flex justify-between items-center">
          {" "}
          <li className="py-2 m-2 ">
            <form className="flex justify-between" onSubmit={this.handleUpdate}>
              <input
                type="text"
                className=" border-2"
                name="task"
                value={this.state.task}
                onChange={this.handleChange}
              />
              <button className="text-white bg-teal-400 py-2 px-4 m-2 rounded-lg">
                save
              </button>
            </form>
          </li>
          <div>
            {" "}
            <button
              className="text-white bg-yellow-400 py-2 px-4 m-2 rounded-lg"
              onClick={this.toggleForm}
            >
              cancel
            </button>
            <button
              className="text-white bg-red-600 p-2 m-2 rounded-lg"
              onClick={this.handleRemove}
            >
              delete
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className=" Todo flex gap-2 w-full flex-col text-2xl  ">
        {result}
      </div>
    );
  }
}
