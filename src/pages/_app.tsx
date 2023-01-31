import { GlobalStyles } from '@/styles/global-styles';
import { ColorModeContext, useMode } from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

/* Para pegar theme
const container = styled.div`
  background: ${({theme}) => theme.colors.primary}
` */

export default function App({ Component, pageProps }: AppProps) {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
