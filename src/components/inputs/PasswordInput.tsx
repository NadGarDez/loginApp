import React from 'react';
import { BasicInput } from './BasicInput';
import { SecretIcon } from '../../style/icons';
import { Box } from '@mui/material';

export const PasswordInput = (): JSX.Element => {
  return (
    <BasicInput
      className="shadow"
      startAdornment={
        <Box mr={1}>
          <SecretIcon />
        </Box>
      }
      fullWidth
    />
  );
};
