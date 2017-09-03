import React from 'react';
import { connect } from 'react-redux';
import { sendQueryForSubjects } from '../../actions/subject_actions';
import SearchResultsPanel from './search_results_panel';


class SearchPanel extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      query: "",
    };

    this.handleQueryClick = this.handleQueryClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(key){
    return (e) => {
      this.setState({
        [key]: e.currentTarget.value
      });
    };
  }

  handleQueryClick(e){
    e.preventDefault();
    this.props.sendQueryForSubjects(this.state.query);
  }

  render(){

    return(
      <div className="vertContainer">
        <form onSubmit={this.handleEditClick} style={{"margin": "2em"}}>

          <br />
          <h4>Search:</h4>
          <input onChange={this.handleInputChange("query")}
          placeholder="ex. 'Trivia'"
          value={this.state.query} />

        <button onClick={this.handleQueryClick} style={{"padding": "0.8em"}}>Go</button>
        </form>

        <SearchResultsPanel />
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
    sendQueryForSubjects: (term) => dispatch(sendQueryForSubjects(term)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
