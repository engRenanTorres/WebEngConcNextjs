import { useTheme } from 'next-themes';
import { GlobalStyles } from '@mui/material';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { GlobalStyles as globalStyles } from '../../styles/global-styles';
import { themeDefault, themeDark } from '@/styles/theme';
import { FC, useEffect, useState } from 'react';

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(themeDark);

  useEffect(() => {
    resolvedTheme === 'light'
      ? setCurrentTheme(themeDefault)
      : setCurrentTheme(themeDark);
  }, [resolvedTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
