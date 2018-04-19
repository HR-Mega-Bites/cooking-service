import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

const title = 'My Minimal React Webpack Babel Setup';

ReactDom.render(
  <div>
    <App />
  </div>,
  document.getElementById('app')
);
