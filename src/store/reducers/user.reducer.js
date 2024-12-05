import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  userData: null,
  accessToken: null,
  refreshToken: null,
  appearance: null,
  email: null,
  otpCode: null,
  analytics: null,
  monthlyAnalytics: null,
  links: null,
  currentPassword: null,
};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload.userData;
    },
    setLogOut(state) {
      state.isAuth = false;
      state.userData = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { setUserData, setLogOut } = UserSlice.actions;

export const UserReducer = UserSlice.reducer;
