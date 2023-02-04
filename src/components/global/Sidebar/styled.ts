import styled, { css } from 'styled-components';
import IconButton from '@mui/material/IconButton';

export const StyledIcon = styled(IconButton)`
  color: ${({ theme }) => theme.palette.neutral.light};
`;
