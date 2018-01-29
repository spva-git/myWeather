import React, { Component } from 'react';
import styled from 'styled-components';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import Toggle from 'material-ui/Toggle';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 15px;
  text-align: left;
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`;

const City = styled.h1`
  margin: 0;
`;

const ToggleStyles = {
  width: 'auto',
  marginLeft: 'auto'
};

const DateRow = styled.div`
  width: 100%;
  margin-left: 20px;
`;

const Date = styled.h2`
  margin: 0;
`;

const WeatherType = styled.h3`
  margin: 0;
  font-weight: normal;
`;

const Weather = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
  }

  i {
    font-size: 120px;
    margin-top: -30px;

    @media (max-width: 700px) {
      font-size: 70px;
    }
  }
`;

const Temperature = styled.h1`
  font-size: 120px;
  margin-right: 70px;

  @media (max-width: 700px) {
    font-size: 70px;
    margin: 15px 0;
  }
`;

const Daily = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  width: 125px;
  margin-left: 70px;

  @media (max-width: 700px) {
    margin: 20px 0;
  }

  li {
    display: flex;
    justify-content: space-between;
  }

  p {
    margin: 5px 0;
    font-size: 18px;
  }
`;

const Weekly = styled.ul`
  margin: 0;
  padding: 0 20px;
  list-style: none;

  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    margin: 0;
    margin-bottom: 15px;

    @media (max-width: 700px) {
      font-size: 15px;
      margin-bottom: 0;
    }
  }

  i {
    font-size: 40px;
    margin-bottom: 15px;

    @media (max-width: 700px) {
      font-size: 30px;
      margin-bottom: 0;
    }
  }
`;

class Forecast extends Component {
  state = {
    tempUnit: 'C'
  }

  render() {
    return (
      <Wrapper>
        <Menu>
          <IconButton onClick={this.props.back}>
            <SvgIcon>
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
            </SvgIcon>
          </IconButton>
          <City>Moscow</City>
          <Toggle 
            label="Change to °F"
            labelStyle={{ whiteSpace: 'nowrap' }}
            style={ToggleStyles}
          />
        </Menu>
        <DateRow>
          <Date>Sunday, January 28 2018</Date>
          <WeatherType>Light snow</WeatherType>
        </DateRow>
        <Weather>
          <Temperature>-7°C</Temperature>
          <i class="wi wi-owm-200"></i>
          <Daily>
            <li>
              <p>Morning</p>
              <p>-7°C</p>
            </li>
            <li>
              <p>Day</p>
              <p>-7°C</p>
            </li>
            <li>
              <p>Evening</p>
              <p>-7°C</p>
            </li>
            <li>
              <p>Night</p>
              <p>-7°C</p>
            </li>
          </Daily>
        </Weather>
        <Weekly>
          <li>
            <h3>Monday</h3>
            <i class="wi wi-owm-200"></i>
            <p>-7°C</p>
          </li>
          <li>
            <h3>Tuesday</h3>
            <i class="wi wi-owm-200"></i>
            <p>-7°C</p>
          </li>
          <li>
            <h3>Wednesday</h3>
            <i class="wi wi-owm-200"></i>
            <p>-7°C</p>
          </li>
          <li>
            <h3>Thursday</h3>
            <i class="wi wi-owm-200"></i>
            <p>-7°C</p>
          </li>
          <li>
            <h3>Friday</h3>
            <i class="wi wi-owm-200"></i>
            <p>-7°C</p>
          </li>
          <li>
            <h3>Saturday</h3>
            <i class="wi wi-owm-200"></i>
            <p>-7°C</p>
          </li>
          <li>
            <h3>Sunday</h3>
            <i class="wi wi-owm-200"></i>
            <p>-7°C</p>
          </li>
        </Weekly>
      </Wrapper>
    );
  }
}

export default Forecast;