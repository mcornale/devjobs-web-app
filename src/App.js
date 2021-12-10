import BackgroundSVG from './components/BackgroundSVG';
import Logo from './components/Header/Logo';
import Toggle from './components/Header/Toggle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app} data-theme='light'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <BackgroundSVG />
                <header>
                  <Logo />
                  <Toggle />
                </header>
                <HomePage />
              </>
            }
          />
          <Route
            path=':jobId'
            element={
              <>
                <BackgroundSVG />
                <header>
                  <Logo />
                  <Toggle />
                </header>
                <JobPage />
              </>
            }
          />

          <Route
            path='*'
            element={
              <main style={{ paddingTop: '4rem' }}>
                <h3>Sorry! Page not found</h3>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
