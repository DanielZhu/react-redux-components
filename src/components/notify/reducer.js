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
        msg: 'Ola2',
      })
    };
  case 'REMOVE_NOTIFY':
    console.log(payload);
    return {
      ...state,
      items: state.items.filter(item => item.id !== payload)
    }
  default:
    return state;
  }
}
