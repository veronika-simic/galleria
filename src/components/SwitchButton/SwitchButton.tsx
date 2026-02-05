import { IconButton, useTheme } from '@mui/material';
import DarkIcon from '@mui/icons-material/Brightness4';
import LightIcon from '@mui/icons-material/Brightness7';
import { ColorContext } from '../../types/ColorContext';
import { useContext } from 'react';

export const SwitchModeButton = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorContext);
  return (
    <>
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <LightIcon /> : <DarkIcon />}
      </IconButton>
    </>
  );
};
