import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/session_actions';


class UserPanel extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    if (this.props.currentUser){
      return(
        <div>
          Hello {this.props.currentUser.username}
          <Button onClick={this.props.logoutFromPanel}>Log Out</Button>
        </div>
      );
    } else {
      return(
        <div>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutFromPanel: dispatch(logout()),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
