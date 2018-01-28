import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';

import Search from './components/Search/Search';

const Application = styled.div`
  text-align: center;
  width: 1000px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Card = styled.div`
  margin-top: 200px;
  height: 600px;
  background-color: white;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .25);

  @media (max-width: 1000px) {
    height: 100vh;
    margin-top: 0;
  }
`;

class App extends Component {
  state = {
    city: '',
    forecast: null,
    error: false
  }

  render() {
    return (
      <MuiThemeProvider>
        <Application>
          <Card>
            <Search />
          </Card>
        </Application>
      </MuiThemeProvider>
    );
  }
}

export default App;
