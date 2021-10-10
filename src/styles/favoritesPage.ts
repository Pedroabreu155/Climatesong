import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GoHomeButton = styled.button`
  background: none;

  border: none;

  color: ${props => props.theme.colors.mainText};

  margin-right: 2rem;
  margin-left: auto;

  font-size: 2.5rem;

  transition: 0.3s;

  :hover {
    filter: brightness(1.4);
  }
`;

export const GoTopButton = styled.a`
  position: fixed;
  right: 10px;
  bottom: 50px;
  color: ${props => props.theme.colors.mainText};
  font-size: 2.5rem;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  margin-right: 3.75rem;
  transition: 0.3s;

  :hover {
    filter: brightness(1.4);
  }
`;
