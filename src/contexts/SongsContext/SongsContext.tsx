import { createContext, useState } from 'react';

import { songsAPI } from '../../services/songsAPI';

import { getSongGenre } from '../../utils/songsUtils';

import {
  SongsList,
  SongsContextData,
  SongsProviderProps,
  SongsAPIResponseByGenre,
  SongsAPIResponseByQuery,
} from './types';

export const SongsContext = createContext<SongsContextData>(
  {} as SongsContextData,
);

export function SongsProvider({ children }: SongsProviderProps) {
  const [songsList, setSongsList] = useState<SongsList>();
  const [isLoading, setIsLoading] = useState(false);

  const getSongsByTemperature = async (
    temperature: number,
    date: string,
    city: string,
  ) => {
    setIsLoading(true);
    if (temperature >= 24) {
      const genre = getSongGenre(temperature);
      const response: SongsAPIResponseByGenre = await songsAPI.get(
        '/charts/track',
        {
          params: { listId: genre, pageSize: '5' },
        },
      );
      const songs = response.data.tracks.map(song => {
        return {
          title: song.title,
          singer: song.subtitle,
          imageUrl: song.images.coverart,
        };
      });
      let songGenre;
      if (temperature >= 32) {
        songGenre = 'Rock';
      }
      if (temperature < 32 && temperature >= 24) {
        songGenre = 'Pop';
      }
      setSongsList({
        id: Math.round(Math.random() * 1000),
        list: songs,
        temperature,
        date,
        city,
        songGenre,
      });
      setIsLoading(false);
    } else {
      if (temperature < 24 && temperature >= 16) {
        const response: SongsAPIResponseByQuery = await songsAPI.get(
          '/search',
          {
            params: { term: 'classic music', limit: '5' },
          },
        );
        const songs = response.data.tracks.hits.map(song => {
          return {
            title: song.track.title,
            singer: song.track.subtitle,
            imageUrl: song.track.images.coverart,
          };
        });
        setSongsList({
          id: Math.round(Math.random() * 1000),
          list: songs,
          temperature,
          date,
          city,
          songGenre: 'Musica Clássica',
        });
        setIsLoading(false);
      }
      if (temperature <= 16) {
        const response: SongsAPIResponseByQuery = await songsAPI.get(
          '/search',
          {
            params: { term: 'Lofi', limit: '5' },
          },
        );
        const songs = response.data.tracks.hits.map(song => {
          return {
            title: song.track.title,
            singer: song.track.subtitle,
            imageUrl: song.track.images.coverart,
          };
        });
        setSongsList({
          id: Math.round(Math.random() * 1000),
          list: songs,
          temperature,
          date,
          city,
          songGenre: 'Lofi',
        });
        setIsLoading(false);
      }
    }
  };

  return (
    <SongsContext.Provider
      value={{
        songsList,
        getSongsByTemperature,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </SongsContext.Provider>
  );
}
