import { ADD_NOTIFY, REMOVE_NOTIFY } from './types';

export function addNotify(msg, config) {
  return {
    type: ADD_NOTIFY,
    payload: {
      msg,
      config,
      closing: false,
    },
  };
}

export function removeNotify(id) {
  return {
    type: REMOVE_NOTIFY,
    payload: id,
  };
}
