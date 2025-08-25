import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export let NewContext = createContext();

export function AppDataProvider({ children }) {
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
    let updatedRemoveTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(updatedRemoveTodos);
  }

  function changeHandler(todoId, newTitle) {
    let updatedEdits = todos.map((todo) => {
      if (todo.id == todoId) {
        todo.title = newTitle;
        return todo;
      }
      return todo;
    });
    setTodos(updatedEdits);
  }

  return (
    <NewContext.Provider
      value={{
        todos,
        addTodo,
        statusHandler,
        removeTodoHandler,
        changeHandler,
      }}
    >
      {children}
    </NewContext.Provider>
  );
}
