import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
export default class TodoList extends Component {
  state = {
    todos: [
      { task: "walk the dog" },
      { task: "feed the cat" },
      { task: "make the bed " },
    ],
  };
  create = newTodo => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    const todos = this.state.todos.map(todo => <Todo task={todo.task}></Todo>);
    return (
      <div className="TodoList flex flex-col justify-center items-center h-screen w-screen">
        <h1>Todo list! react</h1>
        <NewTodoForm addTodo={this.create} />
        <ul className="w-full md:w-1/2">{todos}</ul>
      </div>
    );
  }
}
