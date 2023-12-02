import { Toolbar } from '@mui/material';
import { StyledNavLink, toolbarStyle } from 'components/Navigation/StyleNav';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthenticated);

  return (
    <Toolbar sx={toolbarStyle}>
      <StyledNavLink to="/">Home</StyledNavLink>
      {authenticated && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Toolbar>
  );
};
