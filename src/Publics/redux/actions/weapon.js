import axios from 'axios';

export const getWeapon = () => {
  return {
    type: 'GET_WEAPON',
    payload: axios.get(`https://fortnite-api.theapinetwork.com/weapons/get`, {
      headers: {
        Authorization: process.env.REACT_APP_KEY,
      },
    }),
  };
};
