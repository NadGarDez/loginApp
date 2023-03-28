import {
  AppBar,
  Avatar,
  IconButton,
  MenuItem,
  Skeleton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import { Menu } from '@mui/icons-material/';
import MenuComponent from '@mui/material/Menu';
import React from 'react';
import { logout } from '../../utils/session';

interface MainNavBarProps {
  loading: boolean;
  avatarText: string;
}

export const MainNavBar = ({
  loading,
  avatarText,
}: MainNavBarProps): JSX.Element => {
  const [mobileMenuAnchor, setMobileMenuAnchor] =
    React.useState<null | HTMLElement>(null);
  const [deskMenuAnchor, setDeskMenuAnchor] =
    React.useState<null | HTMLElement>(null);

  const handleOpen = (
    event: React.MouseEvent<HTMLElement>,
    type: string,
  ): void => {
    if (type === 'mobile') setMobileMenuAnchor(event.currentTarget);
    else setDeskMenuAnchor(event.currentTarget);
  };

  const handleClose = (type: string): void => {
    if (type === 'mobile') setMobileMenuAnchor(null);
    else setDeskMenuAnchor(null);
  };

  const onPressLogOut = (type: string): void => {
    handleClose(type);
    logout();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{ display: { xs: 'none', md: 'flex', xl: 'flex', sm: 'none' } }}
          >
            <Typography variant="h2">App Login</Typography>
          </Box>
          <Box
            flexDirection="row-reverse"
            flexGrow={1}
            sx={{ display: { xs: 'none', md: 'flex', xl: 'flex', sm: 'none' } }}
          >
            {loading ? (
              <Skeleton variant="circular" width={40} height={40} />
            ) : (
              <>
                <IconButton
                  onClick={(event) => {
                    handleOpen(event, 'desk');
                  }}
                >
                  <Avatar sx={{ bgcolor: 'white' }}>
                    <Typography color="#f3518c" variant="subtitle1">
                      {avatarText}
                    </Typography>
                  </Avatar>
                </IconButton>
                <MenuComponent
                  sx={{ mt: '45px' }}
                  anchorEl={deskMenuAnchor}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(deskMenuAnchor)}
                  onClose={() => {
                    handleClose('desk');
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      onPressLogOut('desk');
                    }}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </MenuComponent>
              </>
            )}
          </Box>
          <Box
            flexGrow={1}
            sx={{ display: { xs: 'flex', md: 'none', xl: 'none', sm: 'flex' } }}
          >
            <IconButton
              onClick={(event) => {
                handleOpen(event, 'mobile');
              }}
            >
              <Menu color="secondary" />
            </IconButton>
            <MenuComponent
              sx={{ mt: '45px' }}
              anchorEl={mobileMenuAnchor}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(mobileMenuAnchor)}
              onClose={() => {
                handleClose('mobile');
              }}
            >
              {loading ? (
                <Skeleton variant="rectangular" width={100} height={54} />
              ) : (
                <MenuItem
                  onClick={() => {
                    onPressLogOut('mobile');
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              )}
            </MenuComponent>
          </Box>
          <Box
            flexGrow={1}
            sx={{ display: { xs: 'flex', md: 'none', xl: 'none', sm: 'flex' } }}
            justifyContent="center"
          >
            <Typography variant="h2" textAlign="center">
              App Login
            </Typography>
          </Box>
          <Box
            flexDirection="row-reverse"
            flexGrow={1}
            sx={{ display: { xs: 'flex', md: 'none', xl: 'none', sm: 'flex' } }}
          >
            {loading ? (
              <Skeleton variant="circular" width={40} height={40} />
            ) : (
              <Avatar sx={{ bgcolor: 'white' }}>
                <Typography color="#f3518c" variant="subtitle1">
                  {avatarText}
                </Typography>
              </Avatar>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
