import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import NavBar from './nav_bar';

export const App = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="AppDiv">
          <Route path="/" component={NavBar} />
        </div>
      </HashRouter>
    </Provider>
  );
};

export default App;
