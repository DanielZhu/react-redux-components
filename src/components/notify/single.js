import React from 'react';
import cx from 'classnames';
import styles from './notify.css';

const Component = ({ msg, transitionState, closeAction }) => {
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

  return (
    <div className={cx(getClass(transitionState))}>
      <span>
        {msg}
      </span>
      <button onClick={closeAction}>
        X
      </button>
    </div>
  );
};

export default Component;
