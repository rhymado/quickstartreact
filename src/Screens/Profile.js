import React, {Component} from 'react';
import Greeting from '../Components/Greeting';

const trainerName = ['Tama'];

class Profile extends Component {
  render () {
    return (
      <div>
        <Greeting name={trainerName} />
      </div>
    );
  }
}

export default Profile;
