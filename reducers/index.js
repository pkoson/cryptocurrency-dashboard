import { combineReducers } from 'redux';
import ui from './ui';
import currencies from './currencies';

export default combineReducers({
  ui,
  currencies
});
