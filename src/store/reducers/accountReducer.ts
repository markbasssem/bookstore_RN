import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {act} from 'react-test-renderer';

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
      console.log('Payload', action.payload);
      state.username = action.payload.username;
      state.type = action.payload.type;
      state.token = action.payload.token;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setAccount} = accountSlice.actions;

export default accountSlice.reducer;
