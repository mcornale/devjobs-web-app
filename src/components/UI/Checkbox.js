import { forwardRef } from 'react';
import useResponsiveText from '../../hooks/useResponsiveText';
import styles from './Checkbox.module.css';

const Checkbox = forwardRef((props, ref) => {
  const text = useResponsiveText(props.text, props.responsiveText);

  return (
    <label className={styles.checkboxLabel} htmlFor={props.id}>
      <input
        id={props.id}
        className={styles.checkboxDefaultInput}
        type='checkbox'
        ref={ref}
      />
      <span className={styles.checkboxCustomInput}></span>
      {text}
    </label>
  );
});

export default Checkbox;
