import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';

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
    this.props.sendSignupRequest(this.state)
    .then(this.props.currentUser ? this.props.history.push("/home") :
   console.log("INVALID CREDENTIALS"));

  }

  handleInputChange(key){
    return (e) => {
      this.setState({
        [key]: e.currentTarget.value
      });
    };
  }


  render(){

    let errors = this.props.errors.map((err, idx) => (<li key={idx}> { err } </li>));

    return (
    <div id="overlay">
      <div className="sessionForm">
        <form onSubmit={this.handleFormSubmit} >
          <Link to="/" className="boxclose" onClick={this.props.clearErrors}>
            x
          </Link>

          <p className="errorBlock">{ this.props.errors ? <p>
              {errors}
            </p> : null}</p>


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

const mapStateToProps = (state) => {
  return {
    current_user: state.session.current_user,
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendSignupRequest: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));
