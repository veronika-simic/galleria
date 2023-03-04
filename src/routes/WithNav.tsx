import NavigationBar from '../components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { SwitchModeButton } from '../components/SwitchButton/SwitchButton';

export default () => {
  return (
    <Box sx={{ margin: '0 auto', width: '90%', overflow: 'hidden', height: '100%' }}>
      <NavigationBar />
      <Box sx={{ display: 'flex', margin: '1rem 0 auto' }} />
      <Outlet />
    </Box>
  );
};
