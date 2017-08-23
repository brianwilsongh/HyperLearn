import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      username: "",
      password: ""
    };
    //initial state is blank

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    //bind the methods

  }

  handleFormSubmit(e){
    e.preventDefault();
    this.props.sendLoginRequest(this.state).then(this.props.history.push("/home"));
  }

  handleInputChange(key){
    return (e) => {
      this.setState({
        [key]: e.currentTarget.value
      });
    };
  }


  render(){
    return (
    <div id="overlay">
      <div className="sessionForm">
        <form onSubmit={this.handleFormSubmit} >
          <Link to="/" className="boxclose">
            x
          </Link>
          <h4>Username:</h4>
          <input onChange={this.handleInputChange("username")} placeholder="Username" />
          <h4>Password:</h4>
          <input onChange={this.handleInputChange("password")} placeholder="Password" />
          <input type="submit" value="Log In" />
        </form>

      </div>
    </div>
  );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendLoginRequest: (user) => dispatch(login(user))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(LoginForm));
