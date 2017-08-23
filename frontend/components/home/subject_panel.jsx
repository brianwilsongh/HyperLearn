import React from 'react';
import { connect } from 'react-redux';


class SubjectPanel extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div>

        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
  };
};

export default connect(mapStateToProps)(SubjectPanel);
