import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { login, logout, signup } from './actions/session_actions';
import generateStore from './store/store';


document.addEventListener('DOMContentLoaded', ()=>{
  const store = generateStore();
  window.store = store;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
