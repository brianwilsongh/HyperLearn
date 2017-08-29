import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getSubjects } from '../../actions/deck_actions';
import CardViewer from './card_viewer';


class CardInterface extends React.Component {

  constructor(props){
    super(props);

  }


  render(){

    return(
      <div className="cardContainer">
        Card Container
        <CardViewer />
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


export default withRouter(connect(mapStateToProps)(CardInterface));
