import React from 'react';
import { EmailInput } from '../../components/inputs/EmailInput';
import { PasswordInput } from '../../components/inputs/PasswordInput';

export const LoginScreen = (): JSX.Element => {
  return (
    <>
      <EmailInput />
      <PasswordInput />
    </>
  );
};
