/* eslint-disable @typescript-eslint/ban-ts-comment */
import { GlobalStyles } from '@/styles/global-styles';
import { theme } from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

/* Para pegar theme
const container = styled.div`
  background: ${({theme}) => theme.colors.primary}
` */

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
