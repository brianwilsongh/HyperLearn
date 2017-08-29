import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getSubjects } from '../../actions/deck_actions';
import CardRater from './card_rater';


class CardViewer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      side: "Q",
    };
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard(){
    var newState = (this.state.side === "Q") ? {side: "A"} : {side: "Q"};
    this.setState(newState);
  }

  render(){
    var status = this.state.side === "Q" ? "Question:" : "Answer:";
    var display = this.state.side === "Q" ? this.props.currentCard.question : this.props.currentCard.answer;
    var bottomSection = (this.state.side === "Q" ?
    <div className="cardBottomSection">Show Answer</div> :
      <CardRater/>);

    return(
      <div className="fullHeight">
      <div className="cardViewer" onClick={this.flipCard}>
        {status}
        <div className="cardContent">
        {display}
        </div>
      </div>
      {bottomSection}
    </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentCard: state.cards.current,
    currentSubject: state.subjects.current,
    decks: state.decks.sorted,
  };
};


export default withRouter(connect(mapStateToProps)(CardViewer));
