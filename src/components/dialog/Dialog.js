import React from 'react';
import './Dialog.css';
import CloseIcon from '../../icons/close';


const Header = ({ title, close }) => (
  <div className="rrc-dialog-header">
    {title}
    <button className="rrc-dialog-close" onClick={close}>
      <CloseIcon width={20} height={20} />
    </button>
  </div>
);

const Footer = ({ title }) => (
  <div className="rrc-dialog-footer">
    {title}
  </div>
);

const Wrapper = ({ children }) => (
  <div className="rrc-dialog-wrapper">
    {children}
  </div>
);

const Dialog = ({ children, close, open }) => {
  if (!open) return null;

  return (
    <Wrapper onCLick={close}>
      <div className="rrc-dialog-container">
        <Header title="Header" close={close} />

        {children} <br />

        <Footer title="Footer" />
      </div>
    </Wrapper>
  );
};

export default Dialog;
