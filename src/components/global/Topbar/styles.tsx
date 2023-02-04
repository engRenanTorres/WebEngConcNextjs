import styled from 'styled-components';
import { Box, IconButton } from '@mui/material';

export const StyledSearch = styled(Box)`
  display: 'flex';
  background: #fdfdfd;
  border-radius: '3px';
`;

export const StyledBox = styled(Box)`
  background: ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) => theme.palette.neutral.light};
`;
export const StyledIcon = styled(IconButton)`
  color: ${({ theme }) => theme.palette.neutral.light};
`;
