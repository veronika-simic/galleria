import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    component: Link,
    marginTop: '1rem',
    fontSize: '1.5rem',
  '&.MuiButtonBase-root:hover': {
    background: theme.palette.secondary.dark,
  },
  size: 'large',
  to: '/',
  variant: 'contained'
}));



export default function HomeButtonCustomization() {
    return <HomeButton> Main Page </HomeButton>;
  }