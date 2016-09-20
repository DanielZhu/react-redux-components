// import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';
const initialState = {
	items: []
};

export default function counter(state = initialState, action) {
  switch (action.type) {
  case 'ADD_NOTIFY':
    return {
    	...state,
    	items: state.items.concat('new')
    };
  case 'DECREMENT_COUNTER':
    return state - 1;
  default:
    return state;
  }
}
