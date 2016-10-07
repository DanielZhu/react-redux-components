import { RRC_NOTIFY_OPEN, RRC_NOTIFY_CLOSE, RRC_NOTIFY_DESTROY, RRC_NOTIFY_CLOSE_ALL } from './types';

export function addNotify(msg, config) {
  return {
    type: RRC_NOTIFY_OPEN,
    payload: {
      msg,
      config,
      closing: false,
    },
  };
}

export function destroy(id) {
  return {
    type: RRC_NOTIFY_DESTROY,
    payload: id,
  };
}

export function close(id) {
  return {
    type: RRC_NOTIFY_CLOSE,
    payload: id,
  };
}

export function closeAll() {
  return {
    type: RRC_NOTIFY_CLOSE_ALL,
  };
}
