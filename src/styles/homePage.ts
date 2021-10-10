import styled from 'styled-components';

export const Container = styled.main`
  height: 88vh;
  width: 100%;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    height: 100%;
  }
`;

export const PageTitle = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.secondaryText};
`;
