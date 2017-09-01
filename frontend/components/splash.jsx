import React from 'react';


class Splash extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="splashContainer">
        <div>
          <img id="splash" src={window.splash}/>
        </div>
        <div className="textHolder">
          <h1>Super-Efficient studying</h1>
          <h1> for the 21st Century</h1>
        </div>

        <div className="textHolderTwo">
          <h2>Tracks your stats as you learn.</h2>
        </div>
      </div>
    );
  }

}


export default Splash;
