import { createContext, useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import { useSongs } from '../../hooks/useSongs';

import {
  FavoritesContextData,
  FavoritesProviderProps,
  FavoritesType,
} from './types';

export const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData,
);

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<FavoritesType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { songsList } = useSongs();

  const handleRemoveListFromFavorites = (id: number) => {
    const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    toast.success('Removida com sucesso!');
  };

  const handleAddListToFavorites = () => {
    const newFavorites = [...favorites, songsList];
    const parsedNewFavorites = JSON.stringify(newFavorites);
    localStorage.setItem('favorites', parsedNewFavorites);
    setFavorites(newFavorites);
    toast.success('Salva com sucesso!');
  };

  /* it was necessary use this useEffect cause nextjs render the page
   based on server side so that the node server can't access browsers
   APIs like local storage */

  useEffect(() => {
    setIsLoading(true);
    const currentStoragedFavorites = localStorage.getItem('favorites');
    const parsedStoragedFavorites = JSON.parse(currentStoragedFavorites);
    if (parsedStoragedFavorites === null) {
      setFavorites([]);
    } else {
      setFavorites(parsedStoragedFavorites);
    }
    setIsLoading(false);
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isLoading,
        handleRemoveListFromFavorites,
        handleAddListToFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
