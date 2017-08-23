import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({component: Component, path, loggedIn}) => {
  return (
    <Route
      path={ path }
      render={ props => loggedIn ? <Component { ...props } /> : <Redirect to="/" /> }
    />
  );
};



const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.current_user)
  };
};

export default withRouter(connect(mapStateToProps)(ProtectedRoute));
