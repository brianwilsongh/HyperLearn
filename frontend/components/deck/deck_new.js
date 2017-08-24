import React from 'react';
import { connect } from 'react-redux';
import { createDeck } from '../../actions/deck_actions';
import { Link, withRouter } from 'react-router-dom';

class DeckNew extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      title: "",
      user_id: this.props.current_user.id,
      subject_id: this.props.current_subject.id,
    };

    this.handleCreateClick = this.handleCreateClick.bind(this);
  }

  handleCreateClick(e){
    e.preventDefault(); //needed?
    this.props.createDeck(this.state).then(this.props.history.push("/home"));
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

          <h3>Create Deck:</h3>
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
    current_subject: state.subjects.current,
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createDeck: (newDeck) => dispatch(createDeck(newDeck)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeckNew));
