import * as React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Container,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { avatarStyle, boxFormStyle } from './StylesPages';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'services/fetchAuth';

const LogInPage = () => {
  const dispatch = useDispatch();
  const onSubmitSignIn = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const formData = {
      email,
      password,
    };
    dispatch(loginThunk(formData));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={boxFormStyle}>
        <Avatar sx={avatarStyle}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={onSubmitSignIn} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            // inputProps={{ inputMode: 'email', pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$" }}
            fullWidth
            type="email"
            placeholder="hotmail@hotmail.com"
            label="Email Address"
            name="userEmail"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            placeholder="********"
            required
            fullWidth
            label="Password"
            type="password"
            name="userPassword"
            minLength={7}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LogInPage;
