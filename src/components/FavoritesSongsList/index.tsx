import {
  Container,
  ContainerTitle,
  SongsContainer,
  SongBox,
  AddFavoritesButton,
} from './styles';

export function FavoritesSongsList() {
  return (
    <Container>
      <ContainerTitle>
        Local: <strong>São Paulo</strong> - Data: <strong>09/10/2021</strong> -{' '}
        <strong>12 °C</strong> - Estilo: <strong>Rock</strong>
      </ContainerTitle>
      <SongsContainer>
        <SongBox>
          <h3>Perfect</h3>
          <p>Ed Sheeran</p>
        </SongBox>
        <SongBox>
          <h3>Perfect</h3>
          <p>Ed Sheeran</p>
        </SongBox>
        <SongBox>
          <h3>Perfect</h3>
          <p>Ed Sheeran</p>
        </SongBox>
        <SongBox>
          <h3>Perfect</h3>
          <p>Ed Sheeran</p>
        </SongBox>
        <SongBox>
          <h3>Perfect</h3>
          <p>Ed Sheeran</p>
        </SongBox>
      </SongsContainer>
      <AddFavoritesButton>Remover das listas favoritas</AddFavoritesButton>
    </Container>
  );
}
