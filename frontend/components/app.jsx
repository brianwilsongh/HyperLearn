import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom';
import LoginForm from './session/login_form';
import SignupForm from './session/signup_form';

import SubjectModify from './subject/subject_modify';
import SubjectNew from './subject/subject_new';
import DeckNew from './deck/deck_new';
import DeckModify from './deck/deck_modify';
import Build from './build/build';
import CardNew from './card/card_new';

import AuthRoute from '../utils/auth_route';
import ProtectedRoute from '../utils/protected_route';
import SplashRoute from '../utils/splash_route';

import NavBar from './nav_bar';
import Splash from './splash';
import HomePage from './home/homepage';

export const App = ({store}) => {

  return (
    <Provider store={store}>
      <HashRouter>
        <div id="appDiv">
          <Route path="/" component={NavBar} />
          <SplashRoute path="/" exact component={Splash} />
          <AuthRoute path="/login" component={LoginForm} />
          <AuthRoute path="/signup" component={SignupForm} />
          <ProtectedRoute path="/home" component={HomePage} />

          <ProtectedRoute path="/home/subject/new" component={SubjectNew} />
          <ProtectedRoute path="/home/subject/modify/:id" component={SubjectModify} />

          <ProtectedRoute path="/home/deck/new" component={DeckNew} />
          <ProtectedRoute path="/home/deck/modify/:id" component={DeckModify} />

          <ProtectedRoute path="/build" component={Build} />
          <ProtectedRoute path="/build/new/:id" component={CardNew} />
        </div>
      </HashRouter>
    </Provider>
  );
};

export default App;
