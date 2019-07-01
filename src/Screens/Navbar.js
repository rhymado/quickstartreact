import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render () {
    return (
      <div
        style={{
          backgroundColor: 'lightblue',
          color: 'white',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        <ul>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/profile'}>Profile</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
