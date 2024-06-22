
import React, { createContext, useContext, useReducer } from 'react';
import { useQueryClient } from 'react-query';

const TodoContext = createContext();

const initialState = {
  todos: []
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return { ...state, todos: action.payload };
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'DELETE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const fetchTodos = async () => {
    const response = await fetch('/api/todos'); // Replace with your API endpoint
    const data = await response.json();
    dispatch({ type: 'SET_TODOS', payload: data });
  };

  const addTodo = async (todo) => {
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    const data = await response.json();
    dispatch({ type: 'ADD_TODO', payload: data });
    queryClient.invalidateQueries('todos');
  };

  const deleteTodo = async (id) => {
    await fetch('/api/todos/${id}', {
      method: 'DELETE',
    });
    dispatch({ type: 'DELETE_TODO', payload: id });
    queryClient.invalidateQueries('todos');
  };

  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo, deleteTodo, fetchTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => useContext(TodoContext);

export { TodoProvider, useTodoContext };