import React from 'react';
import { createRoot } from 'react-dom/client';
//Libs
import { store } from './store/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './config/i18next';
//Style
import './index.css';
//Components
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
