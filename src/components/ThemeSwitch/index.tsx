import { SwitchThemeStyled } from './styled';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { CheckTheme, toggleTheme } from '@/utils/getTheme';
import { ChangeEvent } from 'react';
import router from 'next/router';

export const ThemeSwitch: React.FC = () => {
  const handleChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    toggleTheme(event.target.checked);
    router.reload();
  };
  const checked = CheckTheme();
  return (
    <SwitchThemeStyled>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChangeTheme} />}
          label="Tema"
        />
      </FormGroup>
    </SwitchThemeStyled>
  );
};
