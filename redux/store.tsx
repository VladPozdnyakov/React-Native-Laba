import themeReducer from './reducers/themeReducer';
import {todosReducer} from './reducers/todosReducer';
import thunk from 'redux-thunk';
import {combineReducers, applyMiddleware, createStore} from 'redux';

export const store = createStore(
  combineReducers({themeReducer, todosReducer}),
  applyMiddleware(thunk),
);
