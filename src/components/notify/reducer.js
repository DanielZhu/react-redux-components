// import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';
const initialState = {
	items: []
};

export default function notify(state = initialState, {type, payload}) {
  switch (type) {
  case 'ADD_NOTIFY':
    return {
    	...state,
    	items: state.items.concat({
        id: new Date().getTime(),
        msg: payload.msg,
        config: payload.config,
      })
    };
  case 'REMOVE_NOTIFY':
    return {
      ...state,
      items: state.items.filter(item => item.id !== payload)
    }
  default:
    return state;
  }
}
