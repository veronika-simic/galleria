import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function CenteredLayout() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        px: 2,
      }}
    >
      <Outlet />
    </Box>
  );
}
