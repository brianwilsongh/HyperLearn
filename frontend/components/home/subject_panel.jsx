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

    var retrieved;
    if (this.props.subjects.length > 0){
    retrieved = this.props.subjects;
    } else {
      retrieved = [];
    }
    const subjectDisplay = retrieved.map((el, idx) => {
      return (<SubjectPanelItem key={idx} subject={el} />);
    });

    debugger;

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
