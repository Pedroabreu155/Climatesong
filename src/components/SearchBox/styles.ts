import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 60%;
  height: 4rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 12rem;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 5px;

  margin-right: 1rem;

  width: 65%;
  height: 100%;
  padding: 1rem;

  font-size: 1.25rem;

  @media (max-width: 900px) {
    margin: auto;
  }

  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.inputText};
  caret-color: ${props => props.theme.colors.inputText};

  ::placeholder {
    color: ${props => props.theme.colors.inputText};
  }
`;

export const SearchButton = styled.button`
  border: none;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 6%;

  margin-right: 1rem;

  background-color: ${props => props.theme.colors.orange};

  font-size: 1.25rem;

  transition: filter 0.2s;

  @media (max-width: 900px) {
    margin: 1rem auto;
    width: 12%;
  }

  :hover {
    filter: brightness(0.7);
  }
`;

export const FavoritesButton = styled.button`
  border: none;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 6%;

  background-color: ${props => props.theme.colors.green};

  font-size: 1.25rem;

  @media (max-width: 900px) {
    margin: 0 auto;
    width: 12%;
  }

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.7);
  }
`;
