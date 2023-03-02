import { Divider, Typography, Link, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import theme from '../../theme';

export default function NavigationBar() {
  const theme = useTheme()
  return (
    <Box sx={{ width: '95%', margin: '0 auto' }}>
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
          variant="h2"
          sx={{ fontFamily: 'Abril Fatface' }}
          underline="none"
          color={theme.palette.primary.dark}
        >
          galleria.
        </Link>
        <Typography
          color={theme.palette.secondary.dark}
          variant="subtitle1"
          sx={{ ml: { xs: '1rem', sm: 0 } }}
        >
          START SLIDESHOW
        </Typography>
      </Box>
      <Divider />
    </Box>
  );
}
