import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.neutral.light};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  padding: ${({ theme }) => theme.spacings.small};
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: ${({ theme }) => theme.palette.neutral.light};
  }
`;
