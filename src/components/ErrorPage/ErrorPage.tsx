import { Typography, useTheme } from '@mui/material';
import HomeButtonCustomization from './HomeButton';

export default function ErrorPage() {
  const theme = useTheme();
  return (
    <>
      <Typography style={theme.typography.h2}>OOOOOOOOPS !</Typography>
      <Typography variant="h5">
        <span style={{ marginLeft: '3.5rem' }}>We don't have this page.</span>
        <span style={{ display: 'block' }}>
          The responsible person will be fired.
        </span>
      </Typography>

      <Typography variant="subtitle2">thanks to you</Typography>
      <HomeButtonCustomization />
    </>
  );
}
