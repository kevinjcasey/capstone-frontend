import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home' // formerly App 

// REDUX
import Reducer from './Reducer'
import { createStore } from 'redux' // redux specific
import { Provider } from 'react-redux'

// Creating the store and passing the Reducer as a parameter
const store = createStore(Reducer)

// The Provider component makes the store available to any nested component, which is why we render it at the top level of the app
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
