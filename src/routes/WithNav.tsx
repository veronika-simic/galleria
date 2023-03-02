import NavigationBar from '../components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export default () => {
  return (
    <Box sx={{margin: '0 auto', width: '95%', overflow: 'hidden' }}>
      <NavigationBar />
      <Outlet />
    </Box>
  );
};
