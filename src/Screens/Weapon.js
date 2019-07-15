import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getWeapon} from '../Publics/redux/actions/weapon';

class Weapon extends Component {
  state = {
    weapons: [],
  };
  componentDidMount = async () => {
    await this.props.dispatch(getWeapon());
    this.setState({
      weapons: this.props.weapon,
    });
  };
  render() {
    const {weapons} = this.state;
    const list = weapons.weaponList;
    console.log(list);
    return (
      <div>
        <ul>
          {list &&
            list.data.entries.length > 0 &&
            list.data.entries.map((entry, index) => {
              return (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <img
                    src={entry.image}
                    style={{height: 250, width: 250}}
                    alt={index.toString()}
                  />
                  <h3>{entry.name}</h3>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weapon: state.weapon,
  };
};

export default connect(mapStateToProps)(Weapon);
