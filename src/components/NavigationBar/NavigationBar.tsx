import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function NavigationBar() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2">galleria.</Typography>
        <Typography>START SLIDESHOW</Typography>
      </Box>
      <Divider />
    </>
  );
}
