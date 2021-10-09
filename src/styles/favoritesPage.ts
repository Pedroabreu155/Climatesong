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
`;
