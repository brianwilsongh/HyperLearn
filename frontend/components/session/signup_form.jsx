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
      image: null,
      imageUrl: null,
    };
    //initial state is blank

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    //bind the methods
    this.updateFile = this.updateFile.bind(this);

  }

  handleFormSubmit(e){
    e.preventDefault();
    var formData = new FormData();
    formData.append("user[username]", this.state.username);
    formData.append("user[password]", this.state.password);
    formData.append("user[image]", this.state.image);
    this.props.sendSignupRequest(formData);
  }

  handleInputChange(key){
    return (e) => {
      this.setState({
        [key]: e.currentTarget.value
      });
    };
  }

  updateFile(e){
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ image: file, imageUrl: fileReader.result });
    }.bind(this);
    this.setState({image: file});

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  render(){
    if (this.props.currentUser){
      if (this.props.currentUser.id){
        this.props.history.push("/home");
      }
    }

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

          <div className="errorBlock">{ this.props.errors ? <ul>{errors}</ul> : null}</div>


          <h4>Username:</h4>
          <input onChange={this.handleInputChange("username")} placeholder="Username" />
          <h4>Password:</h4>
          <input type="password" onChange={this.handleInputChange("password")} placeholder="Password" />
          <input type="file" onChange={this.updateFile}></input>
          <input type="submit" value="Sign Up" />
          <img src={this.state.imageUrl} height="50px"/>
        </form>
      </div>
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
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
