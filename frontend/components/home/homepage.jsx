import React from 'react';
import SubjectPanel from './subject_panel';


class HomePage extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="primaryComponent">
        <div>
          <SubjectPanel />
        </div>
      </div>
    );
  }

}


export default HomePage;
