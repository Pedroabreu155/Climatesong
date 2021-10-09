import styled from 'styled-components';

export const Container = styled.div`
  margin: 2.8rem auto;

  display: flex;
  flex-direction: column;

  width: 80%;
  height: 40rem;
  padding: 1rem;

  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 5px;
`;

export const ContainerTitle = styled.h2`
  color: ${props => props.theme.colors.mainText};

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
`;

export const SongBox = styled.div`
  width: 12rem;
  height: 80%;

  margin-top: 1.5rem;

  text-align: center;

  color: ${props => props.theme.colors.mainText};

  div {
    height: 80%;
    background-image: url('x-edSheeran.jpg');
    background-size: cover;
  }

  h3 {
    margin-top: 0.6rem;
  }
`;

export const AddFavoritesButton = styled.button`
  border: none;
  border-radius: 5px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 10%;
  width: 30%;

  background-color: ${props => props.theme.colors.green};

  font-size: 1.25rem;

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;
