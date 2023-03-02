import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        rowGap: '2rem',
      }}
    >
      <Outlet />;
    </Box>
  );
};
