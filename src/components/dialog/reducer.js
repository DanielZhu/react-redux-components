import { RRC_DIALOG_OPEN, RRC_DIALOG_CLOSE, RRC_DIALOG_REGISTER } from './types';

function checkExistingDialog(items, { id }) {
  if (!items.length) return false;
  return items.filter(item => item.id === id).length;
}

const initialState = {
  items: [{
    id: 'dialog1',
    open: false,
  }],
};


export default function dialog(state = initialState, { type, payload }) {
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

    case RRC_DIALOG_REGISTER: {
      if (checkExistingDialog(state.items, payload)) return state;
      return {
        ...state,
        items: [].concat(state.items).concat(payload),
      };
    }

    default:
      return state;
  }
}
