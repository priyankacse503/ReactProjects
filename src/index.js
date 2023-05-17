import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './Store';
import { BrowserRouter } from 'react-router-dom';
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
=======

>>>>>>> b706e9927a4d058e3f39cef85c146b35266b6277

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
);
<<<<<<< HEAD
reportWebVitals();


=======


/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
>>>>>>> b706e9927a4d058e3f39cef85c146b35266b6277

