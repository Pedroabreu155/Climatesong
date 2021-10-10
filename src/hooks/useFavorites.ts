import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext/FavoritesContext';

export const useFavorites = () => {
  const value = useContext(FavoritesContext);
  return value;
};
