import { styled } from '@mui/material/styles';
import InputBase, { type InputBaseProps } from '@mui/material/InputBase';

export const BasicInput = styled(InputBase)<InputBaseProps>(({ theme }) => ({
  height: 54,
  borderRadius: 16,
  backgroundColor: 'white',
  paddingLeft: 15,
}));
