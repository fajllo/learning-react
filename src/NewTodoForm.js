import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class NewTodoForm extends Component {
  state = { task: "" };
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addTodo({ ...this.state, id: uuidv4() });
    this.setState({ task: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="text-xl">
          <label htmlFor="task" className="mr-2">
            New todo:
          </label>
          <input
            type="text"
            id="task "
            name="task"
            placeholder="add newt todo..."
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button className="text-white bg-green-600 p-2 m-2 rounded-lg">
            add
          </button>
        </form>
      </div>
    );
  }
}
