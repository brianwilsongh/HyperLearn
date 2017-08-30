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
          <h2>Efficient, Cost-Free Studying for the 21st Century</h2>
        </div>

        <div className="textHolderTwo">
          <h2>Built with the Latest Web Technologies</h2>
        </div>
      </div>
    );
  }

}


export default Splash;
