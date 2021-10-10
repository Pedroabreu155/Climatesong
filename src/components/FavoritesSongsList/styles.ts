import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem auto;

  display: flex;
  flex-direction: column;

  width: 80%;
  height: 15rem;
  padding: 1rem;

  border: 1px solid ${props => props.theme.colors.mainText};
  border-radius: 5px;

  @media (max-width: 950px) {
    height: 100vh;
  }
`;

export const ContainerTitle = styled.h2`
  color: ${props => props.theme.colors.orange};

  text-align: center;

  margin-top: 0.6rem;

  font-weight: 400;
`;

export const SongsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex: 1;

  margin-top: 1rem;

  @media (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }
`;

export const SongBox = styled.div`
  width: 12rem;

  margin-top: 0.5rem;

  text-align: center;

  color: ${props => props.theme.colors.orange};

  h3 {
    margin-top: 0.6rem;
  }
`;

export const RemoveFavoritesButton = styled.button`
  border: none;
  border-radius: 5px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 20%;
  width: 30%;

  background-color: ${props => props.theme.colors.red};

  font-size: 1.25rem;

  transition: filter 0.2s;

  @media (max-width: 950px) {
    width: 75%;
  }

  :hover {
    filter: brightness(0.7);
  }
`;
