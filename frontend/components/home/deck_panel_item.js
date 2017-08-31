import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveCurrentDeck, wipeRatingsFromDeck } from '../../actions/deck_actions';


class DeckPanelItem extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleModifyRedirect = this.handleModifyRedirect.bind(this);
    this.handleBuildRedirect = this.handleBuildRedirect.bind(this);
    this.handleResetDeck = this.handleResetDeck.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.history.push(`/study/${this.props.deck.id}`);
  }

  handleModifyRedirect(e){
    e.stopPropagation();
    this.props.history.push(`/home/deck/modify/${this.props.deck.id}`);
  }

  handleBuildRedirect(e){
    e.stopPropagation();
    this.props.history.push(`/build/${this.props.deck.id}`);
  }

  handleResetDeck(e){
    e.stopPropagation();
    //wipe ratings will trigger recevie current deck to update current deck and store
    this.props.wipeRatings(this.props.deck.id);
  }


  render(){
    var buttons;
    if (this.props.deck.user_id === this.props.currentUser.id){
      buttons = (
        <div className="vertButtonRack"
          style={{"position": "relative", "left": "10%"}}>
        <button onClick={this.handleModifyRedirect}>Modify</button>
        <button onClick={this.handleBuildRedirect}>Build</button>
        <button onClick={this.handleResetDeck}>Reset</button>
        </div>
      );
    }

    return(
      <div className="homeDeckItem" onClick={this.handleClick}>
        <div className="horizContainer">
          <div className="studyDisplay"
            style={{ "max-height": "38%", "background": "#F6A90A",
               "padding-top": "3%", "padding-bottom": "3%",
               "padding-left": "1em", "padding-right": "1em",
               "color": "white"}}>
            <small>Use</small>
          </div>
          <div style={{"display": "flex", "flex-direction": "row",
          "min-width": "62%", "align-items": "center",
          "justify-content": "space-between"}}>
            <div className="vertContainer">
              <h3 style={{"align-self": "left"}}>{ this.props.deck.title }</h3>
              cards: { this.props.deck.card_count }
              <br />
              mastery: { this.props.deck.mastery }%
            </div>
            { buttons }
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    wipeRatings: (id) => dispatch(wipeRatingsFromDeck(id)),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeckPanelItem));
