import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/common.css'
import './styles/reset.css'

import { Provider } from 'react-redux';
import { store } from './store/index';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
