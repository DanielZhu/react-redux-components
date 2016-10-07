import { ADD_NOTIFY, REMOVE_NOTIFY, START_CLOSING, CLOSE_ALL } from './types';

const initialState = {
  items: [],
};

export default function notify(state = initialState, { type, payload }) {
  switch (type) {

    case ADD_NOTIFY:
      return {
        ...state,
        items: state.items.concat({
          id: new Date().getTime(),
          msg: payload.msg,
          config: payload.config,
          closing: false,
        }),
      };

    case REMOVE_NOTIFY:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
      };

    case START_CLOSING:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === payload) {
            return {
              ...item,
              closing: true,
            };
          }
          return item;
        }),
      };

    case CLOSE_ALL:
      return {
        ...state,
        items: state.items.map(item => ({ ...item, closing: true })),
      };

    default:
      return state;
  }
}
