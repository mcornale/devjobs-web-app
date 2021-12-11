import BackgroundSVG from './components/BackgroundSVG';
import Logo from './components/Header/Logo';
import Toggle from './components/Header/Toggle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';

import styles from './App.module.css';
import ScrollToTop from './components/ScrollToTop';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');

  const changeThemeHandler = () => {
    setTheme((prevActiveTheme) =>
      prevActiveTheme === 'light' ? 'dark' : 'light'
    );
  };

  return (
    <div className={styles.app} data-theme={theme}>
      <BackgroundSVG />
      <header>
        <Logo />
        <Toggle activeTheme={theme} onChangeTheme={changeThemeHandler} />
      </header>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path=':jobId' element={<JobPage />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default App;
