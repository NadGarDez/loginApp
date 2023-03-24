import axios, { AxiosError } from 'axios';
import { LOGIN_URL } from '../constants/system';
import { type AuthReturn, type AxiosResponse } from '../types/api';
import { type SignUpForm } from '../types/form';

export const auth = async (form: SignUpForm): Promise<AuthReturn> => {
  try {
    const { data, status }: AxiosResponse = await axios.post(LOGIN_URL, form, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return {
      data,
      status,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: {
          message: error.message,
        },
        status: error.status ?? 400,
      };
    }
    return {
      data: {
        message: 'Unexpected Error',
      },
      status: 400,
    };
  }
};
