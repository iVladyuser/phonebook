import avatar from './avatar.png';
import { Avatar, Button, Toolbar } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { selectuserData } from 'redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'services/fetchAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectuserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <Toolbar sx={{ display: 'flex', columnGap: 2, fontSize: 18 }}>
      <Avatar alt={''} src={avatar} sx={{ width: 36, height: 36 }} />
      Welcome, {userData.name}!
      <Button
        onClick={onLogOut}
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
