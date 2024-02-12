import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { authThunk } from 'services';

const initialState = {
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(authThunk.loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(authThunk.registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(authThunk.logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(authThunk.refreshThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.userData = payload;
      })
      .addCase(authThunk.updateAvatarThunk.fulfilled, (state, { payload }) => {
        state.userData.avatarURL = payload;
      })
      .addMatcher(
        isAnyOf(
          authThunk.loginThunk.pending,
          authThunk.registerThunk.pending,
          authThunk.refreshThunk.pending,
          authThunk.logOutThunk.pending,
          authThunk.updateAvatarThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          authThunk.loginThunk.rejected,
          authThunk.registerThunk.rejected,
          authThunk.refreshThunk.rejected,
          authThunk.logOutThunk.rejected,
          authThunk.updateAvatarThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
