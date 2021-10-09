import {
  Container,
  ContainerTitle,
  SongsContainer,
  SongBox,
  AddFavoritesButton,
} from './styles';

export function SongsList() {
  return (
    <Container>
      <ContainerTitle>
        A temperatura em <strong>São Paulo</strong> é <strong>25° C</strong> e
        essas músicas combinam com o clima:
      </ContainerTitle>
      <SongsContainer>
        <SongBox>
          <div></div>
          <h3>Perfect</h3>
          <p>Ed Sheeran</p>
        </SongBox>
        <SongBox>
          <div></div>
          <h3>Count on me</h3>
          <p>Bruno Mars</p>
        </SongBox>
        <SongBox>
          <div></div>
          <h3>Do i wanna know</h3>
          <p>Artic Monkeys</p>
        </SongBox>
        <SongBox>
          <div></div>
          <h3>Sunflower</h3>
          <p>Post Malone</p>
        </SongBox>
        <SongBox>
          <div></div>
          <h3>Crazy</h3>
          <p>Aerosmith</p>
        </SongBox>
      </SongsContainer>
      <AddFavoritesButton>Salvar lista nas favoritas</AddFavoritesButton>
    </Container>
  );
}
