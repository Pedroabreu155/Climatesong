import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      mainText: string;
      secondaryText: string;
      inputText: string;
      border: string;
      green: string;
      orange: string;
      red: string;
    };
    fonts: {
      main: string;
    };
  }
}
