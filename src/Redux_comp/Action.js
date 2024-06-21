
export const addTodo = (todo) => ({
    type: "ADD_TODO",
    payload: todo
  });
  
  export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    payload: id
  });

  export const FetchTodo = ()=>{
     return (dispatch)=>{
      dispatch({type:"LoadingInitiated"})
      /* axios.get("URL").then((response)=>{
          dispatch({type:"FETCH_SUCCESS",payload:response.data})
        })
     
        */
     }
  }
  
  // Async action creator (Thunk)
  export const addTodoAsync = (todo) => {
    return (dispatch) => {
      // Simulate an async call (e.g., API call)
      setTimeout(() => {
        dispatch(addTodo(todo));
      }, 500); // Simulated delay of 500ms
    };
  };