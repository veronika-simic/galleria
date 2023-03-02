import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#010203',
            light: '#B2B2B2',
            dark: '#191825'
        },
        secondary: {
            main: '#EEEEEE',
            light: '#FFFFFF',
            dark: '#7F8487'
        }
    }
});
theme = responsiveFontSizes(theme);

export default theme;
