import { Divider, Typography, Link } from '@mui/material';
import Box from '@mui/material/Box';

export default function NavigationBar() {
  return (
    <Box sx={{ width: '95%', margin: '0 auto' }}>
      <Box
        sx={{
          m: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          href="#"
          aria-label="Go to home page"
          variant="h2"
          sx={{ fontFamily: 'Abril Fatface' }}
          underline="none"
          color="inherit"
        >
          galleria.
        </Link>
        <Typography color="grey">START SLIDESHOW</Typography>
      </Box>
      <Divider />
    </Box>
  );
}
