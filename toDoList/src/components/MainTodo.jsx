import React, { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const MainTodo = () => {
  let [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "Learn React",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Build a To-Do App",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Deploy the App",
      completed: true,
    },
  ]);

  function addTodo(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      let newTodo = {
        id: uuidv4(),
        title: e.target.value,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      e.target.value = ""; // Clear the input field after adding the todo
    }
  }

  function statusHandler(todoId) {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed; // Toggle the completed status
        return todo;
      }
      return todo;
    });
    setTodos(updatedTodo);
  }

  function removeTodoHandler(todoId) {
   let updatedRemoveTodos= todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(updatedRemoveTodos);
  }

  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-center h-screen">
        <div className="w-full px-4 py-8 mx-auto shadow lg:w-2/4  bg-white">
          <div className="flex items-center mb-6">
            <h1 className="mr-6 text-4xl font-bold text-blue-600">
              {" "}
              To-Do Project | Saeed Sharifi Academy
            </h1>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="What needs to be done today?"
              className="w-full px-2 py-3 border rounded outline-none border-grey-600"
              onKeyDown={addTodo}
            />
          </div>
          <TodoList
            todos={todos}
            statusHandler={statusHandler}
            removeTodoHandler={removeTodoHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default MainTodo;
