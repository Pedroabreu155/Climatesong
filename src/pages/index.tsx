import { useEffect } from 'react';

import Head from 'next/head';

import { SearchBox } from '../components/SearchBox';
import { SongsList } from '../components/SongsList';

import { Container } from '../styles/homePage';

export default function Home() {
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites === null) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
  }, []);

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
