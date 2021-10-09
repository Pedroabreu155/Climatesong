import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme/theme';

import { Header } from '../components/Header';

import { GlobalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
