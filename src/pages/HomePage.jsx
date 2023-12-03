import * as React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import hero from '../photo/hero.jpg';
import { useSelector } from 'react-redux';
import {
  selectAuthenticated,
  selectUserData,
} from '../redux/auth/authSelectors';
import { boxMainStyle, paperMainStyle } from './StylesPages';
import { StyledNavLink } from '../components/Navigation/StyleNav';

export const HomePage = () => {
  const isLoggedIn = useSelector(selectAuthenticated);
  const user = useSelector(selectUserData);

  return (
    <Paper sx={paperMainStyle(hero)}>
      <Box sx={boxMainStyle}>
        {isLoggedIn ? (
          <>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Hi, {user.name}! <br />
              Welcome to your phonebook.
            </Typography>
          </>
        ) : (
          <>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Hello! I'm your phonebook.
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Please log in to your account or register.
            </Typography>
            <Button variant="contained">
              <StyledNavLink to="/login">Sign In</StyledNavLink>
            </Button>
          </>
        )}
      </Box>
    </Paper>
  );
};

export default HomePage;
