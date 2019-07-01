import React, {Component} from 'react';
import Nav from './Screens/Navbar';
import About from './Screens/About';
import Profile from './Screens/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      name: 'Arkademy',
      counter: 0,
    };
  }
  render () {
    // jsx expression {}
    return (
      <div>
        {/* <p>Hello {this.state.name}!</p>
        <Greeting name={trainerName} />
        <p>Counter = {this.state.counter}</p>
        <Counter value={this.state.counter} />
        <button
          onClick={() => {
            let name = this.state.name, counter = this.state.counter;
            this.setState ({
              name: name + ' Hebat',
              counter: counter + 1,
            });
          }}
        >
          <p>Ganti nama dan counter</p>
        </button> */}
        <Router>
          <Nav />
          <Route path={'/about'} component={About} />
          <Route path={'/profile'} component={Profile} />
        </Router>
      </div>
    );
  }
}

export default App;
