import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import {User} from '../../types/User';

const initialState: User = {
  username: '',
  token: '',
  type: '',
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<User>) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.type = action.payload.type;
    },
    logOut: (state, action) => {
      state.username = '';
      state.token = '';
      state.type = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {setAccount, logOut} = accountSlice.actions;

export default accountSlice.reducer;
