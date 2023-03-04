import { styled } from '@mui/material/styles';
import { Button, ButtonProps, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  marginTop: '1rem',
  fontSize: '1.5rem',
  '&.MuiButtonBase-root:hover': {
    background: theme.palette.secondary.dark,
  },
  size: 'large',
  variant: 'contained',
}));

export default function HomeButtonCustomization() {
  const theme = useTheme()
  return (
    <HomeButton>
      <Link to="/" style={{color: theme.palette.secondary.light, textDecoration: 'none'}}>Home Page</Link>
    </HomeButton>
  );
}
