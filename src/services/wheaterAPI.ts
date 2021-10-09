import axios from 'axios';

export const wheaterAPI = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const apiKey = process.env.NEXT_PUBLIC_OPEN_WHEATER_API_KEY;
