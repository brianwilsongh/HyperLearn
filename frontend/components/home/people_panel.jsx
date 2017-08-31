import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSubjects, receiveCurrentSubject } from '../../actions/subject_actions';
import { getDecks } from '../../actions/deck_actions';
import { wipeCardState } from '../../actions/card_actions';
import SubjectPanelItem from './subject_panel_item';


class PeoplePanel extends React.Component {

  constructor(props){
    super(props);
  }


  objEmpty(obj){
    if (Object.keys(obj).length === 0
    && obj.constructor === Object) {
      return true;
    }
    return false;
  }


  render(){

    var followers;
    if (this.props.currentSubject.followers){
      if (this.props.currentSubject.followers.length > 0){
        followers = this.props.currentSubject.followers.map((follower, idx) =>
        (<div key={idx} className="horizContainer" style={{"padding": "1.2em"}}>
          <div className="horizContainer">

            { follower.avatar ? <img src={follower.avatar} className="userAvatar" />
           : <img src={window.logoPath} className="userAvatar" />}

            { follower.f_name + " " + follower.l_name }
          </div>
           <small>{` (${follower.username})`}</small>
        </div>));
      }
    }

    var fans;
    if (this.props.currentUser.fans){
      if (this.props.currentUser.fans.length > 0){
        fans = this.props.currentUser.fans.map((fan, idx) =>
        (<div key={idx} className="horizContainer" style={{"padding": "1.2em"}}>
          <div className="horizContainer">

            { fan.avatar ? <img src={fan.avatar} className="userAvatar" />
          : <img src={window.logoPath} className="userAvatar" />}

            { fan.f_name + " " + fan.l_name }
          </div>
          <small>{` (${fan.username})`}</small>
        </div>));
      }
    }

    return(
      <div className="peoplePanel" >
        <div>
        <h4>Following This Subject:</h4>
        { followers }
      </div>

      <div>
        <h4>Following Your subjects:</h4>
        { fans }
      </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
    currentSubject: state.subjects.current,
    fans: state.session.current_user.fans,
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

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePanel);
