import {
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/light';
import HomePage from './components/HomePage/Home';
import InnerPage from './components/InnerPage/InnerPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import WithNav from './routes/WithNav';
import { CssBaseline, Box } from '@mui/material';
import WithoutNav from './routes/WithoutNav';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<WithNav />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/artifacts/:artifactId" element={<InnerPage />} />
      </Route>
      <Route element={<WithoutNav />}>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
