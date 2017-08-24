import React from 'react';
import { connect } from 'react-redux';
import { createSubject } from '../../actions/subject_actions';
import { Link, withRouter } from 'react-router-dom';

class SubjectNew extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      title: "",
      user_id: this.props.current_user.id,
    };

    this.handleCreateClick = this.handleCreateClick.bind(this);
  }

  handleCreateClick(e){
    e.preventDefault(); //needed?
    this.props.createSubject(this.state).then(this.props.history.push("/home"));
  }

  handleInputChange(key){
    return (e) => {
      this.setState({
        [key]: e.currentTarget.value
      });
    };
  }


  render(){

    let errors;
    if (this.props.errors){
      errors = this.props.errors.map((err, idx) => (<li key={idx}> { err } </li>));
    }

    return (
    <div id="overlay">
      <div className="sessionForm">
        <form onSubmit={this.handleCreateClick} >
          <Link to="/home" className="boxclose">
            x
          </Link>

          <p className="errorBlock">{ errors }</p>

          <h3>Create Subject:</h3>
          <br />

          <h4>Title:</h4>
          <input onChange={this.handleInputChange("title")}
          placeholder="Title"
          value={this.state.title} />

          <input type="submit" value="Submit" />

        </form>

      </div>
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    current_user: state.session.current_user,
    subjects: state.subjects.sorted,
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSubject: (subject) => dispatch(createSubject(subject)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubjectNew));