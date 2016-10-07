import { RRC_NOTIFY_OPEN, RRC_NOTIFY_CLOSE, RRC_NOTIFY_DESTROY, RRC_NOTIFY_CLOSE_ALL } from './types';

const initialState = {
  items: [],
};

export default function notify(state = initialState, { type, payload }) {
  switch (type) {

    case RRC_NOTIFY_OPEN:
      return {
        ...state,
        items: state.items.concat({
          id: new Date().getTime(),
          msg: payload.msg,
          config: payload.config,
          closing: false,
        }),
      };

    case RRC_NOTIFY_DESTROY:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
      };

    case RRC_NOTIFY_CLOSE:
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

    case RRC_NOTIFY_CLOSE_ALL:
      return {
        ...state,
        items: state.items.map(item => ({ ...item, closing: true })),
      };

    default:
      return state;
  }
}
