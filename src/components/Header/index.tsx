import Link from 'next/link';

import { BsMusicNoteList } from 'react-icons/bs';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

import { useTheme } from 'styled-components';

import { ThemeSwitcher } from '../ThemeSwitcher';

import { Container, Logo, Text, ThemeSwitcherBox } from './styles';

type HeaderProps = {
  toggleTheme(): void;
};

export function Header({ toggleTheme }: HeaderProps) {
  const theme = useTheme();

  return (
    <Container>
      <Link passHref href="/">
        <Logo>
          Climate <BsMusicNoteList />
          <strong>song</strong>
        </Logo>
      </Link>
      <Text>A música ideal para seu clima!</Text>
      <ThemeSwitcherBox>
        <ThemeSwitcher toggleTheme={toggleTheme} />
        {theme.title === 'light' ? (
          <RiSunFill color="#f5f5f5" />
        ) : (
          <RiMoonFill color="#f5f5f5" />
        )}
      </ThemeSwitcherBox>
    </Container>
  );
}
