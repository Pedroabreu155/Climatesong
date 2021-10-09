import { useState } from 'react';
import Link from 'next/link';

import { BsSearch, BsBookmark } from 'react-icons/bs';

import { useWheater } from '../../hooks/useWheater';
import { useSongs } from '../../hooks/useSongs';

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

  const handleSearchSongs = async () => {
    setIsLoading(true);
    const wheater = await getWheater(locale);
    const { temperature } = wheater;
    getSongsByTemperature(temperature);
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
      <Link passHref href="/favorites">
        <FavoritesButton>
          <BsBookmark />
        </FavoritesButton>
      </Link>
    </Container>
  );
}
