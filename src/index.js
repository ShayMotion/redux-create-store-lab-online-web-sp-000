import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';

// we wrap store in a function for testing purposes
export function configureStore(){
  return createStore;
}

ReactDOM.render(
  <store={configureStore()} />,
  document.getElementById('root')
);