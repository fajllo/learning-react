import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
export default class TodoList extends Component {
  state = {
    todos: [],
  };
  create = newTodo => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  remove = id => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id),
    });
  };
  update = (id, updatedTodo) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTodo };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };
  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        remove={this.remove}
        update={this.update}
      ></Todo>
    ));
    return (
      <div className="TodoList flex flex-col justify-center items-center h-screen w-screen">
        <h1>Todo list! react</h1>
        <NewTodoForm key="form" addTodo={this.create} />
        <ul className="w-full md:w-1/2">{todos}</ul>
        <div className=" mt-10">
          {" "}
          <h1 className="text-4xl text-orange-400">How it works?</h1>
          <h2 className="text-2xl">enter your todo</h2>
          <h2 className="text-2xl">click edit to edit each todo</h2>
          <h2 className="text-2xl">click delete to delete selected todo </h2>
        </div>
      </div>
    );
  }
}
