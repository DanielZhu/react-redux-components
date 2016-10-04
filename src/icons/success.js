import React from 'react';

const style1 = { fill: '#FFDA44' };
const style2 = { fill: '#6E76E5' };
const style3 = { fill: '#515BE0' };
const style4 = { fill: '#99E9EC' };
const style5 = { fill: '#66DDE2' };
const style6 = { fill: '#957856' };

const Icon = ({ width = 30, height = 30 }) => (
  <svg version="1.1" id="Layer_1" viewBox="0 0 495 495" width={width} height={height}>
    <g>
      <rect x="104.54" style={style1} width="122.96" height="141.256" />
      <polygon style={style2} points="187.01,369.45 128.39,327.23 0,465.96 0,495 247.49,495 247.49,325.88  " />
      <polygon style={style3} points="366.6,327.23 307.99,369.45 247.49,325.88 247.49,495 495,495 495,465.96   " />
      <path style={style4} d="M366.6,327.23l-99.117-107.089L366.6,327.23z" />
      <polygon style={style4} points="247.49,325.88 247.49,220.141 227.5,220.141 128.39,327.23 187.01,369.45   " />
      <polygon style={style4} points="247.49,325.88 307.99,369.45 366.6,327.23 307.99,369.45   " />
      <polygon style={style5} points="247.49,220.141 247.49,325.88 307.99,369.45 366.6,327.23 267.483,220.141  " />
      <path style={style6} d="M267.483,220.141C267.5,220.141,267.5,0,267.5,0h-40v220.141H267.483z" />
    </g>
  </svg>
);

export default Icon;
