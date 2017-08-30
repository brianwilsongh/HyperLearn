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

  swapCard(){
    var thisCardRater = this;
    var nextCard = this.props.currentCard;
    //if this is true at end, deck should be reset and unstudyable
    var cards = this.props.cards;
    if (cards.imperfects === this.props.usedCards.length){
      debugger;
      this.props.clearUsedCards();
    }

    Object.keys(cards).forEach((id, idx) => {
      var actualCard = cards[id];
      if (typeof actualCard !== "number"){
        if (actualCard !== thisCardRater.props.currentCard
          && !thisCardRater.props.usedCards.includes(actualCard)
          && actualCard.rating.rating < 5
          && nextCard === thisCardRater.props.currentCard){
            //if the actualCard meets all conditions for swapping...
            //push current actualCard and perform the swap
          nextCard = actualCard;
        }
      }
    });
    if (nextCard === this.props.currentCard){
      console.log("DECK SHOULD READ 100%");
    }

    thisCardRater.props.pushUsedCard(thisCardRater.props.currentCard);
    thisCardRater.props.setCurrentCard(nextCard);
  }


  render(){

    return(
      <div className="cardBottomSection">
        <p>How well did you know this?</p>
        <div onClick={this.handleRatingClick}
          style={{background: "#A70D0D", padding: "15px", margin: "20px"}}>1</div>

        <div onClick={this.handleRatingClick}
          style={{background: "#D86206", padding: "15px", margin: "20px"}}>2</div>

        <div onClick={this.handleRatingClick}
          style={{background: "#C4A704", padding: "15px", margin: "20px"}}>3</div>

        <div onClick={this.handleRatingClick}
          style={{background: "#A3BF08", padding: "15px", margin: "20px"}}>4</div>

        <div onClick={this.handleRatingClick}
          style={{background: "#46B005", padding: "15px", margin: "20px"}}>5</div>
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
