import React from 'react';
import { BasicInput } from './BasicInput';
import { AvatarIcon } from '../../style/icons';
import { Box } from '@mui/material';

export const EmailInput = (): JSX.Element => {
  return (
    <BasicInput
      className="shadow"
      startAdornment={
        <Box mr={1}>
          <AvatarIcon />
        </Box>
      }
      fullWidth
    />
  );
};
