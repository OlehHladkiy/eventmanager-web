import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

const mountEl = document.getElementById('root');

const render = () => {
  if (mountEl) {
    // eslint-disable-next-line react/no-render-return-value
    return ReactDOM.render(<App />, mountEl);
  }

  throw new Error('React failed to mount, because mount element is missing');
};

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}
