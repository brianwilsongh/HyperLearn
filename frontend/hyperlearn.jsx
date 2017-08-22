import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { login, logout, signup } from './utils/session_api_utils.js';

document.addEventListener('DOMContentLoaded', ()=>{
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
