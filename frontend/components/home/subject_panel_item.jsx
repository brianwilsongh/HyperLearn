import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveCurrentSubject } from '../../actions/subject_actions';
import { getDecks } from '../../actions/deck_actions';


class SubjectPanelItem extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleModifyRedirect = this.handleModifyRedirect.bind(this);
  }

  handleClick(e){
    this.props.sendCurrentSubject(this.props.subject);
    this.props.retrieveDecksOfSubject(this.props.subject);
  }

  handleModifyRedirect(e){
    e.stopPropagation();
    this.props.history.push(`/home/subject/modify/${this.props.subject.id}`);
  }



  render(){

    var editButton;
    if (this.props.subject.made_by_current_user){
      editButton = <button onClick={this.handleModifyRedirect}>modify</button>;
    } else {
      editButton = null;
    }

    return(
      <div className="homeSubjectItem" onClick={this.handleClick}>
        { this.props.subject.title }
        <br />
        {editButton}
        <br />
        cards: { this.props.subject.card_count }
        <br />
        mastery: { this.props.subject.mastery }%
        <br />
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


export default withRouter(connect(null, mapDispatchToProps)(SubjectPanelItem));
