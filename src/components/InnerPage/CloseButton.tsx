import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

export const CloseButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: '1rem',
  position: 'absolute',
  top: '1rem',
  right: '2rem',
  '&.MuiButtonBase-root:hover': {
    background: theme.palette.primary.dark,
  },
}));


