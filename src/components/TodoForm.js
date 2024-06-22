import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

const TodoForm = () => {
    const { addTodo } = useTodoContext();
    const [content, setContent] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!content.trim()) return;
      addTodo({
        content,
        date: new Date().toISOString(), // Example date format
      });
      setContent('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter todo content"
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  };
  
  export default TodoForm;