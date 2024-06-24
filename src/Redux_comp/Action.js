import { useDispatch } from "react-redux";

export const addTodo = (todo) => ({
    type: "ADD_TODO",
    payload: todo
  });
  
  export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    payload: id
  });

  export const UpdateTodo = (id,content) =>{
     
     return{
       type:"UPDATE",
       payload:{id,content}
     }
    /* return(dispatch)=>{
      //async Logic
      // dispatch({type:"UPDATE" payload:"content"})
    } */
  }
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