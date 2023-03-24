import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface authToken {
  value: string | null;
}

const initialState: authToken = {
  value: null,
};

const authTokenSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    clearToken: (state) => {
      state.value = null;
    },
  },
});

export const authTokenSelector = (state: RootState): string | null =>
  state.authToken.value;
export const { setToken, clearToken } = authTokenSlice.actions;
export default authTokenSlice.reducer;
