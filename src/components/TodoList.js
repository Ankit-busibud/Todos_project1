import React, { useEffect } from 'react';
import { useTodoContext } from '../context/TodoContext';

const TodoList = () => {
  const { todos, fetchTodos, deleteTodo,updateTodo } = useTodoContext();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleDelete = (id) => {
    deleteTodo(id);
  };
  const handleUpdate= (id) => {
    updateTodoTodo(id);
  };

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.content} - {todo.date} {/* Adjust based on your todo structure */}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleUpdate(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;