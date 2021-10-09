import { BsMusicNoteList } from 'react-icons/bs';

import { Container, Logo, Text } from './styles';

export function Header() {
  return (
    <Container>
      <Logo>
        Climate <BsMusicNoteList />
        <strong>song</strong>
      </Logo>
      <Text>A música ideal para seu clima!</Text>
    </Container>
  );
}
