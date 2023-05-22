import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import { ThemeProvider } from '@emotion/react';
import { theme } from '../theme/theme';

import { SharedLayout } from './SharedLayout/SharedLayout';

const MainPage = lazy(() => import('../pages/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          {/* Privat route */}
          <Route path="/user" element={<UserPage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route
            path="*"
            element={<Navigate to="404" component={<NotFoundPage />} />}
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
