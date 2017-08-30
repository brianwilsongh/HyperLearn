import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { sendRating, pushUsedCard, clearUsedCards, receiveCurrentCard } from '../../actions/card_actions';


class CardRater extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      userId: this.props.currentUser.id,
      cardId: this.props.currentCard.id,
      rating: this.props.currentCard.rating,
      currentDeckId: this.props.currentDeck.id,
    };

    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.swapCard = this.swapCard.bind(this);
  }

  handleRatingClick(e){
    var rating = parseInt(e.currentTarget.innerText);
    this.state.rating = rating;
    this.props.sendStateAsRating(this.state);
    this.swapCard();
  }

  cardInArray(card, array){
    for (var idx = 0; idx < array.length; idx++){
      if (card.id === array[idx].id){
        return true;
      }
    }
    return false;
  }

  swapCard(){
    var thisCardRater = this;
    var nextCard = this.props.currentCard;
    //if this is true at end, deck should be reset and unstudyable
    var cards = this.props.cards;
    if (cards.imperfects === this.props.usedCards.length){
      this.props.clearUsedCards();
    }

    Object.keys(cards).forEach((id, idx) => {
      var actualCard = cards[id];
      if (typeof actualCard !== "number"){
        if (actualCard.id !== thisCardRater.props.currentCard.id
          && !thisCardRater.cardInArray(actualCard, thisCardRater.props.usedCards)
          && actualCard.rating.rating < 5
          && nextCard === thisCardRater.props.currentCard){
            //if the actualCard meets all conditions for swapping...
            //push current actualCard and perform the swap
          nextCard = actualCard;
          thisCardRater.props.pushUsedCard(thisCardRater.props.currentCard);
          thisCardRater.props.setCurrentCard(nextCard);
        }
      }
    });
    if (nextCard === this.props.currentCard){
      thisCardRater.props.setCurrentCard(nextCard);
      console.log("ON LAST CARD OR AT 100%");
    }

  }


  render(){

    return(
      <div className="cardBottomRatings">
        <div> How well did you know this?</div>
        <div onClick={this.handleRatingClick}
          style={{background: "#A70D0D"}}>1</div>

        <div onClick={this.handleRatingClick}
          style={{background: "#D86206"}}>2</div>

        <div onClick={this.handleRatingClick}
          style={{background: "#C4A704"}}>3</div>

        <div onClick={this.handleRatingClick}
          style={{background: "#A3BF08"}}>4</div>

        <div onClick={this.handleRatingClick}
          style={{background: "#46B005"}}>5</div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
    currentDeck: state.decks.current,
    currentCard: state.cards.current,
    cards: state.cards.store,
    usedCards: state.cards.used,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendStateAsRating: (state) => dispatch(sendRating(state)),
    pushUsedCard: (card) => dispatch(pushUsedCard(card)),
    clearUsedCards: () => dispatch(clearUsedCards()),
    setCurrentCard: (card) => dispatch(receiveCurrentCard(card)),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardRater));
