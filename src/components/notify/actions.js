
export function addNotify(config) {
  return {
    type: 'ADD_NOTIFY',
    config
  }
}

export function removeNotify(id) {
  return {
    type: 'REMOVE_NOTIFY',
    payload: id
  }
}