import { forwardRef } from 'react';
import useResponsiveText from '../../hooks/useResponsiveText';
import styles from './Checkbox.module.css';

const Checkbox = forwardRef((props, ref) => {
  const text = useResponsiveText(props.text, props.responsiveText);

  return (
    <label
      className={`${styles.checkboxLabel} ${
        props.hideOnMobile ? 'hideOnMobile' : ''
      }`}
      htmlFor={props.id}
    >
      <input
        onChange={props.onChange}
        id={props.id}
        className={styles.checkboxDefaultInput}
        type='checkbox'
        ref={ref}
        checked={props.checked}
      />
      <span className={styles.checkboxCustomInput}></span>
      {text}
    </label>
  );
});

export default Checkbox;
