import { styled } from '@mui/material/styles';
import InputBase, { type InputBaseProps } from '@mui/material/InputBase';

export const BasicInput = styled(InputBase)<InputBaseProps>(
  ({ error = false }) => ({
    height: 54,
    borderRadius: 16,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: error ? 'red' : 'white',
    paddingLeft: 15,
    borderWidth: 2,
  }),
);
