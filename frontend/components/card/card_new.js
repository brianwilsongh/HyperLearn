import React from 'react';
import { connect } from 'react-redux';
import { createCard } from '../../actions/card_actions';
import { Link, withRouter } from 'react-router-dom';

class CardNew extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      question: "",
      answer: "",
      deck_id: this.props.currentDeck.id,
      question_img_url: "",
      answer_img_url: "",
    };

    this.handleCreateClick = this.handleCreateClick.bind(this);
  }

  handleCreateClick(e){
    e.preventDefault(); //needed?
    this.props.createCard(this.state).then(this.props.history.push("/build"));
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

          <h3>Create Card:</h3>
          <br />

          <h4>Question:</h4>
          <input onChange={this.handleInputChange("question")}
          placeholder="type something here"
          value={this.state.question} />

          <h4>Answer:</h4>
          <input onChange={this.handleInputChange("answer")}
          placeholder="type something here"
          value={this.state.answer} />


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
    currentDeck: state.decks.current,
    errors: state.cards.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCard: (newCard) => dispatch(createCard(newCard)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardNew));
