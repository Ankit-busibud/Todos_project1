import { ADD_TODO, DELETE_TODO } from '../actions/types';

const initialState = {
  IsLoading: false,
  todos: [],
  error: null
};

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "LoadingInitiated":
      return{
          ...state,
          IsLoading:true
      }
    case "Fetch_SUCCESS":
      return{
        ...state,
        todos: action.payload,
        IsLoading:false
      }
      case "Fetch_FAIL":
        return{
           ...state,
           IsLoading:false,
           error:action.payload
        }
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }}

 