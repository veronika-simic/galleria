import { Box, Typography } from '@mui/material';
import HomeButtonCustomization from '../../components/Buttons/HomeButton';

export default function ErrorPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: '1.5rem',
        px: 2,
      }}
    >
      <Typography variant="h1">Oops!</Typography>

      <Typography variant="h5">We don&apos;t have this page.</Typography>

      <Typography variant="h5" color="text.secondary">
        The responsible person will be fired. Thanks to you
      </Typography>

      <HomeButtonCustomization />
    </Box>
  );
}
