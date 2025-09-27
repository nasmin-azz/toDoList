import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { NewContext } from "./NewContext";

const TodoList = () => {
  let {todos}=useContext(NewContext)
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
