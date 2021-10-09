import { useContext } from 'react';
import { SongsContext } from '../contexts/SongsContext';

export const useSongs = () => {
  const value = useContext(SongsContext);
  return value;
};
