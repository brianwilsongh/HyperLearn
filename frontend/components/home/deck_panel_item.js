import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveCurrentDeck } from '../../actions/deck_actions';


class DeckPanelItem extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleModifyRedirect = this.handleModifyRedirect.bind(this);
    this.handleBuildRedirect = this.handleBuildRedirect.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    console.log("just clicked on deck, this should probably go to study iface");
  }

  handleModifyRedirect(e){
    e.stopPropagation();
    this.props.history.push(`/home/deck/modify/${this.props.deck.id}`);
  }

  handleBuildRedirect(e){
    e.stopPropagation();
    this.props.history.push(`/build/${this.props.deck.id}`);
  }


  render(){
    var buttons;
    if (this.props.deck.user_id === this.props.currentUser.id){
      buttons = (
        <div>
        <button onClick={this.handleModifyRedirect}>Modify</button>
        <button onClick={this.handleBuildRedirect}>Build</button>
        </div>
      );
    }

    return(
      <div className="homeDeckItem" onClick={this.handleClick}>
        { this.props.deck.title }
        <br />
        { buttons }
        cards: { this.props.deck.card_count }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
  };
};


export default withRouter(connect(mapStateToProps)(DeckPanelItem));
