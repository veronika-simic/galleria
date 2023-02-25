import { Box, Typography } from '@mui/material';

export default function ErrorPage() {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography>OOOOOPS !</Typography>
      <Typography>
        Sorry for the inconvenience. The responsible person will be fired.
      </Typography>
      <Typography>(thanks to you)</Typography>
    </Box>
  );
}
