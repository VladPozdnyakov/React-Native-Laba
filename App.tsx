import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from './HomeScreen';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {combineReducers, applyMiddleware, createStore} from 'redux';
import themeReducer from './redux/reducers/themeReducer';

const store = createStore(
  combineReducers({themeReducer}),
  applyMiddleware(thunk),
);

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
