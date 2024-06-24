import React from 'react';
import { connect } from 'react-redux';
import { addTodoAsync, deleteTodo,addTodo,UpdateTodo} from '../src/Redux_comp/Action';
import { useState } from 'react';
const App = (props)=>{
  
  const[content,setContent]  = useState("")
  
  const handleAddTodo = (event) => {
    const newTodo = {
      id: Math.random()*10, // Use better ID generation in production
      date: new Date().toISOString(), // Example date format
      content: content
    };
   props.Add(newTodo);
   setContent("")
  // props.addTodoAsync(newTodo)
  };
  console.log(props.todos)

    return (
      <div>
        <h1>TODOS_APP</h1>
        <form>
          <input type='text' value={content} onChange={(e)=>{ 
          
            setContent(e.target.value)}}></input>
        
        </form>
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {props.todos.map(todo => (
            <li key={todo.id}>
              {todo.content} - {todo.date}
              <button onClick={() =>props.Delete(todo.id)}>Delete</button>
              <button onClick={()=>{props.UpdateTodo(todo.id,content)
                setContent("")
              }}>Update</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }


const mapStateToProps = state => ({
  todos: state.todos //assuming todos under todos key
});
const mapDispatchToProps = dispatch => {
  return {
    Add:(data) => dispatch(addTodo(data)),
    Delete : (id)=> dispatch(deleteTodo(id)),   
    UpdateTodo: (id,content)=>dispatch(UpdateTodo(id,content)),
    AddTodoAsync:()=> dispatch(addTodoAsync)  
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);