import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 12vh;

  padding: 1rem;

  border-bottom: 1px solid ${props => props.theme.colors.border};

  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  font-weight: 400;
  color: ${props => props.theme.colors.mainText};

  strong {
    color: ${props => props.theme.colors.secondaryText};
    font-weight: 400;
  }
`;
