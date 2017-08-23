import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';


class UserPanel extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="Session">
        Hello, {this.props.currentUser.username}!
        <Link to="/" onClick={this.props.logoutFromPanel}>Log Out</Link>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutFromPanel: () => dispatch(logout()),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
