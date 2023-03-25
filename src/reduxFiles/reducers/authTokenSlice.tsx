import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface authToken {
  value: string | null;
  loading: boolean;
}

const initialState: authToken = {
  value: null,
  loading: true,
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
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const authTokenSelector = (state: RootState): string | null =>
  state.authToken.value;
export const isLoadingTokenSelector = (state: RootState): boolean =>
  state.authToken.loading;
export const { setToken, clearToken, setLoading } = authTokenSlice.actions;
export default authTokenSlice.reducer;
