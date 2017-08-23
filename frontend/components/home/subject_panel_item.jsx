import React from 'react';
import { connect } from 'react-redux';
import { getSubjects } from '../../actions/subject_actions';


class SubjectPanelItem extends React.Component {

  constructor(props){
    super(props);

  }



  render(){
    return(
      <div className="homeSubjectItem">
        { this.props.subject.title }
      </div>
    );
  }

}


export default SubjectPanelItem;
