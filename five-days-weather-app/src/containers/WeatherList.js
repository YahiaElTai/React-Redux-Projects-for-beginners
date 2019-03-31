import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

const API_URL =
  'https://maps.googleapis.com/maps/api/js?v=3.29&key=AIzaSyAteXyAbtUrV1kHSlyz6gU_3XOJlPZ37hM';

class WeatherList extends Component {
  static renderWeather(cityData) {
    const temps = cityData.list.map(current => current.main.temp);
    const pressures = cityData.list.map(current => current.main.pressure);
    const humidities = cityData.list.map(current => current.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={cityData.city.name}>
        <td>
          <GoogleMap
            googleMapURL={API_URL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `300px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            isMarkerShown
            lon={lon}
            lat={lat}
          />
        </td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
        <td>
          <Chart data={pressures} color="green" />
        </td>
        <td>
          <Chart data={humidities} color="blue" />
        </td>
      </tr>
    );
  }

  render() {
    const { weather } = this.props;
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (Kelvin) </th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{weather.map(WeatherList.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

WeatherList.propTypes = {
  weather: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(WeatherList);
