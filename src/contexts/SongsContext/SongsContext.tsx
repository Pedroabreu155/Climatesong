import { createContext, useState } from 'react';

import { songsAPI } from '../../services/songsAPI';

import { getSongGenre } from '../../utils/songsUtils';

import {
  Song,
  SongsContextData,
  SongsProviderProps,
  SongsAPIResponseByGenre,
  SongsAPIResponseByQuery,
} from './types';

export const SongsContext = createContext<SongsContextData>(
  {} as SongsContextData,
);

export function SongsProvider({ children }: SongsProviderProps) {
  const [songsList, setSongsList] = useState<Song[]>();

  const getSongsByTemperature = async (temperature: number) => {
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
      setSongsList(songs);
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
        setSongsList(songs);
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
        setSongsList(songs);
      }
    }
  };

  return (
    <SongsContext.Provider
      value={{
        songsList,
        getSongsByTemperature,
      }}
    >
      {children}
    </SongsContext.Provider>
  );
}
