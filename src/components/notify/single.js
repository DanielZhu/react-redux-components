import React from 'react';
import cx from 'classnames';

import './notify.css';
import IconSuccess from '../../icons/success';
import IconError from '../../icons/error';
import CloseIcon from '../../icons/close';

const Component = ({ msg, transitionState, close, type }) => {
  const getClass = (state) => {
    switch (state) {
      case 'opened':
        return cx('rrc-notify-item', 'rrc-notify-item-opened');
      case 'closing':
        return cx('rrc-notify-item', 'rrc-notify-item-closing');
      case 'opening':
      default:
        return 'rrc-notify-item';
    }
  };

  const getType = () => {
    switch (type) {
      case 'error':
        return 'rrc-notify-item-error';
      case 'success':
      default:
        return 'rrc-notify-item-success';
    }
  };

  return (
    <div className={cx(getClass(transitionState), getType())}>
      <span className="rrc-icon">
        { type === 'success' ? <IconSuccess /> : <IconError /> }
      </span>
      <span className="rrc-msg">
        {msg}
      </span>
      <button onClick={close}>
        <CloseIcon width={15} height={15} />
      </button>
    </div>
  );
};

export default Component;
