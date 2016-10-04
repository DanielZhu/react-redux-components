import React from 'react';
import cx from 'classnames';

import styles from './notify.css';
import IconSuccess from '../../icons/success';
import IconError from '../../icons/error';
import CloseIcon from '../../icons/close';

const Component = ({ msg, transitionState, close, type }) => {
  const getClass = (state) => {
    switch (state) {
      case 'opened':
        return cx(styles.item, styles.opened);
      case 'closing':
        return cx(styles.item, styles.closing);
      case 'opening':
      default:
        return styles.item;
    }
  };

  const getType = () => {
    switch (type) {
      case 'error':
        return styles.error;
      case 'success':
      default:
        return styles.success;
    }
  };

  return (
    <div className={cx(getClass(transitionState), getType())}>
      <span className={styles.icon}>
        { type === 'success' ? <IconSuccess /> : <IconError /> }
      </span>
      <span className={styles.msg}>
        {msg}
      </span>
      <button onClick={close}>
        <CloseIcon width={15} height={15} />
      </button>
    </div>
  );
};

export default Component;
