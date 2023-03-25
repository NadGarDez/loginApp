import React from 'react';
import { BasicInput } from './BasicInput';
import { AvatarIcon } from '../../style/icons';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography, { type TypographyProps } from '@mui/material/Typography';
import { type InputSignUpForm } from '../../types/form';

const ErrorTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: 13,
  color: theme.palette.error.main,
}));

export const EmailInput = ({
  errorMessage = '',
  error,
  value,
  onChange,
}: InputSignUpForm): JSX.Element => {
  return (
    <Box sx={{ height: 53 }}>
      <BasicInput
        inputProps={{ 'data-testid': 'email-input' }}
        value={value}
        name="email"
        className="shadow"
        onChange={onChange}
        startAdornment={
          <Box mr={1}>
            <AvatarIcon />
          </Box>
        }
        placeholder="email"
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
