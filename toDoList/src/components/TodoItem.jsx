import React, { useState } from "react";
import EditTodoIcon from "./EditTodoIcon";
import DeleteTodoIcon from "./DeleteTodoIcon";

const TodoItem = ({
  todo,
  statusHandler,
  removeTodoHandler,
  changeHandler,
}) => {
  let [editMode, setEditMode] = useState(false);
  function closeInput(event) {
    if (event.key == "Enter")    setEditMode(false);
 changeHandler(todo.id, event.target.value);
  }
  return (
    <div>
      <li className="relative flex items-center justify-between px-2 py-6 border-b">
        {editMode ? (
          <input
            type="text"
            onKeyDown={() => {
              closeInput(event);
            }}
            defaultValue={todo.title}
            className="w-full px-2 py-3 border rounded outline-none border-grey-600"
            placeholder="type..."
          />
        ) : (
          <div>
            <div>
              <input
                type="checkbox"
                className=""
                checked={todo.completed}
                onChange={() => {
                  statusHandler(todo.id);
                }}
              />
              <p
                className={`inline-block mt-1 ml-2 text-gray-600 ${
                  todo.completed ? "line-through" : ""
                }`}
              >
                {todo.title}
              </p>
            </div>
            <button
              type="button"
              className="absolute right-0 flex items-center space-x-1"
            >
              <EditTodoIcon setEditMode={setEditMode} />
              <DeleteTodoIcon
                todo={todo}
                removeTodoHandler={removeTodoHandler}
              />
            </button>
          </div>
        )}
      </li>
    </div>
  );
};

export default TodoItem;
