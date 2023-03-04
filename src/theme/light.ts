import { createTheme} from '@mui/material/styles';

let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#010203',
      light: '#B2B2B2',
      dark: '#191825',
    },
    secondary: {
      main: '#EEEEEE',
      light: '#FFFFFF',
      dark: '#7F8487',
    },
  },
});

lightTheme = createTheme(lightTheme, {
  typography: {
    h1: {
      color: lightTheme.palette.primary.dark,
      fontFamily: 'Abril Fatface',
      fontSize: '4rem',
      textDecoration: 'none',
    },
    h2: {
      color: lightTheme.palette.primary.dark,
      fontFamily: 'Helvetica',
      fontWeight: '400',
      fontSize: '3.5rem',
    },
    h3: {
      fontFamily: 'Noto Serif',
      fontWeight: 600,
    },
    h4: {
      color: lightTheme.palette.secondary.dark,
      fontSize: '1.75rem',
    },
    h5: {
      fontFamily: 'Crimson Text',
      fontSize: '1.25rem',
    },
    h6: {
      fontFamily: 'Noto Serif',
      fontWeight: 'bold'
    },
    subtitle1: {
      color: lightTheme.palette.secondary.main,
      fontFamily: 'Noto Serif',
      fontSize: '14rem',
    },
    caption: {
      color: lightTheme.palette.secondary.dark,
      fontFamily: 'Noto Serif',
      fontSize: '1rem',
    },
  },
});

export default lightTheme;
