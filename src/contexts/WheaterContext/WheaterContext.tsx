import { createContext, useState } from 'react';

import { apiKey, wheaterAPI } from '../../services/wheaterAPI';

import {
  Wheater,
  WheaterAPIResponse,
  WheaterContextData,
  WheaterProviderProps,
} from './types';

export const WheaterContext = createContext<WheaterContextData>(
  {} as WheaterContextData,
);

export function WheaterProvider({ children }: WheaterProviderProps) {
  const [errorMessage, setErrorMessage] = useState('');
  const [wheater, setWheater] = useState<Wheater>();

  // eslint-disable-next-line consistent-return
  const getWheater = async (locale: string) => {
    try {
      const response: WheaterAPIResponse = await wheaterAPI.get(
        `weather?q=${locale}&units=metric&appid=${apiKey}`,
      );
      const data = {
        cityName: response.data.name,
        temperature: Math.round(response.data.main.temp),
        searchDate: new Date().toLocaleDateString(),
      };
      setWheater(data);
      return data;
    } catch (err) {
      setErrorMessage('Cidade não encontrada!');
    }
  };

  return (
    <WheaterContext.Provider
      value={{
        getWheater,
        errorMessage,
        wheater,
      }}
    >
      {children}
    </WheaterContext.Provider>
  );
}
