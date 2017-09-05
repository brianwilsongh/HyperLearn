import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import UserPanel from './session/user_panel';
import { loginDemo } from '../actions/session_actions';
import { receiveCurrentDeck } from '../actions/deck_actions';

class NavBar extends React.Component {

  constructor(props){
    super(props);

    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.wipeCurrentDeck = this.wipeCurrentDeck.bind(this);
  }

  handleDemoLogin(e){
    e.preventDefault();
    this.props.loginDemo().then(this.props.history.push("/"));
  }

  wipeCurrentDeck(){
    //wipe current deck because returning from modify page will need refreshed deck data
    //in the future, this will also update decks after returning from other areas of site
    this.props.setCurrentDeck({});
  }

  render(){
    if (this.props.currentUser){
      return(
        <div className="navigation">
          <Link to="/home" onClick={this.wipeCurrentDeck}>
            <img id="mainLogo" src={window.logoPath}/>
            HyperLearn
          </Link>
          <div className="browseLink">
            <Link to="/browse">Find Subjects</Link>
          </div>

          <UserPanel />
        </div>
      );
    } else {
      return (
        <div className="navigation">
          <Link to="/">
            <img id="mainLogo" src={window.logoPath}/>
            HyperLearn
          </Link>

          <div className="Session">
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/" onClick={this.handleDemoLogin}>DEMO</Link>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.current_user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginDemo: () => dispatch(loginDemo()),
    setCurrentDeck: (deck) => dispatch(receiveCurrentDeck(deck))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
