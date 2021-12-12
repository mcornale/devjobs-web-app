import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${
        props.primary ? styles.buttonPrimary : styles.buttonSecondary
      } ${props.hideOnMobile ? 'hideOnMobile' : ''} ${
        props.showOnlyOnMobile ? 'showOnlyOnMobile' : ''
      }`}
      style={{
        width: props.autoWidth ? 'auto' : '14rem',
        backgroundColor: props.noBackground ? 'transparent' : '',
        marginTop: props.marginTop ? '6rem' : '',
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
