import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSubjects } from '../../actions/deck_actions';
import DeckPanelItem from './deck_panel_item';


class DeckPanel extends React.Component {

  constructor(props){
    super(props);

  }



  render(){

    var subjectDisplay = !this.props.currentSubject ? "unknown"
    : <h1>{this.props.currentSubject.title}</h1>;

    var retrievedDecks;
    if (this.props.decks.length > 0){
    retrievedDecks = this.props.decks;
    } else {
      retrievedDecks = [];
    }

    var deckDisplay = retrievedDecks.map((el, idx) => {
      return (<DeckPanelItem key={idx} deck={el} />);
    });

    var newDeckLink = null;
    if (this.props.currentSubject){
      newDeckLink = <Link to="/home/deck/new">New Deck</Link>;
    }

    return(
      <div className="deckPanel">
        <div className="deckPanelDisplaySubject">
          { subjectDisplay }
        </div>
        Decks:
        <br />
          { newDeckLink }
        <br />
        { deckDisplay }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentSubject: state.subjects.current,
    decks: state.decks.sorted,
  };
};


export default connect(mapStateToProps)(DeckPanel);
