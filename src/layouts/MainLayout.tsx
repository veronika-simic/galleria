import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import NavigationBar from '../components/NavigationBar/NavigationBar';

export default function MainLayout() {
  return (
    <Box sx={{ maxWidth: '1440px', margin: '0 auto', px: 2 }}>
      <NavigationBar />
      <Outlet />
    </Box>
  );
}
