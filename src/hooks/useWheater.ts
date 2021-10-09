import { useContext } from 'react';
import { WheaterContext } from '../contexts/WheaterContext';

export const useWheater = () => {
  const value = useContext(WheaterContext);
  return value;
};
