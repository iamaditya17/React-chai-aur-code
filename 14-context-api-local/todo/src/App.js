import { useState, useEffect } from "react";
import { ToDoProvider } from "./context";
import { ToDoForm } from "./components";
import { ToDoItem } from "./components";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]); // todos --> entire todo array

  const addTodo = (msg) => {
    setTodos((prev) => [
      {
        // previouly whatever the array exits we are just adding the new todo
        id: Date.now(),
        ...msg,
      },
      ...prev,
    ]);
  };

  //setTodos() have access to the previous value of state. iterate all existing todos and if the id matches then update otherwise don't update
  const updateTodo = (id, msg) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? msg : todo)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)); // bring those todos whose id is not equals to the id that we want to remove
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map(
        (todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        // if todo.completed is true then make it false or if it is false then make it true
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <ToDoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
