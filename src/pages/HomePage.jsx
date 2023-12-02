// import * as React from 'react';
// import { Paper, Typography, Box, Button } from '@mui/material';
// import hero from '../photo/hero.png';
// import { useSelector } from 'react-redux';
// import {
//   selectAuthenticated,
//   selectUserData,
// } from '../redux/auth/authSelectors';
// import { boxMainStyle, paperMainStyle } from './StylesPages';
// import { StyledNavLink } from '../components/Navigation/StyleNav';

export const HomePage = () => {
  // const isLoggedIn = useSelector(selectAuthenticated);
  // const user = useSelector(selectUserData);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        margin: '0 auto',
        padding: '30px',
      }}
    >
      <h1 style={{ color: '#3645ab', marginTop: '50px' }}>Phonebook</h1>
    </div>
  );
  // <Paper sx={paperMainStyle(hero)}>
  //   <Box sx={boxMainStyle}>
  //     {isLoggedIn ? (
  //       <>
  //         <Typography
  //           component="h1"
  //           variant="h3"
  //           color="inherit"
  //           gutterBottom
  //         >
  //           Hi, {user.name}! <br />
  //           Welcome to your phonebook.
  //         </Typography>
  //       </>
  //     ) : (
  //       <>
  //         <Typography
  //           component="h1"
  //           variant="h3"
  //           color="inherit"
  //           gutterBottom
  //         >
  //           Hello! I'm your phonebook.
  //         </Typography>
  //         <Typography variant="h5" color="inherit" paragraph>
  //           Please log in to your account or register.
  //         </Typography>
  //         <Button variant="contained">
  //           <StyledNavLink to="/login">Sign In</StyledNavLink>
  //         </Button>
  //       </>
  //     )}
  //   </Box>
  // </Paper>
};

export default HomePage;
