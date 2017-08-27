import React from 'react';
import { connect } from 'react-redux';
import { getCurrentDeck } from '../../actions/deck_actions';
import { addCardEdit, deleteCard } from '../../actions/card_actions';

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
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
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
    this.props.destroyCard(this.state.id);
    this.props.setCurrentDeck(this.props.current_deck.id);
    //destroy card, update current deck in case it was last
  }



  render (){

    let errors;
    if (this.props.cardStore[this.state.id]){
      let thisCard = this.props.cardStore[this.state.id];
       if (thisCard.errors[0]){
         errors = thisCard.errors[0]
          .map((err, idx) => {
            if (err === "None"){
              return (<li className="cardNonErrorItem" key={idx}> Saved! </li>);
            } else {
              return (<li key={idx}> { err } </li>);
            }
          });
      }
    }

    return (
      <div className="cardFormContainer">
        <div className="cardForm">
          <form onSubmit={this.handleEditClick} >

            <br />
            <div>{ errors ? <p className="errorBlock">{ errors }</p> : null}</div>

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
    cardStore: state.cards.store,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentDeck: (id) => dispatch(getCurrentDeck(id)),
    addThisCard: (card) => dispatch(addCardEdit(card)),
    destroyCard: (id) => dispatch(deleteCard(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
