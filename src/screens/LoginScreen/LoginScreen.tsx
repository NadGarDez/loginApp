import { Container, useMediaQuery } from '@mui/material';
import Box, { type BoxProps } from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react';
import { LoginForm } from '../../components/forms/LoginForm';
import { HexagonalBackground } from '../../components/surfaces/HexagonalBackground';

const FormBox = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: 20,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  position: 'relative',
  overflow: 'hidden',
  height: 480,
  top: 0,
  zIndex: 1,
}));

export const LoginScreen = (): JSX.Element => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container sx={{ flex: 1, height: '100vh' }}>
      <Box
        sx={{ width: '100%', minHeight: '100%' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <FormBox
          width={matches ? 320 : 291}
          justifyContent="center"
          className="shadow"
        >
          <HexagonalBackground>
            <LoginForm />
          </HexagonalBackground>
        </FormBox>
      </Box>
    </Container>
  );
};
