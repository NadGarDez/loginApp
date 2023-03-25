import axios, { AxiosError } from 'axios';
import moment from 'moment';
import { LOGIN_URL } from '../constants/system';
import { setLoading } from '../reduxFiles/reducers/authTokenSlice';
import { store } from '../reduxFiles/store';
import { type AuthReturn, type AxiosResponse } from '../types/api';
import { type SignUpForm } from '../types/form';
import { setCookie } from './cookies';

export const auth = async (form: SignUpForm): Promise<AuthReturn> => {
  try {
    const { data, status }: AxiosResponse = await axios.post(LOGIN_URL, form, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return {
      data: {
        token: data.token,
        message: data.message,
      },
      status,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: {
          token: '',
          message: error.message,
        },
        status: error.status ?? 400,
      };
    }
    return {
      data: {
        message: 'Unexpected Error',
        token: '',
      },
      status: 400,
    };
  }
};

export const configureToken = (token: string): void => {
  store.dispatch(setLoading(true));
  const expiration = moment().add(3, 'days').format('llll');
  setCookie('login_app_cookie', token, expiration);
};
