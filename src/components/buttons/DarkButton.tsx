import { styled } from '@mui/material/styles';
import Button, { type ButtonProps } from '@mui/material/Button';

export const DarkButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 16,
  paddingTop: 15,
  paddingBottom: 15,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));
