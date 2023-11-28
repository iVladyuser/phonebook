import { AppBar, Toolbar } from '@mui/material';
import { AuthNav } from 'components/Navigation/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';

export const MyAppBar = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{ display: 'flex', fontSize: 18, justifyContent: 'space-between' }}
      >
        <Navigation />
        <UserMenu />
        <AuthNav />
      </Toolbar>
    </AppBar>
  );
};
