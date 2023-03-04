import { createTheme } from '@mui/material/styles';

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFFFF',
      light: '#F7F5F2',
      dark: '#F9F9F9',
    },
    secondary: {
      main: '#F8F0DF',
      light: '#FEFBF3',
      dark: '#9D9D9D',
    },
  },
});

darkTheme = createTheme(darkTheme, {
  typography: {
    h1: {
      color: darkTheme.palette.primary.dark,
      fontFamily: 'Abril Fatface',
      fontSize: '4rem',
      textDecoration: 'none',
    },
    h2: {
      color: darkTheme.palette.primary.dark,
      fontFamily: 'Helvetica',
      fontWeight: '400',
      fontSize: '3.5rem',
    },
    h3: {
      color: darkTheme.palette.secondary.dark,
      fontFamily: 'Noto Serif',
      fontWeight: 600,
    },
    h4: {
      color: darkTheme.palette.secondary.dark,
      fontSize: '1.75rem',
    },
    h5: {
      fontFamily: 'Crimson Text',
      fontSize: '1.25rem',
    },
    h6: {
      color: darkTheme.palette.secondary.light,
      fontFamily: 'Noto Serif',
      fontWeight: 'bold',
    },
    subtitle1: {
      color: darkTheme.palette.secondary.light,
      fontFamily: 'Noto Serif',
      fontSize: '14rem',
      fontWeight: 'light',
    },
    caption: {
      color: darkTheme.palette.secondary.dark,
      fontFamily: 'Noto Serif',
      fontSize: '1rem',
    },
  },
});

export default darkTheme;
