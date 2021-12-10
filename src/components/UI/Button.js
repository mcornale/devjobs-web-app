import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${
        props.primary ? styles.buttonPrimary : styles.buttonSecondary
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
