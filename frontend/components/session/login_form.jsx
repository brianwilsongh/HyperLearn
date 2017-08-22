import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

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
    this.props.sendLoginRequest(this.state);

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
    <form onSubmit={this.handleFormSubmit} >
      <input onChange={this.handleInputChange("username")} placeholder="Username" />
      <input onChange={this.handleInputChange("password")} placeholder="Password" />
      <input type="submit" value="Log In" />
    </form>
  );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendLoginRequest: (user) => dispatch(login(user))
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
