import NavigationBar from './components/NavigationBar/NavigationBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import HomePage from './components/HomePage/Home';
import InnerPage from './components/InnerPage/InnerPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
