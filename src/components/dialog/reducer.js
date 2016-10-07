import { RRC_DIALOG_OPEN, RRC_DIALOG_CLOSE, RRC_DIALOG_REGISTER } from './types';


export default function dialog(state = { items: [] }, { type, payload }) {
  switch (type) {

    case RRC_DIALOG_OPEN: {
      if (state.items.filter(item => item.open === true)[0]) {
        console.error('Already have one dialog open!');
        return state;
      }
      return {
        ...state,
        items: state.items.map((item) => {
          console.log(item, payload);
          if (item.id !== payload) return item;
          return {
            ...item,
            open: true,
          };
        }),
      };
    }

    case RRC_DIALOG_CLOSE:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== payload) return item;
          return {
            ...item,
            open: false,
          };
        }),
      };

    case RRC_DIALOG_REGISTER:
      return {
        ...state,
        items: [].concat(state.items).concat(payload),
      };

    default:
      return state;
  }
}
