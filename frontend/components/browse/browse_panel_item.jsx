import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveCurrentSubject } from '../../actions/subject_actions';


class BrowsePanelItem extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){

  }


  render(){

    var subjects;
    if (this.props.category){
      subjects = this.props.category.subjects_of_category.map((sub, idx) => {
        return (<p key={idx}>{sub.title}</p>);
      });
    }

    return(
      <div>
        <h4>{this.props.category.name}</h4>
        <br />
        { subjects }
      </div>
    );

  }

}



export default withRouter(connect(null, null)(BrowsePanelItem));
