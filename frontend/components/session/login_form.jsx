import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
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


    var errors;
    if (this.props.errors){
      errors = this.props.errors.map((err, idx) => (<li key={idx}> { err } </li>));
    }

    return (
    <div id="overlay">
      <div className="sessionForm">
        <form onSubmit={this.handleFormSubmit} >
          <Link to="/" className="boxclose" onClick={this.props.clearErrors}>
            x
          </Link>

          <div className="errorBlock">{ this.props.errors ? <p>
              {errors}
            </p> : null}</div>

          <h4>Username:</h4>
          <input onChange={this.handleInputChange("username")} placeholder="Username" />
          <h4>Password:</h4>
          <input type="password" onChange={this.handleInputChange("password")} placeholder="Password" />
          <input type="submit" value="Log In" />
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
    sendLoginRequest: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
