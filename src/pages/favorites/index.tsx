import Head from 'next/head';
import Link from 'next/link';

import { FavoritesSongsList } from '../../components/FavoritesSongsList';

import { AiOutlineHome } from 'react-icons/ai';

import { Container, GoHomeButton } from './styles';

export default function Favorites() {
  return (
    <>
      <Head>
        <title>Climatesong | Favorites</title>
      </Head>
      <Container>
        <Link href="/">
          <GoHomeButton>
            <AiOutlineHome />
          </GoHomeButton>
        </Link>
        <FavoritesSongsList />
        <FavoritesSongsList />
        <FavoritesSongsList />
        <FavoritesSongsList />
      </Container>
    </>
  );
}
