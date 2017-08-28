import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import UserPanel from './session/user_panel';
import { loginDemo } from '../actions/session_actions';

class NavBar extends React.Component {

  constructor(props){
    super(props);

    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleDemoLogin(e){
    e.preventDefault();
    this.props.loginDemo().then(this.props.history.push("/home"));
  }

  render(){
    if (this.props.currentUser){
      return(
        <div className="navigation">
          <Link to="/home">
            <img id="mainLogo" src={window.logoPath}/>
            HyperLearn
          </Link>
          <div className="browseLink">
            <Link to="/browse">Browse Subjects</Link>
          </div>

          <UserPanel />
        </div>
      );
    } else {
      return (
        <div className="navigation">
          <Link to="/">
            <img id="mainLogo" src={window.logoPath}/>
            HyperLearn
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
