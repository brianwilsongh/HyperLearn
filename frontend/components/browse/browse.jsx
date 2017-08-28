import React from 'react';
import BrowsePanel from './browse_panel';


class Browse extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="primaryComponent">
          <BrowsePanel />
      </div>
    );
  }

}


export default Browse;
