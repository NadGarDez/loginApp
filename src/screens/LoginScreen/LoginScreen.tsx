import { Container, Link, Typography } from '@mui/material';
import Box, { type BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import React from 'react';
import { DarkButton } from '../../components/buttons/DarkButton';
import { PrincipalButton } from '../../components/buttons/PrincipalButton';
import { EmailInput } from '../../components/inputs/EmailInput';
import { PasswordInput } from '../../components/inputs/PasswordInput';
import { GoogleIcon } from '../../style/icons';
import { TransparentHexagon } from '../../style/svg/TransparentHexagon';
import { WhiteHexagon } from '../../style/svg/WhiteHexagon';

export const FormBox = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: 20,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  position: 'relative',
  overflow: 'hidden',
  height: 480,
  top: 0,
  zIndex: 1,
}));

export const HexagonDesktopContainer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundImage: 'linear-gradient(transparent 80%, white 20%)',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  zIndex: 3,
}));

export const HexagonDesktopContainer2 = styled(Box)<BoxProps>(({ theme }) => ({
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

export const LoginScreen = (): JSX.Element => {
  return (
    <Container sx={{ flex: 1, height: '100vh' }}>
      <Box
        sx={{ width: '100%', minHeight: '100%' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <FormBox
          width={291}
          justifyContent="center"
          sx={{ display: { xl: 'flex', md: 'flex', xs: 'none', sm: 'none' } }}
          className="shadow"
        >
          <HexagonDesktopContainer>
            <Box mt={12}>
              <WhiteHexagon />
            </Box>
          </HexagonDesktopContainer>
          <FormContainer>
            <Typography variant="h2" textAlign="center" mt={2.5}>
              Welcome
            </Typography>
          </FormContainer>
        </FormBox>
        <FormBox
          width={291}
          justifyContent="center"
          sx={{ display: { xl: 'none', md: 'none', xs: 'flex', sm: 'flex' } }}
          className="shadow"
        >
          <HexagonDesktopContainer>
            <Box mt={12}>
              <WhiteHexagon />
            </Box>
          </HexagonDesktopContainer>
          <HexagonDesktopContainer2>
            <Box mt={7.3}>
              <TransparentHexagon />
            </Box>
          </HexagonDesktopContainer2>
          <FormContainer>
            <Typography variant="h2" textAlign="center" mt={2.5}>
              Welcome Sign
            </Typography>
            <Typography variant="subtitle1" textAlign="center" mt={1.1}>
              Sign in to continue
            </Typography>
            <Box mt={1.1} ml={2} mr={2}>
              <EmailInput />
            </Box>
            <Box mt={1.1} ml={2} mr={2}>
              <PasswordInput />
            </Box>
            <Box mt={1.1} mr={2}>
              <Typography
                variant="body2"
                textAlign="right"
                sx={{ color: 'grey' }}
              >
                Forgot your password ?
              </Typography>
            </Box>
            <Box mt={1.1} ml={2} mr={2}>
              <PrincipalButton variant="contained" fullWidth className="shadow">
                SignUp
              </PrincipalButton>
            </Box>

            <Box mt={1.1}>
              <Typography
                variant="body2"
                textAlign="center"
                sx={{ color: 'black' }}
              >
                OR
              </Typography>
            </Box>
            <Box mt={1.1} ml={2} mr={2}>
              <DarkButton variant="contained" fullWidth className="shadow">
                <GoogleIcon />
                <Typography variant="subtitle1" ml={1}>
                  Sign in with Google
                </Typography>
              </DarkButton>
            </Box>
            <Box mt={1.1}>
              <Typography
                variant="body2"
                textAlign="center"
                sx={{ color: 'black' }}
              >
                Don’t have an account? <Link color="#000">Create</Link>
              </Typography>
            </Box>
          </FormContainer>
        </FormBox>
      </Box>
    </Container>
  );
};
