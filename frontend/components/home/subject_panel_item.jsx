import React from 'react';
import { connect } from 'react-redux';
import { getSubjects, receiveCurrentSubject } from '../../actions/subject_actions';


class SubjectPanelItem extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.sendCurrentSubject(this.props.subject);
  }



  render(){
    return(
      <div className="homeSubjectItem" onClick={this.handleClick}>
        { this.props.subject.title }
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    sendCurrentSubject: (subject) => dispatch(receiveCurrentSubject(subject))
  };
};


export default connect(null, mapDispatchToProps)(SubjectPanelItem);
