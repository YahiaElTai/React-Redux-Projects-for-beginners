import { combineReducers } from 'redux';
import ReducerWeather from './weather_reducer';

const rootReducer = combineReducers({
  weather: ReducerWeather,
});

export default rootReducer;
