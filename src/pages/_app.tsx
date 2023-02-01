/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Header } from '@/components/Header';
import { GlobalStyles } from '@/styles/global-styles';
import { themeDefault, themeDark } from '@/styles/theme';
import usePersistedState from '@/utils/usePersistedState';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

/* Para pegar theme
const container = styled.div`
  background: ${({theme}) => theme.colors.primary}
` */

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState('theme', themeDefault);

  const toggleTheme = () => {
    setTheme(theme.title === 'Default' ? themeDark : themeDefault);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
