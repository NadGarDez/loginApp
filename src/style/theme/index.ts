import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

export const theme: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f3518c',
    },
    secondary: {
      main: '#f50057',
      dark: '#1c1c1c',
    },
    background: {
      default: '#e5e5e5',
    },
  },
  typography: {
    h2: {
      fontSize: 34,
      fontWeight: 700,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 16,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 18,
    },
  },
});
