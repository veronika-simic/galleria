import { Divider, Typography, Link, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import theme from '../../theme';

export default function NavigationBar() {
  const theme = useTheme()
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
        <Link
          href="/"
          aria-label="Go to home page"
          underline="none"
          style={theme.typography.h1}
        >
          galleria.
        </Link>
        <Typography
          style={theme.typography.h4}
          sx={{ ml: { xs: '1rem', sm: 0 } }}
        >
          START SLIDESHOW
        </Typography>
      </Box>
      <Divider />
    </>
  );
}
