import React from 'react';
import { connect } from 'react-redux';
import { addCardEdit } from '../../actions/card_actions';

class CardForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      id: this.props.card.id,
      question: this.props.card.question,
      answer: this.props.card.answer,
      deck_id: this.props.current_deck.id,
    };

    this.addEditedCard = this.addEditedCard.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(null);
  }

  method(){
    console.log("ready for action!");
  }

  addEditedCard(){
    this.props.addThisCard(this.state);
  }


  handleInputChange(key){
    return (e) => {
      this.setState({
        [key]: e.currentTarget.value
      });
    };
  }

  handleDeleteClick(e){
    e.preventDefault();
    this.props.deleteCard(this.state.id);

  }



  render (){
    return (
      <div className="cardFormContainer">
        <div className="cardForm">
          <form onSubmit={this.handleEditClick} >

            <p className="errorBlock">{ }</p>

            <br />
            <h4>Question:</h4>
            <input onChange={this.handleInputChange("question")}
            placeholder="What is the question?"
            value={this.state.question} />

          <h4>Answer:</h4>
            <input onChange={this.handleInputChange("answer")}
            placeholder="What is the answer?"
            value={this.state.answer} />

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
    current_deck: state.decks.current,
    decks: state.decks.sorted,
    errors: state.decks.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addThisCard: (card) => dispatch(addCardEdit(card)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);