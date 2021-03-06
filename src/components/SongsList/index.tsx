import { useTheme } from 'styled-components';

import { useSongs } from '../../hooks/useSongs';
import { useWheater } from '../../hooks/useWheater';
import { useFavorites } from '../../hooks/useFavorites';

import {
  Container,
  ContainerTitle,
  SongsContainer,
  SongBox,
  SongImage,
  AddFavoritesButton,
} from './styles';

export function SongsList() {
  const { songsList, isLoading } = useSongs();
  const { wheater } = useWheater();
  const { handleAddListToFavorites } = useFavorites();

  const { colors } = useTheme();

  if (!songsList && !isLoading) {
    return (
      <Container>
        <h2
          style={{
            textAlign: 'center',
            margin: 'auto 0',
            color: colors.orange,
          }}
        >
          Procure por uma cidade e encontre músicas pra ouvir por lá!
        </h2>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <h1 style={{ textAlign: 'center', margin: 'auto 0' }}>Carregando...</h1>
      </Container>
    );
  }

  return (
    <Container>
      <ContainerTitle>
        A temperatura em <strong>{wheater.cityName}</strong> é{' '}
        <strong>{wheater.temperature}° C</strong> e essas músicas combinam com o
        clima:
      </ContainerTitle>
      <SongsContainer>
        {songsList.list.map(song => (
          <SongBox key={song.title}>
            <SongImage src={song.imageUrl} />
            <h3>{song.title}</h3>
            <p>{song.singer}</p>
          </SongBox>
        ))}
      </SongsContainer>
      <AddFavoritesButton type="button" onClick={handleAddListToFavorites}>
        Salvar lista nas favoritas
      </AddFavoritesButton>
    </Container>
  );
}
