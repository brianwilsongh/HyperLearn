import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { sendRating } from '../../actions/card_actions';


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
  }

  handleRatingClick(e){
    var rating = parseInt(e.currentTarget.innerText);
    this.state.rating = rating;
    this.props.sendStateAsRating(this.state);
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendStateAsRating: (state) => dispatch(sendRating(state)),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardRater));
