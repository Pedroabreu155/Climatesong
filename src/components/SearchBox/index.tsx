import { BsSearch } from 'react-icons/bs';

import { Container, SearchInput, SearchButton } from './styles';

export function SearchBox() {
  return (
    <Container>
      <SearchInput placeholder="Digite a cidade ou país..." />
      <SearchButton>
        <BsSearch />
      </SearchButton>
    </Container>
  );
}
