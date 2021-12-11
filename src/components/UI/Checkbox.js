import { forwardRef } from 'react';
import styles from './Checkbox.module.css';

const Checkbox = forwardRef((props, ref) => {
  return (
    <label className={styles.checkboxLabel} htmlFor={props.id}>
      <input
        id={props.id}
        className={styles.checkboxDefaultInput}
        type='checkbox'
        ref={ref}
      />
      <span className={styles.checkboxCustomInput}></span>
      {props.text}
    </label>
  );
});

export default Checkbox;
