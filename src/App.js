import styles from './App.module.css';
import BackgroundSVG from './components/BackgroundSVG';
import Logo from './components/Header/Logo';
import Toggle from './components/Header/Toggle';
import JobsList from './components/Main/JobsList';
import SearchBar from './components/Main/SearchBar';

const App = () => {
  return (
    <div className={styles.app} data-theme='light'>
      <BackgroundSVG />
      <header className={styles.header}>
        <Logo />
        <Toggle />
      </header>
      <main className={styles.main}>
        <SearchBar />
        <JobsList />
      </main>
    </div>
  );
};

export default App;
