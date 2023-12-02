import { AppBar, Toolbar } from '@mui/material';
import { AuthNav } from 'components/Navigation/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/authSelectors';

export const MyAppBar = () => {
  const authenticated = useSelector(selectAuthenticated);
  return (
    <AppBar>
      <Toolbar
        sx={{ display: 'flex', fontSize: 18, justifyContent: 'space-between' }}
      >
        <Navigation />
        {authenticated ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
