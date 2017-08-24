import React from 'react';
import { connect } from 'react-redux';
import { getSubjects } from '../../actions/subject_actions';
import DeckPanelItem from './subject_panel_item';


class DeckPanel extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    //fetch idx items here

    this.props.fetchDecksFromSubject();
  }


  render(){

    var retrieved;
    if (this.props.subjects.length > 0){
    retrieved = this.props.subjects;
    } else {
      retrieved = [];
    }
    const deckDisplay = retrieved.map((el, idx) => {
      return (<DeckPanelItem key={idx} subject={el} />);
    });

    return(
      <div>
        Subjects:
        <br />
        { deckDisplay }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
    currentSubject: state.subjects.current,
  };
};


export default connect(mapStateToProps)(DeckPanel);
