import { styled } from '@mui/material/styles';
import Button, { type ButtonProps } from '@mui/material/Button';

export const PrincipalButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 16,
  paddingTop: 15,
  paddingBottom: 15,
}));
