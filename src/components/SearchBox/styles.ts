import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 60%;
  height: 4rem;
  padding: 0.5rem;
`;

export const SearchInput = styled.input`
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 5px;

  margin-right: 1rem;

  width: 65%;
  height: 100%;
  padding: 1rem;

  font-size: 1.25rem;

  background-color: #1a181b;
  color: ${props => props.theme.colors.inputText};
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

  :hover {
    filter: brightness(0.9);
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

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;
