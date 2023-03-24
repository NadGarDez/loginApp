import React from 'react';
import Box, { type BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { WhiteHexagon } from '../../style/svg/WhiteHexagon';
import { TransparentHexagon } from '../../style/svg/TransparentHexagon';
import { MobileWhiteHexagon } from '../../style/svg/MobileWhiteHexagon';

const SolidHexagonContainer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundImage: 'linear-gradient(transparent 80%, white 20%)',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  zIndex: 3,
}));

const TransparentHexagonContainer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: 'transparent',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  zIndex: 2,
}));

const FormContainer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: 'transparent',
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  top: 0,
  zIndex: 4,
}));

interface Props {
  children: JSX.Element;
}

export const HexagonalBackground = ({ children }: Props): JSX.Element => {
  return (
    <>
      <SolidHexagonContainer>
        <Box
          mt={12}
          sx={{ display: { xl: 'flex', md: 'flex', xs: 'none', sm: 'none' } }}
        >
          <WhiteHexagon />
        </Box>
        <Box
          mt={12}
          sx={{ display: { xl: 'none', md: 'none', xs: 'flex', sm: 'flex' } }}
        >
          <MobileWhiteHexagon />
        </Box>
      </SolidHexagonContainer>
      <Box sx={{ display: { xl: 'none', md: 'none', xs: 'flex', sm: 'flex' } }}>
        <TransparentHexagonContainer>
          <Box mt={7.3}>
            <TransparentHexagon />
          </Box>
        </TransparentHexagonContainer>
      </Box>
      <FormContainer>{children}</FormContainer>
    </>
  );
};
