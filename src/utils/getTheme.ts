import { themeDark, themeDefault } from '@/styles/theme';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';

export function toggleTheme(changeToDark: boolean) {
  const theme = changeToDark ? 'Dark' : 'Default';
  localStorage.setItem('theme', JSON.stringify(theme));
  console.log(theme);
}

export const GetTheme = (): DefaultTheme => {
  const [modeActivated, setModeActivated] = useState<string | null>('Default');
  const [theme, setTheme] = useState(themeDefault);

  useEffect(() => {
    const rawStoregedData = localStorage.getItem('theme');
    if (rawStoregedData !== null) {
      setModeActivated(JSON.parse(rawStoregedData));
      modeActivated === 'Default'
        ? setTheme(themeDefault)
        : setTheme(themeDark);
    } else setTheme(themeDefault);
  }, [modeActivated, theme]);
  return theme;
};
export const CheckTheme = (): boolean => {
  const [modeActivated, setModeActivated] = useState<string | null>('Default');
  useEffect(() => {
    const rawStoregedData = localStorage.getItem('theme');
    if (rawStoregedData !== null) {
      setModeActivated(JSON.parse(rawStoregedData));
    } else setModeActivated('Default');
  }, []);
  return modeActivated === 'Dark' ? true : false;
};
