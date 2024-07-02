import { createSlice, nanoid } from "@reduxjs/toolkit"; // nanoid is used for generating random ids

const initialState = {
  todos: [
    {
      id: 1,
      msg: "Hello World",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // state will give us the current state it holds and we can get the data from action
      const todo = {
        id: nanoid(),
        msg: action.payload,
      };

      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions; // individual reducer we are exporting to use it in the components

export default todoSlice.reducer; // the store shoul be aware of the entire reducer
