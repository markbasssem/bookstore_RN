import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/User';

const initialState: User = {
  username: '',
  token: '',
  type: '',
  money: 0,
  cart: []
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<{ user: User }>) => {
      // console.log('Reducer: ', action.payload.user);
      for (const key in action.payload.user) {
        state[key] = action.payload.user[key];
      }
    },
    logOut: (state, action) => {
      state = <User>{};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccount, logOut } = accountSlice.actions;

export default accountSlice.reducer;
