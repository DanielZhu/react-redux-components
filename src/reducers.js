import { combineReducers } from 'redux';
import notify from './components/notify/reducer';

module.exports = combineReducers({
  components: combineReducers({notify})
});
