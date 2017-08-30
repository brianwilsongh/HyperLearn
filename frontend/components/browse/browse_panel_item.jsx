import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveCurrentSubject } from '../../actions/subject_actions';


class BrowsePanelItem extends React.Component {

  constructor(props){
    super(props);
    this.handleFollowClick = this.handleFollowClick.bind(this);
  }

  handleFollowClick(e){

  }


  render(){

    var subjects;
    var subjectsOfUser = this.props.currentUser.subjects;
    if (this.props.category){
      subjects = this.props.category.subjects_of_category.map((sub, idx) => {
        var followed = false;
        subjectsOfUser.forEach((obj) => {
          if (sub.id === obj.id){
            followed = true;
          }
        });


        var follow = followed ?
        null : <button onClick={this.handleFollowClick}>Follow</button>;
        //follow is a boolean, if user NOT following we render a follow button

        return (
          <div className="browsePanelItem" key={idx}>
            {sub.title}
            {follow}
          </div>
        );
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
    followed_subjects: state.subjects.sorted,
    categories: state.subjects.categories,
  };
};

export default withRouter(connect(mapStateToProps, null)(BrowsePanelItem));
