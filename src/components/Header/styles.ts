import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 12vh;

  padding: 1rem 3rem;

  border-bottom: 1px solid ${props => props.theme.colors.border};

  background-color: #1a181b;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 350px) {
    flex-direction: column;
    height: 16vh;
  }
`;

export const Logo = styled.h1`
  font-weight: 400;
  color: ${props => props.theme.colors.secondaryText};

  strong {
    color: ${props => props.theme.colors.mainText};
    font-weight: 700;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 8px;
    color: ${props => props.theme.colors.mainText};
  }

  cursor: pointer;
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.mainText};
  font-size: 1.25rem;
  margin: 0 auto;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ThemeSwitcherBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-left: 2rem;
    @media (max-width: 500px) {
      display: none;
    }
  }
`;
