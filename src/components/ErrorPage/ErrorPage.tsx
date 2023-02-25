import { Box, Typography, Button } from '@mui/material';

import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'absolute',
        width: '95%',
        height: '95%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: '2rem',
      }}
    >
      <Typography variant="h2" color={'#683183'}>
        OOOOOOOOPS !
      </Typography>
      <Typography variant="h6">
        <span style={{ marginLeft: '3.5rem' }}>We don't have this page.</span>
        <span style={{ display: 'block' }}>
          The responsible person will be fired.
        </span>
      </Typography>

      <Typography variant="subtitle2">thanks to you</Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        size="large"
        sx={{
          backgroundColor: '#683183',
          marginTop: '1rem',
          fontSize: '1.5rem',
          '&:hover': {
            backgroundColor: '#472183',
          },
        }}
      >
        BACK TO MAIN PAGE
      </Button>
    </Box>
  );
}
