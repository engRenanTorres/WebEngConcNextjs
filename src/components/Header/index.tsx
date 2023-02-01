import Link from 'next/link';
import { HeaderStyled } from './styled';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';

interface Props {
  toggleTheme(): void;
}

// eslint-disable-next-line react/prop-types
export const Header: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <HeaderStyled>
      <Link href="/">home</Link>
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked onChange={toggleTheme} />}
          label="Tema"
        />
      </FormGroup>
    </HeaderStyled>
  );
};
