import { useContext } from 'react';
import { SongsContext } from '../contexts/SongsContext/SongsContext';

export const useSongs = () => {
  const value = useContext(SongsContext);
  return value;
};
