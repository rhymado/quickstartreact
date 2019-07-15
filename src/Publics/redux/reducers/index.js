import {combineReducers} from 'redux';

import user from './user';
import weapon from './weapon';

const appReducer = combineReducers({
  user,
  weapon,
});

export default appReducer;
