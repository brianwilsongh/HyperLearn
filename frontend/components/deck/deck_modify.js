import React from 'react';
import { connect } from 'react-redux';
import { editDeck, deleteDeck, receiveDeckErrors } from '../../actions/deck_actions';
import { Link, withRouter } from 'react-router-dom';

class DeckModify extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      title: "",
      id: this.props.location.pathname.split("/")[this.props.location.pathname.split("/").length - 1],
      user_id: this.props.current_user.id,
      subject_id: this.props.current_subject.id,
    };

    this.originalTitle = null;

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }


  componentWillMount(){
    var thisDeck = "undefined!";
    var thisId = parseInt(this.state.id);
    this.props.decks.forEach((deck) => {
      if (deck.id === thisId){
        thisDeck = deck.title;
      }
    });
    this.state.title = thisDeck;
    this.originalTitle = this.state.title;
  }

  handleEditClick(e){
    e.preventDefault();
    this.props.editDeck(this.state)
      .then((response) => {
      this.props.clearErrors();
      this.props.history.push("/home");
      }
    );
  }

  handleDeleteClick(e){
    e.preventDefault();
    this.props.deleteDeck(this.state.id).then(this.props.history.push("/home"));

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
    current_subject: state.subjects.current,
    decks: state.decks.sorted,
    errors: state.decks.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editDeck: (deck) => dispatch(editDeck(deck)),
    deleteDeck: (deck) => dispatch(deleteDeck(deck)),
    clearErrors: () => dispatch(receiveDeckErrors({responseJSON: []}))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeckModify));
