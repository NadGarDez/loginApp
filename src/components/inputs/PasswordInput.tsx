import React from 'react';
import { BasicInput } from './BasicInput';
import { SecretIcon } from '../../style/icons';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { type TypographyProps } from '@mui/material/Typography';
import { type InputSignUpForm } from '../../types/form';

const ErrorTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: 13,
  color: theme.palette.error.main,
}));

export const PasswordInput = ({
  errorMessage = '',
  error = false,
  value,
  onChange,
}: InputSignUpForm): JSX.Element => {
  return (
    <Box sx={{ height: 53 }}>
      <BasicInput
        inputProps={{ 'data-testid': 'password-input' }}
        name="password"
        type="password"
        value={value}
        className="shadow"
        onChange={onChange}
        startAdornment={
          <Box mr={1}>
            <SecretIcon />
          </Box>
        }
        placeholder="password"
        error={error}
        fullWidth
      />
      {error ? (
        <Box sx={{ position: 'relative', left: 49, top: -19 }}>
          <ErrorTypography>{errorMessage}</ErrorTypography>
        </Box>
      ) : null}
    </Box>
  );
};
