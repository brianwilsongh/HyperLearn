import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSubjects, receiveCurrentSubject } from '../../actions/subject_actions';
import SearchResultsPanelItem from './search_results_panel_item';


class SearchResultsPanel extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    var subjects = null;
    if (this.props.returnedSubjects.length > 0){
      subjects = this.props.returnedSubjects.map((sub, idx) => {
        return (
          <SearchResultsPanelItem key={idx} subject={sub} />
        );
      });
    }

    var announcer = subjects ? <h3>Results:</h3> : null;

    return(
      <div className="vertContainer">
        {announcer}
        <div className="searchResultsPanel">
          { subjects }
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    returnedSubjects: state.subjects.queried,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubjects: () => dispatch(getSubjects()),
    setCurrentSubject: (subject) => dispatch(receiveCurrentSubject(subject)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPanel);
