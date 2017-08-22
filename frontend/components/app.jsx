import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import NavBar from './nav_bar';
import LoginForm from './session/login_form';
import SignupForm from './session/signup_form';
import AuthRoute from '../utils/route_utils';

export const App = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="AppDiv">
          <Route path="/" component={NavBar} />
          <AuthRoute exact path="/login" component={LoginForm} />
          <AuthRoute exact path="/signup" component={SignupForm} />
        </div>
      </HashRouter>
    </Provider>
  );
};

export default App;
