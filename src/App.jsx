import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Home';
import { WelcomePage } from './pages/WelcomePage/Welcome';
import { ThemeProvider } from '@emotion/react';
import { theme } from './components/Footer/theme';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Register } from './pages/Auth/Register/Register';
import { Login } from './pages/Auth/Login/Login';
import { NotFound } from './pages/NotFoundPage/NotFound';
import css from './App.module.css';
import CategoriesPage from './pages/CategoriesPage/Categories';
import FavoriteRecipesPage from './pages/FavoritesPage/FavoriteRecipesPage/FavoriteRecipesPage';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className={css.app}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/homepage"
            element={
              <>
                <Header />
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route
            path="/categories"
            element={
              <>
                <Header />
                <CategoriesPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/favorites" // Dodano nową trasę
            element={
              <>
                <Header />
                <FavoriteRecipesPage />
                <Footer />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <NotFound />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
};
