import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSubjects, receiveCurrentSubject } from '../../actions/subject_actions';
import { getDecks } from '../../actions/deck_actions';
import SubjectPanelItem from './subject_panel_item';


class SubjectPanel extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    //fetch idx items here
    this.props.fetchSubjects();
    //set current subject to first in the array
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
        <Link to="/home/subject/new">New Subject</Link>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubjectPanel);
