import { createStore, applyMiddleware } from 'redux';
import {thunk}from 'redux-thunk';
import {TodoReducer} from './Reducer'; 

const store = createStore(TodoReducer, applyMiddleware(thunk));

export default store;