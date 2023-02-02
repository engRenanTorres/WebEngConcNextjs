import Link from 'next/link';
import { HeaderStyled } from './styled';
import { ThemeSwitch } from '../ThemeSwitch';

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Link href="/">home</Link>
      <ThemeSwitch />
    </HeaderStyled>
  );
};
