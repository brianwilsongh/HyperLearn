import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import generateStore from './store/store';


document.addEventListener('DOMContentLoaded', ()=>{
  let store;
  if (window.current_user) {
    const preloadedState = { session: {current_user: window.current_user}};
    store = generateStore(preloadedState);
    delete window.current_user;
    // debugger
  } else {
    store = generateStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<App store={store} />, root);
});
