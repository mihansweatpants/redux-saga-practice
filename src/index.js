import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './components/App';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;
