import React from 'react';
import { connect } from 'react-redux';
import { getSubjects } from '../../actions/subject_actions';
import SubjectPanelItem from './subject_panel_item';


class SubjectPanel extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    //fetch idx items here
    this.props.fetchSubjects();
  }


  render(){

    var retrieved = this.props.subjects;
    const subjectDisplay = Object.keys(retrieved).map(key => {
    return (
    <SubjectPanelItem key={key} subject={retrieved[key]} />
      );
    });

    return(
      <div>
        Subjects:
        <br />
        { subjectDisplay }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
    subjects: state.subjects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubjects: () => dispatch(getSubjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubjectPanel);
