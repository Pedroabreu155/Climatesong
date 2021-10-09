import Link from 'next/link';

import { BsSearch, BsBookmark } from 'react-icons/bs';

import {
  Container,
  SearchInput,
  SearchButton,
  FavoritesButton,
} from './styles';

export function SearchBox() {
  return (
    <Container>
      <SearchInput placeholder="Digite a cidade ou país..." />
      <SearchButton>
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
