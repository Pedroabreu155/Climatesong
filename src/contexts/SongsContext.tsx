import { createContext, ReactNode, useEffect, useState } from 'react';

import { apiKey, wheaterAPI } from '../services/wheaterAPI';

type SongContextType = {
  errorMessage: string;
};

type SongsProviderProps = {
  children: ReactNode;
};

export const SongsContext = createContext<SongContextType>(
  {} as SongContextType,
);

export function SongsProvider({ children }: SongsProviderProps) {
  const [wheater, setWheater] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const getWheater = async (locale: string) => {
    try {
      const response = await wheaterAPI.get(
        `weather?q=${locale}&units=metric&appid=${apiKey}`,
      );
      console.log(response.data);
    } catch (err) {
      setErrorMessage('Cidade não encontrada!');
    }
  };

  useEffect(() => {
    getWheater('São Paulo');
  }, []);

  return (
    <SongsContext.Provider
      value={{
        errorMessage,
      }}
    >
      {children}
    </SongsContext.Provider>
  );
}
