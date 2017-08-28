import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getSubjects, receiveCurrentSubject } from '../../actions/subject_actions';
import { getDecks } from '../../actions/deck_actions';
import { wipeCardState } from '../../actions/card_actions';
import SubjectPanelItem from './subject_panel_item';


class SubjectPanel extends React.Component {

  constructor(props){
    super(props);

    this.handleNewRedirect = this.handleNewRedirect.bind(this);
  }

  componentDidMount(){
    //fetch idx items here
    this.props.fetchSubjects();
    //reset the state of cards, as we could be returning from build or study
    this.props.clearCardData();
    //if there already is a current subject with decks, refresh decks
    if (!this.objEmpty(this.props.currentSubject)
      && this.props.currentSubject.deck_count > 0){
      this.props.retrieveDecksOfSubject(this.props.currentSubject);
    }
  }

  objEmpty(obj){
    if (Object.keys(obj).length === 0
    && obj.constructor === Object) {
      return true;
    }
    return false;
  }

  componentDidUpdate(){
    //Set current subject to first on initial load, then get its decks just this once
    if (this.props.subjects.length > 0 && this.objEmpty(this.props.currentSubject))
    {
      this.props.setCurrentSubject(this.props.subjects[0]);
    }

    if (!this.objEmpty(this.props.currentSubject)
      && this.props.currentDecks.length === 0
      && this.props.currentSubject.deck_count > 0){
      this.props.retrieveDecksOfSubject(this.props.currentSubject);
    }
  }

  handleNewRedirect(e){
    e.stopPropagation();
    this.props.history.push(`/home/subject/new/`);
  }


  render(){

    var retrievedSubjects;
    if (this.props.subjects.length > 0){
    retrievedSubjects = this.props.subjects;
    } else {
      retrievedSubjects = [];
    }
    const subjectDisplay = retrievedSubjects.map((el, idx) => {
      return (<SubjectPanelItem key={idx} subject={el} />);
    });

    return(
      <div className="subjectPanel" >
        Subjects:
        <br />
        <button onClick={this.handleNewRedirect}>New Subject</button>
        <br />
        { subjectDisplay }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
    subjects: state.subjects.sorted,
    currentSubject: state.subjects.current,
    currentDecks: state.decks.sorted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubjects: () => dispatch(getSubjects()),
    setCurrentSubject: (subject) => dispatch(receiveCurrentSubject(subject)),
    retrieveDecksOfSubject: (subject) => dispatch(getDecks(subject)),
    clearCardData: () => dispatch(wipeCardState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubjectPanel));
