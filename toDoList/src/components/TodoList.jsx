import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos,statusHandler,removeTodoHandler,changeHandler}) => {
  return (
    <div>
      <ul className="list-reset">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} statusHandler={statusHandler} removeTodoHandler={removeTodoHandler} changeHandler={changeHandler} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
