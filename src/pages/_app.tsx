import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { WheaterProvider } from '../contexts/WheaterContext';

import { theme } from '../styles/theme/theme';

import { Header } from '../components/Header';

import { GlobalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <WheaterProvider>
        <Header />
        <Component {...pageProps} />
      </WheaterProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
