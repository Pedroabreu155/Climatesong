/* eslint-disable no-unused-vars */
import { ReactNode, Dispatch, SetStateAction } from 'react';

export type SongsContextData = {
  songsList: SongsList;
  getSongsByTemperature: (
    temperature: number,
    date: string,
    city: string,
  ) => void;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export type SongsProviderProps = {
  children: ReactNode;
};

export type SongsAPIResponseByGenre = {
  data: SongsAPIResponseDataByGenre;
};

type SongsAPIResponseDataByGenre = {
  tracks: Array<Track>;
};

export type SongsAPIResponseByQuery = {
  data: SongsAPIResponseDataByQuery;
};

type SongsAPIResponseDataByQuery = {
  tracks: Hits;
};

type Hits = {
  hits: Array<Hit>;
};

type Hit = {
  track: Track;
};

type Track = {
  title: string;
  subtitle: string;
  images: {
    coverart: string;
  };
};

type Song = {
  title: string;
  singer: string;
  imageUrl: string;
};

export type SongsList = {
  id: number;
  list: Array<Song>;
  temperature: number;
  date: string;
  city: string;
  songGenre: string;
};
