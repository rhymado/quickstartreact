import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Nav from './Components/Nav';
import Profile from './Screens/Profile';
import Weapon from './Screens/Weapon';
import store from './Publics/redux/store';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Arkademy',
      counter: 0,
    };
  }
  render() {
    // jsx expression {}
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Nav />
            <Route path={'/weapon'} component={Weapon} />
            <Route path={'/profile'} component={Profile} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
