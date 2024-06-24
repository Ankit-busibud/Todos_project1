import React from 'react';
import { connect } from 'react-redux';
import { addTodoAsync, deleteTodo,addTodo} from '../src/Redux_comp/Action';

const App = (props)=>{
  handleAddTodo = () => {
    const newTodo = {
      id: Math.random(), // Use better ID generation in production
      date: new Date().toISOString(), // Example date format
      content: 'Sample todo content'
    };
   gitprops.Add(newTodo);
   props.addTodoAsync(newTodo)
  };

    return (
      <div>
        <button onClick={this.handleAddTodo}>Add Todo</button>
        <ul>
          {props.todos.map(todo => (
            <li key={todo.id}>
              {todo.content} - {todo.date}
              <button onClick={() =>props.Delete(todo.id)}>Delete</button>
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
    Add:() => dispatch(addTodoAsync),
    Delete : ()=> dispatch(deleteTodo),   
    
    AddTodoAsync:()=> dispatch(addTodoAsync)  
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);