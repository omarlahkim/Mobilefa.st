import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: '',
};

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: state => {
      state.token = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
