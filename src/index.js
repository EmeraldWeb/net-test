import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime'; // TODO: regeneratorRuntime is not defined
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import App from './components/App';
import './index.css';

const store = createStore(reducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
