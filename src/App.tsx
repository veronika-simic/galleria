import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useMemo, useState } from 'react';

import HomePage from './pages/HomePage/HomePage';
import ArtifactDetailsPage from './pages/ArtifactDetailsPage/ArtifactDetailsPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import MainLayout from './layouts/MainLayout';
import CenteredLayout from './layouts/CenteredLayout';

import lightTheme from './theme/light';
import darkTheme from './theme/dark';
import { ColorContext } from './types/ColorContext';

export default function App() {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(mode === 'light' ? lightTheme : darkTheme),
    [mode]
  );

  const router = useMemo(
    () =>
      createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route
                path="artifacts/:artifactId"
                element={<ArtifactDetailsPage />}
              />
            </Route>

            <Route element={<CenteredLayout />}>
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </>
        )
      ),
    []
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
