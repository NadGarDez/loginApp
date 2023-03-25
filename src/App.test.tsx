import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import authTokenSlice, { setToken } from './reduxFiles/reducers/authTokenSlice';
import { configureStore } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

describe('token behavior', () => {
  it('should  render login screen', () => {
    const store = configureStore({
      reducer: {
        authToken: authTokenSlice,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(getByText('Welcome')).toBeDefined();
  });

  it('should NOT render login screen', async () => {
    const store = configureStore({
      reducer: {
        authToken: authTokenSlice,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    act(() => {
      store.dispatch(setToken('123'));
    });
    waitFor(() => { expect(getByText('Welcome')).not.toBeDefined(); });
  });

  it('When submit invalid fields', async () => {
    const store = configureStore({
      reducer: {
        authToken: authTokenSlice,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const button = getByText('Sign Up');
    fireEvent.click(button);
    waitFor(() => { expect(getByText('Required')).toBeDefined(); });
  });

  it('When you submit a invalid email', async () => {
    const store = configureStore({
      reducer: {
        authToken: authTokenSlice,
      },
    });

    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const input = getByTestId('email-input');
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'some text' } });
    const button = getByText('Sign Up');
    fireEvent.click(button);
    waitFor(() => {
      expect(getByText('Invalid email')).toBeDefined();
    });
  });

  it('When you submit  pass too short', async () => {
    const store = configureStore({
      reducer: {
        authToken: authTokenSlice,
      },
    });

    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const input = getByTestId('password-input');
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'a' } });
    const button = getByText('Sign Up');
    fireEvent.click(button);
    waitFor(() => {
      expect(getByText('The password is too short')).toBeDefined();
    });
  });
});
