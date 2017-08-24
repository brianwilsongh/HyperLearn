import React from 'react';
import { connect } from 'react-redux';
import { getSubjects } from '../../actions/deck_actions';
import DeckPanelItem from './deck_panel_item';


class DeckPanel extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    //fetch idx items here
  }


  render(){

    var retrievedDecks;
    if (this.props.decks.length > 0){
    retrievedDecks = this.props.decks;
    } else {
      retrievedDecks = [];
    }
    const deckDisplay = retrievedDecks.map((el, idx) => {
      return (<DeckPanelItem key={idx} deck={el} />);
    });


    return(
      <div className="deckPanel">
        <div className="deckPanelDisplaySubject">
          <h1> { this.props.currentSubject.title }</h1>
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


export default connect(mapStateToProps)(DeckPanel);
