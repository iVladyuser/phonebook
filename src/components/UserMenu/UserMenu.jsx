import avatar from './avatar.png';
import { Avatar, Button, Toolbar } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const UserMenu = () => {
  return (
    <Toolbar sx={{ display: 'flex', columnGap: 2, fontSize: 18 }}>
      <Avatar alt={''} src={avatar} sx={{ width: 36, height: 36 }} />
      Welcome,
      <Button
        variant="text"
        color="inherit"
        type="button"
        startIcon={<LogoutOutlinedIcon />}
      >
        Log Out
      </Button>
    </Toolbar>
  );
};
