import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getCurrentDeck } from '../../actions/deck_actions';
import { wipeCardState, getCards, receiveCurrentCard } from '../../actions/card_actions';
import DeckInterface from './deck_interface';
import CardInterface from './card_interface';


class Study extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    //retrieve the current deck
    this.props.setCurrentDeck(
      this.props.location.pathname.split("/")[this.props.location.pathname.split("/").length - 1]);
    //reset the state of cards, in case we're redirecting from a weird place for now
    this.props.clearCardData();
  }

  objEmpty(obj){
    if (Object.keys(obj).length === 0
    && obj.constructor === Object) {
      return true;
    }
    return false;
  }

  componentDidUpdate(){
    //Set current subject to first on initial load, then get its decks just this once
    if (!this.objEmpty(this.props.cards) && this.objEmpty(this.props.currentCard))
    {
      //change this later to a method to find next card with an algo
      this.props.setCurrentCard(this.props.cards[Object.keys(this.props.cards)[0]]);
    }

    if (!this.objEmpty(this.props.currentDeck)
      && this.objEmpty(this.props.cards)
      && this.props.currentDeck.card_count > 0){
      this.props.getCardsOfDeck(this.props.currentDeck);
    }
  }



  render(){
    return(
      <div className="studyInterface" >
        <DeckInterface />
        <CardInterface />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
    currentDeck: state.decks.current,
    cards: state.cards.store,
    currentCard: state.cards.current,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentDeck: (id) => dispatch(getCurrentDeck(id)),
    clearCardData: () => dispatch(wipeCardState()),
    getCardsOfDeck: (deck) => dispatch(getCards(deck)),
    setCurrentCard: (card) => dispatch(receiveCurrentCard(card)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Study));
