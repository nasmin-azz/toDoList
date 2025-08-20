import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div>
      <ul className="list-reset">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
};

export default TodoList;
