import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

export const OpenButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  bottom: '1rem',
  color: theme.palette.secondary.light,
  left: '1rem',
  opacity: '0.7',
  padding: '0.8rem 1.5rem',
  position: 'absolute',
  '&.MuiButtonBase-root:hover': {
    background: theme.palette.primary.dark,
  },
}));

