import axios from 'axios';

export const songsAPI = axios.create({
  baseURL: 'https://shazam.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'shazam.p.rapidapi.com',
    'x-rapidapi-key': process.env.NEXT_PUBLIC_SHAZAM_API_KEY,
  },
});
