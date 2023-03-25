import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import { GoogleIcon } from '../../style/icons';
import { DarkButton } from '../buttons/DarkButton';
import { PrincipalButton } from '../buttons/PrincipalButton';
import { EmailInput } from '../inputs/EmailInput';
import { PasswordInput } from '../inputs/PasswordInput';
import { styled } from '@mui/material/styles';
import { type TypographyProps } from '@mui/material/Typography';
import { useFormik } from 'formik';
import { signUpValidationSchema } from '../../constants/forms';
import { type SignUpForm } from '../../types/form';
import { auth, configureToken } from '../../utils/session';

const BoldTypography = styled(Typography)<TypographyProps>(() => ({
  fontWeight: 700,
  fontSize: 16,
}));

const formInitialValues: SignUpForm = {
  email: '',
  password: '',
};

export const LoginForm = (): JSX.Element => {
  const formik = useFormik({
    initialValues: formInitialValues,
    onSubmit: async (value: SignUpForm) => {
      const results = await auth(value);
      if (results.status !== 400) {
        configureToken(results.data.token);
      } else {
        alert(`${results.data.message}. \n Invalid email or password`);
      }
    },
    validationSchema: signUpValidationSchema,
  });

  return (
    <>
      <Typography variant="h2" textAlign="center" mt={2.5}>
        Welcome
      </Typography>
      <Typography variant="subtitle1" textAlign="center" mt={1.1}>
        Sign in to continue
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box mt={1.1} ml={2} mr={2}>
          <EmailInput
            errorMessage={formik.errors.email ?? ''}
            error={'email' in formik.errors && 'email' in formik.touched}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Box>
        <Box mt={1.1} ml={2} mr={2}>
          <PasswordInput
            error={'password' in formik.errors && 'password' in formik.touched}
            value={formik.values.password}
            errorMessage={formik.errors.password ?? ''}
            onChange={formik.handleChange}
          />
        </Box>
        <Box mt={1.5} mr={2}>
          <Link underline="none" href="https://www.google.com" target="_blank">
            <Typography
              variant="body2"
              textAlign="right"
              sx={{ color: 'grey' }}
            >
              Forgot your password ?
            </Typography>
          </Link>
        </Box>
        <Box mt={1.5} ml={2} mr={2}>
          <PrincipalButton
            variant="contained"
            fullWidth
            className="shadow"
            type="submit"
          >
            SignUp
          </PrincipalButton>
        </Box>
      </form>
      <Box mt={1.1}>
        <Typography variant="body2" textAlign="center" sx={{ color: 'black' }}>
          OR
        </Typography>
      </Box>
      <Box mt={1.1} ml={2} mr={2}>
        <DarkButton variant="contained" fullWidth className="shadow">
          <GoogleIcon />
          <Typography variant="subtitle2" ml={1}>
            Sign in with Google
          </Typography>
        </DarkButton>
      </Box>
      <Box
        mt={1.1}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body2" textAlign="center" sx={{ color: 'black' }}>
          Don’t have an account?
        </Typography>
        <Link
          color="#000"
          ml={0.2}
          href="https://www.google.com"
          target="_blank"
        >
          <BoldTypography>Create</BoldTypography>
        </Link>
      </Box>
    </>
  );
};
