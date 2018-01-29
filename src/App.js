import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';

import Search from './components/Search/Search';
import Forecast from './containers/Forecast/Forecast';
import Error from './components/Error/Error';

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

const key = 'dbb624c32c7f0d652500552c5ebbde56';

class App extends Component {
  state = {
    city: '',
    forecast: null,
    error: false,
    errorMessage: ''
  }

  getForecastByCity = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=8&appid=${key}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.cod !== '200') {
          this.setState({ error: true, errorMessage: json.message });
        } else {
          this.setState({ forecast: json.list });
        }
      })
      .catch(error => this.setState({ error: true }));
  }

  handleCityInput = (city) => {
    this.setState({ city });
  }

  clear = () => {
    this.setState({ city: '', forecast: null, error: false });
  }

  render() {
    const cardContent = this.state.forecast
      ? <Forecast
          back={this.clear}
          forecast={this.state.forecast}
        />
      : <Search
          getForecastByCity={() => this.getForecastByCity(this.state.city)}
          textChanged={this.handleCityInput}
          city={this.state.city}
        />;

    return (
      <MuiThemeProvider>
        <Application>
          <Card>
            {!this.state.error ? cardContent : <Error back={this.clear} message={this.state.errorMessage} />}
          </Card>
        </Application>
      </MuiThemeProvider>
    );
  }
}

export default App;
