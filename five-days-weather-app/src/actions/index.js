import axios from 'axios';
import { FETCH_WEATHER } from './types';

const API_KEY = 'd54c02e09b6f529cc9c00d129b0c4831';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

// eslint-disable-next-line import/prefer-default-export
export const fetchWeather = city => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};
