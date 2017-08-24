import React from 'react';
import { connect } from 'react-redux';
import { editSubject, deleteSubject } from '../../actions/subject_actions';
import { Link, withRouter } from 'react-router-dom';

class SubjectModify extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      title: "",
      id: this.props.location.pathname.split("/")[this.props.location.pathname.split("/").length - 1],
      user_id: this.props.current_user.id,
    };

    this.originalTitle = null;

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }


  componentWillMount(){
    var thisSubject = "undefined!";
    var thisId = parseInt(this.state.id);
    this.props.subjects.forEach((subject) => {
      if (subject.id === thisId){
        thisSubject = subject.title;
      }
    });
    this.state.title = thisSubject;
    this.originalTitle = this.state.title;
  }

  handleEditClick(e){
    e.preventDefault();
    this.props.editSubject(this.state).then(this.props.history.push("/home"));
  }

  handleDeleteClick(e){
    e.preventDefault();
    this.props.deleteSubject(this.state.id).then(this.props.history.push("/home"));

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
        <form onSubmit={this.handleEditClick} >
          <Link to="/home" className="boxclose">
            x
          </Link>

          <p className="errorBlock">{ errors }</p>

          <h3>Modify {this.originalTitle}</h3>
          <h3>The ID is {this.state.id}</h3>
          <br />
          <h4>Title:</h4>
          <input onChange={this.handleInputChange("title")}
          placeholder="Title"
          value={this.state.title} />
          <input type="submit" value="Edit" />
          <button onClick={this.handleDeleteClick}>Destroy</button>
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
    editSubject: (subject) => dispatch(editSubject(subject)),
    deleteSubject: (subject) => dispatch(deleteSubject(subject)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubjectModify));
