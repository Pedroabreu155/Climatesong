import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { WheaterProvider } from '../contexts/WheaterContext';
import { SongsProvider } from '../contexts/SongsContext/SongsContext';

import { theme } from '../styles/theme/theme';

import { Header } from '../components/Header';

import { GlobalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <WheaterProvider>
        <SongsProvider>
          <Header />
          <Component {...pageProps} />
        </SongsProvider>
      </WheaterProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
