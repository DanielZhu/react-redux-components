
export function addNotify(msg, config) {
  return {
    type: 'ADD_NOTIFY',
    payload: {
      msg,
      config,
    },
  };
}

export function removeNotify(id) {
  return {
    type: 'REMOVE_NOTIFY',
    payload: id,
  };
}
