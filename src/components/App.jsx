import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage')
); /* webpackChunkName: "homePage" */
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage/MoviesPage')
); /* webpackChunkName: "MoviesPage" */
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
); /* webpackChunkName: "MovieDetailsPage" */
const Cast = lazy(() => import('../views/Cast/Cast'));
/* webpackChunkName: "Cast" */
const Reviews = lazy(() => import('../views/Reviews/Reviews'));
/* webpackChunkName: "Reviews" */

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:itemId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
