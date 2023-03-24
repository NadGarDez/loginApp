import React from 'react';
import { BasicInput } from './BasicInput';
import { SecretIcon } from '../../style/icons';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { type TypographyProps } from '@mui/material/Typography';

interface Props {
  error: boolean;
  errorMessage?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ErrorTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: 13,
  color: theme.palette.error.main,
}));

export const PasswordInput = ({
  errorMessage = '',
  error = false,
  value,
  onChange,
}: Props): JSX.Element => {
  return (
    <Box sx={{ height: 53 }}>
      <BasicInput
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
