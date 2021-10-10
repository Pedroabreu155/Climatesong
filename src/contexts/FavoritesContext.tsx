import { createContext, ReactNode } from 'react';

type FavoritesProviderProps = {
  children: ReactNode;
};

export const FavoritesContext = createContext({});

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  return (
    <FavoritesContext.Provider value={{}}>{children}</FavoritesContext.Provider>
  );
}
