import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { SongsProvider } from '../contexts/SongsContext';

import { theme } from '../styles/theme/theme';

import { Header } from '../components/Header';

import { GlobalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SongsProvider>
        <Header />
        <Component {...pageProps} />
      </SongsProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
