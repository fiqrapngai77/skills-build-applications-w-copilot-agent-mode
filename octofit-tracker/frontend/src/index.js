import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Log the REST API endpoint for debugging
const codespace = process.env.REACT_APP_CODESPACE_NAME;
const apiBase = codespace
  ? `https://${codespace}-8000.app.github.dev/api/`
  : 'http://localhost:8000/api/';
console.log('Octofit Tracker REST API Base:', apiBase);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
