import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos}) => {
  return (
    <div>
      <ul className="list-reset">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
