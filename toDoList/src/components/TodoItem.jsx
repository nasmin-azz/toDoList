import React from "react";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const TodoItem = ({ todo }) => {
  return (
    <div>
      <li className="relative flex items-center justify-between px-2 py-6 border-b">
        <div>
          <input
            type="checkbox"
            className=""
            checked={todo.completed}
            onChange={() => {}}
          />
          <p className={`inline-block mt-1 ml-2 text-gray-600 ${todo.completed?'line-through':''}`}>{todo.title}</p>
        </div>
        <button
          type="button"
          className="absolute right-0 flex items-center space-x-1"
        >
          <EditTodo />
          <DeleteTodo />
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
