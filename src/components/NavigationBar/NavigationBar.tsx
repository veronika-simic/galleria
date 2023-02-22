import { Divider, Typography } from '@mui/material';
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
        <Typography variant="h2" sx={{ fontFamily: 'Abril Fatface' }}>
          galleria.
        </Typography>
        <Typography>START SLIDESHOW</Typography>
      </Box>
      <Divider />
    </Box>
  );
}
