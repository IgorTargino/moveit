import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    color: {
      white: string;
      dark: string;
      background: string;
      grayLine: string;
      text: string;
      textHighlight: string;
      title: string;
      red: string;
      green: string;
      blue: string;
      blueDark: string;
      blueTwitter: string;
      loginBackground: string;
      primary: string;
      secondary: string;
    },
  }
}