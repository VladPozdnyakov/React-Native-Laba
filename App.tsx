import React from 'react';
import MainPage from './MainPage';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import * as permissions from 'react-native-permissions';
import {request, PERMISSIONS} from 'react-native-permissions';

export default function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}
