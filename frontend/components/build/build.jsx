import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getCurrentDeck } from '../../actions/deck_actions';
import { getCards, editCards } from '../../actions/card_actions';
import CardForm from '../card/card_form';


class Build extends React.Component {

  constructor(props){
    super(props);

    this.deck_id = this.props.location.pathname
    .split("/")[this.props.location.pathname.split("/").length - 1];

    this.triggerSubmissionEdit = this.triggerSubmissionEdit.bind(this);
    this.childComponentsEdit = [];
  }

  componentDidMount(){
    this.props.setCurrentDeck(this.deck_id);
  }

  objEmpty(obj){
    if (Object.keys(obj).length === 0
    && obj.constructor === Object) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState){
  if (!this.objEmpty(this.props.currentDeck)
    && this.objEmpty(this.props.cards)
    && this.props.currentDeck.card_count > 0){
    this.props.retrieveCardsOfDeck(this.props.currentDeck);
  }

  if (!this.objEmpty(this.props.editStore)){
    this.props.sendEditCards(this.props.editStore);
  }

}

  triggerSubmissionEdit(){
    this.childComponentsEdit.forEach((child, idx) => {
      if (child){
        if (this.props.cards[child.state.id]){
          debugger;
          child.addEditedCard();
        }
      }
    }, this);
    //foreach can take context as second argument
  }


  render(){
    var deckDisplay = !this.props.currentDeck ? "unknown"
    : <h1>{this.props.currentDeck.title}</h1>;

    var forms;
    var currentCards = this.props.cards;

    if (!this.objEmpty(currentCards)){
      forms = Object.keys(currentCards).map((key, idx) => {
        return (<CardForm key={idx} card={currentCards[key]} onRef={ref => (this.childComponentsEdit.push(ref))} />);
      });
    } else {
      forms = <p>Deck is empty...</p>;
    }

    return(
      <div className="primaryComponent">
        <button onClick={this.triggerSubmissionEdit}>UPDATE</button>
        <div className="deckPanelDisplaySubject">
          { deckDisplay }
        </div>
        <Link to={`/build/new/${this.props.currentDeck.id}`}>
          <button>NEW CARD</button>
        </Link>
          { forms }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentDeck: state.decks.current,
    cards: state.cards.store,
    editStore: state.cards.editStore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentDeck: (id) => dispatch(getCurrentDeck(id)),
    retrieveCardsOfDeck: (deck) => dispatch(getCards(deck)),
    sendEditCards: (cards) => dispatch(editCards(cards)),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Build));
