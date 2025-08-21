import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos,statusHandler}) => {
  return (
    <div>
      <ul className="list-reset">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} statusHandler={statusHandler} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
