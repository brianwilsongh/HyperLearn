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
        { subjectDisplay }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
    subjects: state.subjects.sorted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubjects: () => dispatch(getSubjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubjectPanel);
