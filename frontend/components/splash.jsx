import React from 'react';


class Splash extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="primaryComponent">
        <h1>hello, welcome to the app. this is the H1</h1>
        <img id="splash" src={window.splash}/>
      </div>
    );
  }

}


export default Splash;
