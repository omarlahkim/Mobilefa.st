import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
  token: string;
  isLogged: boolean;
}

const initialState: AuthState = {
  token: '',
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    confirmAuth: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isLogged = true;
    },
    destroyAuth: state => {
      state.token = '';
      state.isLogged = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {confirmAuth, destroyAuth} = authSlice.actions;

export default authSlice.reducer;
