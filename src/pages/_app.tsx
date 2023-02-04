/* eslint-disable @typescript-eslint/ban-ts-comment */
import Sidebar from '@/components/global/Sidebar';
import Topbar from '@/components/global/Topbar';
import { GlobalStyles } from '@/styles/global-styles';
import { GetTheme } from '@/utils/getTheme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

/* Para pegar theme
const container = styled.div`
  background: ${({theme}) => theme.colors.primary}
` */

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={GetTheme()}>
      <div className='app'>
        <Sidebar />
        <div className='content-page'>
          <Topbar />
          <Component {...pageProps} />
        </div>
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
}
