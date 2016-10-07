import React from 'react';

const Dialog = ({ children, open }) => (
  <div>
    {children} <br />
    {open ? 'sim' : 'nao'}
  </div>
);

export default Dialog;
