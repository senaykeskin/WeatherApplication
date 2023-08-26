import axios from 'axios';
import {apiKey} from '../../constants';

const forecastEndpoint = function (params: any) {
  return `https://api.weatherapi.com/v1/forecast.json?q=${params.city_name}&days=${params.days}&key=${apiKey}&lang=tr`;
};
const locationEndpoint = function (params: any) {
  return `https://api.weatherapi.com/v1/search.json?q=${params.city_name}&key=${apiKey}`;
};

export const apiCall = async (endpoint: any) => {
  const options = {
    method: 'GET',
    url: endpoint,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log('error:', err);
    return null;
  }
};

export const fetchWeatherForecast = function (params: any) {
  return apiCall(forecastEndpoint(params));
};

export const fetchLocations = function (params: any) {
  return apiCall(locationEndpoint(params));
};
