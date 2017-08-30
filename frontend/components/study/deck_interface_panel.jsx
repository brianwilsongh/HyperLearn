import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getSubjects } from '../../actions/deck_actions';
import CircularProgressbar from 'react-circular-progressbar';
import { Line } from 'rc-progress';


class DeckInterfacePanel extends React.Component {

  constructor(props){
    super(props);

    this.buildRatingStats = this.buildRatingStats.bind(this);
  }

  objEmpty(obj){
    if (Object.keys(obj).length === 0
    && obj.constructor === Object) {
      return true;
    }
    return false;
  }

  buildRatingStats(){
    var newRatings = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      "n": 0,
      "overall": 0,
    };

    var cards = this.props.cards;
    var pointAccumulator = 0;
    if (!this.objEmpty(cards)){
      Object.keys(cards).forEach((key, idx) => {
        if (key !== "imperfects"){
          //imperfects are stored in store, skip over it
          var rating = cards[key].rating.rating;
          //not a typo, twice because card holds a rating OBJECT not prop!
          newRatings[rating] ++;
          newRatings["n"] ++;
          pointAccumulator += rating;
        }
        return null;
      });
    }
    newRatings["overall"] = (parseInt(100 * pointAccumulator / (newRatings["n"] * 5) ));
    return newRatings;
  }

  render(){

    var builtStats;
    if (!this.objEmpty(this.props.cards)){
      builtStats = this.buildRatingStats();
    }

    var lines = [];
    //red to green
    var colors = ["#A70D0D", "#D86206", "#C4A704", "#A3BF08", "#46B005"];
    if (builtStats){
      for (var itr = 1; itr < 6; itr ++){
        lines.push(
        <Line
          key={itr}
          percent={parseInt(100 * builtStats[itr] / builtStats["n"])}
          strokeColor={colors[(itr - 1)]}
          trailColor="#C6C0B8"
          strokeWidth="3"
          strokeLinecap="square" />);
      }
    }
    var components = lines.map((i, idx) => {
      return (<span key={idx} className="deckInterfaceDataLine">
      {idx + 1}{i}</span>);
    });

    return(
      <div className="deckInterfacePanel">
      <CircularProgressbar percentage={builtStats ? builtStats["overall"] : 0}
        strokeWidth="5"/>
      <div className="deckInterfaceStats">
        {components}
      </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentDeck: state.decks.current,
    cards: state.cards.store,
  };
};


export default withRouter(connect(mapStateToProps)(DeckInterfacePanel));
