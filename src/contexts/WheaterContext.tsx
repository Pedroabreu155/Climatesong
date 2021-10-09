import { createContext, ReactNode, useState } from 'react';

import { apiKey, wheaterAPI } from '../services/wheaterAPI';

type WheaterContextType = {
  wheater: Wheater;
  // eslint-disable-next-line no-unused-vars
  getWheater: (locale: string) => void;
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
  const [wheater, setWheater] = useState<Wheater>();
  const [errorMessage, setErrorMessage] = useState('');

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
    } catch (err) {
      setErrorMessage('Cidade não encontrada!');
    }
  };

  return (
    <WheaterContext.Provider
      value={{
        wheater,
        getWheater,
        errorMessage,
      }}
    >
      {children}
    </WheaterContext.Provider>
  );
}
