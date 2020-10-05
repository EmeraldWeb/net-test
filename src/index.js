import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime'; // TODO: regeneratorRuntime is not defined
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './components/App';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById('root')
);
