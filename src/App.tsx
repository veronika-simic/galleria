import {
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import HomePage from './components/HomePage/Home';
import NavigationBar from './components/NavigationBar/NavigationBar';
import InnerPage from './components/InnerPage/InnerPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import WithNav from './routes/WithNav';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<WithNav />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/artifacts/:artifactId" element={<InnerPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
