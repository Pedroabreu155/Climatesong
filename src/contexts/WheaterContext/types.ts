import { ReactNode } from 'react';

export type WheaterContextData = {
  // eslint-disable-next-line no-unused-vars
  getWheater: (locale: string) => Promise<Wheater>;
  errorMessage: string;
  wheater: Wheater;
};

export type Wheater = {
  cityName: string;
  temperature: number;
  searchDate: string;
};

export type WheaterProviderProps = {
  children: ReactNode;
};

export type WheaterAPIResponse = {
  data: WheaterAPIResponseData;
};

type WheaterAPIResponseData = {
  name: string;
  main: {
    temp: number;
  };
};
