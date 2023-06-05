import React from 'react';
import MainPage from './MainPage';
import {Provider} from 'react-redux';
import {store} from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}
