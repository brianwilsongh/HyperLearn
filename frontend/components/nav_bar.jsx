import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserPanel from './session/user_panel';

class NavBar extends React.Component {


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

export default connect(mapStateToProps)(NavBar);
