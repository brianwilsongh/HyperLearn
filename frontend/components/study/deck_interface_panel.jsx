import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getSubjects } from '../../actions/deck_actions';
import CircularProgressbar from 'react-circular-progressbar';
import { Line } from 'rc-progress';


class DeckInterfacePanel extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      ratings: {1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
    };
    this.calculateRatingStats = this.calculateRatingStats.bind(this);
  }

  objEmpty(obj){
    if (Object.keys(obj).length === 0
    && obj.constructor === Object) {
      return true;
    }
    return false;
  }

  calculateRatingStats(){
    var newRatings = {1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    var lines;
    var cards = this.props.currentCards;
    if (!this.objEmpty(cards)){
      lines = Object.keys(cards).map((key, idx) => {
        debugger;
        var rating = cards.key.rating;
        newRatings[rating] ++;
        return null;
      });
    }
    debugger;

  }

  render(){

    this.calculateRatingStats();

    return(
      <div className="deckInterfacePanel">
      <CircularProgressbar percentage={this.props.currentDeck.mastery}
        strokeWidth="5"/>
      <Line percent="15" strokeWidth="3" trailWidth="3" trailColor="#C6C0B8"
          strokeColor="#F6A90A" strokeLinecap="square" />
        <Line percent="99" strokeWidth="3" trailWidth="3" trailColor="#C6C0B8"
          strokeColor="#FFF666" strokeLinecap="square" />
        <Line percent="62" strokeWidth="3" trailWidth="3" trailColor="#C6C0B8"
          strokeColor="#F6A90A" strokeLinecap="square" />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentDeck: state.decks.current,
    currentCards: state.cards.store,
  };
};


export default withRouter(connect(mapStateToProps)(DeckInterfacePanel));
