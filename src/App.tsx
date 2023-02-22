import NavigationBar from './components/NavigationBar/NavigationBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
    </ThemeProvider>
  );
}

export default App;
