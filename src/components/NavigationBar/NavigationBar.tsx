import { Divider, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import theme from '../../theme/light';
import { SwitchModeButton } from '../SwitchButton/SwitchButton';

export default function NavigationBar() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          m: { xs: 0, sm: '1.5rem' },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link aria-label="Go to home page" to="/" style={theme.typography.h1} >
          galleria.
        </Link>
        <SwitchModeButton />
      </Box>
      <Divider />
    </>
  );
}
