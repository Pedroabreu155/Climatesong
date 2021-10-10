import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { WheaterProvider } from '../contexts/WheaterContext/WheaterContext';
import { SongsProvider } from '../contexts/SongsContext/SongsContext';
import { FavoritesProvider } from '../contexts/FavoritesContext';

import { Header } from '../components/Header';

import { GlobalStyles } from '../styles/global';

import theme from '../styles/theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <WheaterProvider>
        <SongsProvider>
          <FavoritesProvider>
            <Header />
            <Component {...pageProps} />
          </FavoritesProvider>
        </SongsProvider>
      </WheaterProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
