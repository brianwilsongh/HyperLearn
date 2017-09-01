import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getSubjects, receiveCurrentDeck } from '../../actions/deck_actions';
import DeckInterfacePanel from './deck_interface_panel';


class DeckInterface extends React.Component {

  constructor(props){
    super(props);
    this.returnHome = this.returnHome.bind(this);
  }

  returnHome(){
    this.props.setCurrentDeck({});
    this.props.history.push("/home");
  }


  render(){

    return(
      <div className="deckInterface">
        <div className="horizContainer">
          <div className="vertContainerListing" style={{"padding": "1.5em"}}>
            <big>{this.props.currentDeck.title}</big>
            <small>cards: {this.props.currentDeck.card_count}</small>
            <small>mastered: {this.props.currentDeck.cards_mastered}</small>
          </div>
          <div>
            <button style={{"padding": "1em", "margin": "1em"}}
              onClick={this.returnHome}><big>Done</big></button>
          </div>
        </div>
        <DeckInterfacePanel />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentSubject: state.subjects.current,
    currentDeck: state.decks.current,
    decks: state.decks.sorted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentDeck: (deck) => dispatch(receiveCurrentDeck(deck)),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeckInterface));
