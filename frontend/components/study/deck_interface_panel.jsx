import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getSubjects } from '../../actions/deck_actions';
import { Circle, Line } from 'rc-progress';


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
        var rating = cards[key].rating.rating;
        //not a typo, twice because card holds a rating OBJECT not prop!
        newRatings[rating] ++;
        newRatings["n"] ++;
        pointAccumulator += rating;
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
      return (<div key={idx} className="horizContainer" style={{"margin": "0.7em"}}>
      <div style={{"width": "10%"}}>{idx + 1}</div>
      <div style={{"height": "100%", "width": "100%"}}>{i}</div>
    </div>);
    });

    return(
      <div className="deckInterfacePanel">
      <div className="circleStat">
        <div><Circle percent={builtStats ? builtStats["overall"] : 0}
          strokeWidth="6"
          strokeColor="#F6A90A"
          trailWidth="0"
          strokeLinecap="square"/>
        </div>
        <div className="circleStatNumber">
          <div>
            <big>{builtStats ? builtStats["overall"] : 0}</big>
            <small style={{"fontSize": "0.7em"}}>%</small>
          </div>
          <small style={{"fontSize": "0.4em"}}>mastery</small>
        </div>
      </div>
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
