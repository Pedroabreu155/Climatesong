import axios from 'axios';

export const wheaterAPI = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const apiKey = process.env.REACT_APP_OPEN_WHEATER_API_KEY;
