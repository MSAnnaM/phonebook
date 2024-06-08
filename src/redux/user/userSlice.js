import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, refreshUser } from './userApi';

const handleFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
  state.isLoggedIn = true;
  state.isLoading = false;
};
const logoutFulfilld = (state, { payload }) => {
  state.token = null;
  state.user = { name: null, email: null };
  state.isLoggedIn = false;
  state.isLoading = false;
};

const refreshFulfilled = (state, action, payload) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.isLoading = false;
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoading: false,
    isRefreshing: false,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, handleFulfilled)
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, handleFulfilled)
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, logoutFulfilld)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, refreshFulfilled)
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});
export const registrationReducer = registrationSlice.reducer;
