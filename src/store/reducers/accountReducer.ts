import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

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
    setAccount: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setAccount} = accountSlice.actions;

export default accountSlice.reducer;
