import React from 'react';
import { Link } from 'react-router-dom';
import UserPanel from './user_panel';

class NavBar extends React.Component {


  render(){
    return(
      <div className="Navigation">
        <Link to="/">
          <img src="/app/assets/images/placeholder_logo.png" width="20" height="20" />
        </Link>

        <UserPanel />
      </div>
    );
  }
}

export default NavBar;
