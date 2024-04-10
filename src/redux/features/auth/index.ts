import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

export interface User {
  email: string;
  username?: string;
  phone?: string;
  birth?: Date;
}

export interface AuthState {
  token: string;
  isLogged: boolean;
  user: User;
}

const initialState: AuthState = {
  token: '',
  isLogged: false,
  user: {email: '', username: '', phone: '', birth: new Date()},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    confirmAuth: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isLogged = true;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    destroyAuth: state => {
      state.token = '';
      state.isLogged = false;
      state.user = {email: '', username: '', phone: '', birth: new Date()};
    },
  },
});

// Action creators are generated for each case reducer function
export const {confirmAuth, destroyAuth} = authSlice.actions;

export default authSlice.reducer;
