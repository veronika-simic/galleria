import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import HomePage from './pages/HomePage/HomePage';
import ArtifactDetailsPage from './components/ArtifactDetails/ArtifactDetailsPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import WithNav from './routes/WithNav';
import { CssBaseline, PaletteMode, createTheme } from '@mui/material';
import WithoutNav from './routes/WithoutNav';
import { useMemo, useState } from 'react';
import lightTheme from './theme/light';
import darkTheme from './theme/dark';
import { ColorContext } from './types/ColorContext';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<WithNav />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/artifacts/:artifactId"
          element={<ArtifactDetailsPage />}
        />
      </Route>
      <Route element={<WithoutNav />}>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </>
  )
);

function App() {
  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(mode === 'light' ? lightTheme : darkTheme),
    [mode]
  );
  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
