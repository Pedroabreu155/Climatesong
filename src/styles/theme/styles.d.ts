import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      mainText: string;
      secondaryText: string;
      inputText: string;
      border: string;
      green: string;
    };
    fonts: {
      main: string;
    };
  }
}
