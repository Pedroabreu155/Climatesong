import Head from 'next/head';
import Link from 'next/link';

import { AiOutlineHome } from 'react-icons/ai';

import { FavoritesSongsList } from '../../components/FavoritesSongsList';

import { Container, GoHomeButton } from './styles';

export default function Favorites() {
  return (
    <>
      <Head>
        <title>Climatesong | Favorites</title>
      </Head>
      <Container>
        <Link passHref href="/">
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
