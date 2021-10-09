import Link from 'next/link';

import { BsMusicNoteList } from 'react-icons/bs';

import { Container, Logo, Text } from './styles';

export function Header() {
  return (
    <Container>
      <Link href="/">
        <Logo>
          Climate <BsMusicNoteList />
          <strong>song</strong>
        </Logo>
      </Link>
      <Text>A música ideal para seu clima!</Text>
    </Container>
  );
}
