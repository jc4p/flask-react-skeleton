import 'babel-polyfill'; // generators
import React from 'react';
import { render as renderReact } from 'react-dom';

let App = require('./src').default;

const render = (Component) => {
  renderReact(<Component />, document.getElementById('root'));
};

// sets up live reloading of the main component
if (module.hot) {
  module.hot.accept('./src', function() {
    let newApp = require('./src').default;
    render(newApp);
  });
}

render(App);