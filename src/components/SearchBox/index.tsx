import { useState } from 'react';
import Link from 'next/link';

import { BsSearch, BsBookmark } from 'react-icons/bs';

import { useWheater } from '../../hooks/useWheater';

import {
  Container,
  SearchInput,
  SearchButton,
  FavoritesButton,
} from './styles';

export function SearchBox() {
  const [locale, setLocale] = useState('');

  const { getWheater } = useWheater();

  const handleSearchSongs = async () => {
    const wheater = await getWheater(locale);
    console.log(wheater);
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
      <Link href="/favorites">
        <FavoritesButton>
          <BsBookmark />
        </FavoritesButton>
      </Link>
    </Container>
  );
}
