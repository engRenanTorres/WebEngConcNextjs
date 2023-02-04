import { Box, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { StyledSearch, StyledBox, StyledIcon } from './styles';

const Topbar = () => {
  return (
    <StyledBox display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <StyledSearch display="flex" borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <StyledIcon type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </StyledIcon>
      </StyledSearch>

      {/* ICONS */}
      <Box display="flex">
        <ThemeSwitch />
        <StyledIcon>
          <NotificationsOutlinedIcon />
        </StyledIcon>
        <StyledIcon>
          <SettingsOutlinedIcon />
        </StyledIcon>
        <StyledIcon>
          <PersonOutlinedIcon />
        </StyledIcon>
      </Box>
    </StyledBox>
  );
};

export default Topbar;
