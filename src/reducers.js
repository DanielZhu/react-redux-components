import { combineReducers } from 'redux';
import notify from './components/notify/reducer';

const rootReducer = combineReducers({
  notify,
});

export default rootReducer;
