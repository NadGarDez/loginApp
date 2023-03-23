import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authTokenReducer from './reducers/authTokenSlice';

export const store = configureStore({
  reducer: {
    authToken : authTokenReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
