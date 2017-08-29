import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


class CardRater extends React.Component {

  constructor(props){
    super(props);

    debugger;
    this.state = {
      userId: this.props.currentUser.id,
      cardId: this.props.currentCard.id,
    };

    this.handleRatingClick = this.handleRatingClick.bind(this);
  }

  handleRatingClick(e){
    e.preventDefault();
    debugger;
  }

  render(){

    var colors = ["#A70D0D", "#D86206", "#C4A704", "#A3BF08", "#46B005"];
    for (var itr = 1; itr < 6; itr++){
      <div onClick={this.handleRatingClick} id={itr}>{itr}</div>;
    }

    return(
      <div className="cardBottomSection">
        Answer is shown
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
