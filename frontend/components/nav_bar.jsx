import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserPanel from './session/user_panel';
import { loginDemo } from '../actions/session_actions';

class NavBar extends React.Component {

  constructor(props){
    super(props);

    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleDemoLogin(e){
    e.preventDefault();
    this.props.loginDemo();
  }

  render(){
    if (this.props.currentUser){
      return(
        <div className="Navigation">
          <Link to="/">home
          </Link>

          <UserPanel />
        </div>
      );
    } else {
      return (
        <div className="Navigation">
          <Link to="/">home
          </Link>

          <div className="Session">
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/" onClick={this.handleDemoLogin}>DEMO</Link>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginDemo: () => dispatch(loginDemo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
