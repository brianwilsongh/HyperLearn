import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


class CardRater extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      userId: this.props.currentUser.id,
      cardId: this.props.currentCard.id,
      rating: this.props.currentCard.rating,
    };

    this.handleRatingClick = this.handleRatingClick.bind(this);
  }

  handleRatingClick(e){
    e.preventDefault();
    var rating = parseInt(e.innerText);
    debugger;
  }


  render(){

    return(
      <div className="cardBottomSection">
        Answer is shown
        <div onClick={this.handleRatingClick} style={{color: "#A70D0D"}}>1</div>
        <div onClick={this.handleRatingClick} style={{color: "#D86206"}}>2</div>
        <div onClick={this.handleRatingClick} style={{color: "#C4A704"}}>3</div>
        <div onClick={this.handleRatingClick} style={{color: "#A3BF08"}}>4</div>
        <div onClick={this.handleRatingClick} style={{color: "#46B005"}}>5</div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
    currentCard: state.cards.current,
  };
};


export default withRouter(connect(mapStateToProps)(CardRater));
