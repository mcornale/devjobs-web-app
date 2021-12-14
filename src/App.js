import BackgroundSVG from './components/Header/BackgroundSVG';
import Logo from './components/Header/Logo';
import Toggle from './components/Header/Toggle';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';

import ScrollToTop from './components/ScrollToTop';
import { useState, useEffect } from 'react';
import NotFoundPage from './pages/NotFoundPage';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

const App = () => {
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  const changeThemeHandler = () => {
    setTheme((prevActiveTheme) => {
      return prevActiveTheme === 'light' ? 'dark' : 'light';
    });
  };

  useEffect(() => {
    document.getElementById('root').dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <BackgroundSVG />
      <header>
        <Logo />
        <Toggle activeTheme={theme} onChangeTheme={changeThemeHandler} />
      </header>

      <ScrollToTop>
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<HomePage />} />
            <Route path=':jobId' element={<JobPage />} />
            <Route path='/not-found' element={<NotFoundPage />} />
            <Route path='*' element={<Navigate replace to='/not-found' />} />
          </Routes>
        </AnimatePresence>
      </ScrollToTop>
    </>
  );
};

export default App;
