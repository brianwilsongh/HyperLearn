import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCurrentDeck } from '../../actions/deck_actions';


class Build extends React.Component {

  constructor(props){
    super(props);

    this.deck_id = this.props.location.pathname
    .split("/")[this.props.location.pathname.split("/").length - 1];

  }

  componentWillMount(){
    this.props.setCurrentDeck(this.deck_id);
  }

  render(){
    return(
      <div className="primaryComponent">
        <div className="homepagePanels">
          We're gonna build a deck!
        </div>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentDeck: (deck) => dispatch(getCurrentDeck(deck)),
  };
};


export default withRouter(connect(null, mapDispatchToProps)(Build));
