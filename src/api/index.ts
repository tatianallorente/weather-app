import { apiClient } from './config';
import { ForecastResponse, TodayWeatherResponse, WeatherParams } from './types';

export const getTodayWeather = (params: WeatherParams) =>
  apiClient.get<TodayWeatherResponse>('/weather', { params }).then((res) => res.data);

export const getForecast = (params: WeatherParams) =>
  apiClient.get<ForecastResponse>('/forecast', { params }).then((res) => res.data);
