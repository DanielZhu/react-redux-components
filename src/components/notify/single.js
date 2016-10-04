import React from 'react';
import cx from 'classnames';
import styles from './notify.css';

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
        !
      </span>
      <span className={styles.msg}>
        {msg}
      </span>
      <button onClick={close}>
        X
      </button>
    </div>
  );
};

export default Component;
