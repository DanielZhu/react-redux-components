import { combineReducers } from 'redux';
import notify from './components/notify/reducer';
import dialog from './components/dialog/reducer';

module.exports = combineReducers({
  components: combineReducers({ notify, dialog }),
});
