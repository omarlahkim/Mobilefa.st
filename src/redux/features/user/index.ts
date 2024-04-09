import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
  full_name?: string;
  username?: string;
  email?: string;
  phone?: string;
  birthdate?: string;
}

const initialState: UserState = {
  full_name: '',
  username: '',
  email: '',
  phone: '',
  birthdate: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.full_name = action.payload;
      state.username = action.payload;
      state.email = action.payload;
      state.phone = action.payload;
      state.birthdate = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUser} = userSlice.actions;

export default userSlice.reducer;
