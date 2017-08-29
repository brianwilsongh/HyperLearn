import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getSubjects } from '../../actions/deck_actions';
import DeckPanelItem from './deck_panel_item';


class DeckPanel extends React.Component {

  constructor(props){
    super(props);

    this.handleNewRedirect = this.handleNewRedirect.bind(this);
  }

  handleNewRedirect(e){
    e.stopPropagation();
    this.props.history.push(`/home/deck/new/`);
  }


  render(){

    var subjectDisplay = !this.props.currentSubject ? "unknown"
    : <h4>{this.props.currentSubject.title}</h4>;

    var retrievedDecks;
    if (this.props.decks.length > 0){
    retrievedDecks = this.props.decks;
    } else {
      retrievedDecks = [];
    }

    var deckDisplay = retrievedDecks.map((el, idx) => {
      return (<DeckPanelItem key={idx} deck={el} />);
    });

    var createNewDeck = null;
    if (this.props.currentSubject){
      createNewDeck = <button onClick={this.handleNewRedirect}>New Deck</button>;
    }

    return(
      <div className="deckPanel">
        <br />
        { createNewDeck }
        <div className="deckPanelDisplayDeck">
          { subjectDisplay }
        </div>
        Decks:
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


export default withRouter(connect(mapStateToProps)(DeckPanel));
