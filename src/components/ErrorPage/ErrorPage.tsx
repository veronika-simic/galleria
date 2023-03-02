import { Box, Typography, Button, useTheme } from '@mui/material';

import { Link } from 'react-router-dom';

export default function ErrorPage() {
  const theme = useTheme()
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
      <Typography style={theme.typography.h2}>
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
          backgroundColor: theme.palette.primary.dark,
          marginTop: '1rem',
          fontSize: '1.5rem',
          '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
          },
        }}
      >
        BACK TO MAIN PAGE
      </Button>
    </Box>
  );
}
