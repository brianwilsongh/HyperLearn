import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const SplashRoute = ({component: SessionForm, path, loggedIn}) => {
  return (
    <Route
      path={ path }
      render={ props => !loggedIn ? <SessionForm { ...props } /> : <Redirect to="/home" /> }
    />
  );
};


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.current_user)
  };
};

export default withRouter(connect(mapStateToProps)(SplashRoute));
