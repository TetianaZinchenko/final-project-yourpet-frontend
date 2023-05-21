import { Routes } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';

import { theme } from '../theme/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes></Routes>
    </ThemeProvider>
  );
};
