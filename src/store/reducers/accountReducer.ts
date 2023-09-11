import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';

export interface AccountState {
  username: string;
  type: string;
  token: string;
}

const initialState: AccountState = {
  username: '',
  type: '',
  token: '',
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<AccountState>) => {
      state.username = action.payload.username;
      state.type = action.payload.type;
      state.token = action.payload.token;
      EncryptedStorage.setItem("Account", action.payload.token)
    },
    logOut: (state, action) => {
      state.username = ""
      state.type = ""
      state.token = ""
      EncryptedStorage.setItem("Account", "")
      
    }
  },
});

// Action creators are generated for each case reducer function
export const {setAccount, logOut} = accountSlice.actions;

export default accountSlice.reducer;
