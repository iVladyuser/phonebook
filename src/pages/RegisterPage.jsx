import * as React from 'react';
import {
  Avatar,
  Button,
  Container,
  Typography,
  CssBaseline,
  TextField,
  Box,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { avatarStyle, boxBottomFStyle, boxFormStyle } from './StylesPages';
import { StyledNavLink } from 'components/Navigation/StyleNav';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'services/fetchAuth';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmitSignUp = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerThunk(formData));
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={boxFormStyle}>
        <Avatar sx={avatarStyle}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={onSubmitSignUp} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            helperText="The name must contain only letters, apostrophes, hyphens and indents."
            inputProps={{
              inputMode: 'text',
              pattern: '^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$',
            }}
            autoComplete="name"
            name="userName"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            fullWidth
            label="Name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            helperText="Please enter a valid email address"
            // inputProps={{ inputMode: 'email', pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$" }}
            fullWidth
            placeholder="hotmail@hotmail.com"
            id="email"
            label="Email Address"
            type="email"
            name="userEmail"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            placeholder="********"
            helperText="The password must contain at least 7 characters"
            fullWidth
            // inputProps={{ inputMode: 'email', pattern: "^[a-zA-Z0-9!@#$%^&*()-_=+`~{}|:<>/?]+$" }}
            type="password"
            name="userPassword"
            label="Password"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            id="password"
            autoComplete="new-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Box sx={boxBottomFStyle}>
            <StyledNavLink to="/login">
              Already have an account? Sign in
            </StyledNavLink>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;
