import { createTheme} from '@mui/material/styles';

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
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

darkTheme = createTheme(darkTheme, {
  typography: {
    h1: {
      color: darkTheme.palette.primary.dark,
      fontFamily: 'Abril Fatface',
      fontSize: '4rem',
    },
    h2: {
      color: darkTheme.palette.primary.dark,
      fontFamily: 'Helvetica',
      fontWeight: '400',
      fontSize: '3.5rem',
    },
    h3: {
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
      fontWeight: 'bold'
    },
    subtitle1: {
      color: darkTheme.palette.secondary.main,
      fontFamily: 'Noto Serif',
      fontSize: '14rem',
    },
    caption: {
      color: darkTheme.palette.secondary.dark,
      fontFamily: 'Noto Serif',
      fontSize: '1.25rem',
    },
  },
});

export default darkTheme;