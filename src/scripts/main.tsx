import React from 'react';
import ReactDOM from 'react-dom';
import Neetshin from './containers/Neetshin';
import ready from './ready';

function main () {
  ready(() => {
    const mountNode = document.getElementById('root');
    ReactDOM.render(<Neetshin />, mountNode);
  });
}

main();
