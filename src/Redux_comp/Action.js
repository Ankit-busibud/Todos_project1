
export const addTodo = (todo) => ({
    type: "ADD_TODO",
    payload: todo
  });
  
  export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    payload: id
  });
  
  // Async action creator (Thunk)
  export const addTodoAsync = (todo) => {
    return (dispatch) => {
      // Simulate an async call (e.g., API call)
      setTimeout(() => {
        dispatch(addTodo(todo));
      }, 500); // Simulated delay of 500ms
    };
  };