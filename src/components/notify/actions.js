import { ADD_NOTIFY, REMOVE_NOTIFY, START_CLOSING, CLOSE_ALL } from './types';

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

export function destroy(id) {
  return {
    type: REMOVE_NOTIFY,
    payload: id,
  };
}

export function close(id) {
  return {
    type: START_CLOSING,
    payload: id,
  };
}

export function closeAll() {
  return {
    type: CLOSE_ALL,
  };
}
