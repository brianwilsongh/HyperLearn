import React from 'react';
import { connect } from 'react-redux';
import { getSubjects, receiveCurrentSubject } from '../../actions/subject_actions';
import BrowsePanelItem from './browse_panel_item';


class BrowsePanel extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    //fetch subjects so that we have categories
    this.props.fetchSubjects();
  }

  render(){

    var categories;
    if (this.props.categories){
      categories = this.props.categories.map((cat, idx) => {
        return (
          <BrowsePanelItem key={idx} category={cat} />
        );
      });
    }

    return(
      <div className="vertContainer">
        <h3>Subjects by Category:</h3>
        <div className="browsePanel">
          { categories }
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
    subjects: state.subjects.sorted,
    categories: state.subjects.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubjects: () => dispatch(getSubjects()),
    setCurrentSubject: (subject) => dispatch(receiveCurrentSubject(subject)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePanel);
