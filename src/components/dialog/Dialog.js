import React from 'react';
import styles from './Dialog.css';
import CloseIcon from '../../icons/close';


const Header = ({ title, close }) => (
  <div className={styles.header}>
    {title}
    <button className={styles.close} onClick={close}>
      <CloseIcon width={20} height={20} />
    </button>
  </div>
);

const Footer = ({ title }) => (
  <div className={styles.footer}>
    {title}
  </div>
);

const Wrapper = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);

const Dialog = ({ children, close }) => (
  <Wrapper onCLick={close}>
    <div className={styles.container}>
      <Header title="Header" close={close} />

      {children} <br />

      <Footer title="Footer" />
    </div>
  </Wrapper>
);

export default Dialog;
