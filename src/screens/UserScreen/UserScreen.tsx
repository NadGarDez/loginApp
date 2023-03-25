import {
  CircularProgress,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Box, { type BoxProps } from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HexagonalBackground } from '../../components/surfaces/HexagonalBackground';
import { isLoadingTokenSelector } from '../../reduxFiles/reducers/authTokenSlice';
import { deleteCookie } from '../../utils/cookies';

const FormBox = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: 20,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  position: 'relative',
  overflow: 'hidden',
  minHeight: 480,
  top: 0,
  zIndex: 1,
}));

export const UserScreen = (): JSX.Element => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const loadingToken = useSelector(isLoadingTokenSelector);

  useEffect(() => {
    deleteCookie('login_app_cookie');
  }, []);

  if (loadingToken) {
    return (
      <Box m={1}>
        <CircularProgress />;
      </Box>
    );
  }

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
            <>
              <Typography variant="h2" textAlign="center" mt={2.5}>
                Welcome
              </Typography>
              <Typography variant="subtitle1" textAlign="center" mt={1.1}>
                Sign in to continue
              </Typography>
            </>
          </HexagonalBackground>
        </FormBox>
      </Box>
    </Container>
  );
};
