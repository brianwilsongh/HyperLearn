import React from 'react';
import BrowsePanel from './browse_panel';
import SearchPanel from './search_panel';


class Browse extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="vertContainer">
          <BrowsePanel />
          <SearchPanel />
      </div>
    );
  }

}


export default Browse;
