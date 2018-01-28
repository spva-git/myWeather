import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #00BCD4;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();