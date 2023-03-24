import React from 'react';
import { BasicInput } from './BasicInput';
import { SecretIcon } from '../../style/icons';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { type TypographyProps } from '@mui/material/Typography';

interface Props {
  error: boolean;
  errorMessage?: string;
}

const ErrorTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: 13,
  color: theme.palette.error.main,
}));

export const PasswordInput = ({
  errorMessage = '',
  error,
}: Props): JSX.Element => {
  return (
    <>
      <BasicInput
        className="shadow"
        startAdornment={
          <Box mr={1}>
            <SecretIcon />
          </Box>
        }
        error={error}
        fullWidth
      />
      {error ? (
        <Box sx={{ position: 'relative', left: 49, top: -19 }}>
          <ErrorTypography>{errorMessage}</ErrorTypography>
        </Box>
      ) : null}
    </>
  );
};
