import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 12vh;

  padding: 1rem 3rem;

  border-bottom: 1px solid ${props => props.theme.colors.border};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-weight: 400;
  color: ${props => props.theme.colors.mainText};

  strong {
    color: ${props => props.theme.colors.secondaryText};
    font-weight: 700;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 8px;
    color: ${props => props.theme.colors.secondaryText};
  }

  cursor: pointer;
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.secondaryText};
  font-size: 1.25rem;
`;
