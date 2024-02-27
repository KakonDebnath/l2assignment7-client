import { RootState } from '@/redux/store';
import { createSlice } from '@reduxjs/toolkit';

export type TUserInfo = {
  email: string;
};

export type TAuthInitialState = {
  user: null | TUserInfo;
  token: null | string;
};

const initialState: TAuthInitialState = { user: null, token: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const getUserEmail = (state: RootState) => state.auth.user?.email;
export const getCurrentToken = (state: RootState) => state.auth.token;
