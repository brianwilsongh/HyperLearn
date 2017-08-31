import React from 'react';
import { connect } from 'react-redux';
import { editSubject, deleteSubject, receiveSubjectErrors } from '../../actions/subject_actions';
import { Link, withRouter } from 'react-router-dom';

class SubjectModify extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      title: "",
      id: this.props.location.pathname.split("/")[this.props.location.pathname.split("/").length - 1],
      user_id: this.props.current_user.id,
      category_id: null,
    };

    this.originalTitle = null;
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }


  componentWillMount(){
    var thisSubjectTitle = "Undefined!";
    var thisSubjectCategory = null;
    var thisId = parseInt(this.state.id);
    this.props.subjects.forEach((subject) => {
      if (subject.id === thisId){
        thisSubjectTitle = subject.title;
        thisSubjectCategory = subject.category;
      }
    });
    this.state.title = thisSubjectTitle;
    //setup title and category id by pulling it out of the store, no ajax needed
    this.originalTitle = this.state.title;
    this.state.category_id = thisSubjectCategory ? thisSubjectCategory.id : null;
  }

  handleEditClick(e){
    e.preventDefault();
    this.props.editSubject(this.state)
      .then((response) => {
      this.props.clearErrors();
      this.props.history.push("/home");
      }
    );
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

    let categories;
    if (this.props.categories.length > 0){
      categories = this.props.categories.map((category, idx) =>
      (<option key={idx} value={category.id} >{category.name} </option>));
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
          <br />
          <h4>Title:</h4>
          <input onChange={this.handleInputChange("title")}
          placeholder="Title"
          value={this.state.title} />

          <select onChange={this.handleInputChange("category_id")}
            value={this.state.category_id ? this.state.category_id : ""}>
            {categories}
          </select>
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
    errors: state.subjects.errors,
    categories: state.subjects.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editSubject: (subject) => dispatch(editSubject(subject)),
    deleteSubject: (subject) => dispatch(deleteSubject(subject)),
    clearErrors: (subject) => dispatch(receiveSubjectErrors({responseJSON: []}))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubjectModify));
