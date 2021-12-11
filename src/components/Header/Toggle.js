import sunIconSrc from '../../assets/desktop/icon-sun.svg';
import moonIconSrc from '../../assets/desktop/icon-moon.svg';

import styles from './Toggle.module.css';

const Toggle = (props) => {
  return (
    <div className={styles.toggle}>
      <img
        className={styles.toggleIconLeft}
        src={sunIconSrc}
        alt='light mode icon'
      />
      <button
        className={styles.toggleButton}
        data-active-theme={props.activeTheme}
        onClick={props.onChangeTheme}
      ></button>
      <img
        className={styles.toggleIconRight}
        src={moonIconSrc}
        alt='dark mode icon'
      />
    </div>
  );
};

export default Toggle;
