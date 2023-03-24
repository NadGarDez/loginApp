import React from 'react';
import { BasicInput } from './BasicInput';
import { AvatarIcon } from '../../style/icons';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography, { type TypographyProps } from '@mui/material/Typography';

interface Props {
  error: boolean;
  errorMessage?: string;
}

const ErrorTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: 13,
  color: theme.palette.error.main,
}));

export const EmailInput = ({
  errorMessage = '',
  error,
}: Props): JSX.Element => {
  return (
    <>
      <BasicInput
        className="shadow"
        startAdornment={
          <Box mr={1}>
            <AvatarIcon />
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
