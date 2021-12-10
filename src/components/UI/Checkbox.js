import styles from './Checkbox.module.css';

const Checkbox = (props) => {
  return (
    <label className={styles.checkboxLabel} htmlFor={props.id}>
      <input
        id={props.id}
        className={styles.checkboxDefaultInput}
        type='checkbox'
      />
      <span className={styles.checkboxCustomInput}></span>
      {props.text}
    </label>
  );
};

export default Checkbox;
