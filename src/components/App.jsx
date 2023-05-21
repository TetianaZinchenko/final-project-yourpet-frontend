import { Route, Routes } from 'react-router-dom';
// import { ThemeProvider } from '@emotion/react';
// import { theme } from '../theme/theme';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { MainPage } from '../pages/MainPage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { NoticesPage } from 'pages/NoticesPage';
import { UserPage } from 'pages/UserPage';
import { AddPetPage } from 'pages/AddPetPage';

export const App = () => {
  return (
    // <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/notices/:categoryName" element={<NoticesPage />} />
          {/* Privat route */}
          <Route path="/user" element={<UserPage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
        </Route>
      </Routes>
    // </ThemeProvider>
  );
};
