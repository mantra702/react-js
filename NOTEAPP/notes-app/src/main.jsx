import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './App/store';

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}