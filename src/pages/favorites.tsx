import Head from 'next/head';
import Link from 'next/link';

import { AiOutlineHome } from 'react-icons/ai';

import { useFavorites } from '../hooks/useFavorites';

import { FavoritesSongsList } from '../components/FavoritesSongsList';

import { Container, GoHomeButton } from '../styles/favoritesPage';

export default function Favorites() {
  const { favorites, isLoading } = useFavorites();
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
        {isLoading ? (
          <h1>Carregando...</h1>
        ) : (
          favorites.map(favorite => (
            <FavoritesSongsList favoritesList={favorite} key={favorite.id} />
          ))
        )}
      </Container>
    </>
  );
}
