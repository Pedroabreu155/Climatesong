import {
  Container,
  ContainerTitle,
  SongsContainer,
  SongBox,
  AddFavoritesButton,
} from './styles';

type FavoritesSongsListProps = {
  favoritesList: FavoritesType;
};

type FavoritesType = {
  id: number;
  temperature: number;
  date: string;
  city: string;
  songGenre: string;
  list: Array<Song>;
};

type Song = {
  title: string;
  singer: string;
  imageUrl: string;
};

export function FavoritesSongsList({ favoritesList }: FavoritesSongsListProps) {
  return (
    <Container>
      <ContainerTitle>
        Local: <strong>{favoritesList.city}</strong> - Data:{' '}
        <strong>{favoritesList.date}</strong> -{' '}
        <strong>{favoritesList.temperature} °C</strong> - Estilo:{' '}
        <strong>{favoritesList.songGenre}</strong>
      </ContainerTitle>
      <SongsContainer>
        {favoritesList.list.map(favoriteSong => (
          <SongBox key={favoriteSong.title}>
            <h3>{favoriteSong.title}</h3>
            <p>{favoriteSong.singer}</p>
          </SongBox>
        ))}
      </SongsContainer>
      <AddFavoritesButton>Remover das listas favoritas</AddFavoritesButton>
    </Container>
  );
}
