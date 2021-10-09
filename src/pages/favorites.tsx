import { useEffect, useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { AiOutlineHome } from 'react-icons/ai';

import { FavoritesSongsList } from '../components/FavoritesSongsList';

import { Container, GoHomeButton } from '../styles/favoritesPage';

type FavoritesType = {
  id: number;
  list: Array<Song>;
  temperature: number;
  date: string;
  city: string;
  songGenre: string;
};

type Song = {
  title: string;
  singer: string;
  imageUrl: string;
};

export default function Favorites() {
  const [favorites, setFavorites] = useState<FavoritesType[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const storagedFavorites = localStorage.getItem('favorites');
    const parsedStoragedFavorites = JSON.parse(storagedFavorites);
    setFavorites(parsedStoragedFavorites);
    setIsLoading(false);
  }, []);
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
