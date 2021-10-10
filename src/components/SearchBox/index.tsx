import { useState } from 'react';
import Link from 'next/link';

import { toast } from 'react-toastify';

import { BsSearch, BsBookmark } from 'react-icons/bs';

import { useWheater } from '../../hooks/useWheater';
import { useSongs } from '../../hooks/useSongs';
import { useFavorites } from '../../hooks/useFavorites';

import {
  Container,
  SearchInput,
  SearchButton,
  FavoritesButton,
} from './styles';

export function SearchBox() {
  const [locale, setLocale] = useState('');

  const { getWheater } = useWheater();
  const { getSongsByTemperature, setIsLoading } = useSongs();
  const { favorites } = useFavorites();

  const handleSearchSongs = async () => {
    if (locale === '') {
      return;
    }
    try {
      setIsLoading(true);
      const wheater = await getWheater(locale);
      const { temperature, cityName, searchDate } = wheater;
      getSongsByTemperature(temperature, searchDate, cityName);
    } catch (err) {
      toast.error('Localização não identificada!');
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <SearchInput
        value={locale}
        onChange={event => setLocale(event.target.value)}
        placeholder="Digite a cidade ou país..."
      />
      <SearchButton type="button" onClick={handleSearchSongs}>
        <BsSearch />
      </SearchButton>
      {favorites.length === 0 ? (
        ''
      ) : (
        <Link passHref href="/favorites">
          <FavoritesButton>
            <BsBookmark />
          </FavoritesButton>
        </Link>
      )}
    </Container>
  );
}
