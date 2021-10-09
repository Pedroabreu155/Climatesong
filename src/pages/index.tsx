import Head from 'next/head';

import { SearchBox } from '../components/SearchBox';
import { SongsList } from '../components/SongsList';

import { Container } from '../styles/homeStyles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Climatesong | Home</title>
      </Head>
      <Container>
        <SearchBox />
        <SongsList />
      </Container>
    </>
  );
}
