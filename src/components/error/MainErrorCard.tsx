import {
  Typography,
  useTheme,
  Paper,
  useMediaQuery,
  Button,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { logout } from '../../utils/session';

export const MainErrorCard = ({
  errorMessage,
}: {
  errorMessage: string;
}): JSX.Element => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box m={2}>
      <Paper elevation={2}>
        <Box
          display="flex"
          flexDirection="column"
          p={1}
          alignItems={match ? 'center' : 'flex-start'}
        >
          <Box>
            <Typography
              variant="h2"
              color={theme.palette.error.main}
              textAlign={match ? 'center' : 'left'}
            >
              Oops!. An error has ocurred
            </Typography>
          </Box>
          <Box mt={1}>
            <Typography
              variant="subtitle1"
              color={theme.palette.error.main}
              textAlign={match ? 'center' : 'left'}
            >
              {errorMessage}
            </Typography>
          </Box>
          <Box mt={1}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                logout();
              }}
            >
              Try again
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
