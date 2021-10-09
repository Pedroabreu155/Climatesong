import { ReactNode, Dispatch, SetStateAction } from 'react';

export type SongsContextData = {
  songsList: Array<Song>;
  // eslint-disable-next-line no-unused-vars
  getSongsByTemperature: (temperature: number) => void;
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

export type Song = {
  title: string;
  singer: string;
  imageUrl: string;
};
