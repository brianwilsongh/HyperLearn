import React from 'react';
import { connect } from 'react-redux';
import { getSubjects, receiveCurrentSubject } from '../../actions/subject_actions';


class DeckPanelItem extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    console.log("just clicked on deck");
  }



  render(){
    return(
      <div className="homeDeckItem" onClick={this.handleClick}>
        { this.props.deck.title }
        <br />
        cards: { this.props.deck.card_count }
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default connect(null, mapDispatchToProps)(DeckPanelItem);
