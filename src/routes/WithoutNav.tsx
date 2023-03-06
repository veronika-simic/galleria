import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        rowGap: '2rem',
      }}
    >
      <Outlet />;
    </Box>
  );
};
