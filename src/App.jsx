import React from 'react';
import { connect } from 'react-redux';
import { addTodoAsync, deleteTodo,addTodo} from '../src/Redux_comp/Action';

const App = ()=>{
  handleAddTodo = () => {
    const newTodo = {
      id: Math.random(), // Use better ID generation in production
      date: new Date().toISOString(), // Example date format
      content: 'Sample todo content'
    };
   addTodoAsync(newTodo);
  };

    return (
      <div>
        <button onClick={this.handleAddTodo}>Add Todo</button>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.content} - {todo.date}
              <button onClick={() =>deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }


const mapStateToProps = state => ({
  todos: state.todos //assuming todos under todos key
});

export default connect(mapStateToProps, { addTodoAsync, deleteTodo })(App);