import Link from 'next/link';
import { HeaderStyled } from './styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Link href="/">home</Link>
    </HeaderStyled>
  );
};
