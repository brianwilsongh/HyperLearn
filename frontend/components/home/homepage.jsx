import React from 'react';
import SubjectPanel from './subject_panel';
import DeckPanel from './deck_panel';
import UserPanel from './user_panel';


class HomePage extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="primaryComponent">
        <div className="homepagePanels">
          <SubjectPanel />
          <DeckPanel />
        </div>
        <UserPanel />
      </div>
    );
  }

}


export default HomePage;
