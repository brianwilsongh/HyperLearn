import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSubjects, receiveCurrentSubject } from '../../actions/subject_actions';


class DeckPanelItem extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleModifyRedirect = this.handleModifyRedirect.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    console.log("just clicked on deck, this should probably go to study iface");
  }

  handleModifyRedirect(e){
    e.stopPropagation();
    this.props.history.push(`/home/deck/modify/${this.props.deck.id}`);
  }


  render(){
    return(
      <div className="homeDeckItem" onClick={this.handleClick}>
        { this.props.deck.title }
        <br />
        <button onClick={this.handleModifyRedirect}>Modify</button>
        cards: { this.props.deck.card_count }
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default withRouter(connect(null, mapDispatchToProps)(DeckPanelItem));
