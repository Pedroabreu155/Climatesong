import Head from 'next/head';

import { FavoritesSongsList } from '../../components/FavoritesSongsList';

import { Container } from './styles';

export default function Favorites() {
  return (
    <>
      <Head>
        <title>Climatesong | Favorites</title>
      </Head>
      <Container>
        <FavoritesSongsList />
        <FavoritesSongsList />
        <FavoritesSongsList />
        <FavoritesSongsList />
      </Container>
    </>
  );
}
