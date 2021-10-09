import { createContext, ReactNode, useState } from 'react';

import { apiKey, wheaterAPI } from '../services/wheaterAPI';

type WheaterContextType = {
  // eslint-disable-next-line no-unused-vars
  getWheater: (locale: string) => Promise<Wheater>;
  errorMessage: string;
};

type Wheater = {
  cityName: string;
  temperature: number;
  searchDate: string;
};

type WheaterProviderProps = {
  children: ReactNode;
};

type WheaterAPIResponse = {
  data: WheaterAPIResponseData;
};

type WheaterAPIResponseData = {
  name: string;
  main: {
    temp: number;
  };
};

export const WheaterContext = createContext<WheaterContextType>(
  {} as WheaterContextType,
);

export function WheaterProvider({ children }: WheaterProviderProps) {
  const [errorMessage, setErrorMessage] = useState('');

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
      }}
    >
      {children}
    </WheaterContext.Provider>
  );
}
