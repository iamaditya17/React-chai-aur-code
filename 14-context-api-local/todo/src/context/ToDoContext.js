import React, { useContext } from "react";

const ToDoContext = React.createContext({});

const ToDoProvider = ToDoContext.Provider;

const useToDo = () => {
  return useContext(ToDoContext);
};

export { ToDoContext, ToDoProvider, useToDo };
