import React from 'react';
import { connect } from 'react-redux';
import { receiveCurrentSubject } from '../../actions/subject_actions';
import { getDecks } from '../../actions/deck_actions';


class SubjectPanelItem extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.sendCurrentSubject(this.props.subject);
    this.props.retrieveDecksOfSubject(this.props.subject);
  }



  render(){

    var editButton = (this.props.subject.made_by_current_user) ? "Edit" : "";

    return(
      <div className="homeSubjectItem" onClick={this.handleClick}>
        { this.props.subject.title }
        <br />
        {editButton}
        <br />
        { this.props.subject.card_count }
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    sendCurrentSubject: (subject) => dispatch(receiveCurrentSubject(subject)),
    retrieveDecksOfSubject: (subject) => dispatch(getDecks(subject))
  };
};


export default connect(null, mapDispatchToProps)(SubjectPanelItem);
