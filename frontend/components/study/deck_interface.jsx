import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getSubjects } from '../../actions/deck_actions';
import DeckInterfacePanel from './deck_interface_panel';


class DeckInterface extends React.Component {

  constructor(props){
    super(props);

  }


  render(){

    return(
      <div className="deckInterface">
        <div>
          <button onClick={this.returnHome}>Finished</button>
        </div>
        <DeckInterfacePanel />
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


export default withRouter(connect(mapStateToProps)(DeckInterface));
