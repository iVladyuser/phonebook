import { Toolbar } from '@mui/material';
import { StyledNavLink, toolbarStyle } from 'components/Navigation/StyleNav';

export const Navigation = () => {
  return (
    <Toolbar sx={toolbarStyle}>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
    </Toolbar>
  );
};
