import React from 'react';
import { connect } from 'react-redux';
import { sendFollow } from '../../actions/subject_actions';


class SearchResultsPanelItem extends React.Component {

  constructor(props){
    super(props);
    this.handleFollowClick = this.handleFollowClick.bind(this);
  }

  handleFollowClick(subjectId){
    this.props.sendFollow(this.props.subject.id);
  }

  render(){

    var button = <button onClick={this.handleFollowClick.bind(this)}>Follow</button>;
    var thisSubject = this.props.subject;
    this.props.subjectsOfUser.forEach((el) => {
      if (el.id === thisSubject.id){
        //if you find this subject in the user's subjects, kill the button
        button = null;
      }
    });

    return (
      <div className="browsePanelItem">
        <div className="vertContainerListing">
          <div className="horizContainer">
            {this.props.subject.title}
            {button}
          </div>
          <div className="vertContainerListing" style={{"padding": "0.5em"}}>
            <small>last updated: {/\d+-\d+-\d+/.exec(this.props.subject.updated_at)[0]}</small>
            <small>followers: {this.props.subject.follow_count}</small>
            <small>cards: {this.props.subject.card_count}</small>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    subjectsOfUser: state.session.current_user.subjects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendFollow: (id) => dispatch(sendFollow(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPanelItem);
