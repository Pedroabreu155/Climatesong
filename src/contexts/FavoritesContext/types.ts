import { ReactNode } from 'react';

export type FavoritesProviderProps = {
  children: ReactNode;
};

export type FavoritesContextData = {
  favorites: FavoritesType[];
  isLoading: boolean;
  // eslint-disable-next-line no-unused-vars
  handleRemoveListFromFavorites: (id: number) => void;
  handleAddListToFavorites: () => void;
};

export type FavoritesType = {
  id: number;
  list: Array<Song>;
  temperature: number;
  date: string;
  city: string;
  songGenre: string;
};

type Song = {
  title: string;
  singer: string;
  imageUrl: string;
};
