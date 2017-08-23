import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

class SignupForm extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      username: "",
      password: "",
      avatar_url: "",
    };
    //initial state is blank

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    //bind the methods

  }

  handleFormSubmit(e){
    e.preventDefault();
    this.props.sendSignupRequest(this.state);

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
          <h4>Username:</h4>
          <input onChange={this.handleInputChange("username")} placeholder="Username" />
          <h4>Password:</h4>
          <input onChange={this.handleInputChange("password")} placeholder="Password" />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendSignupRequest: (user) => dispatch(signup(user))
  };
};

export default connect(null, mapDispatchToProps)(SignupForm);
