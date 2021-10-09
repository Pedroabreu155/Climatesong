import Head from 'next/head';

import { SearchBox } from '../components/SearchBox';

import { Container, PageTitle } from '../styles/homeStyles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Climatesong | Home</title>
      </Head>
      <Container>
        {/* <PageTitle>Procure por uma cidade:</PageTitle> */}
        <SearchBox />
      </Container>
    </>
  );
}
