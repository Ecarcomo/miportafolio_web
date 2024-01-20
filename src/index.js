// #region load dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import './index.css';
// #endregion
// #region load components
import {store} from "./redux/store.js";
import { Provider } from "react-redux";
import App from './App';
// #endregion

/**
 * @member
 * @since v1.0
 * @author @emmanuel_carcomo <emmanuelcarcomo@gmail.com> 
 * @description Renderizacion de APP embebida dentro de entorno REDUX.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store} >
    <App />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
