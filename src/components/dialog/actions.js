import { RRC_DIALOG_OPEN, RRC_DIALOG_CLOSE, RRC_DIALOG_REGISTER } from './types';

export function registerDialog(id, config) {
  return {
    type: RRC_DIALOG_REGISTER,
    payload: {
      id,
      config,
      open: false,
    },
  };
}

export function closeDialog(id) {
  return {
    type: RRC_DIALOG_CLOSE,
    payload: id,
  };
}

export function openDialog(id) {
  return {
    type: RRC_DIALOG_OPEN,
    payload: id,
  };
}
