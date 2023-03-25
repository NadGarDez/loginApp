import {
  Avatar,
  CircularProgress,
  Container,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Box, { type BoxProps } from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DarkButton } from '../../components/buttons/DarkButton';
import {
  authTokenSelector,
  isLoadingTokenSelector,
} from '../../reduxFiles/reducers/authTokenSlice';
import { type User } from '../../types/api';
import { logout } from '../../utils/session';
import { getUser } from '../../utils/user';

const FormBox = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: 20,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  position: 'relative',
  overflow: 'hidden',
  minHeight: 480,
  top: 0,
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
}));

const HalfBox = styled(Box)<BoxProps>(({ theme }) => ({
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  width: '100%',
  backgroundColor: theme.palette.primary.contrastText,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
}));

export const UserScreen = (): JSX.Element => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const loadingToken = useSelector(isLoadingTokenSelector);
  const token = useSelector(authTokenSelector);

  const [loadingUser, setLoadingUser] = useState<boolean>(true);
  const [dataUser, setDataUser] = useState<User>({
    email: '',
    names: '',
    surnames: '',
    gender: '',
  });

  useEffect(() => {
    async function anyNameFunction(): Promise<void> {
      const results = await getUser(token ?? '');
      if (results.data !== undefined) {
        setDataUser(results.data);
      }
      setLoadingUser(false);
    }
    anyNameFunction();
  }, []);

  if (loadingToken) {
    return (
      <Box m={1}>
        <CircularProgress color="secondary" />;
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
          alignItems="center"
          className="shadow"
        >
          {loadingUser ? (
            <Box
              width="100%"
              sx={{ flex: 1 }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CircularProgress color="secondary" />
            </Box>
          ) : (
            <>
              <Box width="100%" display="flex" justifyContent="center" mt={2.5}>
                <Avatar
                  sizes=""
                  sx={{
                    width: 56,
                    height: 56,
                    bgcolor: theme.palette.primary.contrastText,
                  }}
                >
                  <Typography color="#f3518c" variant="h2">
                    {`${dataUser?.names?.charAt(0)}${dataUser?.surnames?.charAt(
                      0,
                    )}`}
                  </Typography>
                </Avatar>
              </Box>
              <Typography
                variant="h4"
                textAlign="center"
                mt={1}
                color="white"
                sx={{ fontWeight: '700' }}
              >
                {`${dataUser?.names} ${dataUser?.surnames}`}
              </Typography>
              <Typography variant="subtitle1" textAlign="center" mt={1.1}>
                {dataUser.email}
              </Typography>
              <HalfBox mt={2} className="shadow">
                <Box display="flex" flexDirection="row" ml={1} mr={1} mt={2}>
                  <TextField label="Search" placeholder="Search" fullWidth />
                </Box>
                <Box ml={1} mr={1} mt={2}>
                  <Typography variant="body2" color="black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  flexDirection="row"
                  ml={1}
                  mr={1}
                  mt={2}
                  mb={2}
                >
                  <DarkButton fullWidth onClick={logout}>
                    Logout
                  </DarkButton>
                </Box>
              </HalfBox>
            </>
          )}
        </FormBox>
      </Box>
    </Container>
  );
};
