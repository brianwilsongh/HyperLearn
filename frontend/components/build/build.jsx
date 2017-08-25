import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCurrentDeck } from '../../actions/deck_actions';
import CardForm from '../card/card_form';


class Build extends React.Component {

  constructor(props){
    super(props);

    this.deck_id = this.props.location.pathname
    .split("/")[this.props.location.pathname.split("/").length - 1];

  }

  componentDidMount(){
    this.props.setCurrentDeck(this.deck_id);
  }

  objEmpty(obj){
    if (Object.keys(obj).length === 0
    && obj.constructor === Object) {
      return true;
    }
    return false;
  }

  render(){
    var forms;
    if (!this.objEmpty(this.props.current_deck)){
      forms = this.props.cards.map((card, idx) => {
        return (<CardForm key={idx} card={card} />);
      });
    } else {
      forms = <p>Loading...</p>;
    }

    return(
      <div className="primaryComponent">
          { forms }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    current_deck: state.decks.current,
    cards: state.decks.current.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentDeck: (deck) => dispatch(getCurrentDeck(deck)),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Build));
