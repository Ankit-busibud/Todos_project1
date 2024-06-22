import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TodoProvider } from './context/TodoContext';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoProvider>
        <div className="App">
          <h1>Todo App</h1>
          <TodoForm />
          <TodoList />
        </div>
      </TodoProvider>
    </QueryClientProvider>
  );
};

export default App;