import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';

import { AppProps } from 'next/app';

import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';

import { WheaterProvider } from '../contexts/WheaterContext/WheaterContext';
import { SongsProvider } from '../contexts/SongsContext/SongsContext';
import { FavoritesProvider } from '../contexts/FavoritesContext/FavoritesContext';

import { Header } from '../components/Header';

import { GlobalStyles } from '../styles/global';

import dark from '../styles/theme/dark';
import light from '../styles/theme/light';

function MyApp({ Component, pageProps }: AppProps) {
  const [userTheme, setUserTheme] = useState('dark');
  const activeThemeStyles = userTheme === 'dark' ? dark : light;
  const isThemeDark = userTheme === 'dark';
  const isThemeLight = userTheme === 'light';

  const toogleTheme = () => {
    if (isThemeDark) {
      setUserTheme('light');
    }
    if (isThemeLight) {
      setUserTheme('dark');
    }
  };

  return (
    <ThemeProvider theme={activeThemeStyles}>
      <WheaterProvider>
        <SongsProvider>
          <FavoritesProvider>
            <Header toggleTheme={toogleTheme} />
            <Component {...pageProps} />
            <ToastContainer
              position="bottom-left"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </FavoritesProvider>
        </SongsProvider>
      </WheaterProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
