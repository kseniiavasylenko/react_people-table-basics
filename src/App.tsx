import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { PeoplePage } from './pages/PeoplePage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App = () => {
  return (
    <div data-cy="app">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/people" element={<PeoplePage />} />

        <Route path="/people/:slug" element={<PeoplePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
