import { Box, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { StyledBox } from './styles';

const Topbar = () => {
  return (
    <StyledBox>
      {/* SEARCH BAR */}
      <Box className='search-box'>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
        <IconButton className='icon-button' type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display='flex'>
        <ThemeSwitch />
        <IconButton className='icon-button'>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton className='icon-button'>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton className='icon-button'>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </StyledBox>
  );
};

export default Topbar;
